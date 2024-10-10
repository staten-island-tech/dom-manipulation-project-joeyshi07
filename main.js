const DOMSelectors = {
  header: document.querySelector("h1"),
  button: document.querySelector("#button"),
  form: document.querySelector(".form"),
  image: document.querySelector(".album-cover"),
};

DOMSelectors.button.addEventListener("click", function (event) {
  console.log(event.target.parentElement);
  event.target.style.backgroundColor = "red";
});

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault(); // not refreshing page
  console.log(document.querySelector("input").value);
});

DOMSelectors.container.insertAdjacentHTML(
  "beforeend",
  `<div class = "card">< class = "card-header"> ${} </h2></div>`
);

//create HTML for inputs, cards, container
// select/query the HTML form and get valyes from inputs
//turn values into object MOvie, Game. User, etc.
//insert card with obj onto HTML
// add event listener for remove button for JS
