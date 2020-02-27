function mostrar()
{
    var num1,num2,resultado;
    num1=parseInt(prompt("Ingrese un numero "));
    num2=parseInt(prompt("Ingrese otro numero "));
    if (num1==num2){
        alert(num1+""+num2);
    }
    else if (num1>num2){
        resultado= num1-num2;
        alert(resultado);
    }
    else 
    {
        resultado=num2+num1;
        alert(resultado);
        if(resultado>10){
        alert("la suma es "+resultado+" y supero el 10");
        }
    }
}
