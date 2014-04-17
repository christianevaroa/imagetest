var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.bodyParser());

app.get('/image/:id', function(req, res) {
	fs.exists("./images/image_" + req.params.id + ".png", function(exists) {
		if(exists) {
			res.sendfile("./images/image_" + req.params.id + ".png");
		}
		else {
			res.statusCode = 404;
			return res.send('Error 404: image not found');
		}
	})
});

var server = app.listen(3000, function() {
	console.log('Listening on port %d', server.address().port);
});