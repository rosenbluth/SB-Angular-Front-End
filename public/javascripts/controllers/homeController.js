app.controller('homeController', ['$scope', '$http', '$location', function($scope, $http, $location) {

    $scope.view = {};
    $scope.view.booyah = 'booyah from home controller';

    $scope.view.newReferral = {};
    $scope.view.newReferral.leadName
    $scope.view.newReferral.leadCompanyName
    $scope.view.newReferral.leadEmail
    $scope.view.newReferral.leadPhone
    $scope.view.newReferral.referrerEmail
    $scope.view.newReferral.resultedInConversion

    $scope.view.submitReferralClicked = function(event){
        event.preventDefault();
        console.log('submitReferralClicked running');
    }



    $scope.goToConfirm = function(event, gameInfo){
            event.preventDefault();
            console.log(gameInfo, 'gameInfo');
            $http.get('/users/'+ $scope.currentUser.id +'/games/'+ gameInfo.gameId).then(function(response){
                console.log(response.data, 'Dot then function inside goToConfirm inside joinGameController');
                // currentGame.setWholeGame(response.data.name);
                $window.localStorage.setItem('game', response.data.name);
                $window.localStorage.setItem('gameId', response.data.game_id);
                $window.localStorage.setItem('gameStats', JSON.stringify(response.data.game_stats));
                $window.localStorage.setItem('startTime', response.data.start_time);
                $window.localStorage.setItem('gameType', response.data.game_type);
                $location.path('/confirmjoin')
            })
        }








    // $http({
    //     method: 'GET',
    //     url: 'http://localhost:9090/partners'
    // }).then(function successCallback(response) {
    //     console.log(response.data);
    // }, function errorCallback(response) {
    //     // called asynchronously if an error occurs
    //     // or server returns response with an error status.
    // });
    //
    // $http({
    //     method: 'GET',
    //     url: 'http://localhost:9090/partners'
    // }).then(function successCallback(response) {
    //     console.log(response.data);
    // }, function errorCallback(response) {
    //     // called asynchronously if an error occurs
    //     // or server returns response with an error status.
    // });
    //
    // $http({
    //     method: 'GET',
    //     url: 'http://localhost:9090/partners'
    // }).then(function successCallback(response) {
    //     console.log(response.data);
    // }, function errorCallback(response) {
    //     // called asynchronously if an error occurs
    //     // or server returns response with an error status.
    // });

}]);
