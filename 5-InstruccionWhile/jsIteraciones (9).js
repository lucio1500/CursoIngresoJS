function mostrar()
{

	var flag=0;
	var maximo;
	var minimo;
	var numero;

	// declarar variables
	
	var respuesta;

	do{
		numero=parseInt (prompt("Ingrese un numero"));
		while(isNaN(numero)){
		numero=parseInt (prompt("Eso no es un numero. Ingrese un numero")); 
		}
	
		if(flag==0 || numero>maximo)
		{
			maximo=numero;
		}
		if(flag==0 || numero<minimo)
		{
			minimo=numero;
			flag=1;
		}
	
	respuesta=prompt("Ingrese 'si' para seguir ingresando numeros y 'no' para terminar: ").toLowerCase();
	
	}while(respuesta=="si");

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;



}//FIN DE LA FUNCIÓN