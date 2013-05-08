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