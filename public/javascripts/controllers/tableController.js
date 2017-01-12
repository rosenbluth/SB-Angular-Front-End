
app.controller('tableController', ['$scope', '$http', '$location', '$window', 'CurrentPartner', 'LogOutService',function($scope, $http, $location, $window, CurrentPartner, LogOutService) {

    $scope.logout = LogOutService;

    $scope.view = {};
    $scope.view.booyah = 'booyah from table controller';
    $scope.currentUser = {};
    $scope.view.conversionTypes = ['starter', 'growth'];



    $scope.convertClicked = function(referral){
        confirm('You are about to convert a referral to active payout. Are you sure?')
        var referralIndex = this.$index;

        console.log(referral, 'referral argument');
        $('select').material_select();
        console.log($scope.data[referralIndex]);
        $http.post('/api/referrals/convert', $scope.data[referralIndex]).then((response) => {
            console.log(response, 'response in convertClicked dot then');
            $scope.data[referralIndex] = response.data;
        })

        }




    CurrentPartner().then(function(partnerReturned){
        $scope.currentUser = partnerReturned;
        if($scope.currentUser.email === "cat@cat1.com"){
            $scope.admin = true
            $http.get('/api/referrals').then(function(response){
                // console.log(response.data, 'response.data admin');
                $scope.data = response.data;
                console.log($scope.data);
            })
        }
        else{$http.get('/api/partners/' + $scope.currentUser.email + '/referrals').then(function(response) {
           //need to plug these values in to table
           console.log(response.data[1], 'asdasd response from table cont');
           $scope.data = response.data[1]; //array of referrals for this partner
           return response.data;
       });
    }
    })


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



    // if ryan clicks convert, this controller makes a new Date(), then makes a
    // post request to 'api/referrals/converted' route
    // that route: finds the referral based on id
    //             updates the referral's resultedInStarter or resultedInGrowth booleans to true
    //             and sets the referal's conversionDate
    //     in the dot then:
    // --this table controller's $scope.___referral# $scope.data array___.activeStarter or .activeGrowth gets set to true, and when it does:
    // --this table controller's $scope.___referral# $scope.data array___.totalAmountPaidForReferral will automatically be either 149 or 399, based on above property
    // --this table controller's $scope.___referral# $scope.data array___.bonusAmount will automatically be either 149 or 399, based on above property
    //
    // this table controller's $scope.___whatever referral in $scope.data array___.convertedDate will be response.data.conversionDate (a string)
    // --**** this table controller's $scope.___referral# $scope.data array___.numMonthsPassedSinceConversion will be set to 0
    //     *** numMonthsPassedSinceConversion will have to increase/auto update based on page rendering with a momentJS
    //     function that subtracts today's date minus conversionDate. if > 12 months, .activeStarter or .activeGrowth = false
    //     this property also keeps track of a $scope property
    //
    // // --this table controller's $scope.___referral# $scope.data array___.totalNumOfQuarterlyPayouts will be 0
    // --this table controller's $scope.___referral# $scope.data array___.amountMadeTowardNextPayout will be :
    //     if
    //     numMonthsPassedSinceConversion <=3 it will include the bonusAmount
    //
    //     ALSO, for ALL ADD:
    //  MomentJS math: last payout date minus todays date (will return a number of months since last payout date) >= 3
    //     that MomentJS number * monthlyStarter or *monthlyGrowth





}]);
