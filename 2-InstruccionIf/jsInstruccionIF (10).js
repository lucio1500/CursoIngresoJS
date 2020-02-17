function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var num
	num = Math.random();
	num = Math.floor ((num * 9)+1);
	if (num==9||num==10)
	{
		alert("Excelente "+num);
	}
	else if (num>=4)
	{
		alert("Aprobo "+num);
	}
	else
	{
		alert("Vamos, la proxima se puede "+num);
	}

}//FIN DE LA FUNCIÓN