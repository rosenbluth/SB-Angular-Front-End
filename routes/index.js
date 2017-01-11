var express = require('express');
var router = express.Router({
    mergeParams: true
});
var async = require('async');
var mongoose = require('mongoose');
var ReferralSchema = require('../backend/models/referral.js');
var PartnerSchema = require('../backend/models/partner.js');
const jwt = require( 'jsonwebtoken' );
const bcrypt = require( 'bcrypt' );
const Partner = mongoose.model('Partner', PartnerSchema);
const Referral = mongoose.model('Referral', ReferralSchema);
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
    var email = req.body.email;
    var password = req.body.password;
    if ( !email || !password ) {
    res.send( 'email or password cannot be empty' );
    } else {

//     knex( 'players' ).where( {
//         email: email
//     } ).first().then( function( player ) {
//         if ( player ) {
//             // console.log( "player", player );
//             bcrypt.compare(password, player.password ,function(err,response){
//                 if(response){
//                     // console.log(response, 'response from bcrypt compare');
//                     var token = jwt.sign( {
//                         id: player.id
//                     }, ( process.env.JWT_SECRET ) );
//                     res.json( {
//                         token: token
//                     } );
//                 }
//              else {
//             res.send( 'wrong email or password' );
//         }
//     } )
// }
//
// } )
    Partner.findOne({"email": email}).then(function(partnerReturned){
        console.log(partnerReturned, 'partnerReturned');
        if(partnerReturned){
            console.log('this person returned');
            bcrypt.compare(password, partnerReturned.password, function(err, response){
                if(response){
                    var token = jwt.sign({id:player.id}, (process.env.JWT_SECRET));
                    res.json({token:token});
                }else{
                    console.log('wrong email or password');
                    res.send('wrong email or password')
                }
            })
        }else{
            console.log('wrong email or password');
        }
    })
}
});





//create a new user account and issue a token
router.post( '/api/signup', function( req, res ) {
    console.log( req.body, 'req.body from /signup post route' );
    let errors = [];
    if ( !req.body.email ) {
        errors.push( "Email can't be blank" )
    };
    if ( !req.body.password ) {
        errors.push( "Password can't be blank" )
    };
    if ( errors.length ) {
        console.log( errors );
        res.status( 422 ).json( {
            errors: errors
        } )
    } else {
        Partner.findOne({email: req.body.email}, function(err,result){
            if(!result){
                console.log('inelse');
                const saltRounds = 4;
                const passwordHash = bcrypt.hashSync( req.body.password, saltRounds );
                const newPartner = new Partner({firstName: req.body.firstName,
                                                lastName: req.body.lastName,
                                                email: req.body.email,
                                                phone: req.body.phone,
                                                stripe: req.body.stripe,
                                                venmo: req.body.venmo,
                                                password: passwordHash
                                            });
                newPartner.save(function(err, partnerInserted){
                    console.log(partnerInserted, 'partnerInserted');
                    const partner = partnerInserted;
                    const token = jwt.sign({id:partner.id}, "booyah")
                    console.log(token, 'token from post /signup route');
                    res.json(
                        {id:partner.id,
                        email: partner.email,
                        token: token
                    })
                })
            }else{
                res.status( 422 ).json( )
            }
        })
    }
});





//get all partner info and that partner's referrals
router.get('/api/partners/:partner_email/referrals', function(req, res, next) {
    let partnerEmail = req.params.partner_email;
    let referrals = [];
    let allPartnerReferralInfo = [];
    console.log(partnerEmail, 'partner email');
    Partner.find({
        email: partnerEmail
    }).then(function(returnedPartner) {
        console.log(returnedPartner, 'returnedPartner');
        allPartnerReferralInfo.push(returnedPartner[0])
        Referral.find({
            referrerEmail: partnerEmail
        }).then(function(referralsReturned) {
            // console.log(referralsReturned);
            allPartnerReferralInfo.push(referralsReturned);
            console.log(allPartnerReferralInfo, 'allPartnerReferralInfo');
            res.send(allPartnerReferralInfo)
        })
    })
}
)
// ************** end partners **************
// ************** referrals **************
//get all referrals--admin
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
// ************** end referrals **************
// ************** token auth **************
router.get( '/verify', function( req, res ) {
    if ( req.headers.authorization ) {
        const token = req.headers.authorization.split( ' ' )[ 1 ];
        console.log( token, 'token from /verify route' );
        const payload = jwt.verify( token, ( process.env.JWT_SECRET ) );
        console.log( payload, 'payload from /verify route' );
        // knex( 'players' ).where( {
        //     id: payload.id
        // } ).first().then( function( user ) {
        //     if ( user ) {
        //         // console.log( user, 'user from /verify route' );
        //         res.json( {
        //             id: user.id,
        //             username: user.username,
        //             first_name: user.first_name,
        //             last_name: user.last_name
        //         } )
        //     } else {
        //         res.status( 403 ).json( {
        //             error: "Invalid ID"
        //         } )
        //     }
        // } )
        //
        //
        //
        // Partners.find(id:payload.id)
        //
    } else {
        res.status( 403 ).json( {
            error: "No token"
        } )
    }
} );
// ************** end token auth **************
module.exports = router;
