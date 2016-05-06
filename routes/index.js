var express = require('express');
var router = express.Router();
var getRates = require('../middleware/getRates');

/* GET home page. */
router.get('/', getRates.getRates ,function(req, res, next) {
    var selectedFrom = 'gbp';
    var selectedTo = 'phl';
    var currentHeadlineRate = '';

    var availableCountries = [{
            name: 'Australian Dollar',
            value: 'dollar',
            symbol : '$',
            iso: 'eur'
        }, {
            name: 'Euro',
            value: 'euro',
            symbol : '$',
            iso: 'eur'
        }, {
            name: 'Nigeria Naira',
            value: 'naira',
            symbol: '₦',
            iso: 'nga'
        }, {
            name: 'Philippines Peso',
            value: 'pesos',
            symbol: 'PHP',
            iso: 'phl'
        }, {
            name: 'Great British Pound',
            value: 'british pounds',
            symbol : '£',
            iso: 'gbp'
        }];

        var currentRates = res.locals.currentRates;

        if(currentRates[selectedFrom.toUpperCase()]) {

            // console.log(currentRates[selectedFrom.toUpperCase()])
            // console.log(selectedTo.toUpperCase())
            // console.log(currentRates[selectedFrom.toUpperCase()][selectedTo.toUpperCase()])

             if(currentRates[selectedFrom.toUpperCase()][selectedTo.toUpperCase()]) {

                 currentHeadlineRate = currentRates[selectedFrom.toUpperCase()][selectedTo.toUpperCase()];
                 console.log(currentHeadlineRate)
             }
        }





  res.render('index', {
        selectedFrom: selectedFrom,
        selectedTo: selectedTo,
        title: 'World remit',
        availableCountries : availableCountries,
        currentRates: res.locals.currentRates,
        currentHeadlineRate: currentHeadlineRate
    });
});

module.exports = router;
