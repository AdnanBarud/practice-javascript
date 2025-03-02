// Enhanced Product Data
const products = [
    { id: 1, name: 'Echo Dot (4th Gen)', price: 49.99, category: 'Electronics', image: 'https://m.media-amazon.com/images/I/71Q9d6N7xkL._AC_SX679_.jpg' },
    { id: 2, name: 'Kindle Paperwhite', price: 139.99, category: 'Electronics', image: 'https://m.media-amazon.com/images/I/61X96oqivAL._AC_SX679_.jpg' },
    { id: 3, name: 'Instant Pot Duo', price: 99.95, category: 'Home', image: 'https://m.media-amazon.com/images/I/61lJ3xlQX1L._AC_SX679_.jpg' },
    { id: 4, name: 'Apple AirPods Pro', price: 249.00, category: 'Electronics', image: 'https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SX679_.jpg' },
    { id: 5, name: 'Ninja Foodi Grill', price: 229.99, category: 'Home', image: 'https://m.media-amazon.com/images/I/71yMGH+6uXL._AC_SX679_.jpg' },
    { id: 6, name: 'JBL Flip 5 Speaker', price: 119.95, category: 'Electronics', image: 'https://m.media-amazon.com/images/I/61W5Zz3+5lL._AC_SX679_.jpg' },
    { id: 7, name: 'Logitech MX Master 3', price: 99.99, category: 'Electronics', image: 'https://m.media-amazon.com/images/I/61mlC-dL30L._AC_SX679_.jpg' },
    { id: 8, name: 'YETI Rambler Bottle', price: 39.99, category: 'Home', image: 'https://m.media-amazon.com/images/I/61D6F7jDlxL._AC_SX679_.jpg' }
];

// App State
let currentLocation = localStorage.getItem('location') || 'Pakistan';
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let orders = JSON.parse(localStorage.getItem('orders')) || [];

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    updateLocationDisplay();
    renderProducts();
    renderCart();
    renderOrders();
    showHome();
});

// Navigation Functions
function showHome() {
    hideAllSections();
    document.getElementById('productsGrid').style.display = 'grid';
}

function showOrders() {
    hideAllSections();
    document.getElementById('ordersSection').classList.add('active');
}

function showCart() {
    hideAllSections();
    document.getElementById('cartSection').classList.add('active');
}

function hideAllSections() {
    document.getElementById('productsGrid').style.display = 'none';
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
}

// Product Rendering
function renderProducts(filteredProducts = products) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <div class="product-details">
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <div class="product-buttons">
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                    <button class="view-details" onclick="showProductDetails(${product.id})">
                        <i class="fas fa-info-circle"></i> Details
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Product Details Modal
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    const modalContent = document.getElementById('productModalContent');
    
    modalContent.innerHTML = `
        <div class="product-modal">
            <img src="${product.image}" alt="${product.name}" style="max-height: 300px">
            <h2>${product.name}</h2>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <div class="product-description">
                <h3>Product Details</h3>
                <p>Category: ${product.category}</p>
                ${product.description ? `<p>${product.description}</p>` : ''}
            </div>
            <button class="add-to-cart" onclick="addToCart(${product.id}); closeModal()">
                <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
        </div>
    `;
    
    document.getElementById('productModal').style.display = 'block';
}

// Cart Functions
