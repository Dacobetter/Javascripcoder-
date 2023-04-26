
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let contenedor = document.getElementById("misprods");

function renderizarProductos() {
    for (const producto of productos) {
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
    productos.forEach((producto) => {
        document.getElementById(`btn${producto.id}`).addEventListener('click', () => {
            agregarACarrito(producto);
        });
    });
}



function eliminarDelCarrito(prodAEliminar) {
    let index = carrito.indexOf(prodAEliminar);
    carrito.splice(index, 1);
    let fila = document.getElementById(`borrar${prodAEliminar.id}`).parentElement.parentElement;
    fila.parentNode.removeChild(fila);
    let totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    document.getElementById('total').innerText = 'Total a pagar $: ' + totalCarrito;
    saveLocal()
}


function agregarACarrito(prodAAgregar) {
    carrito.push(prodAAgregar);
    let fila = document.createElement('tr');
    fila.innerHTML = `
        <td><img src="${prodAAgregar.foto}" alt=""></td>
        <td>${prodAAgregar.nombre}</td>
        <td>$ ${prodAAgregar.precio}</td>
        <td><button id="borrar${prodAAgregar.id}" class="btn btn-danger">X</button></td>
    `;
    document.getElementById('tablabody').appendChild(fila);

    let btnBorrar = document.getElementById(`borrar${prodAAgregar.id}`);
    btnBorrar.addEventListener('click', () => {
        eliminarDelCarrito(prodAAgregar);
    });
    let totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    document.getElementById('total').innerText = 'Total a pagar $: ' + totalCarrito;
    saveLocal()

}
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
};
function renderizarCarrito() {
    let tablaBody = document.getElementById('tablabody');
    tablaBody.innerHTML = '';
    for (const producto of carrito) {
        let fila = document.createElement('tr');
        fila.innerHTML = `
        <td><img src="${producto.foto}" alt=""></td>
        <td>${producto.nombre}</td>
        <td>$ ${producto.precio}</td>
        <td><button id="borrar${producto.id}" class="btn btn-danger">X</button></td>
`;
        tablaBody.appendChild(fila);
        let btnBorrar = document.getElementById(`borrar${producto.id}`);
        btnBorrar.addEventListener('click', () => {
            eliminarDelCarrito(producto);
        });
    }
    let totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    document.getElementById('total').innerText = 'Total a pagar $: ' + totalCarrito;
}


renderizarProductos()
renderizarCarrito();
