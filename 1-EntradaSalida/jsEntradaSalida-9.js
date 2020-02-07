/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo,importe,resultado;
    sueldo=parseInt(document.getElementById("sueldo").value);
    importe = (sueldo*10)/100;
    resultado = importe+sueldo;
    document.getElementById("resultado").value=resultado;
}
