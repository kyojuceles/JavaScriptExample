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

var Mammal = function (name)
{
	this.name = name;
};

Mammal.prototype.get_name = function ()
{
	return this.name;
};

Mammal.prototype.says = function ()
{
	return this.saying || '';
};

var myMammal = new Mammal('Herb the Mammal');
var name = myMammal.get_name();

var Cat = function (name)
{
	this.name = name;
	this.saying = 'meow';
};

Cat.prototype = new Mammal();

Cat.prototype.purr = function (n)
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
