// common method declare /////////////////////////////////////////////////////
Function.prototype.method = function (name, func)
{
	this.prototype[name] = func;
	return this;
};

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
//////////////////////////////////////////////////////////////////////////////

// Mammal class declare
var Mammal = function (name)
{
	this.name = name;
}.
	method('get_name', function ()
	{
		return this.name;
	}).
	method('says', function () 
	{
		return this.saying || '';
	});

Mammal.prototype.get_name = function ()
{
	return this.name;
};

Mammal.prototype.says = function ()
{
	return this.saying || '';
};
//////////////////////////////////////////////////////////////////////////////

// Cat class (inherit Mammal) declare
var Cat = function (name)
{
    this.name = name;
    this.saying = 'meow';
}.
	inherits(Mammal).
	method('purr', function (n)
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
	}).
	method('get_name', function ()
	{
		return this.says() + ' ' + this.name + ' ' + this.says();
	});
//////////////////////////////////////////////////////////////////////////////

var cat1 = new Cat('Cat1');
var cat2 = new Cat('Cat2');

document.writeln(cat1.get_name());
document.writeln(cat2.get_name());


