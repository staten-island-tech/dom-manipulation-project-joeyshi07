const DOMSelectors = {
  header: document.querySelector("h1"),
  button: document.querySelector("#button"),
  form: document.querySelector(".form"),
  image: document.querySelector(".jellycat-pic"),
  container: document.querySelector(".container"),
};

DOMSelectors.button.addEventListener("click", function (event) {
  console.log(event.target.parentElement);
  event.target.style.backgroundColor = "red";
});

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault(); // not refreshing page
  const foodName = document.querySelector(".food-name").value;
  const courseName = document.querySelector(".course-name").value;
  const jellycatPicture = DOMSelectors.image.value;

  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class = "card">
  <h2 class = "card-header"> ${foodName}</h2>
  <img src="${jellycatPicture}" alt="${foodName} cover" class = "jellycat" />
  <p id = "course-name"> ${courseName} </p>
  </div>`
  );
});

//create HTML for inputs, cards, container
// select/query the HTML form and get valyes from inputs
//turn values into object MOvie, Game. User, etc.
//insert card with obj onto HTML
// add event listener for remove button for JS
