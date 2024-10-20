const DOMSelectors = {
  header: document.querySelector("h1"),
  button: document.querySelector("#button"),
  form: document.querySelector(".form"),
  food: document.querySelector("#food-name"),
  course: document.querySelector("#course-name"),
  image: document.querySelector("#jellycat-pic"),
  container: document.querySelector(".container"),
};

const album = DOMSelectors.container;

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault(); // not refreshing page
  const foodName = DOMSelectors.food.value;
  const courseName = DOMSelectors.course.value;
  const jellycatPicture = DOMSelectors.image.value;

  function addCard(foodName, jellycatPicture, courseName) {
    album.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
            <h3 class="card-header">${foodName}</h3>
            <img src="${jellycatPicture}" alt="${foodName} cover" class="jellycat" />
            <p id="course-name">${courseName}</p>
            <img src = "https://png.pngtree.com/png-vector/20221118/ourmid/pngtree-cancel-x-button-circle-vector-png-image_34682328.png" class="delete-button"> 
        </div>`
    );
  }
  addCard(foodName, jellycatPicture, courseName);
  clearFields();

  function deleteCard(button) {
    button.parentElement.remove();
  }
  const deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      deleteCard(button);
    });
  });
});

function clearFields() {
  DOMSelectors.food.value = "";
  DOMSelectors.course.value = "";
  DOMSelectors.image.value = "";
}

//create HTML for inputs, cards, container
// select/query the HTML form and get valyes from inputs
//turn values into object MOvie, Game. User, etc.
//insert card with obj onto HTML
// add event listener for remove button for JS

//const album
// addcard(album)
//clear fields
//addremovebuttons
