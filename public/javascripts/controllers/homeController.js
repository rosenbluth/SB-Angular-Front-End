app.controller('homeController', ['$scope', '$http', '$location', function($scope, $http, $location) {

    $scope.view = {};
    $scope.view.booyah = 'booyah from home controller';

    $scope.view.newReferral = {};
    $scope.view.newReferral.resultedInConversion = false;
    $scope.view.newReferral.totalAmountPaidForReferral = 0;
    $scope.view.newReferral.totalMoneyYearlyStarter = 598.8;
    $scope.view.newReferral.totalMoneyYearlyGrowth = 1198.80
    $scope.view.newReferral.numMonthsPassedConverted = 0;
    $scope.view.newReferral.totalNumOfQuarterlyPayouts = 0;
    $scope.view.newReferral.activeReferral = true;


    $scope.view.submitReferralClicked = function(event){
        event.preventDefault();
        $scope.view.newReferral.conversionDate = new Date();
        console.log('submitReferralClicked running');
        console.log($scope.view.newReferral, '($scope.view.newReferral,')
        $http.post('http://localhost:9090/referral/form', $scope.view.newReferral).then(function(){
            console.log('no ***response*** from server');
            $location.path('/confirmation')
        }, function(err){
            console.log(err, 'error from server');
        })
    };


    $scope.view.skipToLogin = function(event){
        event.preventDefault();
        console.log('skipToLogin clicked');
        $location.path('/login')
    };

console.log($scope.view.newReferral);

}]);
