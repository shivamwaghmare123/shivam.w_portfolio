document.getElementById("year").textContent = new Date().getFullYear();

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const button = contactForm.querySelector('button[type="submit"]');
    const status = document.getElementById("form-status");
    const originalText = button.textContent;

    button.disabled = true;
    button.textContent = "Sending...";
    status.textContent = "Sending your message...";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(contactForm),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        status.textContent = "Message sent successfully!";
        contactForm.reset();
      } else {
        status.textContent =
          result.message || "Unable to send. Please try again.";
      }
    } catch (error) {
      status.textContent =
        "Network error. Please check your internet and try again.";
    } finally {
      button.disabled = false;
      button.textContent = originalText;
    }
  });
}
