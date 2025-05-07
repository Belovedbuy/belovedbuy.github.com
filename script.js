// Load products from localStorage
function loadProducts() {
  const products = JSON.parse(localStorage.getItem('products') || '[]');
  
  const productList = document.getElementById('productList');
  productList.innerHTML = '';

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.dataset.id = product.id;
    
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <div class="product-info">
        <h2>${product.title}</h2>
        <p class="product-rating">Rating: ${product.rating} ⭐</p>
        <p class="product-price">Price: ${product.price}</p>
        <p class="product-description">${product.description}</p>
        <a href="product.html?id=${product.id}" class="view-product-btn" target="_blank">View Product</a>
      </div>
      <button class="delete-btn" onclick="deleteProduct('${product.id}')">Delete</button>
    `;
    
    productList.appendChild(productCard);
  });

  // Show delete buttons if authorized
  if (sessionStorage.getItem('authorized') === 'true') {
    document.querySelectorAll('.delete-btn').forEach(button => {
      button.style.display = 'block';
    });
    
    document.getElementById('productForm').style.display = 'block';
  }
}

// Show password modal
function showPasswordModal() {
  document.getElementById('passwordModal').style.display = 'flex';
}

// Check password
function checkPassword() {
  const password = document.getElementById('passwordInput').value;
  if (password === '20071961Bc@') {
    sessionStorage.setItem('authorized', 'true');
    document.getElementById('passwordModal').style.display = 'none';
    
    // Show delete buttons and add product form
    document.querySelectorAll('.delete-btn').forEach(button => {
      button.style.display = 'block';
    });
    document.getElementById('productForm').style.display = 'block';
    
    // Reload products to show delete buttons
    loadProducts();
  } else {
    alert('Incorrect password!');
  }
}

// Add a new product
function addProduct() {
  const id = 'prod_' + Date.now();
  const title = document.getElementById('productTitle').value.trim();
  const image = document.getElementById('productImage').value.trim();
  const description = document.getElementById('productDescription').value.trim();
  const price = document.getElementById('productPrice').value.trim();
  const rating = document.getElementById('productRating').value.trim();
  const content = document.getElementById('productContent').value.trim();
  const link = document.getElementById('productLink').value.trim();

  if (!title || !image || !description || !price || !rating || !content || !link) {
    return alert('Please fill in all fields!');
  }

  // Save product to localStorage
  const product = {
    id,
    title,
    image,
    description,
    price,
    rating,
    content,
    link
  };

  const products = JSON.parse(localStorage.getItem('products') || '[]');
  products.push(product);
  localStorage.setItem('products', JSON.stringify(products));

  // Reset form and hide it
  document.getElementById('productForm').reset();
  document.getElementById('productForm').style.display = 'none';

  // Reload products to show the new product
  loadProducts();

  // Create product detail page dynamically
  createProductPage(product);
}

// Delete a product
function deleteProduct(id) {
  if (confirm('Are you sure you want to delete this product?')) {
    // Remove product from localStorage
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const updatedProducts = products.filter(product => product.id !== id);
    localStorage.setItem('products', JSON.stringify(updatedProducts));

    // Reload products to update the display
    loadProducts();

    // Delete product detail page if it exists
    const productPage = window.open(`product.html?id=${id}`, '_blank');
    if (productPage) {
      productPage.close();
    }
  }
}

// Create product detail page
function createProductPage(product) {
  const blob = new Blob([`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="${product.title} review. Get detailed information and buy from Amazon.">
      <meta name="keywords" content="${product.title}, product review, buy ${product.title}, ${product.title} price">
      <meta name="author" content="BelovedBuy">
      <title>${product.title} Review – BelovedBuy</title>
      <style>
        body {
          font-family: 'Segoe UI', Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        header {
          background-color: #232f3e;
          color: white;
          padding: 20px;
          text-align: center;
          border-radius: 10px;
          margin-bottom: 30px;
        }
        .product-container {
          background-color: white;
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        .product-container img {
          width: 100%;
          max-height: 500px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 20px;
        }
        .product-info h1 {
          margin-bottom: 20px;
        }
        .product-meta {
          margin-bottom: 20px;
        }
        .product-meta p {
          margin-bottom: 10px;
        }
        .buy-button {
          display: inline-block;
          background-color: #ff9900;
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          margin-top: 20px;
          transition: background-color 0.3s ease;
        }
        .buy-button:hover {
          background-color: #e68a00;
        }
        .back-button {
          display: inline-block;
          margin-top: 30px;
        }
        .back-button a {
          color: #333;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>${product.title} Review</h1>
      </header>
      <main class="product-container">
        <img src="${product.image}" alt="${product.title}">
        <div class="product-info">
          <h1>${product.title}</h1>
          <div class="product-meta">
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Rating:</strong> ${product.rating} ⭐</p>
          </div>
          <div class="product-content">
            ${product.content}
          </div>
          <a href="${product.link}" class="buy-button" target="_blank">Buy on Amazon</a>
        </div>
      </main>
      <div class="back-button">
        <a href="index.html">← Back to Home</a>
      </div>
    </body>
    </html>
  `], { type: 'text/html' });

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.do
