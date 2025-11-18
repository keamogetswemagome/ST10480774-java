 
    function validateOrder(event) {
      const form = document.querySelector("form");
      const mealCheckboxes = form.querySelectorAll('input[name="meal[]"]:checked');
      const drinkCheckboxes = form.querySelectorAll('input[name="drink[]"]:checked');
      
      
      if (mealCheckboxes.length === 0 && drinkCheckboxes.length === 0) {
        alert("Please select at least one meal or drink before submitting your order.");
        event.preventDefault(); 
        return false;
      }
 
      alert("Thank you for your order! Please patiently wait — your order is on its way.");
      return true; n
    }

    document.addEventListener("DOMContentLoaded", function() {
      const form = document.querySelector("form");
      form.addEventListener("submit", validateOrder);
    });