angular.module('app').controller('MapController', function($scope, Map) {

    $scope.place = {};

    $scope.searchPlaces = function() {
        Map.searchPlaces($scope.placeName);
    };

    Map.init();
});
