var tessel = require('tessel');
var rfid = require('rfid-pn532').use(tessel.port['A']);
var http = require('http');

rfid.on('ready',function(){
	rfid.on('data',function(data){
		var uid = data.uid.toString('hex');
		console.log(data);
		http.get('http://ringpay.herokuapp.com/uid?uid='+uid,function(res){
			console.log(res.statusCode);
		})
	})
})