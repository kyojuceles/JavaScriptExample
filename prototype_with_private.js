// common method declare /////////////////////////////////////////////////////
Function.prototype.method = function (name, func)
{
	this.prototype[name] = func;
	return this;
};

//if (typeof Object.create !== 'function')
//{
//	Object.create = function (o) 
//	{
		//var F = function () {};
		//F.prototype = o;
		//return new F();
//	};
//};

Function.method('new', function ()
{
	// 생성자의 프로토타입을 상속받는 새로운 객체 생성
	var that = Object.create(this.prototype);
	
	// this를 새로운 객체에 바인딩하면서 생성자 호출.
	var other = this.apply(that, arguments);
	
	// 반환값이 객체가 아니면, 새로운 객체로 대체.
	return (typeof other === 'object' && object) || that;
});

Function.method('inherits', function (Parent)
{
    	this.prototype = new Parent();
    	return this;
});

Object.method('superior', function (name)
{
	var that = this,
		method = that[name];
	return function () {
		return method.apply(that, arguments);
	};
});
///////////////////////////////////////////////////////////////////////////

var mammal = function (spec)
{
	var that = {};
	
	that.get_name = function ()
	{
		return spec.name;
	};
	
	that.says = function ()
	{
		return spec.saying || '';
	};
	
	return that;	
};

var myMammal = mammal( {name: 'Herb'});

var cat = function (spec)
{
	spec.saying = spec.saying || 'meow';
	var that = mammal(spec);
	that.purr = function (n)
	{
		var i, s = '';
		for (i = 0; i < n; i += 1)
		{
			if (s)
			{
				s += '-';
			}
			s += 'r';
		}
		return s;
	};
	
	that.get_name = function ()
	{
		return that.says() + ' ' + spec.name + ' ' + that.says();
		
	};
	
	return that;
};

var myCat = cat({name: 'Henrietta'});

var coolcat = function (spec)
{
	var that = cat(spec),
		super_get_name = that.superior('get_name');
	that.get_name = function (n)
	{
		return 'like ' + super_get_name() + ' baby';
	};

	return that;
};

var myCoolCat = coolcat({name: 'Bix'});
var name = myCoolCat.get_name();

document.writeln(name);
