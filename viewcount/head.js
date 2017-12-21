const request = require('request');

request('http://flix.tapuz.co.il/v/watch-4552823-.html',
function (err, resp, body) {
    var start = body.indexOf('<meta name="views" content="')+28,
        end   = body.indexOf('"',start);
    var views = body.substring(start,end);
    console.log (views);
});
