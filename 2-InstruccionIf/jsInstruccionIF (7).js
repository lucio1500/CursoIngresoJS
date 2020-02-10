function mostrar()
{
//tomo la edad  

	
var edad,estadocivil;
edad=parseInt(document.getElementById("edad").value);
estadocivil=document.getElementById("estadoCivil").value;
if (edad<18&&estadocivil=="Soltero")
{
    alert("es muy pequeño para NO ser soltero");
}

}//FIN DE LA FUNCIÓN