app.controller('loggedInFormController', ['$scope', '$http', '$location', function($scope, $http, $location) {

    $scope.view = {};
    $scope.view.booyah = 'booyah from logged in form controller';


    $scope.view.newReferral = {};
    $scope.view.newReferral.resultedInConversion = false;
    $scope.view.newReferral.totalAmountPaidForReferral = 0;
    $scope.view.newReferral.totalMoneyYearlyStarter = 598.8;
    $scope.view.newReferral.totalMoneyYearlyGrowth = 1198.80
    $scope.view.newReferral.numMonthsPassedConverted = 0;
    $scope.view.newReferral.totalNumOfQuarterlyPayouts = 0;
    $scope.view.newReferral.activeReferral = true;

    $scope.view.submitReferralClicked = function(event) {
        event.preventDefault();
        $scope.view.newReferral.conversionDate = new Date();
        $http.post('/api/referrals', $scope.view.newReferral).then(function() {
            $location.path('/table')
        }, function(err) {
            console.log(err, 'error from server');
        })
    };
}]);
