app.service('shopSrvc', function ($http) {
    
        this.getProducts = function() {
            return $http.get('https://practiceapi.devmountain.com/products').then(function(response){
            var results = response.data;
            return results;
          });
        }
    
        this.getProdDet = id => {
            var results = $http.get(`https://practiceapi.devmountain.com/products/${id}`).then(function(res) {
                    return res.data;
            });
            console.log(results);
        }
    })