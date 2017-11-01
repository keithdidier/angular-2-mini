angular.module('myApp').controller('productsCtrl', function($scope, $stateParams, productSrvc){

    if($stateParams.id === 'shoes') {
        productSrvc.getShoeData().then(function(response){
            $scope.productData = response.data;
        });
    } else if ($stateParams.id === 'socks') {
        productSrvc.getSockData().then(function(response){
            $scope.productData = response.data;
        })
    }
})