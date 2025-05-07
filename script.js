// Load products from backend
async function loadProducts() {
  try {
    const response = await fetch('/api/products');
    const products = await response.json();
    
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
  } catch (error) {
    console.error('Error loading products:', error);
  }
}

// Show password modal
function showPasswordModal() {
  document.getElementById('passwordModal').style.display = 'flex';
}

// Check password
async function checkPassword() {
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
async function addProduct() {
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

  try {
    const response = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        image,
        description,
        price,
        rating,
        content,
        link
      }),
    });

    if (response.ok) {
      // Reset form and hide it
      document.getElementById('productForm').reset();
      document.getElementById('productForm').style.display = 'none';

      // Reload products to show the new product
      loadProducts();
    } else {
      console.error('Error adding product:', await response.text());
    }
  } catch (error) {
    console.error('Error adding product:', error);
  }
}

// Delete a product
async function deleteProduct(id) {
  if (confirm('Are you sure you want to delete this product?')) {
    try {
      const response = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Reload products to update the display
        loadProducts();
      } else {
        console.error('Error deleting product:', await response.text());
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  }
}

// Advanced search functionality
document.getElementById('searchBox').addEventListener('input', async function(e) {
  const searchTerm = e.target.value.toLowerCase();
  
  if (!searchTerm) {
    document.getElementById('resultsList').innerHTML = '';
    return;
  }

  try {
    const response = await fetch('/api/search?q=' + encodeURIComponent(searchTerm));
    const results = await response.json();

    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';

    if (results.length > 0) {
      results.forEach(result => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="product.html?id=${result.id}">${result.title}</a>`;
        resultsList.appendChild(li);
      });
    } else {
      resultsList.innerHTML = '<li>No results found</li>';
    }
  } catch (error) {
    console.error('Error searching products:', error);
  }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  loadProducts();
  
  // Check if authorized and show form and delete buttons
  if (sessionStorage.getItem('authorized') === 'true') {
    document.getElementById('productForm').style.display = 'block';
  }
});
