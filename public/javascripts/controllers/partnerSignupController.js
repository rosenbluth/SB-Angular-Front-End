app.controller('partnerSignupController', ['$scope', '$http', '$location', '$window', 'Partner', function($scope, $http, $location, $window, Partner) {

    $scope.view = {};
    $scope.view.booyah = 'booyah from partner signup controller';

    $scope.view.partner = {};

    $scope.view.platforms = ["Venmo", "Stripe"];
    $scope.view.partner.leadEmail = $window.localStorage.getItem('leadEmail');

    $scope.view.submitPartner = function(event){
        event.preventDefault();
        // console.log($scope.view.partner, 'scope.view.newPartner');
        $window.localStorage.setItem('email', $scope.view.partner.email);
        $http.post('/api/signup',$scope.view.partner)
        .then(function(response){
            console.log('post route working');
            console.log(response, 'response from signup');
            $window.localStorage.setItem('token', response.data.token);
            $location.path('/table')
        })
    }


}]);
