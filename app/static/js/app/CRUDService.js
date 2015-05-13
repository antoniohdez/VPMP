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