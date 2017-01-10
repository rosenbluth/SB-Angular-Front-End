var app = angular.module('sbc', ['ngRoute', 'ngMessages']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'homeController'
        })

        .when('/confirmation', {
            templateUrl: 'partials/loggedOutReferralConfirm.html',
            controller: 'loggedOutReferralConfirmController'
        })

        .when('/partnersignup', {
            templateUrl: 'partials/partnerSignup.html',
            controller: 'partnerSignupController'
        })

        .when('/loginerror', {
            templateUrl: 'partials/loginError.html',
            controller: 'loginErrorController'
        })

        .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'loginController'
        })

        .when('/table', {
            templateUrl: 'partials/historyTable.html',
            controller: 'tableController'
        })

        .when('/submitreferral', {
            templateUrl: 'partials/loggedInForm.html',
            controller: 'loggedInFormController'
        })

        .when('/referralconfirm', {
            templateUrl: 'partials/loggedInReferralConfirm.html',
            controller: 'loggedInReferralConfirmController'
        })
        .when('/test', {
            templateUrl: 'partials/test.html',
            controller: 'loggedInReferralConfirmController'
        })
});
