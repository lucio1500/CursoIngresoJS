function mostrar()
{
    var resto;
    var letra;
    var numero;
    var respuesta='s';
    var cantimpares=0;
    var cantpares=0;
    var cantceros=0;
    var positivo;
    var cantpositivos=0;
    var totalpos=0;
    var promedio;
    var negativo;
    var totalneg=0;
    var maximo;
    var letramax;
    var minimo;
    var letramin;
    var flag=0;
    
    do{
        numero=parseInt(prompt("Ingrese un numero entre -100 y 100: "));
        while(numero>100||numero<-100||isNaN(numero)){
            numero=parseInt(prompt("Incorrescto, Ingrese un numero entre -100 y 100: "));
        }
        letra=prompt("Ingrese una letra: ");
        while(!(isNaN(letra))){
            letra=prompt("Incorrecto, Ingrese una letra: ");
        }
        if (numero<0){
            negativo=numero;
            totalneg=totalneg+negativo;
        }else if(numero>0){
            positivo=numero;
            totalpos=totalpos+positivo;
            cantpositivos++;
        }
        if (numero==0){
            cantceros++;
        }
        else{
        resto=numero%2;
        if(resto==0){
            cantpares++;
        }
        else{
        cantimpares++;
        }
        }
        
        if(flag==0||numero<minimo){
            minimo=numero;
            letramin=letra;
        }

        if(flag==0||numero>maximo){
            maximo=numero;
            letramax=letra;
            flag=1;
        }
    
        respuesta=prompt("Si desea seguir ingresando datos presione la letra 's'").toLowerCase();
    }
    while(respuesta=='s');
    promedio=totalpos/cantpositivos;
    document.write("A) Cantidad de numeros pares "+ cantpares+ "<br>B) Cantidad de numeros impares "+ cantimpares +"<br>C) Cantidad de ceros "+cantceros+ "<br>D) Promedio de positivos: "+promedio+"<br>E) Suma de negativos: "+totalneg+ "<br>F) Numero y letra del maximo:  "+maximo+"  "+letramax+"    Numero y letra del minimo: "+minimo+"  "+letramin);

}
