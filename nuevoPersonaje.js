const fs = require('fs');

const mostrarPersonajes = () => {
    fs.readFile('./characters.json', 'utf8', (error, date) => {
        if (error) {
            console.log('Error:', error);
        }
        try{
            const personajes = JSON.parse(date);
            personajes.forEach(personaje => {
                console.log(personaje)
            })
        }
        catch(error){
            console.error('Error:', error);
        }
    })
}

const nuevoPersonaje = (character) => {
    fs.readFile('./characters.json', 'utf-8', (error, date) => {
        if (error) {
            console.log('Error:', error);
        }

        try{
            const personajes = JSON.parse(date);
            personajes.push(character);
            const jsonString = JSON.stringify(personajes, null, 2);

            fs.writeFile('./characters.json',  jsonString, (error) => {
                if (error) {
                    console.log('Error:', error);
                }
                console.log('Se ha agregado un personaje de forma correcta');
                console.log(mostrarPersonajes())
            })
        }
        catch(error){
            console.error('Error:', error);
        }
    })
}


const character = {
    id: 300,
    firstName: 'Logan',
    lastName: 'Howlett',
    fullName: 'James Howlett',
    title: 'Wolverine',
    family: 'X-men',
    image: 'bronn.jpg',
    imageUrl: 'https://thronesapi.com/assets/images/bronn.jpg'

}

nuevoPersonaje(character)