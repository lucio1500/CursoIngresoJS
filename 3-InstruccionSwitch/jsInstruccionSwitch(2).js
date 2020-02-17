function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);

switch (mesDelAño){
    case "Diciembre":   
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
        alert("Falta para el invierno");
        break;
    case "Junio":
    case "Julio":
    case "Agosto":
        alert("Abrigate que hace frio");
        break;
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
        alert("Ya pasamos el frio ahora que calor");
        break;    
}


}//FIN DE LA FUNCIÓN