app.controller('tableController', ['$scope', '$http', '$location', '$window', 'CurrentPartner', 'LogOutService', function($scope, $http, $location, $window, CurrentPartner, LogOutService) {

    $scope.logout = LogOutService;

    $scope.view = {};
    $scope.view.booyah = 'booyah from table controller';
    $scope.currentUser = {};
    $scope.view.conversionTypes = ['starter', 'growth'];



    $scope.convertClicked = function(referral) {
        confirm('You are about to convert a referral to active payout. Are you sure?')
        var referralIndex = this.$index;

        console.log(referral, 'referral argument');
        $('select').material_select();
        console.log($scope.currentUser.data[referralIndex]);
        $http.post('/api/referrals/convert', $scope.currentUser.data[referralIndex]).then((response) => {
            console.log(response, 'response in convertClicked dot then');
            $scope.currentUser.data[referralIndex] = response.data;
            $scope.currentUser.data[referralIndex].conversionDate = parseInt($scope.currentUser.data[referralIndex].conversionDate.replace(/[_-]/g, ""))
            console.log($scope.currentUser.data[referralIndex].conversionDate, 'newDate');
            console.log(moment().from($scope.currentUser.data[referralIndex].conversionDate), "HEY HEY");
        })

    }
    // moment().from($scope.currentUser.data[referralIndex].conversionDate)

    CurrentPartner().then(function(partnerReturned) {
        $scope.currentUser = partnerReturned;
        if ($scope.currentUser.email === "sally@sally.com") {
            $scope.currentUser.admin = true
            $http.get('/api/referrals').then(function(response) {
                // console.log(response.data, 'response.data admin');
                $scope.currentUser.data = response.data;
                console.log($scope.currentUser.data);
            })
        } else {
            $http.get('/api/partners/' + $scope.currentUser.email + '/referrals').then(function(response) {
                //need to plug these values in to table
                console.log(response.data[1], 'asdasd response from table cont');
                $scope.currentUser.data = response.data[1]; //array of referrals for this partner
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



    // DONE DONE DONE DONE DONE if ryan clicks convert, this controller makes a new Date(), then makes a
    //   post request to 'api/referrals/converted' route
    //   that route: finds the referral based on id
    //               updates the referral's starterConverted or growthConverted booleans to true
    //                updates activeReferral to true
    //               and sets the referal's conversionDate
    //       in the dot then:
    //   -- $scope.currentUser.data[referralIndex].starterConverted or .growthConverted gets set to true, and when it does:
    //   -- $scope.currentUser.data[referralIndex].totalAmountPaidForReferral will automatically be either 149 or 399, based on above property
    //   -- $scope.currentUser.data[referralIndex].bonusAmount will automatically be either 149 or 399, based on above property DONE DONE DONE DONE DONE DONE

    //  $scope.currentUser.data[referralIndex].convertedDate will be response.data.conversionDate (a string)
    // --****  $scope.currentUser.data[referralIndex].numMonthsPassedSinceConversion will be set to 0
    //     *** numMonthsPassedSinceConversion will have to increase/auto update based on page rendering with a momentJS
    //     function that subtracts today's date minus conversionDate. if > 12 months, .activeStarter or .activeGrowth = false
    //     this property also keeps track of a $scope property
    //
    //
    // // -- $scope.currentUser.data[referralIndex].totalNumOfQuarterlyPayouts will be 0
    // -- $scope.currentUser.data[referralIndex].amountMadeTowardNextPayout will be :
    //     if
    //     numMonthsPassedSinceConversion <=3 it will include the bonusAmount
    //
    //     ALSO, for ALL ADD:
    //  MomentJS math: last payout date minus todays date (will return a number of months since last payout date)
    //         if (numMonthsPassedSinceConversion <= 3)    {  totalAmountPaidForReferral AND amountMadeTowardNextPayout both
    //                                                     = (numMonthsPassedSinceConversion  * monthlyStarter or * monthlyGrowth) + bonusAmount }
    //
    //         if  (4 <= numMonthsPassedSinceConversion <= 6) { totalNumOfQuarterlyPayouts=1;
    //                                                         amountMadeTowardNextPayout = (numMonthsPassedSinceConversion - totalNumOfQuarterlyPayouts * 3) * monthlyStarter or * monthlyGrowth; totalAmountPaidForReferral +=  amountMadeTowardNextPayout}
    //
    //         if ( 7 <= numMonthsPassedSinceConversion <= 9) { totalNumOfQuarterlyPayouts=2;
    //                                                         amountMadeTowardNextPayout = (numMonthsPassedSinceConversion - totalNumOfQuarterlyPayouts * 3) * monthlyStarter or * monthlyGrowth; totalAmountPaidForReferral  +=  amountMadeTowardNextPayout}
    //
    //         if  (10 <= numMonthsPassedSinceConversion <=12) { totalNumOfQuarterlyPayouts=3;
    //                                                         amountMadeTowardNextPayout = (numMonthsPassedSinceConversion - totalNumOfQuarterlyPayouts * 3) * monthlyStarter or * monthlyGrowth;
    //                                                         totalAmountPaidForReferral +=  amountMadeTowardNextPayout }
    //
    //         else change them to inactive
    //    *****MAYBE need to call scope.apply at the end of function here, not sure





}]);
