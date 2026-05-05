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
// FUNCTION: Display cart 
function showCart() { 
    // Make cart visible 
    document.getElementById("cart").style.display = "block"; 
    let cartItems = document.getElementById("cartItems"); 
    cartItems.innerHTML = ""; // clear old items 
    let total = 0;

    // Loop through cart items 
    cart.forEach(item => { 
        let p = document.createElement("p"); 
        
        // Display item 
        p.textContent = item.name + " - KSh " + item.price; 
        cartItems.appendChild(p); 
        total += item.price; 
    }); 
    
    // Display total 
    document.getElementById("total").textContent = "Total: KSh " + total; 
}