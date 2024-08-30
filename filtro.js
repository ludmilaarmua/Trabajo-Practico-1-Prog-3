document.addEventListener('DOMContentLoaded', () => {
    fetch('https://thronesapi.com/api/v2/Characters')
      .then(response => response.json())
      .then(data => {
        const select = document.getElementById('characterSelect');
        data.forEach(character => {
          const option = document.createElement('option');
          option.value = character.id; 
          option.textContent = character.fullName;
          select.appendChild(option);
        });
      })
      .catch(error => console.error('Error fetching characters:', error));
  });
  

  function fetchCharacter() {
    const characterId = document.getElementById('characterSelect').value;
    
    if (characterId) {
      fetch(`https://thronesapi.com/api/v2/Characters/${characterId}`)
        .then(response => response.json())
        .then(character => {
          const profileDiv = document.getElementById('characterProfile');
          profileDiv.innerHTML = `

            <div>
                <img src="${character.imageUrl}" alt="${character.fullName}" style="max-width: 230px">
                <h2>Name: ${character.fullName}</h2>
            <div>
            <div>
                </h2>Title: ${character.title}</h2>
            <div>
            <div>
                </h2>Family: ${character.family}</h2>
            <div>`;
        })
        .catch(error => console.error('Error fetching character details:', error));
    }
  }
  