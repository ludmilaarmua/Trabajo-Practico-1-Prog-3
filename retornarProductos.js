//PUNTO 4: RETORNAR UN PRODUCTO SEGUN id COMO PARAMETRO 


document.addEventListener("DOMContentLoaded", () => {
    fetch('https://fakestoreapi.com/products')
       .then(response => response.json())
       .then(data => {
            const select = document.getElementById('productoSelect');
            data.forEach(product => {
                const option = document.createElement('option');
                option.value = product.id;
                option.textContent = product.title;
                select.appendChild(option);
            });
        })
    .catch(error => console.log(error));
})



/* const urlApi = 'https://fakestoreapi.com/products'; */

function buscarDatos() {
    const idProducto = document.getElementById('productoSelect').value;

    if (idProducto) {
        fetch(`https://fakestoreapi.com/products/${idProducto}`)
        .then(response => response.json())
        .then(producto => {
            const profileDiv = document.getElementById('producto');
            profileDiv.innerHTML = `
            
            <div>
                <img src="${producto.image}" style="max-width: 230px">
                <h2>Name: ${producto.title}</h2>
            <div>
            <div>
                </h2>Title: ${producto.price}</h2>
            <div>
            <div>
                </h2>Family: ${producto.category}</h2>
            <div>
            
            `;
        })
        .catch(error => console.log(error))
}}
