// Initialize Firebase (replace with your Firebase configuration)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Check if the user is authorized
let isAuthorized = sessionStorage.getItem("authorized") === "true";

// Load products from Firebase Firestore
async function loadProducts() {
  try {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    const querySnapshot = await db.collection("products").get();
    querySnapshot.forEach((doc) => {
      const product = doc.data();
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.dataset.id = doc.id;

      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <div class="product-info">
          <h2>${product.title}</h2>
          <p class="product-rating">Rating: ${product.rating} ⭐</p>
          <p class="product-price">Price: ${product.price}</p>
          <p class="product-description">${product.description}</p>
          <a href="product.html?id=${doc.id}" class="view-product-btn" target="_blank">View Product</a>
        </div>
        ${isAuthorized ? `<button class="delete-btn" onclick="deleteProduct('${doc.id}')">Delete</button>` : ""}
      `;

      productList.appendChild(productCard);
    });

    // Show delete buttons if authorized
    if (isAuthorized) {
      document.querySelectorAll(".delete-btn").forEach((button) => {
        button.style.display = "block";
      });
      document.getElementById("productForm").style.display = "block";
    }
  } catch (error) {
    console.error("Error loading products:", error);
  }
}

// Show password modal
function showPasswordModal() {
  document.getElementById("passwordModal").style.display = "flex";
}

// Check password
async function checkPassword() {
  const password = document.getElementById("passwordInput").value;
  if (password === "20071961Bc@") {
    isAuthorized = true;
    sessionStorage.setItem("authorized", "true");
    document.getElementById("passwordModal").style.display = "none";

    // Show delete buttons and add product form
    document.querySelectorAll(".delete-btn").forEach((button) => {
      button.style.display = "block";
    });
    document.getElementById("productForm").style.display = "block";

    // Reload products to show delete buttons
    loadProducts();
  } else {
    alert("Incorrect password!");
  }
}

// Add a new product
async function addProduct() {
  const title = document.getElementById("productTitle").value.trim();
  const image = document.getElementById("productImage").value.trim();
  const description = document.getElementById("productDescription").value.trim();
  const price = document.getElementById("productPrice").value.trim();
  const rating = document.getElementById("productRating").value.trim();
  const content = document.getElementById("productContent").value.trim();
  const link = document.getElementById("productLink").value.trim();

  if (!title || !image || !description || !price || !rating || !content || !link) {
    return alert("Please fill in all fields!");
  }

  try {
    await db.collection("products").add({
      title,
      image,
      description,
      price,
      rating,
      content,
      link,
    });

    // Reset form and hide it
    document.getElementById("productForm").reset();
    document.getElementById("productForm").style.display = "none";

    // Reload products to show the new product
    loadProducts();
  } catch (error) {
    console.error("Error adding product:", error);
  }
}

// Delete a product
async function deleteProduct(id) {
  if (confirm("Are you sure you want to delete this product?")) {
    try {
      await db.collection("products").doc(id).delete();

      // Reload products to update the display
      loadProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }
}

// Advanced search functionality
document.getElementById("searchBox").addEventListener("input", async function (e) {
  const searchTerm = e.target.value.toLowerCase();

  if (!searchTerm) {
    document.getElementById("resultsList").innerHTML = "";
    return;
  }

  try {
    const products = [];
    const titleQuery = await db
      .collection("products")
      .where("title", ">=", searchTerm)
      .where("title", "<=", searchTerm + "\uf8ff")
      .get();
    titleQuery.forEach((doc) => products.push({ id: doc.id, ...doc.data() }));

    const descriptionQuery = await db
      .collection("products")
      .where("description", ">=", searchTerm)
      .where("description", "<=", searchTerm + "\uf8ff")
      .get();
    descriptionQuery.forEach((doc) => {
      if (!products.some((p) => p.id === doc.id)) {
        products.push({ id: doc.id, ...doc.data() });
      }
    });

    const resultsList = document.getElementById("resultsList");
    resultsList.innerHTML = "";

    if (products.length > 0) {
      products.forEach((product) => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="product.html?id=${product.id}">${product.title}</a>`;
        resultsList.appendChild(li);
      });
    } else {
      resultsList.innerHTML = "<li>No results found</li>";
    }
  } catch (error) {
    console.error("Error searching products:", error);
  }
});

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  loadProducts();

  // Check if authorized and show form and delete buttons
  if (isAuthorized) {
    document.getElementById("productForm").style.display = "block";
  }
});
