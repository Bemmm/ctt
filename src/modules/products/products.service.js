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