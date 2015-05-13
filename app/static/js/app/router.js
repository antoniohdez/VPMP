app.config(['$routeProvider',
	function($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'static/views/index.html',
			controller: 'IndexCtrl'
		}).
		when('/report', {
			templateUrl: 'static/views/report-create.html',
			controller: 'AddReportCtrl'
		}).
		when('/report/:reportID', {
			templateUrl: 'static/views/report-detail.html',
			controller: 'ReportCtrl'
		}).
		when('/user/:userID', {
			templateUrl: 'static/views/profile.html',
			controller: 'ProfileCtrl'
		}).
		when('/register', {
			templateUrl: 'static/views/register.html',
			controller: 'RegisterCtrl'
		}).
		when('/login', {
			templateUrl: 'static/views/login.html',
			controller: 'LoginCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
]);