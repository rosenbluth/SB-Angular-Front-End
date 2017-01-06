app.controller('myController', ['$scope', '$http', function($scope, $http) {

    $scope.view = {};
    $scope.view.booyah = "booyah x 1000"

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
