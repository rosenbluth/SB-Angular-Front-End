app.controller('loggedInFormController', ['$scope', '$http', '$location', '$window', 'CurrentPartner', function($scope, $http, $location, $window, CurrentPartner) {

    $scope.view = {};
    $scope.view.booyah = 'booyah from logged in form controller';


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
