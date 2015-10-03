angular.module('app').controller("MapController", function($scope){
  var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(37.76,-122.4167),
  };
  $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
});
