app.controller('tableController', ['$scope', '$http', '$location', '$window', function($scope, $http, $location, $window) {

    $scope.view = {};
    $scope.view.booyah = 'booyah from table controller';
    $scope.currentUser = {};

    $scope.currentUser.email = $window.localStorage.getItem('email');
    console.log($scope.currentUser.email, 'currentUserEmail');

    var request = $http.get('/api/partners/' + $scope.currentUser.email + '/referrals').then(function(response) {
        //need to plug these values in to table
        // console.log(response.data, 'asdasd response');
        $scope.data = response.data;
        return response.data;
        console.log(response.data, 'test response.data');
    });




}]);
