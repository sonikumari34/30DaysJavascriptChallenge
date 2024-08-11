// Async function to fetch and display products
async function loadProducts() {
    try {
        const response = await fetch('file.json'); // Fetch the JSON file
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json(); // Parse the JSON

        const productGrid = document.getElementById('product-grid');
        productGrid.innerHTML = ''; // Clear any existing content

        data.forEach(product => {
            // Create a product card
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img   src="${product.imageUrl}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="price">$${product.price.toFixed(2)}</div>
                <button data-id="${product.id}" class="add-to-cart-btn">Add to Cart</button>
            `;
            productGrid.appendChild(productCard);
        });

        // Add event listeners to "Add to Cart" buttons
        const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', addToCart);
        });


        document.querySelectorAll('.decrease-btn').forEach(button => {
            button.addEventListener('click', () => {
                decreaseQuantity(button.getAttribute('data-id'));
            });
        });

          // Attach event listeners to increase, decrease, and remove buttons
          document.querySelectorAll('.increase-btn').forEach(button => {
            button.addEventListener('click', () => {
                increaseQuantity(button.getAttribute('data-id'));
            });
        });

    
        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', () => {
                removeItem(button.getAttribute('data-id'));
            });
        });

    } catch (error) {
        console.error('Error loading products:', error);
    }
}

// Add product to cart
function addToCart(event) {
    const button = event.target;
    const productId = button.getAttribute('data-id');
    const productCard = button.parentElement;
    const productName = productCard.querySelector('h3').textContent;
    const productPrice = parseFloat(productCard.querySelector('.price').textContent.replace('$', ''));
    const productImage = productCard.querySelector('img').src; // Correctly get the image URL

    //console.log("iamge is present:",productCard.querySelector('img').src);
    
    // Create product object
    const product = {
        id: productId,
        name: productName,
        price: productPrice,
        imageUrl: productImage // Store image URL
    };

    // Get cart from local storage or initialize empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    console.log('Cart contents:', cart);

    // Check if product already in cart





    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex > -1) {
        cart[productIndex].quantity += 1; // Increment quantity
    } else {
        product.quantity = 1; // Add new product to cart
        cart.push(product);
    }  

    // Save cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart quantity in header
    updateCartQuantity();
}


 // Event delegation for cart controls
 document.addEventListener('click', (event) => {
    if (event.target.matches('.increase-btn')) {
        increaseQuantity(event.target.getAttribute('data-id'));
    } else if (event.target.matches('.decrease-btn')) {
        decreaseQuantity(event.target.getAttribute('data-id'));
    } else if (event.target.matches('.remove-btn')) {
        removeItem(event.target.getAttribute('data-id'));
    }
});



function decreaseQuantity(productId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex !== -1) {
        cart[productIndex].quantity--;
        if (cart[productIndex].quantity <= 0) {
            cart.splice(productIndex, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartQuantity();
        showCart(); // Refresh cart display
    }
}

function increaseQuantity(productId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = cart.find(item => item.id === productId);
    if (product) {
        product.quantity++;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartQuantity();
        showCart(); // Refresh cart display
    }
}

function removeItem(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartQuantity();
    showCart(); // Refresh cart display
}


// Update cart quantity in header
function updateCartQuantity() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.shopping .quantity').textContent = totalQuantity;
}

// Show cart overlay
function showCart() {
    const cartOverlay = document.getElementById('cart-content');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Get cart from local storage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log("cart content",cart);

    // Clear existing items
    cartItems.innerHTML = '';

    // Add items to cart overlay
    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
           
          <img src="${item.imageUrl}" alt="${item.name}">
          
           
            <div>

              
               
                <h3>${item.name}</h3>
                <p>Price: $${item.price.toFixed(2)}</p>
                <p>Quantity: ${item.quantity}</p>
            </div>


              <div class="cart-item-controls">
                        <button class="increase-btn cart-btn" data-id="${item.id}">+</button>
                        <button class="decrease-btn cart-btn" data-id="${item.id}">-</button>
                        <button class="remove-btn cart-btn" data-id="${item.id}">Remove</button>
                    </div>
                    <p class="cart-item-description" style="display: none;">${item.description}</
        `;
        cartItems.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    // Update total price
    cartTotal.textContent = total.toFixed(2);

    // Show the cart overlay
    cartOverlay.style.display = 'flex';
}

// Close cart overlay
function closeCart() {
    const cartOverlay = document.getElementById('cart-content');
    cartOverlay.style.display = 'none';
   
}




// Set up event listeners
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    updateCartQuantity();

    // Show cart when cart icon is clicked
    document.querySelector('.shopping').addEventListener('click', showCart);

    // Close cart overlay when close button is clicked
    document.querySelector('.closeShooping').addEventListener('click', closeCart);
});



$(document).ready(function(){
    $('.hero-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        fade: true,
        speed: 1000
    });
});



/* *****************************************#####*8 */





/*
// Function to load and show the checkout form as a modal
async function loadCheckoutForm() {
    try {
        const response = await fetch('form.html');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.text();
        const formContainer = document.createElement('div');
        formContainer.innerHTML = data;
        document.body.appendChild(formContainer);

        console.log('Form HTML:', data); // Check if form HTML is correctly fetched
       

        const checkoutForm = document.getElementById('checkout-form');
        console.log('Checkout Form:', checkoutForm); 
        if (checkoutForm) {
            checkoutForm.style.display = 'block'; 
            
            
            // Show the form
        }



        // Populate cart items in the form
        populateCartSummary();

        // Add event listener to close button
        document.getElementById('close-checkout-form').addEventListener('click', () => {
            checkoutForm.style.display = 'none';
        });

        // Handle form submission
        const form = document.getElementById('checkout-form-body');
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            // Gather form data
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const address = formData.get('address');
            const payment = formData.get('payment');

            // Hide the checkout form
            checkoutForm.style.display = 'none';

            // Show order details
            displayOrderDetails(name, email, address, payment);
        });
    } catch (error) {
        console.error('Error loading form:', error);
    }
}




// Populate cart summary in the checkout form
function populateCartSummary() {
    const cartSummary = document.getElementById('cart-summary');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let html = '<h3>Your Cart</h3><ul>';
    let total = 0;

    cart.forEach(item => {

        const li= document.createElement('li');
        li.innerHTML=`
      
                <img src="${item.imageUrl}" alt="${item.name}" style="width: 50px; height: 50px;">
                <div>
                    <h4>${item.name}</h4>
                    <p>Price: $${item.price.toFixed(2)}</p>
                    <p>Quantity: ${item.quantity}</p>
                </div>
            <
        `;
        total += item.price * item.quantity;
    });

    li += <li><strong>Total: $${total.toFixed(2)}</strong></li>;
    cartSummary.appendChild(li);
}

// Display order details
function displayOrderDetails(name, email, address, payment) {
    const orderDetails = document.getElementById('order-details');
    const orderContent = document.getElementById('order-content');
    if (orderDetails && orderContent) {
        orderDetails.style.display = 'block';
        orderContent.innerHTML = `
            <h3>Thank you for your order, ${name}!</h3>
            <p>We will send confirmation to ${email}.</p>
            <p>Your order will be delivered to ${address}.</p>
            <p>Payment Method: ${payment}</p>
        `;
    }
}
/*
// Event listeners for showing and closing cart
/*document.getElementById('show-cart-btn').addEventListener('click', showCart);
document.getElementById('close-cart-btn').addEventListener('click', closeCart); */
 /*document.getElementById('checkoutbtn').addEventListener('click', loadCheckoutForm);

// Initial load of products
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    updateCartQuantity();
});   */
 