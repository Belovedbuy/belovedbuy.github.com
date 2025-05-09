# Contributing to BelovedBuy

Thank you for your interest in contributing to **BelovedBuy**! 🎉  
We welcome contributions that help enhance our platform, whether it's fixing bugs, adding new features, improving documentation, or suggesting ideas. Your contributions are what make this project better!

---

## 📜 Code of Conduct
Please read and adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to maintain a respectful and inclusive environment for everyone.

---

## 🛠️ How to Contribute

### 1. Reporting Issues
If you encounter a bug or have a feature request, please:
1. Go to the **Issues** tab in this repository.
2. Create a new issue and provide:
   - A clear and descriptive title.
   - Detailed steps to reproduce the issue (if applicable).
   - Any relevant screenshots, logs, or information.

### 2. Suggesting Enhancements
If you have an idea for improving the project:
1. Check the **Issues** tab to see if someone has already suggested it.
2. If not, create a new issue labeled `enhancement` and describe your idea clearly.

### 3. Making a Code Contribution
We welcome your code contributions! Follow the steps below to contribute effectively:

#### Fork the Repository
1. Click the **Fork** button at the top-right corner of this repository.
2. Clone your forked repository:
   ```bash
   git clone https://github.com/YourUsername/belovedbuy.github.io.git
   cd belovedbuy.github.io
   ```

#### Create a Branch
3. Create a new branch for your contribution:
   ```bash
   git checkout -b feature/your-feature-name
   ```

#### Make Your Changes
4. Add your changes locally:
   - For **HTML/CSS/JavaScript**: Ensure the code is clean, well-commented, and adheres to the existing style.
   - For **Firebase Firestore Rules**:
     - Ensure your changes are secure and follow best practices.
     - Avoid exposing sensitive data or leaving the database open unnecessarily.

5. Test your changes:
   - Use a local Firebase Emulator to test Firestore-related changes.
   - Use multiple devices and browsers to ensure responsive design and functionality.

6. Commit your changes with a meaningful commit message:
   ```bash
   git add .
   git commit -m "Add feature: your feature name or fix: description of the fix"
   ```

#### Push and Create a Pull Request
7. Push your branch to your forked repository:
   ```bash
   git push origin feature/your-feature-name
   ```

8. Open a Pull Request:
   - Go to the original repository.
   - Click **New Pull Request**.
   - Select your branch and provide a detailed description of your changes.

---

## 🧪 Testing Guidelines
Before submitting your changes, ensure you:
1. **Test Firebase Integration**:
   - Verify that Firestore reads and writes are secure and functioning correctly.
   - Test the `loadProducts()`, `saveProduct()`, and `deleteProduct()` functions to ensure they interact with Firestore as expected.
2. **Test Product Features**:
   - Verify that product rendering, search functionality, and the add/delete product forms work as intended.
   - Check the `searchBox` functionality for accurate search results.
3. **Test Responsiveness**:
   - Test the website on various devices (e.g., desktop, tablet, mobile) and browsers.
4. **Ensure Accessibility**:
   - Use semantic HTML and ensure the website is navigable using keyboard and screen readers.

---

## 📝 Style Guidelines
- Use consistent **indentation** (2 spaces for HTML, CSS, and JavaScript).
- Follow the existing **naming conventions** for classes, IDs, and functions.
- Write clear and meaningful **comments** for your code where necessary.
- Ensure CSS adheres to the current design language (e.g., color scheme, fonts).

---

## 🎯 What We're Looking For
Here are some ways you can contribute:
- Fixing bugs in the product listing, search, or Firebase integration.
- Adding new features (e.g., user reviews, product categories).
- Improving the UI/UX for better responsiveness and accessibility.
- Enhancing the Firebase Firestore rules for better security.
- Improving documentation (e.g., README, CONTRIBUTING, or inline code comments).

---

## 🛡️ Licensing
By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).

---

## 💬 Need Help?
If you have any questions or need help, feel free to:
- Open an issue labeled `question`.
- Email us at support@belovedbuy.com.

We appreciate your contributions and look forward to building **BelovedBuy** together! 🚀
