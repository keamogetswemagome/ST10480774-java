// 🥘 Display a welcome message for visitors
window.addEventListener("load", () => {
  const welcomeMsg = document.createElement("div");
  welcomeMsg.textContent = "Welcome to Sasko's Kitchen Menu!";
  welcomeMsg.style.position = "fixed";
  welcomeMsg.style.top = "20px";
  welcomeMsg.style.right = "20px";
  welcomeMsg.style.background = "darkblue";
  welcomeMsg.style.color = "white";
  welcomeMsg.style.padding = "10px 15px";
  welcomeMsg.style.borderRadius = "8px";
  welcomeMsg.style.boxShadow = "0 2px 8px #000000";
  welcomeMsg.style.zIndex = "1000";
  document.body.appendChild(welcomeMsg);

  setTimeout(() => {
    welcomeMsg.remove();
  }, 4000);
});

// Add "Add to Cart" buttons dynamically
const menuCards = document.querySelectorAll(".menu-card, .drinks-card");
const header = document.querySelector("header");

const cartCounter = document.createElement("div");
cartCounter.textContent = " Cart: 0";
cartCounter.style.position = "absolute";
cartCounter.style.top = "20px";
cartCounter.style.right = "30px";
cartCounter.style.background = "white";
cartCounter.style.color = "darkblue";
cartCounter.style.padding = "6px 12px";
cartCounter.style.borderRadius = "20px";
cartCounter.style.fontWeight = "bold";
cartCounter.style.boxShadow = "0 2px 6px #000000";
header.style.position = "relative";
header.appendChild(cartCounter);

let cartCount = 0;

menuCards.forEach(card => {
  // Add 'Add to Cart' button
  const addBtn = document.createElement("button");
  addBtn.textContent = "Add to Cart ";
  addBtn.style.marginTop = "8px";
  addBtn.style.background = "darkblue";
  addBtn.style.color = "white";
  addBtn.style.padding = "8px 15px";
  addBtn.style.border = "none";
  addBtn.style.borderRadius = "6px";
  addBtn.style.cursor = "pointer";
  addBtn.style.transition = "transform 0.2s";

  addBtn.addEventListener("mouseenter", () => {
    addBtn.style.transform = "scale(1.05)";
  });

  addBtn.addEventListener("mouseleave", () => {
    addBtn.style.transform = "scale(1)";
  });

  addBtn.addEventListener("click", () => {
    cartCount++;
    cartCounter.textContent = `Cart: ${cartCount}`;
    
    // Pop-up confirmation
    const pop = document.createElement("div");
    pop.textContent = `${card.querySelector("h3")?.textContent || "Item"} added to cart!`;
    pop.style.position = "fixed";
    pop.style.bottom = "30px";
    pop.style.right = "30px";
    pop.style.background = "green";
    pop.style.color = "white";
    pop.style.padding = "12px 20px";
    pop.style.borderRadius = "8px";
    pop.style.boxShadow = "0 2px 8px #000000";
    pop.style.zIndex = "1000";
    document.body.appendChild(pop);

    setTimeout(() => pop.remove(), 2500);
  });

 

  // Add buttons to each card
  card.appendChild(addBtn);
  card.appendChild(like);
});

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});
