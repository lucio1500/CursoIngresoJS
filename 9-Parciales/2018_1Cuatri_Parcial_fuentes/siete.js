function mostrar()
{
    var nota,acumnotas=0,minimo,sexomin,cantvar=0, sexo, promedio, cantnotas=0,contador=0,flag=0;
    while(contador<5){
    nota=parseInt(prompt("Ingrese una nota: "));
    while(nota<0||nota>10||isNaN(nota)){
        nota=parseInt(prompt("Nota invalida, Ingrese una nota entre 0 y 10: "));
    }
    acumnotas=acumnotas+nota;
    cantnotas++;
    sexo=prompt("Ingrese 'f' si es mujer y 'm' si es hombre: ").toLowerCase();
    while(!(sexo=='f'||sexo=='m')){
        sexo=prompt("Caracter invalido. Ingrese 'f' si es mujer y 'm' si es hombre: ").toLowerCase();
    }
    if(flag==0 || nota<minimo)
		{
			minimo=nota;
            flag=1;
            sexomin=sexo;
        }
        if(sexo=='m' && nota>=6)
		{
			cantvar++;
		}
    contador++;
    }
    promedio=acumnotas/cantnotas;
    alert("El promedio de las notas es "+promedio);
    alert("La nota mas baja es "+minimo+" y es del sexo "+sexomin);
    alert("La cantida de varones con una nota mayor o igual a 6 es: "+cantvar);
    
}
