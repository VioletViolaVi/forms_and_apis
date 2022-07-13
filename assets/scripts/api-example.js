const url = "https://zoo-animal-api.herokuapp.com/animals/rand";

const displayAnimal = (data) => {
  // get reference to parent div
  const display = document.getElementById("display");

  // put animal name in div element
  display.innerHTML = `<h2>${data["name"]} (<em>${data["latin_name"]}</em>)</h2>`; // dangerous way

  //   display.textContent = data["name"]; // responsible way
};

// make a request for date using fetch
fetch(url) // returns promise (fetch tea)
  .then((response) => response.json()) // returns another promise (got tea)
  .then((data) => displayAnimal(data)); // when data comes back then do something (when ready to drink, drink tea)
