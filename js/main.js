//Menu
const menu = document.querySelector(".btn-group-vertical");
menu.classList.add("d-flex");
const menuButtons = menu.querySelectorAll("button");
menu.style.flexDirection = "row";
menu.style.width = "fit-content";
menu.style.gap = "5px";
menuButtons.forEach((btn) => {
  btn.style.width = "fit-content";
  btn.style.whiteSpace = "nowrap";
  btn.style.borderRadius = ".25rem";
});

// Cor do bot]ao para background do header
const menuButton = document.querySelector(".btn-secondary");
const backgroundColor = window.getComputedStyle(menuButton).backgroundColor;

//header
const header = document.querySelector(".jumbotron");
header.style.textAlign = "right";
header.style.backgroundColor = backgroundColor;
header.style.color = "white";

const headerButton = header.querySelector("a");
headerButton.classList.remove("btn-primary");
headerButton.classList.add("btn-success");

//card
const cards = document.querySelectorAll(".col-lg-3");
const novaOrdem = ["Natureza", "Animais", "Pessoas", "Tecnologia"];
const cardsArray = Array.from(cards);
const sortedCards = [...cardsArray].sort((a, b) => {
  const indexA = novaOrdem.indexOf(a.querySelector(".card-title").innerText);
  const indexB = novaOrdem.indexOf(b.querySelector(".card-title").innerText);
  return indexA - indexB;
});
const parentElement = cards[0].parentNode;
while (parentElement.firstChild) {
  parentElement.removeChild(parentElement.firstChild);
}
for (const card of sortedCards) {
  const title = card.querySelector(".card-title").innerText;
  const cardButton = card.querySelector("a");
  if (title === "Animais") {
    cardButton.classList.remove("btn-primary");
    cardButton.classList.add("btn-success");
  }
}
sortedCards.forEach((card) => {
  parentElement.appendChild(card);
});

//Lista
const lista = document.querySelector(".list-group");
const itensLista = lista.querySelectorAll("li");
const itensListaArray = Array.from(itensLista);
itensListaArray[0].classList.remove("active");
const novaList = () => {
  let i = 0;
  const novaLista = [];
  while (i < 5) {
    const item = document.createElement("li");
    item.classList.add("list-group-item");
    if (i === 3) {
      (item.innerText = "Quarto item"), item.classList.add("active");
    }
    if (i === 4) item.innerText = "Quinto item";
    itensListaArray[i]
      ? novaLista.push(itensListaArray[i])
      : novaLista.push(item);
    i++;
  }
  return novaLista;
};

while (lista.firstChild) {
  lista.removeChild(lista.firstChild);
}

for (const item of novaList()) {
  lista.appendChild(item);
}
