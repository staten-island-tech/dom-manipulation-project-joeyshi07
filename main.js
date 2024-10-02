const DOMSelectors = {
  header: document.querySelector("h1"),
  button: document.querySelector("#button"),
  form: document.querySelector(".form"),
};

DOMSelectors.button.addEventListener("click", function (event) {
  console.log(event.target.parentElement);
  event.target.style.backgroundColor = "red";
});

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault(); // not refreshing page
  console.log(document.querySelector("input").value);
});

console.log(DOMSelectors.header);
console.log(DOMSelectors.items);
