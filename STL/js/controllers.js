app.controller('homeController', function($scope) {
  console.log('home route hit');


  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });

})

app.controller('aboutSTLController', function($scope) {
  console.log('about route hit');

  angular.element(document).ready(function () {
    $('.scrollspy').scrollSpy();
  });

})

app.controller('contactController', function($scope) {
  console.log('contact route hit');

})

app.controller('buyingProcessController', function($scope, httpFactory){
  console.log('buying process hit');
  // httpFactory.zillow().then(function(data){
  //   // console.log(data);
  //   // for (var i = 0; i < data.data.length; i++) {
  //   // }
  // })
  // httpFactory.freddieMac().then(function(data){
  //   for (var i = 0; i < data.data.dataset.data.length; i++) {
  //     $scope.data = data.data.dataset.data[i];
  //     console.log($scope.data);
  //   }
  // })

})

app.controller('loansController', function($scope) {
  console.log('loans route hit');

})


app.controller('marketTrendsController', function($scope) {
  console.log('marketTrends route hit');

  // PARALLAX
  angular.element(document).ready(function () {
    $('.scrollspy').scrollSpy();
    $('.parallax').parallax();
  });

  // TWITTER EMBED
  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

})

app.controller('listingsController', function($scope) {
  console.log('listings route hit');

})
