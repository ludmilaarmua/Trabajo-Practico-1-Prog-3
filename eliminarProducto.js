//                            PUNTO 5: ELIMINAR UN PRODUCTO 


export 

const urlApi = 'https://fakestoreapi.com/products';

async function eliminarProducto(id) {
    try {
        const response = await fetch(`${urlApi}/${id}`, {
            method: "DELETE"
        });
        
        if (!response.ok) {
            throw new Error('Error', response.status);
        }

        const datos = await response.json();
        console.log("Producto eliminado correctamente:", datos);
    } catch (error) {
        console.log("Hubo un error al eliminar el producto:", error);
    }
}


eliminarProducto(5);


