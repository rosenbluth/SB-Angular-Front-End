var mongoose = require('mongoose');

module.exports = mongoose.model('EditorUser', {

    timeStamp: {
        type: Date,
        default: Date.now
    },

    leadName: {
        type: String,
        required: [true, 'Name is required.']
    },

    leadCompanyName: {
        type: String,
        required: [true, 'Company name is required.']
    },

    leadEmail: {
        type: String,
        match: [/.+\@.+\..+/, 'Please enter a valid email'],
        required: [true, 'E-mail is required.'],
    },

    leadPhone: {
        type: String,
    },

    referrerEmail: {
        type: String
    },

    resultedInConversion: {
        type: Boolean
    },

    conversionDate: {
        type: Date
    },

    totalAmountPaidForReferral: {
        type: Number,
        default: 0
    },

    // BEGIN
    // This is used to calculate amount earned toward next quarterly payout, only for front-end display
    totalMoneyYearlyStarter: {
        type: Number,
        default: 598.80
    },

    totalMoneyYearlyGrowth: {
        type: Number,
        default: 1198.80
    },

    numMonthsPassedConverted: {
        type: Number,
        default: 0
    },

    totalNumOfQuarterlyPayouts: {
        type: Number,
        default: 0,
        max: 4
    },
    // END

    activeReferral: {
        type: Boolean,
        default: true
    }

});
