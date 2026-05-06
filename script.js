// Get cart from storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD ITEM
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
}

// SHOW CART
function showCart() {
  let cartBox = document.getElementById("cart");
  cartBox.classList.add("show");

  let cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    let p = document.createElement("p");

    p.innerHTML = `
      ${item.name} - KSh ${item.price}
      <button onclick="removeItem(${index})">❌</button>
    `;

    cartItems.appendChild(p);
    total += item.price;
  });

  document.getElementById("total").textContent = "Total: KSh " + total;
}

// REMOVE ITEM
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
}

// CHECKOUT
function showCheckout() {
  document.getElementById("checkout").classList.add("show");
}

// PLACE ORDER
function placeOrder(e) {
  e.preventDefault();
  alert("Order placed!");
  cart = [];
  localStorage.removeItem("cart");
}

// CLICK OUTSIDE TO CLOSE
document.addEventListener("click", function(e) {
  let cartBox = document.getElementById("cart");
  let checkout = document.getElementById("checkout");

  if (cartBox && cartBox.classList.contains("show") && !cartBox.contains(e.target)) {
    cartBox.classList.remove("show");
  }

  if (checkout && checkout.classList.contains("show") && !checkout.contains(e.target)) {
    checkout.classList.remove("show");
  }
});