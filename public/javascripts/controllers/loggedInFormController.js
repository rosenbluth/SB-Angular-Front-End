app.controller('loggedInFormController', ['$scope', '$http', '$location', '$window', 'CurrentPartner', 'LogOutService', function($scope, $http, $location, $window, CurrentPartner, LogOutService) {

    $scope.view = {};
    $scope.view.booyah = 'booyah from logged in form controller';
    $scope.logout = LogOutService();


    $scope.view.newReferral = {};
    $scope.view.newReferral.referrerEmail = $window.localStorage.email;

    $scope.view.submitReferralClicked = function(event) {
        event.preventDefault();
        $scope.view.newReferral.conversionDate = new Date();
        $http.post('/api/referrals', $scope.view.newReferral).then(function(response) {
            console.log(response, 'response dot then logged in form controller');
            $location.path('/referralconfirm')
        }, function(err) {
            console.log(err, 'error from server');
        })
    };
}]);
