// Sample Pokémon card data
const cards = [
  {
    title: "Charizard",
    image: "https://images.pokemontcg.io/base1/4_hires.png",
    description: "Charizard is a powerful Fire-type Pokémon. A fan-favorite from the early years of Pokémon.",
  },
  {
    title: "Blastoise",
    image: "https://images.pokemontcg.io/base1/2_hires.png",
    description: "Blastoise is the ultimate Water-type starter evolution. Equipped with hydro cannons!",
  },
  {
    title: "Venusaur",
    image: "https://images.pokemontcg.io/base1/15_hires.png",
    description: "Venusaur uses its massive plant to store energy and deal powerful Grass-type attacks.",
  },
  {
    title: "Pikachu",
    image: "https://images.pokemontcg.io/base1/58_hires.png",
    description: "Pikachu, the iconic Electric-type. Always ready for an adventure with Ash!",
  },
];

// DOM elements
const grid = document.getElementById('cardGrid');
const modal = document.getElementById('cardModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.getElementById('closeModal');

// Render Pokémon cards
cards.forEach(card => {
  const cardEl = document.createElement('div');
  cardEl.className = 'card';
  cardEl.innerHTML = `
    <img src="${card.image}" alt="${card.title}" />
    <h3>${card.title}</h3>
  `;
  
  // On click, show the modal with card details
  cardEl.addEventListener('click', () => {
    modalImage.src = card.image;
    modalTitle.textContent = card.title;
    modalDescription.textContent = card.description;
    modal.classList.add('show');
  });

  grid.appendChild(cardEl);
});

// Close modal when clicking the close button
closeModal.addEventListener('click', () => {
  modal.classList.remove('show');
});

// Close modal when clicking outside the modal content
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});
