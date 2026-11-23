const sampleSpace = ["apple","banana","grapes","cherry","watermelon","lemon","kiwi","strawberry"];
const values = [...sampleSpace, ...sampleSpace];

for (let i = values.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  [values[i], values[j]] = [values[j], values[i]];
}

function createGame() {
  let first = null;
  let locked = false;

  return function click(card) {
    if (locked || card.open) return;
    card.open = true;
    card.btn.textContent = card.value;

    if (!first) { first = card; return; }

    if (first.value === card.value) {
      first = null;
    } else {
      locked = true;
      let a = first, b = card;
      first = null;
      setTimeout(() => {
        a.open = b.open = false;
        a.btn.textContent = b.btn.textContent = "";
        locked = false;
      }, 1000);
    }
  };
}

const play = createGame();
const board = document.getElementById("board");

values.forEach(value => {
  let card = { value, open: false, btn: document.createElement("button") };
  card.btn.onclick = () => play(card);
  board.appendChild(card.btn);
});
