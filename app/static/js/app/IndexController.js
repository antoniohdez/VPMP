app.controller('IndexCtrl', function($scope, $location, CRUDService) {
	$scope.filterReports = function(filter) {
		console.log(filter);
		if(typeof filter === 'undefined'){
			filter = {};
		}
		if(typeof filter.missing_date === 'undefined'){
			filter.missing_date = "null-null-null";
		};
		if(typeof filter.status === 'undefined'){
			filter.status = "null";
		};
		if(typeof filter.state === 'undefined'){
			filter.state = "null";
		};
		if(typeof filter.gender === 'undefined'){
			filter.gender = "null";
		};
		if(typeof filter.lower_age === 'undefined'){
			filter.lower_age = "null";
		};
		if(typeof filter.higher_age === 'undefined'){
			filter.higher_age = "null";
		};

		CRUDService.getReports(filter.missing_date, filter.status, filter.state, filter.gender, filter.lower_age, filter.higher_age).then(function(data){
			console.log(data.data);
			$scope.reports = data.data;
		});
	};
});