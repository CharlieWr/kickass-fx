var request = require('request');


/*


[{"currency":"GBP","exchangeRates":[{"currency":"EUR","conversionRate":1.5,"validFrom":"2016-05-06T00:00:00.0000000+01:00","validTo":"2016-05-07T00:00:00.0000000+01:00"}]}]


*/


var data = [{
        "currency":"GBP",
        "exchangeRates":[
            {"currency":"EUR","conversionRate":1.5,"validFrom":"2016-05-06T00:00:00.0000000+01:00","validTo":"2016-05-07T00:00:00.0000000+01:00"},
            {"currency":"PHP","conversionRate":6.2,"validFrom":"2016-05-06T00:00:00.0000000+01:00","validTo":"2016-05-07T00:00:00.0000000+01:00"},
            {"currency":"NGN","conversionRate":3.2,"validFrom":"2016-05-06T00:00:00.0000000+01:00","validTo":"2016-05-07T00:00:00.0000000+01:00"},
            {"currency":"AUD","conversionRate":1.2,"validFrom":"2016-05-06T00:00:00.0000000+01:00","validTo":"2016-05-07T00:00:00.0000000+01:00"}
        ]
    },

    {
        "currency":"PHP",
        "exchangeRates":[
            {"currency":"EUR","conversionRate":1.2,"validFrom":"2016-05-06T00:00:00.0000000+01:00","validTo":"2016-05-07T00:00:00.0000000+01:00"},
            {"currency":"NGN","conversionRate":1.5,"validFrom":"2016-05-06T00:00:00.0000000+01:00","validTo":"2016-05-07T00:00:00.0000000+01:00"},
            {"currency":"AUD","conversionRate":3.3,"validFrom":"2016-05-06T00:00:00.0000000+01:00","validTo":"2016-05-07T00:00:00.0000000+01:00"},
            {"currency":"GBP","conversionRate":1.2,"validFrom":"2016-05-06T00:00:00.0000000+01:00","validTo":"2016-05-07T00:00:00.0000000+01:00"}
    ]
},  {
        "currency":"EUR",
        "exchangeRates":[
            {"currency":"PHP","conversionRate":2.5,"validFrom":"2016-05-06T00:00:00.0000000+01:00","validTo":"2016-05-07T00:00:00.0000000+01:00"},
            {"currency":"NGN","conversionRate":1.5,"validFrom":"2016-05-06T00:00:00.0000000+01:00","validTo":"2016-05-07T00:00:00.0000000+01:00"},
            {"currency":"AUD","conversionRate":3.3,"validFrom":"2016-05-06T00:00:00.0000000+01:00","validTo":"2016-05-07T00:00:00.0000000+01:00"},
            {"currency":"GBP","conversionRate":1.2,"validFrom":"2016-05-06T00:00:00.0000000+01:00","validTo":"2016-05-07T00:00:00.0000000+01:00"}
    ]
},
{
        "currency":"NGN",
        "exchangeRates":[
            {"currency":"EUR","conversionRate":1.2,"validFrom":"2016-05-06T00:00:00.0000000+01:00","validTo":"2016-05-07T00:00:00.0000000+01:00"},
            {"currency":"PHP","conversionRate":2.5,"validFrom":"2016-05-06T00:00:00.0000000+01:00","validTo":"2016-05-07T00:00:00.0000000+01:00"},
            {"currency":"AUS","conversionRate":3.3,"validFrom":"2016-05-06T00:00:00.0000000+01:00","validTo":"2016-05-07T00:00:00.0000000+01:00"},
            {"currency":"GBP","conversionRate":1.2,"validFrom":"2016-05-06T00:00:00.0000000+01:00","validTo":"2016-05-07T00:00:00.0000000+01:00"}
    ]
},
{
        "currency":"AUD",
        "exchangeRates":[
            {"currency":"EUR","conversionRate":1.2,"validFrom":"2016-05-06T00:00:00.0000000+01:00","validTo":"2016-05-07T00:00:00.0000000+01:00"},
            {"currency":"PHP","conversionRate":2.5,"validFrom":"2016-05-06T00:00:00.0000000+01:00","validTo":"2016-05-07T00:00:00.0000000+01:00"},
            {"currency":"NGN","conversionRate":1.5,"validFrom":"2016-05-06T00:00:00.0000000+01:00","validTo":"2016-05-07T00:00:00.0000000+01:00"},
            {"currency":"GBP","conversionRate":1.2,"validFrom":"2016-05-06T00:00:00.0000000+01:00","validTo":"2016-05-07T00:00:00.0000000+01:00"}
    ]
}

 
]
module.exports = {
    getRates: function(req, res, next){

        request('https://httpbin.org/get', function (error, response, body) {
          if (!error && response.statusCode == 200) {


            var newData = {};
            
            data.forEach(function(currency, index) {

                var rates = {};

                currency.exchangeRates.forEach(function(rate) {

                    rates[rate.currency] = rate.conversionRate;
                });

                newData[currency.currency] = rates;
            });     

            res.locals.currentRates = newData;
            return next();




          } else {

            console.log('Bleeding errr')
            return next()



          }
        })





    }
}