$.ajax({ url: "/bt/ctoken" })
.done(function(res){
	braintree.setup(res, 'dropin', {
	  container: 'dropin'
	});
});