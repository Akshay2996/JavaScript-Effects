// For updating counters
const counters = document.querySelectorAll(".counter");
const speed = 250;

counters.forEach(counter => {
  const updateCount = () => {
    // + Converts String to a Number
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerHTML;
    const inc = Math.round(target / speed);

    if (count < target) {
      counter.innerHTML = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      count.innerHTML = target;
    }
  };

  updateCount();
});

// For text animation in header
const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for (let i = 0; i < strText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 100);

function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}
