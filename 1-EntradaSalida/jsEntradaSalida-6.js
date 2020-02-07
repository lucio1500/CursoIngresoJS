/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    
    var num1,num2,resultado;
  // ASI  num1 = document.getElementById("numeroUno").value;
  //  num1=parseInt(num1);
  // sino mas rapido y como se ""debe""
    num1=parseInt(document.getElementById("numeroUno").value);
    num2 = document.getElementById("numeroDos").value;
    num2=parseInt(num2);
    resultado = num1 + num2;
    alert ("la suma es "+resultado);


}

