function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    document.getElementById("formStatus").innerText = "Please fill out all fields.";
    document.getElementById("formStatus").style.color = "red";
    return false;
  }

  document.getElementById("formStatus").innerText = "Thank you for reaching out! We will respond shortly.";
  document.getElementById("formStatus").style.color = "green";

  return false;
}