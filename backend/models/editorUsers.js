var mongoose = require('mongoose');


module.exports = mongoose.model('EditorUser', {

    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email'],
    },
    hashed_password: {
        type: String,
    },
    salt: String,
    chosenOptions: {
        type: Object,
        default: {}
    },
    //--------********-------   how many  conversions have they made?
    starterConvertedCount: {
        type: Number,
        default: 0
    },

    growthConvertedCount: {
        type: Number,
        default: 0
    },
    nonConversionCourtesyBenefitCount: {
        type: Number,
        default: 0
    }

});
