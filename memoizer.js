Function.prototype.method = function (name, func)
{
	this.prototype[name] = func;
	return this;
};

var memoizer = function (memo, fundamental)
{
	var shell = function (n)
	{
		var result = memo[n];
		if (typeof result !== 'number')
		{
			result = fundamental(shell, n);
			memo[n] = result;
		}
		return result;
	};
	return shell;
};

var fibonacci = memoizer([0, 1], function (shell, n)
{
	return shell(n - 1) + shell(n - 2);
});

var factorial = memoizer([1, 1], function (shell, n)
{
	return n * shell(n - 1);
});

document.writeln(factorial(0));

document.writeln(typeof result);

var MYAPP =
{
	Version: 3,
	Version2: 4,
};

document.writeln(MYAPP.Version);







