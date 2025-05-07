// Load products from localStorage
function loadProducts() {
  const products = JSON.parse(localStorage.getItem('products') || '[]');
  
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.id = product.id;
    
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <div class="product-info">
        <h2>${product.title}</h2>
        <p>Price: <strong>${product.price}</strong></p>
        <p>Rating: ⭐ ${product.rating}</p>
        <p>${product.description}</p>
        <a href="${product.link}" class="view-product" target="_blank">View Product</a>
        <button class="delete-btn" onclick="attemptDelete('${product.id}')">Delete Product</button>
      </div>
    `;
    
    document.getElementById('productList').appendChild(productCard);
  });
  
  // Check if authorized and show delete buttons
  if (sessionStorage.getItem('authorized') === 'true') {
    document.querySelectorAll('.delete-btn').forEach(button => {
      button.style.display = 'flex';
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
    
    // Show delete buttons for all existing products
    document.querySelectorAll('.delete-btn').forEach(button => {
      button.style.display = 'flex';
    });
    
    // Show the add product form
    document.getElementById('productForm').style.display = 'block';
  } else {
    alert('Incorrect password!');
  }
}

// Add a new product
function addProduct() {
  const t = document.getElementById('productTitle').value.trim(),
        i = document.getElementById('productImage').value.trim(),
        d = document.getElementById('productDescription').value.trim(),
        pr = document.getElementById('productPrice').value.trim(),
        rt = document.getElementById('productRating').value.trim(),
        l = document.getElementById('productLink').value.trim(),
        exp = document.getElementById('productExplanation').value.trim();
  
  if (!t || !i || !d || !pr || !rt || !l || !exp) {
    return alert('Please fill in all fields!');
  }
  
  const id = 'prod_' + Date.now();
  
  // Create new product card
  const productCard = document.createElement('div');
  productCard.className = 'product-card';
  productCard.id = id;
  
  productCard.innerHTML = `
    <img src="${i}" alt="${t}">
    <div class="product-info">
      <h2>${t}</h2>
      <p>Price: <strong>${pr}</strong></p>
      <p>Rating: ⭐ ${rt}</p>
      <p>${d}</p>
      <a href="${l}" class="view-product" target="_blank">View Product</a>
      <button class="delete-btn" onclick="attemptDelete('${id}')">Delete Product</button>
    </div>
  `;
  
  document.getElementById('productList').appendChild(productCard);
  
  // Show delete button for the new product
  productCard.querySelector('.delete-btn').style.display = 'flex';
  
  // Add product to localStorage
  const products = JSON.parse(localStorage.getItem('products') || '[]');
  products.push({
    id: id,
    title: t,
    image: i,
    description: d,
    price: pr,
    rating: rt,
    link: l
  });
  localStorage.setItem('products', JSON.stringify(products));
  
  // Reset the form
  document.getElementById('productForm').reset();
}

// Attempt to delete a product
function attemptDelete(id) {
  const password = prompt('Enter password to delete:');
  if (password === '20071961Bc@') {
    // Remove product from DOM
    document.getElementById(id).remove();
    
    // Remove product from localStorage
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const updatedProducts = products.filter(product => product.id !== id);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  } else {
    alert('Incorrect password!');
  }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  loadProducts();
});

// Advanced search functionality
document.getElementById('searchBox').addEventListener('input', function(e) {
  const searchTerm = e.target.value.toLowerCase();
  const products = JSON.parse(localStorage.getItem('products') || '[]');
  const fuse = new Fuse(products, {
    keys: ['title', 'description'],
    threshold: 0.3
  });
  const results = fuse.search(searchTerm);
  
  const resultsList = document.getElementById('resultsList');
  resultsList.innerHTML = '';
  
  if (results.length > 0) {
    results.forEach(result => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${result.item.link}">${result.item.title}</a>`;
      resultsList.appendChild(li);
    });
  } else {
    resultsList.innerHTML = '<li>No results found</li>';
  }
});
