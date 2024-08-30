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

const eliminarPersonaje = () => {
    fs.readFile('./characters.json', 'utf8', (error, date) => {
        if (error) {
            console.log('Error:', error);
        }

        try{
            const personajes = JSON.parse(date);
            const mayores = personajes.filter(personaje => personaje.id > '25')

            fs.writeFile('./characters.json', JSON.stringify(mayores, null, 2), (error) => {
                if (error) throw error;
                console.log('Se ha guardado correctamente');
                mostrarPersonajes()
            });
        }
        catch(error){
            console.error('Error:', error);
        }
    })
}


eliminarPersonaje()