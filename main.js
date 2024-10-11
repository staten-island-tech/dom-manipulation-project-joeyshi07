const DOMSelectors = {
  header: document.querySelector("h1"),
  button: document.querySelector("#button"),
  form: document.querySelector(".form"),
  image: document.querySelector(".album-cover"),
  container: document.querySelector(".container"),
};

DOMSelectors.button.addEventListener("click", function (event) {
  console.log(event.target.parentElement);
  event.target.style.backgroundColor = "red";
});

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault(); // not refreshing page
  const albumName = document.querySelector(".album-name").value;
  const artistName = document.querySelector(".artist-name").value;
  const albumCover = document.querySelector(".album-cover").value;

  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class = "card">
  <h2 class = "card-header"> ${albumName}</h2>
  <img src="${albumCover}" alt="${albumName} cover" class = "album-cover" />
  <p id = "artist-name"> By: ${artistName} </p>
  </div>`
  );
});

//create HTML for inputs, cards, container
// select/query the HTML form and get valyes from inputs
//turn values into object MOvie, Game. User, etc.
//insert card with obj onto HTML
// add event listener for remove button for JS
