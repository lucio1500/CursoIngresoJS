function mostrar()
{

	var contador=0;
	var acumulador=0;
	//var respuesta='si';
	var incremento=0;
	var respuesta;
	var promedio;
	contador=parseInt(contador);
	acumulador=parseInt(acumulador);
	/*while(respuesta=="si"){
		contador=parseInt (prompt("Ingrese un numero"));
		acumulador=acumulador+contador;
		respuesta=prompt("Ingrese 'si' para seguir ingresando numeros y 'no' para terminar: ").toLowerCase();
		incremento++;
	}*/
	do{
		contador=parseInt (prompt("Ingrese un numero"));
		while(isNaN(contador)){
		contador=parseInt (prompt("Eso no es un numero. Ingrese un numero")); 
		}
	
	acumulador=acumulador+contador;
	
	respuesta=prompt("Ingrese 'si' para seguir ingresando numeros y 'no' para terminar: ").toLowerCase();
	
	incremento++;
	
	}while(respuesta=="si");

promedio=acumulador/incremento;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN