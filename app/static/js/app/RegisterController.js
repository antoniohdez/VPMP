app.controller('RegisterCtrl', function($scope, $location, CRUDService) {
	$scope.user = {};
	$scope.insertUser = function(user) {
		CRUDService.insertUser(user);
		//$location.path('/');
	};
});