app.factory('httpFactory', function ($http) {
    return {
        zillow: function(){
          return $http.get("https://www.quandl.com/api/v3/datasets/ZILL/S00022_A")
            .then(function(data){
              return data
            })
          },
        freddieMac: function(){
          return $http.get("https://www.quandl.com/api/v3/datasets/FMAC/HPI_DENCO.json?api_key=fq-i-V3yoEwMmGV3geH_")
            .then(function(data){
              return data
            })
          },
      }
    });
