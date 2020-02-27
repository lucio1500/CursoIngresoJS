function mostrar()
{
    var marca;
    var peso;
    var temperatura; 
    var respuesta='s';
    var resto;
    var par=0;
    var marcapesado;
    var menoscero=0;
    var totalpeso=0;
    var cantpeso=0;
    var promedio;
    var maxpeso;
    var minpeso;
    var flag=0;
    do{

    marca=prompt("Ingrese una marca: ");
    
    peso=parseInt(prompt("Ingrese un peso entre '1' y '100': "));
    while(peso<1||peso>100||isNaN(peso)){
        peso=parseInt(prompt("Incorrecto, Ingrese un peso entre '1' y '100': "));
    }

    temperatura=parseInt(prompt("Ingrese una temperatura entre '-30' y '30': "));

    while(temperatura<-30||temperatura>30||isNaN(temperatura)){
        temperatura=parseInt(prompt("Incorrecto, Ingrese una temperatura entre '-30' y '30': "));
    }

    totalpeso=totalpeso+peso;
    cantpeso++
    resto=temperatura%2
    if (resto==0){
        par++;
    }

    
    if(temperatura<0){
        menoscero++;
    }

    if (flag==0||peso>maxpeso){
        maxpeso=peso;
        marcapesado=marca;
    }
    if (flag==0||peso<minpeso)
    {
        minpeso=peso;
        flag=1;
    }

    respuesta=prompt("Si desea continuar ingrese la letra 's': ").toLowerCase();
    }while (respuesta=='s')

    promedio=totalpeso/cantpeso;

    document.write("A) La cantidad de temperaturas pares es: "+par+"<br>B) La marca del producto mas pesado es: "+marcapesado+"<br>C) La cantidad de productos que se conservan a menos de 0 grados es: "+menoscero+"<br>D) El promedio del peso de todos los productos es: "+promedio+"<br>F) El peso maximo es "+maxpeso+"  y el peso minomo es "+minpeso);


}
