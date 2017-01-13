app.controller('loginController', ['$scope', '$http', '$location', '$window', 'CurrentPartner', function($scope, $http, $location, $window, CurrentPartner) {

    $scope.view = {};
    $scope.view.booyah = 'booyah from login controller';

    $scope.view.loginInfo = {};
    $scope.view.loginInfo.leadEmail = $window.localStorage.getItem('leadEmail');


    $scope.view.loginClicked = function(event){
        event.preventDefault();
        console.log($scope.view.loginInfo);
        $window.localStorage.setItem('email', $scope.view.loginInfo.email);
        $http.post('/api/partners/login', $scope.view.loginInfo)
        .then(function(response){ console.log(response, 'response from login.then');
            $window.localStorage.setItem('token', response.data.token);
            if(response.data.email = 'sally@sally.com'){
                $location.path('/admin');
            }
            else{
                $location.path('/table');
            }
        });





    };


}]);
