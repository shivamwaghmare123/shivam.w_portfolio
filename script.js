document.getElementById("year").textContent = new Date().getFullYear();
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const subject = encodeURIComponent("Portfolio enquiry from " + name);
    const body = encodeURIComponent(
      "Name: " + name + "\nEmail: " + email + "\n\n" + message,
    );
    window.location.href =
      "mailto:shivamwaghmare1011@gmail.com?subject=" +
      subject +
      "&body=" +
      body;
  });
