function mostrar()
{
var planeta;
planeta=prompt("Ingrese un planeta: ").toLowerCase();
switch (planeta) {
    case "tierra":
        alert("Aca vivimos");
        break;
    case "mercurio":
    case "venus":
        alert("Aca hace mas calor");
        break;
    case "marte":
    case "urano":
    case "jupiter":
    case "saturno":
    case "neptuno":
        alert("Aca hace mas frio");
        break;
    default: 
        alert("No es un planeta");
        break;
    
}
}
