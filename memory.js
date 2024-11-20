
  //   // ligne a
  //   let a1 = document.getElementById("a1");
  //   let a2 = document.getElementById("a2");
  //   let a3 = document.getElementById("a3");
  //   let a4 = document.getElementById("a4");
  //   // ligne b
  //   let b1 = document.getElementById("b1");
  //   let b2 = document.getElementById("b2");
  //   let b3 = document.getElementById("b3");
  //   let b4 = document.getElementById("b4");
  //   // ligne c
  //   let c1 = document.getElementById("c1");
  //   let c2 = document.getElementById("c2");
  //   let c3 = document.getElementById("c3");
  //   let c4 = document.getElementById("c4");

  //   function returnCard() {

  //   }

  const gridContainer = document.querySelector(".grid-container");
  const scoreDisplay = document.getElementById("score");
  const resetButton = document.getElementById("reset");

  // Remplace les emojis par les chemins vers tes images .webp
  const cardsArray = [
    "ressources/dark_fantasy_cards/dark1.webp",
    "ressources/dark_fantasy_cards/dark2.webp",
    "ressources/dark_fantasy_cards/dark3.webp",
    "ressources/dark_fantasy_cards/dark5.webp",
    "ressources/dark_fantasy_cards/dark7.webp",
    "ressources/dark_fantasy_cards/dark8.webp",
    "ressources/dark_fantasy_cards/dark1.webp",
    "ressources/dark_fantasy_cards/dark2.webp",
    "ressources/dark_fantasy_cards/dark3.webp",
    "ressources/dark_fantasy_cards/dark5.webp",
    "ressources/dark_fantasy_cards/dark7.webp",
    "ressources/dark_fantasy_cards/dark8.webp",
  ];

  let flippedCards = [];
  let matchedCards = [];
  let score = 0;

  function shuffleCards() {
    cardsArray.sort(() => Math.random() - 0.5);
  }

  function createBoard() {
    gridContainer.innerHTML = "";
    cardsArray.forEach((card, index) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      cardElement.setAttribute("data-id", index);
      cardElement.setAttribute("data-card", card);
      cardElement.addEventListener("click", flipCard);
      gridContainer.appendChild(cardElement);
    });
  }

  function flipCard() {
    if (flippedCards.length === 2) return;

    const clickedCard = this;
    const imageSrc = clickedCard.getAttribute("data-card");

    // Afficher l'image de la carte
    const imgElement = document.createElement("img");
    imgElement.src = imageSrc;
    imgElement.alt = "Image de la carte";
    clickedCard.innerHTML = ""; // Vider la carte avant d'ajouter l'image
    clickedCard.appendChild(imgElement);
    clickedCard.classList.add("flipped");
    flippedCards.push(clickedCard);

    if (flippedCards.length === 2) {
      checkMatch();
    }
  }

  function checkMatch() {
    const [cardOne, cardTwo] = flippedCards;

    if (
      cardOne.getAttribute("data-card") === cardTwo.getAttribute("data-card")
    ) {
      matchedCards.push(cardOne, cardTwo);
      score++;
      scoreDisplay.textContent = `Score : ${score}`;
      flippedCards = [];
    } else {
      setTimeout(() => {
        cardOne.classList.remove("flipped");
        cardTwo.classList.remove("flipped");
        cardOne.innerHTML = "";
        cardTwo.innerHTML = "";
        flippedCards = [];
      }, 1000);
    }

    if (matchedCards.length === cardsArray.length) {
      setTimeout(() => alert("Félicitations, vous avez gagné !"), 500);
    }
  }

  resetButton.addEventListener("click", resetGame);

  function resetGame() {
    score = 0;
    scoreDisplay.textContent = `Score : ${score}`;
    matchedCards = [];
    flippedCards = [];
    shuffleCards();
    createBoard();
  }

  shuffleCards();
  createBoard();

