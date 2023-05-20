const userNameEl = document.querySelector("#name-output");
const inputEl = document.querySelector("#name-input");

inputEl.addEventListener("input", () => {
  if (inputEl.value === "") {
    userNameEl.textContent = "Anonymous";
  } else {
    userNameEl.textContent = inputEl.value;
  }
});

console.log(inputEl.value);
