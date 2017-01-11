var express = require('express');
var router = express.Router();
var Referral = require('../backend/models/referral.js');
var Partner = require('../backend/models/partner.js');

// ************** partners **************
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

router.post('/api/partners', function(req,res){
    let partner = req.body;
    console.log(partner, 'newPartner from api');
    let newPartner = new Partner(partner);
    newPartner.save(function(partnerInserted){
        res.json(partnerInserted)
    })
});

router.post('/api/partners/login', function(req,res){
    let personLoggingIn = req.body;

});

// ************** referrals **************
router.get('/api/referrals', function(req, res) {
    Referral.find(function(err, referrals) {
        if (err) {
            res.send(err);
        } else {
            res.send(referrals);
        }
    })
});


router.post('/api/referrals', function(req, res){

    let referral = req.body;
    console.log(referral, 'req.body referral from post route');
    let newReferral = new Referral(referral);
    newReferral.save(function(referralInserted){
        res.json(referralInserted)
    //    res.end();
});

});


router.get('/api/partners/:partner_email', function(req, res, next) {
    let partnerEmail = req.body.email;
    let referrals = [];
    let allPartnerReferralInfo = [];
    console.log(partnerEmail, 'partner email');
    Partner.find({
        email: partnerEmail
    }).then(function(returnedPartner) {
        allPartnerReferralInfo.push(returnedPartner[0])
        Referral.find({
            referrerEmail: partnerEmail
        }).then(function(referralsReturned) {
            console.log(referralsReturned);
            allPartnerReferralInfo.push(referralsReturned);
            res.send(allPartnerReferralInfo)
        })
    })
});


module.exports = router;
