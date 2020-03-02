function mostrar()
{
var edad;
var nombre;
var sexo;
var nota;
var respuesta;
var cantvaraprovados=0;
var cantvar=0;
var cantFem=0;
var promediomenor=0;
var promediomayor=0;
var promedioAdoles=0;
var promediomasc=0;
var promediofem=0;
var contmayor=0;
var contmenor=0;
var contAdoles=0;
var cantnotas=0;
var sexonotamax;
var notamax=0;
//informar el sexo y nombre de la mayor nota de los adolescentes
do{
    edad=parseInt( prompt("Ingrese una edad"));
    while(isNaN(edad)||edad<0){
        edad=parseInt( prompt("Incorrecto, Ingrese una edad"));
    }

    nombre=prompt("Ingrese un nombre ");
    while(!((nombre>='A'&&nombre<='Z')||(nombre>='a'&&nombre<='z'))){
        nombre=prompt("Incorrecto, Ingrese un nombre ");
    }

    sexo=prompt("Ingrese 'm' si es hombre y 'f' si es mujer: ").toLowerCase();
    while(!(sexo=='f'||sexo=='m')){
        sexo=prompt("Ingrese 'm' si es hombre y 'f' si es mujer: ").toLowerCase();
    }

    nota=parseInt( prompt("Ingrese una nota"));
    while(isNaN(nota)){
        nota=parseInt( prompt("Incorrecto, Ingrese una nota"));
    }

    cantnotas++;

    if (nota>=4){
        cantvaraprovados++;
    }


    if (edad>=18){
    contmayor++;
    promediomayor=nota/contmayor;
    }
    else {
        contmenor++;
        
        if(edad<=17&&edad>=13){
        contAdoles++;
        notamax=nota;
        if (flag==0||nota>notamax){
            notamax=nota;
            sexonotamax=sexo;
            nombremax=nombre;
            flag=1;
        }
        notamax=nota;

        }
    }

    if (sexo=='f'){
        cantFem++;
        
    }
    else{
        cantvar++;
        promediomasc=nota/cantvar;
    }
    


}while(respuesta=='s');

promediomenor=nota/cantnotas;
promedioAdoles=nota/contAdoles;
promediofem=nota/cantFem;


}
