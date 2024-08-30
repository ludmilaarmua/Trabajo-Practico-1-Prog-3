const fs = require('fs');

const url = 'https://thronesapi.com/api/v2/Characters';

const allCharacters =  async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log('Datos cargados')

        fs.writeFile('characters.json', JSON.stringify(data, null, 2), (error) => {
            if (error) throw error;
            console.log('Se ha guardado correctamente');

        });
    } catch (error) {
        console.error('Se ha producido un error al cargar los datos:', error);
    }
};

allCharacters();
