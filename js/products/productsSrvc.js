angular.module('myApp').service('productSrvc', function($http) {
    this.getShoeData = function() {
        return $http({
            method: 'GET',
            url: 'https://practiceapi.devmountain.com/products?category=shoes'
        });
    }

    this.getSockData = function() {
        return $http({
            method: 'GET',
            url: 'https://practiceapi.devmountain.com/products?category=socks'
        })
    }
});