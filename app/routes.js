var braintree = require('braintree');
var gateway = braintree.connect({
	environment: braintree.Environment.Sandbox,
	merchantId: "qrnmqsx39dsct293",
	publicKey: "y39gvpg9hmz6mw9x",
	privateKey: "153607c095324e5b4d0a7152240378e2"
});
var uid = 0;

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	app.get('/bt/ctoken',function (req,res){
		gateway.clientToken.generate({}, function (err, response) {
			res.end(response.clientToken)
		});
	});

	app.post("/reg", function (req, res) {
		gateway.customer.create({
			id: uid,
			//phone
			paymentMethodNonce: req.body.payment_method_nonce
		}, function (err, result) {
			res.end(result.success ? 200 : 500);
		});
	});

	app.post('/pay', function(req, res){
		gateway.transaction.sale({
			customerId: req.body.uid,
			amount: req.body.amount
		}, function (err, result) {
			res.end(result.success ? 200 : 500);
		});
	});

	app.post('/uid', function(req, res){
		uid = req.body.uid;
		res.end(uid);
	})

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('/:uid', function(req, res) {
		res.sendFile('/public/index.html');
	});

	app.get('*', function(req, res) {
		res.sendFile('/public/index.html');
	});

};