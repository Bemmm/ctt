angular.module('productsModule')
.controller('productsController', function($scope, productsService){
	$scope.getProducts = function(type){
		// type = 'Smartphones'
		productsService.getProducts(type).then(function(data){
			$scope.products = data;
		})
	}
	$scope.products = [];
	
	$scope.getProducts();


});