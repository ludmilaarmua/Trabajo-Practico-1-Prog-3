//PUNTO 2:  RECUPERAR LA INFORMACION DE UN NUMERO LIMITADO DE PRODUCTOS 

const urlApi = 'https://fakestoreapi.com/products'


async function productosLimitados() {
    try {
        const response = await fetch(urlApi, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error('Error: ' + response.status);
        }

        const datos = await response.json();


        const productosFiltrados = datos.filter(producto => producto.price <60);

        if (productosFiltrados.length === 0)       
        {           }
    } catch (error) {
        console.log(error);
    }
}

productosLimitados();