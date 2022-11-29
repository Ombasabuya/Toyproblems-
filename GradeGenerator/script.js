const form = document.getElementById("studentGradeForm");
const input = document.getElementById("marks");
const message = document.getElementById("grade");

form.addEventListener("submit", (event) => {
  event.preventDefault(); //prevents reloading of page
  validateInput(input);
});

function validateInput(input) {
  console.log("input skeleton", input);
  console.log("input value", input.value);

  const checkInput = input.value;
  if (checkInput > 79 && checkInput < 100) {
    console.log("A");
    message.innerHTML = `<li>You have A</li>`;
  } else if (checkInput >= 60 && checkInput <= 79) {
    console.log("B");
    message.innerHTML = `<li>You have B</li>`;
  } else if (checkInput > 49 && checkInput <= 59) {
    console.log("C");
    message.innerHTML = `<li>You have C</li>`;
  } else if (checkInput > 40 && checkInput <= 49) {
    console.log("D");
    message.innerHTML = `<li>You have D</li>`;
  } else if (checkInput >= 0 && checkInput <= 40) {
    console.log("E");
    message.innerHTML = `<li>You have E</li>`;
  } else {
    console.log("error, marks should be between 0 and 100");
    message.innerHTML = `<li style="color:red; background-color:yellow">Errror</li>`;
  }
}