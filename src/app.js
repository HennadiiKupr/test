const openButton = document.getElementById('open-button');
const closeButton = document.getElementById('close-button');
const formContainer = document.getElementById("form-container");
const form = document.getElementById("form");
const successMessage = document.querySelector(".success-message");

function openForm() {
  formContainer.style.display = "block";
  openButton.style.display = "none";
  closeButton.style.display = "block";
}

function closeForm() {
  document.getElementById("form-container").style.display = "none";
  closeButton.style.display = "none";
  openButton.style.display = "block";
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  form.reset();

  successMessage.style.display = "block";

});

document.addEventListener("click", () => { 
  successMessage.style.display = "none";
})