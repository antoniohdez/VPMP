app.controller('ReportCtrl', function($scope, $location, $routeParams, CRUDService) {
	$scope.report_id = $routeParams.reportID;

	Parse.initialize("R7sHSEafzcqAei4imaSv4zuwAgmU6BzAKq3P2lVc", "HoF0IDovfRBJvSwWuFODijEtqkZ7bjRHQpDo4C3i");
	var ImageObject = Parse.Object.extend("GameScore");
	var query = new Parse.Query(ImageObject);

	CRUDService.getReport($scope.report_id).then(function(data){
		$scope.report = data.data;

		query = new Parse.Query(ImageObject);
	
		query.equalTo("image_id", parseInt(data.data[i].id) );

		data.data[i].image = "static/img/image.png";

		query.find({
			success: function(results) {
				//console.log("Successfully retrieved " + results.length + " objects.");
				// Do something with the returned Parse.Object values
				if(results.length > 0){
					console.log(i);
					data.data[i].image = results[0].get("image");

					console.log( "SRC: " + results[0].get("image") );
					document.getElementById("image_"+ i).src = results[0].get("image");
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