const addItem = document.getElementsByClassName(action-button)
// const cart = document.getElementsByClassName(cart)

document.createElement('li')


    // Sample products
    const products = [
      { id: 1, name: 'Wireless Headphones', price: 89.99 },
      { id: 2, name: 'Bluetooth Speaker', price: 45.50 },
      { id: 3, name: 'Smart Watch', price: 120.00 },
      { id: 4, name: 'Portable Charger', price: 29.95 },
      { id: 5, name: 'Tablet Stand', price: 15.00 }
    ];
    const productListEl = document.getElementById('product-list');
    const cartListEl = document.getElementById('cart-list');
    const cartTotalEl = document.getElementById('cart-total');

     let cart = {};
    function formatPrice(num) {
      return `$${num.toFixed(2)}`;
    }
    // Render products listing
    function renderProducts() {
      productListEl.innerHTML = '';
      products.forEach(product => {
        const li = document.createElement('li');
        li.className = 'product';
        li.innerHTML = `
          <span class="name">${product.name}</span>
          <span class="price">${formatPrice(product.price)}</span>
          <button class="add-btn" data-id="${product.id}">Add to Cart</button>
        `;
        productListEl.appendChild(li);
      });
    }
    // Render cart items
    function renderCart() {
      cartListEl.innerHTML = '';
      let total = 0;
      for (const productId in cart) {
        if (cart.hasOwnProperty(productId)) {
          const item = cart[productId];
          const subtotal = item.price * item.quantity;
          total += subtotal;
          const li = document.createElement('li');
          li.className = 'cart-item';
          li.innerHTML = `
            <span class="item-name">${item.name}</span>
            <span class="item-qty">x${item.quantity}</span>
            <span class="item-price">${formatPrice(subtotal)}</span>
          `;
          cartListEl.appendChild(li);
        }
      }
      cartTotalEl.textContent = `Total: ${formatPrice(total)}`;
    }

        // Add item to cart
    function addToCart(productId) {
      const product = products.find(p => p.id === productId);
      if (!product) return;
      if (cart[productId]) {
        cart[productId].quantity++;
      } else {
        cart[productId] = {...product, quantity: 1};
      }
      renderCart();
    }
    // Event delegation for add buttons
    productListEl.addEventListener('click', e => {
      if (e.target.classList.contains('add-btn')) {
        const id = parseInt(e.target.getAttribute('data-id'));
        addToCart(id);
      }
    });
    renderProducts();
    renderCart();
