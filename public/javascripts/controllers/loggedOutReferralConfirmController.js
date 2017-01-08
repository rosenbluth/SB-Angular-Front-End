app.controller('loggedOutReferralConfirmController', ['$scope', '$http', '$location', function($scope, $http, $location) {

    $scope.view = {};
    $scope.view.booyah = 'booyah from logged Out Referral Confirm Controller controller';

    $scope.view.closeClicked = function(event){
        event.preventDefault();
        console.log('close clicked');
        $location.path('/')
    };


    $scope.view.loginClicked = function(event){
        event.preventDefault();
        console.log('loginClicked clicked');
        $location.path('/login')
    };

}]);
