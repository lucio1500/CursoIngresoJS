function mostrar()
{

	var contador=0;
	var acumulador=0;
	var incremento=0;
	contador=parseInt(contador);
	acumulador=parseInt(acumulador);
	while(incremento<5){
		contador=parseInt (prompt("Ingrese un numero"));
		acumulador=acumulador+contador;
		incremento++;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN