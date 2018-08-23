angular.module('app')
.config(function($stateProvider, $locationProvider) {
$locationProvider.hashPrefix('');
    $stateProvider
    .state('/', {
        url: '/',
        templateUrl: './views/products/products.html',
        controller: 'productsController'
    })
});