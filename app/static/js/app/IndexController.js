app.controller('IndexCtrl', function($scope, $location, CRUDService) {
	
	var ImageObject = Parse.Object.extend("Image");
	var query = new Parse.Query(ImageObject);

	$scope.filterReports = function(filter) {
		console.log(filter);
		if(typeof filter === 'undefined'){
			filter = {};
		}
		if(typeof filter.missing_date === 'undefined'){
			filter.missing_date = "null-null-null"; //yy-mm-dd
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
			for (var i = 0; i < data.data.length; i++) {
				//console.log(data.data[i]);
				(function(i){

					query = new Parse.Query(ImageObject);
				
					query.equalTo("image_id", parseInt(data.data[i].id) );

					console.log("ID: "+i);
					data.data[i].image = "static/img/image.png";

					query.find({
						success: function(results) {
							//console.log("Successfully retrieved " + results.length + " objects.");
							// Do something with the returned Parse.Object values
							if(results.length > 0){
								console.log(i);
								//data.data[i].image = results[0].get("image");

								console.log( "SRC: " + results[0].get("image") );
								document.getElementById("image_"+ (i+1)).src = results[0].get("image");
							}
						},
						error: function(error) {
							alert("Error: " + error.code + " " + error.message);
						}
					});
				})(i);
				

			};

			$scope.reports = data.data;
		});
	};
});