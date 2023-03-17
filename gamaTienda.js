
let nombre = prompt('ingrese su nombre');
let confirmacion = prompt('¿Desea ver nuestros productos? (s-si / n-no)');
let eleccion = 0;

function calculo(eleccion){
    let total = (eleccion * 0.19) + eleccion;
    return Math.floor(total); 
}
while(confirmacion == 's' || confirmacion == 'S'){
    let producto = prompt(nombre + ' ' + 'estos son nuestros productos: \n-Monitor LG (a) \n-grafica AMD (b) \n-cpu INTEL (C)');
    if(producto == 'a' || producto == 'A'){
        alert('Monitor de 200 USD + IVA agregado');
        eleccion = eleccion + 200;
    }else if(producto == 'b' || producto == 'B'){
        alert('Grafica AMD 400 USD + IVA agregada')
        eleccion = eleccion + 400;
    }else if(producto == 'c' || producto == 'C'){
        alert('CPU Intel 250 USD + IVA agregado')
        eleccion = eleccion + 250;

    }else{
        alert('Selecciona un codigo del menu ')
    }
    confirmacion = prompt('Desea ver nuestros productos? (s-si / n-no');
}

alert('El precio total con IVA es: ' + '' + calculo(eleccion));
alert('Gracias por su compra, ' + nombre + '!');