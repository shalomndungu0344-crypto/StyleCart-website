// Retrieve cart from localStorage OR create empty array 
let cart = JSON.parse(localStorage.getItem("cart")) || []; 

// FUNCTION: Add item to cart 
function addToCart(name, price) { 
    // Add item as object 
  cart.push({ name, price });

  // Save updated cart 
  localStorage.setItem("cart", JSON.stringify(cart)); 
  
  // Show updated cart 
  showCart(); 
}
