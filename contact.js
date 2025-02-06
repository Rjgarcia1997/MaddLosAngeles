const form = document.getElementById("registrationForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  fetch("php/sendmail.php", {
    method: "POST",
    body: formData
  })
  .then(response => {
  })
  .catch(error => { 
  });
});