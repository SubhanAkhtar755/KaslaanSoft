document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("file-input");
  const fileName = document.getElementById("file-name");
  const submitBtn = document.getElementById("submit-btn");
  const form = document.getElementById("contact-form");

  // File select
  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    fileName.value = file ? file.name : "No file selected";
  });

  // Enable submit after reCAPTCHA
  window.enableSubmit = function () {
    submitBtn.classList.add("active");
    submitBtn.disabled = false;
  };

  // Form submit
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      body: formData
    })
    .then(() => {
      alert("Form submitted successfully!");
      form.reset();
      fileName.value = "No file selected";
      submitBtn.disabled = true;
      submitBtn.classList.remove("active");
      grecaptcha.reset(); // reset reCAPTCHA
    })
    .catch((error) => alert("Error submitting form: " + error));
  });
});
const fileBtn = document.getElementById("file-btn");
fileBtn.addEventListener("click", () => {
  fileInput.click();  // manually open file picker
});
