app.controller('AddReportCtrl', function($scope, $location, CRUDService) {
	$scope.report = {};
	$scope.image = "";

	document.getElementById('image_report').addEventListener("change", readImage, false);

	function readImage(){
		if ( this.files && this.files[0] ) {
			var FR = new FileReader();
			FR.onload = function(e) {
				$scope.image = e.target.result;
			};
			FR.readAsDataURL( this.files[0] );
		}
	}

	$scope.insertReport = function(report) {
		CRUDService.insertReport(report).then(function(data){
			Parse.initialize("R7sHSEafzcqAei4imaSv4zuwAgmU6BzAKq3P2lVc", "HoF0IDovfRBJvSwWuFODijEtqkZ7bjRHQpDo4C3i");
			var ImageObject = Parse.Object.extend("Image");
			var image = new ImageObject();

			image.save({ image_id: data.data.id, image: $scope.image }).then(function(object) {
				swal("Reporte creado exitosamente");
			});
				
			$scope.reports = data.data;

			$location.path('/');
		});
	};
});