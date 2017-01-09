var express = require('express');
var router = express.Router();
var Referral = require('../backend/models/referral.js');
var Partner = require('../backend/models/partner.js');



router.get('/api/partners', function(req, res) {
    Partner.find().then(function(err, partners) {
        if (err) {
            res.send(err);
            console.log(err);
        } else {
            console.log(partners + "FROM ROUTE");
            res.send(partners);
        }
    })
});

router.get('/api/referrals', function(req, res) {
    Referral.find(function(err, referrals) {
        if (err) {
            res.send(err);
        } else {
            res.send(referrals);
        }
    })
});



module.exports = router;;
