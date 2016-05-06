function xhr(data, cb) {


    var http = new XMLHttpRequest();
    var url = "https://httpbin.org/post";
    var params = JSON.stringify(data);
    http.open("POST", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/json");

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {

            console.log(http.responseText)
            cb(http.responseText)
        }
    }
    http.send(params);
}


document.addEventListener('DOMContentLoaded', function(event) {

    var toSelect = document.getElementById('to');
    var fromSelect = document.getElementById('from');
    var data = JSON.parse(document.body.dataset.jsdata);
    var requiredRate = document.getElementById('requiredRate');
    var button = document.getElementById('button');
    var number = document.getElementById('mobile');

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
            RateThreshold: requiredRate.value,
            Phonenumber: mobile.value
        }

        xhr(data, function(responseText) {
            console.log('Callback')
            console.log(responseText)
        });


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