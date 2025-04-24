// Dummy-Daten für den Katalog
const catalogItems = [
  { id: '1', name: 'Pikachu', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' },
  { id: '2', name: 'Bulbasaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
  { id: '3', name: 'Charmander', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' }
];

// Album-Container
const album = [];

// Funktion zum Rendern des Katalogs
function renderCatalog() {
  const catalogDiv = document.getElementById('catalog');
  catalogDiv.innerHTML = ''; // Leeren

  catalogItems.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('catalog-card');
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <button onclick="addToAlbum('${item.id}')">Hinzufügen</button>
    `;
    catalogDiv.appendChild(card);
  });
}

// Funktion zum Rendern des Albums
function renderAlbum() {
  const albumDiv = document.getElementById('album');
  albumDiv.innerHTML = ''; // Leeren

  if (album.length === 0) {
    albumDiv.innerHTML = '<p>Dein Album ist noch leer!</p>';
  }

  album.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <button onclick="removeFromAlbum('${item.id}')">Entfernen</button>
    `;
    albumDiv.appendChild(card);
  });
}

// Hinzufügen einer Karte zum Album
function addToAlbum(id) {
  const card = catalogItems.find(item => item.id === id);
  if (!album.includes(card)) {
    album.push(card);
    renderAlbum();
  }
}

// Entfernen einer Karte aus dem Album
function removeFromAlbum(id) {
  const cardIndex = album.findIndex(item => item.id === id);
  if (cardIndex !== -1) {
    album.splice(cardIndex, 1);
    renderAlbum();
  }
}

// Initialisieren der Seite
renderCatalog();
renderAlbum();
