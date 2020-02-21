function mostrar()
{

	var numero=0;
	var positivo=0;
	var negativo=1;
	var respuesta;
	var flag=0;

	do{
		numero=parseInt (prompt("Ingrese un numero"));
		while(isNaN(numero)){
		numero=parseInt (prompt("Eso no es un numero. Ingrese un numero")); 
		}

	if(numero>=0){
	positivo=positivo+numero;
	}
	else if (numero<0){
	negativo=negativo*numero;
	flag=1;
	}

	respuesta=prompt("Ingrese 's' para seguir ingresando numeros y 'no' para terminar: ").toLowerCase();
	
	
	}while(respuesta=="s");

if(flag==0){
	negativo=0;
}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN