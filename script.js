let cartCount = 0;

function addToCart(price) {
    cartCount++;
    document.getElementById("cartCount").innerText = cartCount;
    alert("Product added to cart! Total: ₹" + (cartCount * price));
}