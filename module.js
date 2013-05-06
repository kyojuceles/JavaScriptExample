var CreatePerson = function (init_name)
{
	var name = init_name;
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
};

var kyojuceles = CreatePerson("kyojuceles");
var andrew = CreatePerson("Andrew");

kyojuceles.recovery_hp(10);
andrew.recovery_hp(20);

kyojuceles.output_status();
andrew.output_status();
