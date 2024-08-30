const fs = require('fs');

const familiaStark = () => {
    fs.readFile('./characters.json', 'utf8', (error, date) => {
        if (error) {
            console.log('Error', error);
        }
        try {
            const personajes = JSON.parse( date );
            const familiaStark = personajes.filter(personaje => personaje.family === 'House Stark')
            console.log('Familia Encontrada')
            familiaStark.forEach(personaje => {
                console.log(personaje)
            })
        }
        catch (error) {
            console.error(error);
        }
    })
}


familiaStark();


