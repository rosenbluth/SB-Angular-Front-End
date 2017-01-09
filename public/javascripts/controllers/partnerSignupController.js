app.controller('partnerSignupController', ['$scope', '$http', '$location', '$window', function($scope, $http, $location, $window) {

    $scope.view = {};
    $scope.view.booyah = 'booyah from partner signup controller';

    $scope.view.newPartner = {};
    $scope.view.newPartner.hasLinkedStripe = true;

    $scope.view.platforms = ["Venmo", "Stripe"];
    $scope.view.submitClicked = function(event){
        event.preventDefault();
        console.log($scope.view.newPartner, 'scope.view.newPartner');
        $window.localStorage.setItem('email', $scope.view.newPartner.email);
        $http.post('http://localhost:9090/partners',$scope.view.newPartner).then(function(){
            console.log('post route working');
            $location.path('/table')
        })
    }

    








}]);
