const texts = ["Developer", "Creator", "Innovator"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

// Immediate Invoked Function Expression (IIFE)

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 400);
})();
