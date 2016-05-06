var express = require('express');
var router = express.Router();
var getRates = require('../middleware/getRates');

/* GET home page. */
router.get('/', getRates.getRates ,function(req, res, next) {
    var selectedFrom = 'GBP';
    var selectedTo = 'PHP';
    var currentHeadlineRate = '';

    var availableCountries = [{
            name: 'Australian Dollar',
            value: 'dollar',
            symbol : '$',
            iso: 'AUD'
        }, {
            name: 'Euro',
            value: 'euro',
            symbol : '$',
            iso: 'EUR'
        }, {
            name: 'Nigeria Naira',
            value: 'naira',
            symbol: '₦',
            iso: 'NGN'
        }, {
            name: 'Philippines Peso',
            value: 'pesos',
            symbol: 'PHP',
            iso: 'PHP'
        }, {
            name: 'Great British Pound',
            value: 'british pounds',
            symbol : '£',
            iso: 'GBP'
        }];

        var currentRates = res.locals.currentRates;

        if(currentRates[selectedFrom.toUpperCase()]) {

             if(currentRates[selectedFrom.toUpperCase()][selectedTo.toUpperCase()]) {

                 currentHeadlineRate = currentRates[selectedFrom.toUpperCase()][selectedTo.toUpperCase()];
             }
        }

  res.render('index', {
        selectedFrom: selectedFrom,
        selectedTo: selectedTo,
        title: 'World remit',
        availableCountries : availableCountries,
        currentRates: currentRates,
        currentHeadlineRate: currentHeadlineRate,
        convertedData: JSON.stringify(currentRates)
    });
});

module.exports = router;
