// Load cart from localStorage if it exists, otherwise start with an empty array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

  //  ADD ITEM TO CART
function addToCart(name, price) {
  // Add product as an object into the cart array
  cart.push({ name, price });

  // Save updated cart to localStorage so it stays even after refresh
  localStorage.setItem("cart", JSON.stringify(cart));

  // Refresh cart display
  showCart();
}


  //  DISPLAY CART ITEMS
function showCart() {
  // Get cart container (popup/section)
  const cartBox = document.getElementById("cart");

  // Make cart visible
  cartBox.classList.add("show");

  // Get where items will be displayed
  const cartItems = document.getElementById("cartItems");

  // Get total display element
  const totalDisplay = document.getElementById("total");

  // Clear previous items before re-rendering
  cartItems.innerHTML = "";

  // Variable to calculate total price
  let total = 0;

  // Loop through all items in cart
  cart.forEach((item, index) => {
    const p = document.createElement("p");

    // Display item name, price, and remove button
    p.innerHTML = `
      ${item.name} - KSh ${item.price}
      <button onclick="removeItem(${index})">Remove</button>
    `;

    // Add item to cart display
    cartItems.appendChild(p);

    // Add price to total
    total += item.price;
  });

  // Show total amount
  totalDisplay.textContent = "Total: KSh " + total;
}

  //  REMOVE ITEM FROM CART
function removeItem(index) {
  // Remove item from array using its index
  cart.splice(index, 1);

  // Update localStorage after removal
  localStorage.setItem("cart", JSON.stringify(cart));

  // Refresh cart display
  showCart();
}

  //  SHOW CHECKOUT SECTION
function showCheckout() {
  // Display checkout form
  document.getElementById("checkout").classList.add("show");
}

  //  M-PESA PAYMENT SIMULATION
function mpesaPayment(e) {
  // Prevent form from refreshing page
  e.preventDefault();

  // Get phone number input
  const phone = document.getElementById("phone").value;

  // Status message area
  const status = document.getElementById("mpesaStatus");

  // Validate phone number
  if (!phone || phone.length < 10) {
    status.textContent = "Enter a valid M-Pesa number";
    return;
  }

  // Step 1: simulate sending STK push
  status.textContent = "Sending STK Push...";

  setTimeout(() => {
    // Step 2: simulate user entering PIN
    status.textContent = "Enter PIN on your phone...";

    setTimeout(() => {
      // Step 3: payment success message
      status.textContent = "Payment Successful. Order placed";

      // Clear cart after successful payment
      cart = [];
      localStorage.removeItem("cart");

      // Close UI after short delay
      setTimeout(() => {
        document.getElementById("cart").classList.remove("show");
        document.getElementById("checkout").classList.remove("show");

        // Reset form and status
        status.textContent = "";
        document.getElementById("phone").value = "";

        // Refresh empty cart view
        showCart();
      }, 2000);
    }, 2000);
  }, 2000);
}

  //  CLOSE CART OR CHECKOUT WHEN CLICKING OUTSIDE
document.addEventListener("click", function (e) {
  const cartBox = document.getElementById("cart");
  const checkout = document.getElementById("checkout");

  // Close cart if click is outside cart box
  if (
    cartBox &&
    cartBox.classList.contains("show") &&
    !cartBox.contains(e.target)
  ) {
    cartBox.classList.remove("show");
  }

  // Close checkout if click is outside checkout box
  if (
    checkout &&
    checkout.classList.contains("show") &&
    !checkout.contains(e.target)
  ) {
    checkout.classList.remove("show");
  }
});
