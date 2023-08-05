// JavaScript code to handle form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const formDataObject = Object.fromEntries(formData.entries());

    // Log the form data to the console (you can send it to the server or process it further here)
    console.log(formDataObject);

    // Clear the form after submission
    contactForm.reset();
});