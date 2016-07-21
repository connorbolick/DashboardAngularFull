var myApp = angular.module('Myapp', ['ngRoute']);
// We instantiate our application and we inject ngrouter so that it's available
// and so that we can use it to set up our routes below.



// this is our router. You can choose to set your controllers on the partial
// but I prefer to set my controllers here because it's cleaner
(function(){
	myApp.config(function($routeProvider){
		$routeProvider
			.when('/',
			{
				controller: 'indexController',
				templateUrl: "partials/index.html"
			})
			.when('/mongoose/edit/:id', {
				controller: "editController",
				templateUrl: "partials/edit.html"
			})
			.when('/mongoose/:id',
			{
				controller: 'showController',
				templateUrl: "partials/show.html"
			})
			.when('/delete/:id',
			{
				controller: 'deleteController',
				templateUrl: "partials/index.html"
			})
	})
}());
