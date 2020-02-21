function mostrar()
{
//declarar contadores y variables 
	var contador=0;
	var contadorPositivo=0;
	var contadorNegativo=0;
	var contadorCero=0;
	var contadorPares=0;
	var numero;
	var positivo
	var negativo 
	var promPositivo
	var promNegativo;
	var diferencia;
	var respuesta;

	do{
		numero=parseInt (prompt("Ingrese un numero"));
		while(isNaN(numero)){
		numero=parseInt (prompt("Eso no es un numero. Ingrese un numero")); 
		}
	
			if(numero>0)
			{
				positivo=positivo+numero;
				contadorPositivo++;
			}
			else if (numero<0)
			{
				negativo=negativo+numero;
				contadorNegativo++;
			}
			else
			{
				contadorCero++;
			}

			
	
	//diferencia: cantidad de postivos menos cantidad de negativos
	
	respuesta=prompt("Ingrese 'si' para seguir ingresando numeros y 'no' para terminar: ").toLowerCase();
	
	}while(respuesta=="si");




}//FIN DE LA FUNCIÓN