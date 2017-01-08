app.controller('homeController', ['$scope', '$http', '$location', function($scope, $http, $location) {

    $scope.view = {};
    $scope.view.booyah = 'booyah from home controller';

    $http({
        method: 'GET',
        url: 'http://localhost:9090/partners'
    }).then(function successCallback(response) {
        console.log(response.data);
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });

    $http({
        method: 'GET',
        url: 'http://localhost:9090/partners'
    }).then(function successCallback(response) {
        console.log(response.data);
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });

    $http({
        method: 'GET',
        url: 'http://localhost:9090/partners'
    }).then(function successCallback(response) {
        console.log(response.data);
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });

}]);
