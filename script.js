const cards = [
    {
      title: "Charizard",
      image: "https://images.pokemontcg.io/base1/4_hires.png",
      description: "Fire-type powerhouse. Base Set classic."
    },
    {
      title: "Blastoise",
      image: "https://images.pokemontcg.io/base1/2_hires.png",
      description: "Hydro-powered legend. Base Set original."
    },
    {
      title: "Venusaur",
      image: "https://images.pokemontcg.io/base1/15_hires.png",
      description: "Grass-type tank. The third starter evolution."
    }
  ];
  
  const grid = document.getElementById('cardGrid');
  const modal = document.getElementById('cardModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const closeModal = document.getElementById('closeModal');
  
  cards.forEach(card => {
    const cardEl = document.createElement('div');
    cardEl.className = 'card';
    cardEl.innerHTML = `<img src="${card.image}" alt="${card.title}" />`;
    cardEl.addEventListener('click', () => {
      modalImage.src = card.image;
      modalTitle.textContent = card.title;
      modalDescription.textContent = card.description;
      modal.style.display = 'flex';
    });
    grid.appendChild(cardEl);
  });
  
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  