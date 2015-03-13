'use strict';

angular.//
module('spa', [ 'ui.router' ]).//
config([ '$routeProvider', '$locationProvider',

function($routeProvider, $locationProvider) {

	// $locationProvider.html5Mode(true);

	$routeProvider.

	when('/home', {
		templateUrl : 'app/www/template/home.html',
		controller : HomeCtrl
	}).//

	when('/about', {
		templateUrl : 'app/www/template/about.html',
		controller : AboutCtrl
	}).//

	when('/contact', {
		templateUrl : 'app/www/template/contact.html',
		controller : AboutCtrl
	}).//
	
	otherwise({
		redirectTo : '/home'
	});

} ]);