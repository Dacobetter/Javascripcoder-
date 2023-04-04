
let nombre = prompt('ingrese su nombre');
let confirmacion = prompt('¿Desea ver nuestros productos? (s-si / n-no)');
let eleccion = 0;

let graficas = ["AMD", "NVIDIA"]
let cpus = ["Intel", "AMD"]
let monitores = ["LG", "SAMSUNG", "ASUS"]

function calculo(eleccion){
    let total = (eleccion * 0.19) + eleccion;
    return Math.floor(total); 
}

while(confirmacion == 's' || confirmacion == 'S'){
    let producto = prompt(nombre + ' ' + 'estos son nuestros productos: \nMonitores (a) \nGraficas (b) \nCpus (C)');
    if(producto == 'a' || producto == 'A'){

        let confirmacionMonitor = prompt('Elija un monitor: \nLG \nSAMSUNG \nASUS').toUpperCase();
        if(monitores.indexOf(confirmacionMonitor) !== -1 ){
            alert('Monitor' + " " + confirmacionMonitor + ' de 300 USD + IVA agregado');
            monitores.splice(monitores.indexOf(confirmacionMonitor), 1);
            eleccion = eleccion + 200;
        }else{
            alert("no hay en stock")
        }
        
    }else if(producto == 'b' || producto == 'B'){
        let confirmacionGrafica = prompt('Elija un Grafica: \nAMD \nNVIDIA ').toUpperCase();
        if(monitores.indexOf(confirmacionGrafica) !== -1 ){
            alert('Grafica' + " " + confirmacionGrafica + ' de 400 USD + IVA agregada');
            monitores.splice(monitores.indexOf(confirmacionGrafica), 1);
            eleccion = eleccion + 400;
        }else{
            alert("no hay en stock")
        }
    }else if(producto == 'c' || producto == 'C'){
        let confirmacionCpu = prompt('Elija un un procesador: \nAMD \INTEL ').toUpperCase();
        if(monitores.indexOf(confirmacionCpu) !== -1 ){
            alert('Cpu' + " " + confirmacionCpu + ' de 250 USD + IVA agregado');
            monitores.splice(monitores.indexOf(confirmacionCpu), 1);
            eleccion = eleccion + 250;
        }else{
            alert("no hay en stock")
        }        
    }else{
        alert('Selecciona un codigo del menu ')
    }
    confirmacion = prompt('Desea ver nuestros productos? (s-si / n-no');
}

alert('El precio total con IVA es: ' + '' + calculo(eleccion));
alert('Gracias por su compra, ' + nombre + '!');


const productosMuestra = [
    {
        foto: "../img/gpu3.png",
        nombre: "Grafica AMD",
        precio: 400
    },
    {
        foto: "../img/monitor1.jpeg",
        nombre: "Monitor",
        precio: 200
    },
    {
        foto: "../img/intel.jpg",
        nombre: "Procesador intel",
        precio: 250
    }
]
console.table(productosMuestra);
