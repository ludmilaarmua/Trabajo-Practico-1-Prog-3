//                                PUNTO 1: RECUPERAR INFORMACION DE TODOS LOS PRODUCTOS.

const urlApi = 'https://fakestoreapi.com/products';


function producto(producto){

    const card = document.createElement('card');
    card.classList.add('card','row','col-md-12');

    const image = document.createElement('img');
    image.classList.add('card__image');
    image.src = producto.image
    


    const cardContent = document.createElement('div');
    cardContent.classList.add('card__content');

    const p = document.createElement('p');
    p.classList.add('card__title');
    p.textContent = producto.title;


    const p2 = document.createElement('p');
    p2.classList.add('card__description');
    p2.textContent = producto.category;




    const p4 = document.createElement('p');
    p4.classList.add('card__description');
    p4.textContent = producto.price;




    cardContent.appendChild(p4)
    cardContent.appendChild(p2);
    cardContent.appendChild(p);
    card.appendChild(image);
    card.appendChild(cardContent)

    return card

}   


async function recuperarProductos(){
    try{
        const response = await fetch(urlApi);
        const result = await response.json();
        const tarjeta = document.getElementById('tarjeta');
        tarjeta.innerHTML = '';
        result.map( (productos)  => {
            const product = producto(productos)
            tarjeta.appendChild(product);
        })
    }catch (error) {
        console.error(error);
    }
}


document.addEventListener('DOMContentLoaded',recuperarProductos);


