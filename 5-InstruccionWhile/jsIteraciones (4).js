function mostrar()
{

	var numero = parseInt( prompt("ingrese un número entre 0 y 10."));
	while(numero<0||numero>9||isNaN(numero)){
		numero = parseInt( prompt ("numero incorrecto ingrese un numero entre 0 y 10"));
	}
	document.getElementById("Numero").value=numero;
}//FIN DE LA FUNCIÓN