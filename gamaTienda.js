
/**let nombre = console.log('ingrese su nombre');
let confirmacion = console.log('¿Desea ver nuestros productos? (s-si / n-no)');
let eleccion = 0;

let graficas = ["AMD", "NVIDIA"]
let cpus = ["INTEL", "AMD"]
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
            console.log('Monitor' + " " + confirmacionMonitor + ' de 300 USD + IVA agregado');
            monitores.splice(monitores.indexOf(confirmacionMonitor), 1);
            eleccion = eleccion + 200;
        }else{
            alert("no hay en stock")
        }
        
    }else if(producto == 'b' || producto == 'B'){
        let confirmacionGrafica = prompt('Elija un Grafica: \nAMD \nNVIDIA ').toUpperCase();
        if(graficas.indexOf(confirmacionGrafica) !== -1 ){
            console.log('Grafica' + " " + confirmacionGrafica + ' de 400 USD + IVA agregada');
            graficas.splice(graficas.indexOf(confirmacionGrafica), 1);
            eleccion = eleccion + 400;
        }else{
            alert("no hay en stock")
        }
    }else if(producto == 'c' || producto == 'C'){
        let confirmacionCpu = prompt('Elija un un procesador: \nAMD \nINTEL ').toUpperCase();
        if(cpus.indexOf(confirmacionCpu) !== -1 ){
            alert('Cpu' + " " + confirmacionCpu + ' de 250 USD + IVA agregado');
            cpus.splice(cpus.indexOf(confirmacionCpu), 1);
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
alert('Gracias por su compra, ' + nombre + '!');/** */



let carrito = [];
let contenedor = document.getElementById("misprods");

function renderizarProductos(){
    for(const producto of productos){
        contenedor.innerHTML += `
            <div class="card col-sm-2">
                <img src=${producto.foto} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">$ ${producto.precio}</p>
                    <button id='btn${producto.id}' class="btn btn-primary align-bottom">Comprar</button>
                </div>
            </div>   
        `;
    }
    productos.forEach((producto)=>{
        document.getElementById(`btn${producto.id}`).addEventListener('click',()=>{
            agregarACarrito(producto);
    });
});
}

renderizarProductos();

function agregarACarrito(prodAAgregar){
    carrito.push(prodAAgregar);
    document.getElementById('tablabody').innerHTML += `
        <tr>
            <td>${prodAAgregar.id}</td>
            <td>${prodAAgregar.nombre}</td>
            <td>${prodAAgregar.precio}</td>
        </tr>
    `;
    //agregar fila a la tabla de carrito
    
    let totalCarrito = carrito.reduce((acumulador,producto)=>acumulador+producto.precio,0);
    document.getElementById('total').innerText = 'Total a pagar $: '+totalCarrito;
}

