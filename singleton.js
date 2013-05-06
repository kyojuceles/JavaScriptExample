var CreatePerson = function ()
{
	var name = "";
	var hp = 0;
	
	return {
		init: function(init_name)
		{
			name = init_name;
		}
		,
		output_status: function ()
		{
			document.writeln("Name : " + name);
			document.writeln("HP   : " + hp);
		}
		,
		receive_damage: function (damage)
		{
			hp -= damage;
		}
		,
		recovery_hp: function (amount)
		{
			hp += amount;
		}
	};
}();

CreatePerson.init("Andrew");
CreatePerson.recovery_hp(10);
CreatePerson.output_status();
