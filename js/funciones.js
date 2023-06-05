function calcular() 
{
    var cantidad, tipo, select, select_activo;

    cantidad= document.getElementById("cantidaddeentradas").value;
    select= document.getElementById("tipodeentrada");
    select_activo= select.options[select.selectedIndex].value;
    console.log("La cantidad es: "+cantidad);
    console.log("El tipo es: "+select_activo);
    document.getElementById("totalapagar").innerHTML="Total a Pagar: $";
    
    if(cantidad>0)
    {
        switch(select_activo=parseInt(select_activo))
        {
            case 1:
                total= cantidad * (200*0.2);
                break;
            case 2:
                total= cantidad * (200*0.5);
                break;
            case 3:
                total= cantidad * (200*0.85);
                break;
        }
    console.log("El total a pagar es: $"+total);
    document.getElementById("totalapagar").innerHTML+=""+total;
    }
    else
    {
        alert("Introduzca una cantidad de entrada/s valida");
    }
}



function reiniciar()
{
    location.reload();
}

