var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    var availableCountries = [
        {
            name: 'united kingdom', 
            value: 'British pounds', 
            symbol : '£',
            iso: 'gbg'
        }, {
            name: 'france', 
            value: 'euro', 
            symbol : '$',
            iso: 'eur'
        }
    ]




  res.render('index', { 
        title: 'Express',
        availableCountries : availableCountries
    });
});

module.exports = router;
