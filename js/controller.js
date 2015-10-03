angular.module('app').controller('MapController', function($scope, Map) {

    $scope.place = {};

    $scope.search = function() {
        Map.search($scope.placeName)
        .then(
            function(res) { // success
                Map.addMarker(res);
                $scope.place.name = res.name;
                $scope.place.lat = res.geometry.location.lat();
                $scope.place.lng = res.geometry.location.lng();
            },
            function(status) { // error
                $scope.apiError = true;
                $scope.apiStatus = status;
            }
        );
    };

    Map.init();
});
