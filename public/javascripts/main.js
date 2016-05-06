document.addEventListener('DOMContentLoaded', function(event) {

    var toSelect = document.getElementById('to');
    var fromSelect = document.getElementById('from');
    var data = JSON.parse(document.body.dataset.jsdata);
    var requiredRate = document.getElementById('requiredRate');
    var button = document.getElementById('button');

    function sortRate(val, opp) {
        var rate;
        var oppVal = opp[opp.selectedIndex].value;

        if(oppVal === val) {

            rate = 0;

        } else {
            rate = data[val][oppVal];
        }

       requiredRate.value = rate;
    }

    button.addEventListener('click', function(event) {
        event.preventDefault();

        var sendData = {
            FromCurrency: fromSelect[fromSelect.selectedIndex].value,
            ToCurrency: toSelect[toSelect.selectedIndex].value,
            RateThreshold: requiredRate.value
        }

        console.log(sendData)


    }, false);



    toSelect.addEventListener('change', function(event) {
        var val = this[event.target.selectedIndex].value;

        sortRate(val, fromSelect);

    }.bind(toSelect), false)


    fromSelect.addEventListener('change', function(event) {
        var val = this[event.target.selectedIndex].value;

            sortRate(val, toSelect);

    }.bind(fromSelect), false);



}, false);