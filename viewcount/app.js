const http = require('http'),
      express = require('express'),
      app = express(),
      request = require('request');


// #1: 4552823

app.use (function (req,res) {
    var videoId = req.query.id;
    request('http://flix.tapuz.co.il/v/watch-'+videoId+'-.html',
    function (err, resp, body) {
        var start = body.indexOf('<meta name="views" content="')+28,
            end   = body.indexOf('"',start);
        var views = body.substring(start,end);
        res.send(views);
    });
});


/*
app.get('/', function(req, res){
    res.send("hello");
    //res.send(getViews(req.query.id));
});
*/
http.createServer(app).listen(3000, function() {
	console.log('Viewcount server listening on port 3000');
});
