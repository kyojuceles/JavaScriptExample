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
	// �������� ������Ÿ���� ��ӹ޴� ���ο� ��ü ����
	var that = Object.create(this.prototype);
	
	// this�� ���ο� ��ü�� ���ε��ϸ鼭 ������ ȣ��.
	var other = this.apply(that, arguments);
	
	// ��ȯ���� ��ü�� �ƴϸ�, ���ο� ��ü�� ��ü.
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
