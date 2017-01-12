app.controller('loginController', ['$scope', '$http', '$location', '$window', function($scope, $http, $location, $window) {

    $scope.view = {};
    $scope.view.booyah = 'booyah from login controller';

    $scope.view.loginInfo = {};
    $scope.view.loginInfo.leadEmail = $window.localStorage.getItem('leadEmail');


    $scope.view.loginClicked = function(event){
        event.preventDefault();
        console.log($scope.view.loginInfo);
        $window.localStorage.setItem('email', $scope.view.loginInfo.email);
        $http.post('/api/partners/login', $scope.view.loginInfo)
            .then(function(response){
            console.log( response, 'response');
            $window.localStorage.setItem('token', response.data.token);
            $location.path('/table')
        }).catch(function(err){
            console.log(err, 'error');
        })
    }


}]);
