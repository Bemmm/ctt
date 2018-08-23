// создание модуля, внимание на пустой масив.
angular.module('app', [
	'ui.router',
	'productsModule'
	])

angular.module('productsModule', []);
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
angular.module('app')
.constant('config', {
	base: 'https://raw.githubusercontent.com',
	prefix: '/Bemmm/ctt/master/',
	getProducts: '/challange-items.json'
});
angular.module('productsModule')
    .factory('productsService', ['$http', 'config', function ($http, config) {
        var publicMethods = {
            getProducts: function (type) {
                return $http.get(config.base + config.prefix + config.getProducts)
                    .then(function (response) {
                        console.log(response);
                        return response.data;
                    })
                    .catch(function (err) {
                        console.log(err);
                    })
            }
        };
        return publicMethods;
    }])
angular.module('productsModule')
.controller('productsController', function($scope, productsService){
	$scope.cartItems = [];
	$scope.getProducts = function(type){
		// type = 'Smartphones'
		productsService.getProducts(type).then(function(data){
			$scope.products = data;
		})
	}
	$scope.products = [];
	
	$scope.getProducts();

	$scope.addToCart = function(item){
		$scope.cartItems.push(item);
	}
});