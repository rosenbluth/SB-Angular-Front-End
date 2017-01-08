app.controller('loginController', ['$scope', '$http', '$location', function($scope, $http, $location) {

    $scope.view = {};
    $scope.view.booyah = 'booyah from login controller';

    $scope.view.loginInfo = {};

    $scope.view.loginClicked = function(){
        console.log('booyah. clicked on');
        console.log($scope.view.loginInfo, 'login info obj');
    };



}]);
