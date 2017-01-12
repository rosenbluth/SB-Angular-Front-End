app.controller('tableController', ['$scope', '$http', '$location', '$window', 'CurrentPartner', 'LogOutService',function($scope, $http, $location, $window, CurrentPartner, LogOutService) {
    $scope.logout = LogOutService();

    $scope.view = {};
    $scope.view.booyah = 'booyah from table controller';
    $scope.currentUser = {};

    $scope.currentUser.email = $window.localStorage.getItem('email');
    console.log($scope.currentUser.email, 'currentUserEmail');

    //Get request to API and returns referrals for logged in partner, sets to data variable
    var request = $http.get('/api/partners/' + $scope.currentUser.email + '/referrals').then(function(response) {
        //need to plug these values in to table
        console.log(response.data[1], 'asdasd response');
        $scope.data = response.data[1]; //array of referrals for this partner
        return response.data;
    });

    //Date information and view for payout date
    $scope.date = new Date().getMonth() + 1;
    $scope.payoutDate = function() {

        if (1 <= $scope.date <= 3) {
            $scope.date = 'April 1st';
        } else if (4 <= $scope.date <= 6) {
            $scope.date = 'July 1st';
        } else if (7 <= $scope.date <= 9) {
            $scope.date = 'October 1st';
        } else {
            $scope.date = 'January 1st';
        }
    }();



}]);
