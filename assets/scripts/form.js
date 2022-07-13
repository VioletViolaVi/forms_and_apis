function addListItem(text) {
  // get reference to container
  const container = document.getElementById("container");

  // create new li element
  const newLiElement = document.createElement("li");

  // add text to new li element
  newLiElement.textContent = text;

  // add new li element to page
  container.appendChild(newLiElement);
}

const handleFormSubmit = (e) => {
  // stop page refreshing
  e.preventDefault();

  // get references to form
  const form = e.target;

  addListItem(form.name.value);
};

// get's form & does something on submit
document
  .getElementById("identityForm")
  .addEventListener("submit", handleFormSubmit);
