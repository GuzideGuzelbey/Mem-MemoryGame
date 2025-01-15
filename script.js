const cardArray = [
  {
    id: 1,
    name: "powerCard",
    state: false,
    "back-image": "assets/powercard.jpg",
    "front-image": "assets/cardpattern.jpg",
  },
  {
    id: 2,
    name: "freedomCard",
    state: false,
    "back-image": "assets/freedomCard.jpg",
    "front-image": "assets/cardpattern.jpg",
  },
  {
    id: 3,
    name: "happinessCard",
    state: false,
    "back-image": "assets/happinessCard.jpg",
    "front-image": "assets/cardpattern.jpg",
  },
  {
    id: 4,
    name: "loveCard",
    state: false,
    "back-image": "assets/loveCard.jpg",
    "front-image": "assets/cardpattern.jpg",
  },
  {
    id: 5,
    name: "powertyCard",
    state: false,
    "back-image": "assets/powertyCard.jpg",
    "front-image": "assets/cardpattern.jpg",
  },
  {
    id: 6,
    name: "wealthCard",
    state: false,
    "back-image": "assets/wealthCard.jpg",
    "front-image": "assets/cardpattern.jpg",
  },
];

//Doubling
let doubleObjectsArray = [];
cardArray.forEach((card) => {
  doubleObjectsArray.push(card);
  doubleObjectsArray.push(card);
});

//Shuffling (picked up from https://stackoverflow.com/a/12646864)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const shuffeled = shuffleArray(doubleObjectsArray);

const cardsContainerElement = document.querySelector("#cards-container");

// Generating card elements
shuffeled.forEach((card) => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardsContainerElement.appendChild(cardElement);

  cardElement.innerHTML = `
        <img class="front" src="${card["front-image"]}" alt="Card Front" />
        <img class="back" src="${card["back-image"]}" alt="Card Back" />
       `;
  cardElement.addEventListener("click", () => flipCards(card, cardElement));
});

function flipCards(card, cardElement) {
  if (!cardElement.classList.contains("flipped")) {
    card.state = true;
    cardElement.classList.add("flipped");
  } else {
    card.state = false;
    cardElement.classList.remove("flipped");
  }
}
