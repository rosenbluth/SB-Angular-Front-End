app.controller('homeController', ['$scope', '$http', '$location', 'Partner', '$window', function($scope, $http, $location, Partner, $window) {


    $scope.view = {};
    $scope.view.booyah = 'booyah from home controller';

    $scope.view.newReferral = {};

    $scope.view.submitReferralClicked = function(event) {
        var newRef = $scope.view.newReferral
        if(newRef.leadName && newRef.leadCompanyName && newRef.leadEmail && newRef.leadPhone ){
        event.preventDefault();
        $scope.view.newReferral.conversionDate = new Date();
        // console.log('submitReferralClicked running');
        // console.log($scope.view.newReferral, '($scope.view.newReferral,')
        $window.localStorage.setItem('leadEmail', $scope.view.newReferral.leadEmail)
        $http.post('/api/referrals', $scope.view.newReferral).then(function() {
            $location.path('/confirmation')
        }, function(err) {
            // console.log(err, 'error from server');
        })
    }
    };


    $scope.view.skipToLogin = function(event) {
        event.preventDefault();
        console.log('skipToLogin clicked');
        $location.path('/login')
    };

    $scope.partners = {};

    $scope.sampleData = function() {
        Partner.get().then(function(partners) {
            console.log(partners);
            $scope.partners = partners;
            // console.log(partners);
        })
    }

    console.log($scope.view.newReferral);

}]);
