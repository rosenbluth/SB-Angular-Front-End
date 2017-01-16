app.controller('partnerSignupController', ['$scope', '$http', '$location', '$window', 'Partner', 'CurrentPartner', function($scope, $http, $location, $window, Partner, CurrentPartner) {

    $scope.view = {};
    $scope.view.booyah = 'booyah from partner signup controller';

    $scope.view.partner = {};

    $scope.view.platforms = ["Venmo", "Stripe"];
    $scope.view.partner.leadEmail = $window.localStorage.getItem('leadEmail');

    $scope.view.submitPartner = function(event){
        if($scope.view.partner.password === $scope.view.partner.passConf ){
        event.preventDefault();
        $window.localStorage.setItem('email', $scope.view.partner.email);
        $http.post('/api/partners/signup',$scope.view.partner)
        .then(function(response){ console.log(response, 'response from login.then');
        console.log(response,'response from dot then signup');
            $window.localStorage.setItem('token', response.data.token);
            if(response.data.email === 'g33ks@galvanize.com'){
                console.log(response.data.email, 'if');
                $location.path('/admin');
            }
            else{
                console.log(response.data.email, 'else');
                $location.path('/table');

            }
        });
    }else{
        $scope.view.errorInPass = 'Your passwords do not match.'

    }
};

}]);
