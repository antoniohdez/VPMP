app.factory("CRUDService", ['$http', function($http) {
	var serviceBase = 'http://104.236.154.159:3306/'
	var obj = {};
	
	obj.getReports = function(){
		return $http.get(serviceBase + 'report/');
	}

	obj.getReports = function(missing_date, status, state, gender, lower_age, higher_age){
		return $http.get(serviceBase + 'report/filter/missing_date=' + missing_date + '&status=' + status + '&state=' +  state + '&gender=' + gender + '&lower_age=' + lower_age + '&higher_age=' + higher_age);
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