var app = angular.module('STL', ['ui.router', 'ngMaterial'])

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home')
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: '/partials/home.html',
    controller: 'homeController',
    controllerAs: 'home'
  })
  .state('aboutSTL', {
    url: '/aboutSTL',
    templateUrl: '/partials/aboutSTL.html',
    controller: 'aboutSTLController',
    controllerAs: 'aboutSTL'
  })
  .state('contact', {
    url: '/contact',
    templateUrl: '/partials/contact.html',
    controller: 'contactController',
    controllerAs: 'contact'
  })
  .state('properties', {
    url: '/properties',
    templateUrl: 'partials/properties.html',
    controller: 'propertiesController',
    controllerAs: 'propertiesController'
  })
  .state('loans', {
    url: '/loans',
    templateUrl: '/partials/loans.html',
    controller: 'loansController',
    controllerAs: 'loans'
  })
  .state('testing', {
    url: '/testing',
    templateUrl: '/partials/testing.html',
    controller: 'testingController',
    controllerAs: 'testing'
  })
}])
