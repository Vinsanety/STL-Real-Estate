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
  .state('buyingProcess', {
    url: '/buyingProcess',
    templateUrl: 'partials/buyingProcess.html',
    controller: 'buyingProcessController',
    controllerAs: 'buyingProcessController'
  })
  .state('loans', {
    url: '/loans',
    templateUrl: '/partials/loans.html',
    controller: 'loansController',
    controllerAs: 'loans'
  })
  .state('marketTrends', {
    url: '/marketTrends',
    templateUrl: '/partials/marketTrends.html',
    controller: 'marketTrendsController',
    controllerAs: 'marketTrends'
  })
  .state('listings', {
    url: '/listings',
    templateUrl: '/partials/listings.html',
    controller: 'listingsController',
    controllerAs: 'listings'
  })
}])
