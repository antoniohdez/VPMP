app.controller('AddReportCtrl', function($scope, $location, CRUDService) {
	$scope.report = {};
	$scope.insertReport = function(report) {
		CRUDService.insertReport(report);
		$location.path('/');
	};
});