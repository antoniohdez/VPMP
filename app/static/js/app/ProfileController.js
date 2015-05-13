app.controller('ProfileCtrl', function($scope, $location, $routeParams, CRUDService) {
	$scope.user_id = $routeParams.userID;
	CRUDService.getUserReports($scope.user_id).then(function(data){
		$scope.reports = data.data;
	});
});