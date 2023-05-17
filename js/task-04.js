let counterValue = 0;

const valueEl = document.querySelector("#value");

const decrementBtn = document.querySelector('[data-action="decrement"]');
decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

const incrementBtn = document.querySelector('[data-action="increment"]');
incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});


