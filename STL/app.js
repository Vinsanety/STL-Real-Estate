var app = angular.module('stl', ['ngRoute'])
.config(function($routeProvider){
$routeProvider
.when('/home', {
  templateUrl: 'partials/splash.html'
  // controller: 'homeController'
})
.when('/aboutUs', {
  templateUrl: 'partials/aboutUs.html'
  // controller: 'checkoutController'
})
.when('/contactUs', {
  templateUrl: 'partials/contactUs.html'
  // controller: 'checkoutController'
})
.when('/testing', {
  templateUrl: 'partials/testing.html'
  // controller: 'checkoutController'
})

})
