/* Base Styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f8f9fa;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Header Styles */
header {
  background-color: #232f3e;
  color: white;
  padding: 30px 20px;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Main Content Styles */
main {
  margin-bottom: 50px;
}

/* Search Section */
.search-section {
  margin-bottom: 30px;
}

#searchBox {
  width: 100%;
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
}

#resultsList {
  margin-top: 10px;
  list-style: none;
}

#resultsList li {
  padding: 10px;
  background-color: white;
  margin-bottom: 5px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

#resultsList a {
  text-decoration: none;
  color: #333;
}

/* Management Section */
.management-section {
  text-align: center;
  margin-bottom: 30px;
}

.add-product-btn {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-product-btn:hover {
  background-color: #218838;
}

/* Password Modal */
.password-modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  justify-content: center;
  align-items: center;
}

.password-modal[style*="flex"] {
  display: flex !important;
}

.modal-content {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.modal-content h2 {
  margin-bottom: 20px;
  color: #333;
}

.modal-content input {
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
}

.modal-content button {
  width: 100%;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.modal-content button:hover {
  background-color: #0056b3;
}

/* Add Product Form */
.add-product-form {
  display: none;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.add-product-form h2 {
  margin-bottom: 20px;
  text-align: center;
}

.add-product-form input,
.add-product-form textarea,
.add-product-form select {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
}

.add-product-form .rich-editor[contenteditable="true"] {
  min-height: 150px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  background: #fff;
  margin-bottom: 15px;
  font-size: 16px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s;
}

.add-product-form .rich-editor[contenteditable="true"]:focus {
  border-color: #007bff;
}

.add-product-form button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 10px;
}

.add-product-form button:hover {
  background-color: #218838;
}

/* Edit Button */
.edit-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-right: 10px;
  margin-top: 10px;
}

.edit-btn:hover {
  background-color: #0056b3;
}

/* Product List */
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
}

/* Product Card */
.product-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.product-home-img {
  width: 100%;
  height: auto;
  display: block;
  max-height: 250px;
  object-fit: contain;
  background: #f8f9fa;
}

/* Product Info */
.product-info {
  padding: 20px;
}

.product-info h2 {
  margin-bottom: 10px;
  font-size: 20px;
}

.product-info p {
  margin-bottom: 10px;
}

.product-price {
  font-weight: bold;
  color: #333;
}

.product-rating {
  color: #ff9900;
}

.view-product-btn {
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 15px;
  transition: background-color 0.3s ease;
}

.view-product-btn:hover {
  background-color: #0056b3;
}

/* Delete Button (shown in admin mode) */
.delete-btn {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
}

.delete-btn:hover {
  background-color: #c82333;
}

/* Footer Styles */
footer {
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  margin-top: 40px;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .product-list {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}

@media (max-width: 480px) {
  .product-list {
    grid-template-columns: 1fr;
  }
}
