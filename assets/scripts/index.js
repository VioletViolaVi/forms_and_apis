/*
NOTES:
    document.querySelector("#inputBox").addEventListener("input", (e) => {
    // get text box's value
    const text = e.target.value; // e.target.... faster way

    addListItem(text);
    });

    
  // get text box's value
  const text = e.target.value; // e.target.... faster way

*/

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

// listen to btn & wait for click
document.getElementById("firstBtn").addEventListener("click", (e) => {
  // get text box's value
  const text = document.querySelector("#inputBox").value;

  // call function w/ value
  addListItem(text);
});
