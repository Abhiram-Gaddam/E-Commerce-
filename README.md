# 🛒 E-Commerce Website

An elegant and responsive e-commerce website built with React.js, Tailwind CSS, and React Router DOM. Users can browse products, add them to their cart, and proceed to checkout.

## 🚀 Features

- **Product Listing** - Displays available products with images, descriptions, and prices.
- **Add to Cart** - Users can add products to their cart with quantity selection.
- **Remove & Update Cart** - Modify item quantities or remove items from the cart.
- **Cart Summary** - Shows total price and individual item costs.
- **Checkout Process** - Simple checkout functionality with cart clearance after purchase.
- **Toast Notifications** - Feedback for user actions using `react-toastify`.

## 📌 Tech Stack

- **Frontend:** React.js, Tailwind CSS, React Router DOM
- **State Management:** React Context API
- **Notifications:** React Toastify
- **Deployment:** Netlify (optional)

## 🛠 Installation & Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Abhiram-Gaddam/e-commerce-react.git
   cd e-commerce-react
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Development Server**

   ```bash
   npm start
   ```

   The project will run on `http://localhost:3000/`.

## 🏗 Project Structure

```
📂 e-commerce-react
 ├── 📂 src
 │   ├── 📂 components
 │   │   ├── Navbar.js
 │   │   ├── Cart.js
 │   │   ├── CartContext.js
 │   │   ├── ProductList.js
 │   ├── 📂 images
 │   ├── App.js
 │   ├── index.js
 ├── 📄 package.json
 ├── 📄 README.md
```

## 🔥 Usage

- Browse available products on the home page.
- Click "Add to Cart" to add items.
- Visit the cart page (`/cart`) to view or modify cart contents.
- Click "Proceed to Checkout" to simulate a purchase.

## 🌍 Deployment


To deploy on **Netlify**:

```bash
npm install -g netlify-cli
netlify deploy
```

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository, open issues, or submit PRs.

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

