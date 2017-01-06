var app = angular.module('app', ['ngAnimate', 'ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/partials/form.html',
            controller: 'myController'
        })
});
