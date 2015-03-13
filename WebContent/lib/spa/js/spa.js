'use strict';

angular.//
module('spa', [ 'ngRoute', 'ngResource' ]).//
config([ '$routeProvider', '$locationProvider',

function($routeProvider, $locationProvider) {

	// $locationProvider.html5Mode(true);

	$routeProvider.

	when('/home', {
		templateUrl : 'app/www/template/home/home.html',
		controller : function() {
		}
	}).//

	when('/sitemap', {
		templateUrl : 'app/www/template/home/sitemap.html',
		controller : function() {
		}
	}).//

	when('/org', {
		templateUrl : 'app/www/template/home/org.html',
		controller : function() {
		}
	}).//

	when('/team', {
		templateUrl : 'app/www/template/home/team.html',
		controller : function() {
		}
	}).//

	when('/contact', {
		templateUrl : 'app/www/template/home/contact.html',
		controller : function() {
		}
	}).//

	// Coaching

	when('/engineering', {
		templateUrl : 'app/www/template/service/coaching/engineering.html',
		controller : function() {
		}
	}).//

	when('/science', {
		templateUrl : 'app/www/template/service/coaching/science.html',
		controller : function() {
		}
	}).//

	when('/commerce', {
		templateUrl : 'app/www/template/service/coaching/commerce.html',
		controller : function() {
		}
	}).//

	when('/art', {
		templateUrl : 'app/www/template/service/coaching/art.html',
		controller : function() {
		}
	}).//

	otherwise({
		redirectTo : '/home'
	});

} ]);