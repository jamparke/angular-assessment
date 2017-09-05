app.controller('shopCtrl', function ($scope, shopSrvc) {
    
        shopSrvc.getProducts().then(function(results){
            $scope.products = results;
        })
    
        $scope.clpr = (id) => {
            $scope.prodinfo = shopSrvc.getProdDet(id);
        }
            // $scope.prodinfo = shopSrvc.getProdDet(id);
    })