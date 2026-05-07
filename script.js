// Retrieve cart from localStorage or start with empty array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add item to cart
function addToCart(name, price) {
  cart.push({ name, price });

  // Save updated cart
  localStorage.setItem("cart", JSON.stringify(cart));

  // Update cart display
  showCart();
}

// Display cart items and total
function showCart() {
  document.getElementById("cart").style.display = "block";

  let cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    let p = document.createElement("p");

    p.innerHTML = `
      ${item.name} - KSh ${item.price}
      <button onclick="removeItem(${index})">remove</button>
    `;

    cartItems.appendChild(p);
    total += item.price;
  });

  document.getElementById("total").textContent = "Total: KSh " + total;
}

// Show checkout section
function showCheckout() {
  document.getElementById("checkout").style.display = "block";
}

// Place order and clear cart
function placeOrder(event) {
  event.preventDefault();

  localStorage.setItem("orderPlaced", "true");

  alert("Order placed successfully will be delivered to your address!");

  cart = [];
  localStorage.removeItem("cart");

  showCart();
}

// Reset everything
function resetOrder() {
  cart = [];
  localStorage.removeItem("cart");

  location.reload();
}

// Remove single item from cart
function removeItem(index) {
  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  showCart();
}
