/**
 * Created by Robert on 11/21/2014.
 */

angular
    .module('starter')
    .controller('homeCtrl',  ['$scope', 'friends', 'friends1', function($scope, friends, friends1) {

        $scope.friends = friends;
        $scope.friends1 = friends1;
        $scope.title = "home";
        $scope.items = ['home', 'about', 'contact'];

}]);

