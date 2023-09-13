document.getElementById("click").addEventListener("click", () => {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;

  var userInput = "Ievadītais vārds: " + firstName + " " + lastName;
  
  // Create a new <h1> element to display the user input
  var inputValue = document.createElement("h1");
  inputValue.textContent = userInput;

  // Get the div where you want to display the output
  var outputDiv = document.getElementById("output");

  // Append the <h1> element to the output div
  outputDiv.appendChild(inputValue);
});
