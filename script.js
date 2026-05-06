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
  cart.forEach((item, index) => {
    let p = document.createElement("p");

    p.innerHTML = `
        ${item.name} - KSh ${item.price}
        <button onclick="removeItem(${index})">remove</button>
    `;

    cartItems.appendChild(p);
    total += item.price;
  });

  // Display total
  document.getElementById("total").textContent = "Total: KSh " + total;
}

// FUNCTION: Show checkout
function showCheckout() {
  document.getElementById("checkout").style.display = "block";
}

// FUNCTION: Handle form submission
function placeOrder(event) {
  event.preventDefault(); // stop reload
  localStorage.setItem("orderPlaced", "true");
  alert("Order placed successfully will be delivered to your address!");

// FUNCTION: reset button
function resetOrder() {
  cart = [];
  localStorage.removeItem("cart");
  location.reload();
}
  // Clear cart
  localStorage.removeItem("cart");
}
// REMOVE ITEM FUNCTION
function removeItem(index) {
  cart.splice(index, 1); // remove item
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart(); // refresh display
}
