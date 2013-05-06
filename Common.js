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
/////////////////////////////////////////////////////////////////////////////