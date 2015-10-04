angular.module('app').service('Map', function() {


    this.init = function () {
        var options = {
            center: new google.maps.LatLng(37.7833, -122.4167),
            zoom: 12,
            disableDefaultUI: true
        };
        this.map = new google.maps.Map(
            document.getElementById("map"), options
        );
        this.places = new google.maps.places.PlacesService(this.map);
        this.markers = [];
    };

    this.randomString = function (length,chars) {
      var result = '';
      for (var i = length; i > 0; --i) {
        result += chars[Math.round(Math.random() * (chars.length - 1))];
      }
      return result;
    };


    this.makeSignature = function () {
      var httpMethod = 'GET',
      url = 'https://api.yelp.com/v2/search',
      parameters = {
          oauth_consumer_key : 'CiqdJ5Ksityg9qxUloU6ig',
          oauth_token : '8X72SYOQqLD-CypoTTMOu8at_ZxRK4r4',
          oauth_nonce : this.randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
          oauth_timestamp : new Date().getTime(),
          oauth_signature_method : 'HMAC-SHA1',
          oauth_version : '1.0',
      },
      consumerSecret = 'DsAEfZYL50Tc1-ditW5LJqnpdz4',
      tokenSecret = 'e-SGj9tCRfWkIDJDLIwy8_ALRak',
      encodedSignature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret),
      signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret,
          { encodeSignature: false});

    };

    this.yelpSearch = function () {

    };

    this.searchPlaces = function(str) {
      var that = this;
      this.resetMarkers();
      this.yelpSearch();
      this.places.textSearch({query: str}, function(results, status) {
          if (status === "OK") {
            for (var i = 0; i < results.length; i++) {
              that.addMarker(results[i]);
            }
          }
        });
    };

    this.resetMarkers = function () {
      this.markers.forEach(function (marker) {
        marker.setMap(null);
      });
    };

    this.addMarker = function(place) {
        this.markers.push(new google.maps.Marker({
            map: this.map,
            position: place.geometry.location,
            animation: google.maps.Animation.DROP
        }));
    };

});
