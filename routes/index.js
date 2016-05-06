var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    var availableCountries = [{
            name: 'Austrailian', 
            value: 'dollor', 
            symbol : '$',
            iso: 'eur'
        }, {
            name: 'France', 
            value: 'euro', 
            symbol : '$',
            iso: 'eur'
        }, {
            name: 'Nigeria',
            value: 'naira',
            symbol: '₦',
            iso: 'NGA'
        }, {
            name: 'Philippines',
            value: 'pesos',
            symbol: 'PHP',
            iso: 'PHL'
        }, {
            name: 'United Kingdom', 
            value: 'british pounds', 
            symbol : '£',
            iso: 'gbg'
        }]




  res.render('index', { 
        title: 'World remit',
        availableCountries : availableCountries
    });
});

module.exports = router;
