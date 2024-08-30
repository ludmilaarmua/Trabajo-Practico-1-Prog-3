//PUNTO 3. AGREGAR UN NUEVO PRODUCTO 


const urlApi = 'https://fakestoreapi.com/products';
async function visualizarProducto (objeto){
    try{
        const response = await fetch (urlApi, {
            method:"POST",
            body:JSON.stringify(objeto)
            
        });
        if (!response.ok){
            throw new Error ('error', response.status);
        }
        const datos = await response.json();
        console.log("Producto agregado correctamente:", datos);
    } catch (error) {
        console.log("Se produjo un error al retornar el producto con el id solicitado:", error);
    }
}

const newProduct = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
}

visualizarProducto(newProduct)