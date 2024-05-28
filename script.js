document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.getElementById("card-container");

  birds.forEach(bird => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${bird.image}" alt="${bird.name}">
      <h3>${bird.name}</h3>
    `;
    card.addEventListener("click", () => showDetails(bird));
    cardContainer.appendChild(card);
  });
});

function showDetails(bird) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = `
    <div class="details-container">
      <h2>${bird.name}</h2>
      <img src="${bird.image}" alt="${bird.name}">
      <p><strong>Wingspan:</strong> ${bird.wingspan}</p>
      <p><strong>Weight:</strong> ${bird.weight}</p>
      <p><strong>Location:</strong> ${bird.location}</p>
      <button onclick="goBack()">Go Back</button>
    </div>
  `;
}

function goBack() {
  window.location.reload();
}
