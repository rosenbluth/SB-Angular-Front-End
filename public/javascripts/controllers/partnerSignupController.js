app.controller('partnerSignupController', ['$scope', '$http', '$location', '$window', 'Partner', 'CurrentPartner', function($scope, $http, $location, $window, Partner, CurrentPartner) {

    $scope.view = {};
    $scope.view.booyah = 'booyah from partner signup controller';

    $scope.view.partner = {};

    $scope.view.platforms = ["Venmo", "Stripe"];
    $scope.view.partner.leadEmail = $window.localStorage.getItem('leadEmail');

    $scope.view.submitPartner = function(event){
        event.preventDefault();
        $window.localStorage.setItem('email', $scope.view.partner.email);
        $http.post('/api/partners/signup',$scope.view.partner)
        .then(function(response){
            $window.localStorage.setItem('token', response.data.token)
        })
        .then(function(){
            $location.path('/table')
        })
    }


}]);
