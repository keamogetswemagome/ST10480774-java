function clean(input) {
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = clean(document.getElementById("contactName").value.trim());
    const email = clean(document.getElementById("contactEmail").value.trim());
    const message = clean(document.getElementById("contactMessage").value.trim());

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    document.getElementById("thankYouPopup").style.display = "flex";
    document.getElementById("contactForm").reset();
  });

  function closePopup() {
    document.getElementById("thankYouPopup").style.display = "none";
  }
