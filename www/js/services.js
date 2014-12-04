angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
    .factory('JobCtrl', function($http) {
        var featured = [];
        $http.get('api/friends.json').success(function(data){
            featured = data;
        });

        return {
            all: function() {
                return featured;
            },
            get: function(name) {
                // Simple index lookup
                return featured[name];
                console.log(name);
            }
        }

    });