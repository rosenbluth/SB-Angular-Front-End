app.controller('loggedInReferralConfirmController', ['$scope', '$http', '$location', 'CurrentPartner', 'LogOutService',function($scope, $http, $location, CurrentPartner, LogOutService) {
    $scope.logout = LogOutService;

    $scope.view = {};
    $scope.view.booyah = 'booyah from logged in referral confirm controller';

    $scope.view.closeClicked = function(event){
        event.preventDefault();
        $location.path('/table')
    }
    $scope.view.menuFunction = function () {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

}]);
