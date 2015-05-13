app.controller('ReportCtrl', function($scope, $location, $routeParams, CRUDService) {
	$scope.report_id = $routeParams.reportID;
	CRUDService.getReport($scope.report_id).then(function(data){
		$scope.report = data.data;
	});

	CRUDService.getReportComments($scope.report_id).then(function(data){
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