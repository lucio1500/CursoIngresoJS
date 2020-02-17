function mostrar()
{

var sexo = prompt("ingrese f ó m .").toLowerCase();
//while(sexo!='f'&&sexo!='m'&&sexo!='M'&&sexo!='F')
while(!(sexo=='f'||sexo=='m')){
    sexo = prompt("incorrecto ingrese f ó m .").toLowerCase();
}


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN