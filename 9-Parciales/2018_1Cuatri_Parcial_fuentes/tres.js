function mostrar()
{
    var precio,descuento,preciofinal;
    precio=parseInt(prompt("Ingrese un precio: "));
    descuento=parseInt(prompt("Ingrese un descuento: "));
    descuento=precio*descuento/100;
    preciofinal=precio-descuento;
    document.getElementById("elPrecioFinal").value=preciofinal;
}
