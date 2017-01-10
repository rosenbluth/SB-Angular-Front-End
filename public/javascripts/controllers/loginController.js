app.controller('loginController', ['$scope', '$http', '$location', '$window', function($scope, $http, $location, $window) {

    $scope.view = {};
    $scope.view.booyah = 'booyah from login controller';

    $scope.view.loginInfo = {};


    $scope.view.loginClicked = function(event){
        event.preventDefault();
        // console.log($scope.view.loginInfo);
        $window.localStorage.setItem('email', $scope.view.loginInfo.email);
        $http.post('http://localhost:9090/editor/searchUsers', $scope.view.loginInfo)
        .then(function(response){
            // console.log('post route working');
            console.log( response, 'response');
            // $location.path('/table')g
        }).catch(function(err){
            console.log(error, 'error');
        })
    }




}]);
