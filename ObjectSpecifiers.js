var test_method = function (params)
{
	
	document.writeln("FirstName : " + params.first);
	document.writeln("LastName : " + params.last);
	document.writeln("State : " + params.state);
	document.writeln("City : " + params.city);
};

var haha = test_method({
		first: "Park",
		last: "Hong",
		state: "Seoul",
		city: "Kangnam"
		});
