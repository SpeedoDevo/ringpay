var tessel = require('tessel');
var rfid = require('rfid-pn532').use(tessel.port['D']);
var request = require('request');

rfid.on('ready',function(){
	rfid.on('data',function(data){
		var uid = data.uid.toString('hex');
		request.post(
			'http://ringpay.herokuapp.com/uid',
			{ form: { uid: uid } },
			function (error, response, body) {
				if (!error && response.statusCode == 200) {
					console.log(body)
				}
			}
		);
	})
})