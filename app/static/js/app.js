var app = angular.module('app', ['ngRoute']);

app.filter('range', function() {
  return function(input, min, max) {
    min = parseInt(min); //Make string input int
    max = parseInt(max);
    for (var i=min; i<max; i++)
      input.push(i);
    return input;
  };
});

app.config(['$routeProvider',
	function($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'static/views/index.html',
			controller: 'IndexCtrl'
		}).
		when('/report', {
			templateUrl: 'static/views/report-create.html',
			controller: 'AddReportCtrl'
		}).
		when('/report/:reportID', {
			templateUrl: 'static/views/report-detail.html',
			controller: 'ReportCtrl'
		}).
		when('/user/:userID', {
			templateUrl: 'static/views/profile.html',
			controller: 'ProfileCtrl'
		}).
		when('/register', {
			templateUrl: 'static/views/register.html',
			controller: 'RegisterCtrl'
		}).
		when('/login', {
			templateUrl: 'static/views/login.html',
			controller: 'LoginCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
]);

app.factory("CRUDService", ['$http', function($http) {
	var serviceBase = 'http://104.236.154.159:3306/'
	var obj = {};
	
	obj.getReports = function(){
		return $http.get(serviceBase + 'report/');
	}
	
	obj.getReport = function(id){
		return $http.get(serviceBase + 'report/' + id + '/');
	}

	obj.getReportComments = function(id){
		return $http.get(serviceBase + 'report/comment/' + id + '/');
	}

	obj.getUserReports = function(id){
		return $http.get(serviceBase + 'user/report/' + id + '/');
	}

	obj.insertReport = function (report) {

		return $http.post(serviceBase + 'report/', report);
	};

	obj.insertUser = function (user) {
		return $http.post(serviceBase + 'user/', user);
	};

	obj.deleteReport = function (id) {
		return $http.delete(serviceBase + 'report/' + id + '/').then(function (status) {
			return status.data;
		});
	};

	obj.createComment = function (comment) {
		return $http.post(serviceBase + 'comment/', comment);
	}

	return obj;
}]);

app.controller('IndexCtrl', function($scope, $location, CRUDService) {
	CRUDService.getReports().then(function(data){
		$scope.reports = data.data;
	});
});

app.controller('ReportCtrl', function($scope, $location, $routeParams, CRUDService) {
	$scope.report_id = $routeParams.reportID;
	CRUDService.getReport($scope.report_id).then(function(data){
		console.log(data.data);
		$scope.report = data.data;
	});

	CRUDService.getReportComments($scope.report_id).then(function(data){
		console.log(data.data);
		$scope.comments = data.data;
	});

	$scope.createComment = function(comment) {
		if(typeof variable_here === 'undefined'){
			swal("Agrega un commentario");
			return;
		};
		var date = new Date();
		var string_date = date.getFullYear() + "-" + date.getDate() + "-" +  (date.getMonth() + 1);

		comment.comment_date = string_date;
		comment.report_fk = $scope.report_id;
		
		CRUDService.createComment(comment);
	};

});

app.controller('AddReportCtrl', function($scope, $location, CRUDService) {
	$scope.report = {};
	$scope.insertReport = function(report) {
/*
		date = new Date(report.birth_date);
		report.birth_date = date.getFullYear()+'-'+date.getMonth()+1+'-'+date.getDate();

		date = new Date(report.missing_date);
		report.missing_date = date.getFullYear()+'-'+date.getMonth()+1+'-'+date.getDate();
*/
		console.log("NEW REPORT!");
		console.log(report);
		CRUDService.insertReport(report);
		//$location.path('/');
	};
});

app.controller('RegisterCtrl', function($scope, $location, CRUDService) {
	$scope.user = {};
	$scope.insertUser = function(user) {
		CRUDService.insertUser(user);
		//$location.path('/');
	};
});

app.controller('ProfileCtrl', function($scope, $location, $routeParams, CRUDService) {
	$scope.user_id = $routeParams.userID;
	CRUDService.getUserReports($scope.user_id).then(function(data){
		$scope.reports = data.data;
	});
});