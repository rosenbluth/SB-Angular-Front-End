app.controller('tableController', ['$scope', '$http', '$location', '$window',  function($scope, $http, $location, $window) {

    $scope.view = {};
    $scope.view.booyah = 'booyah from table controller';
    $scope.currentUser={};

   // ********** sample partner route to reference: *************
       // ********** gets all partners stored in DB **********
    console.log($http({
        method: 'GET',
        url: 'http://localhost:9090/partners'
    }).then(function successCallback(response) {
        console.log(response.data);
    }, function errorCallback(error) {
        console.log(error);

           // called asynchronously if an error occurs
           // or server returns response with an error status.
    })
   );
    $scope.currentUser.email = $window.localStorage.getItem('email');
    console.log($scope.currentUser.email, 'currentUserEmail');

   // ********** gets info for partner of email 0@0.com (hard-coded) and 0@0.com's referrals too **********
   // $http.get('/api/partners/' + $scope.currentUserEmail).then(function successCallback(response) {
   //     console.log("0@0.com's partner and referral data", response.data);
   // }, function errorCallback(error) {
   //     // called asynchronously if an error occurs
   //     // or server returns response with an error status.
   //     console.log(error);
   // })

    $http.get('/api/partners/' +$scope.currentUser.email + '/referrals').then(function(response){
        console.log(response, 'response');
    });


}]);
