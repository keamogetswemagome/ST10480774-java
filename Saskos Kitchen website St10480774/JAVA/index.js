
window.addEventListener("load", () => {
  setTimeout(() => {
    alert("👋 Welcome to Sasko's Kitchen! Enjoy your visit");
  }, 800);
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});


document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
    btn.style.transition = "transform 0.2s";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});


const mealCards = document.querySelectorAll(".meal-card");

mealCards.forEach(card => {
  const addBtn = document.createElement("button");
  addBtn.textContent = "Add to Cart";
  addBtn.classList.add("add-btn");
  addBtn.style.display = "none";
  addBtn.style.marginTop = "10px";
  addBtn.style.padding = "8px 15px";
  addBtn.style.background = "darkblue";
  addBtn.style.color = "white";
  addBtn.style.border = "none";
  addBtn.style.borderRadius = "6px";
  addBtn.style.cursor = "pointer";
  
  card.appendChild(addBtn);

  card.addEventListener("mouseenter", () => {
    addBtn.style.display = "inline-block";
  });

  card.addEventListener("mouseleave", () => {
    addBtn.style.display = "none";
  });

  addBtn.addEventListener("click", () => {
    alert(`${card.querySelector("h3").textContent} added to your cart!`);
  });
});
