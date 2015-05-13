app.controller('IndexCtrl', function($scope, $location, CRUDService) {
	CRUDService.getReports().then(function(data){
		$scope.reports = data.data;
	});
});