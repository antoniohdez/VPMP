app.controller('ReportCtrl', function($scope, $location, $routeParams, CRUDService) {
	$scope.report_id = $routeParams.reportID;

	var ImageObject = Parse.Object.extend("Image");
	var query = new Parse.Query(ImageObject);

	CRUDService.getReport($scope.report_id).then(function(data){
		$scope.report = data.data;
		query = new Parse.Query(ImageObject);
	
		query.equalTo("image_id", data.data.id );

		data.data.image = "static/img/image.png";

		query.find({
			success: function(results) {
				//console.log("Successfully retrieved " + results.length + " objects.");
				// Do something with the returned Parse.Object values
				if(results.length > 0){
					//data.data.image = results[0].get("image");

					document.getElementById("image_detail").src = results[0].get("image");
				}
			},
			error: function(error) {
				alert("Error: " + error.code + " " + error.message);
			}
		});


	});

	CRUDService.getReportComments($scope.report_id).then(function(data){
		$scope.comments = data.data;
	});

	$scope.createComment = function(comment) {
		if(typeof comment === 'undefined'){
			swal("Agrega un commentario");
			return;
		};
		var tmp = {};

		var date = new Date();
		var string_date = date.getFullYear() + "-" + ((date.getMonth() + 1) + "-" +  date.getDate());

		comment.comment_date = string_date;
		comment.report_fk = $scope.report_id;
		
		
		tmp.report_fk = $scope.report_id;
		tmp.comment_date = string_date;
		tmp.content = comment.content;

		CRUDService.createComment(tmp);
		$location.reload();
	};
});