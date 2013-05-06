Function.prototype.method = function (name, func)
{
	this.prototype[name] = func;
	return this;
};

Function.method('new', function ()
{
	// 생성자의 프로토타입을 상속받는 새로운 객체 생성
	var that = Object.create(this.prototype);
	
	// this를 새로운 객체에 바인딩하면서 생성자 호출.
	var other = this.apply(that, arguments);
	
	// 반환값이 객체가 아니면, 새로운 객체로 대체.
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
