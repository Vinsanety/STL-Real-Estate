app.factory('httpFactory', function ($http) {
  return {
    listings: function(){
      return $http.get("./listings_data.json")
        .then(function(data){
          return data
      })
    }
  }
});
