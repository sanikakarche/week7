🛒 E-Commerce Frontend Application (Capstone Project)
📌 Project Overview

This project is a React-based E-commerce Frontend Application developed as a capstone project.
It demonstrates modern frontend development concepts including component-based architecture, API integration, state management, and responsive UI design.

The application fetches products from an external API and allows users to browse products, view details, add items to the cart, and simulate a checkout process.

🎯 Project Objectives

Build a fully functional frontend application using React

Implement component-based architecture

Integrate an external API for product data

Implement shopping cart functionality

Simulate user authentication and checkout

Practice modern frontend development workflows

⚙️ Technologies Used
Technology	Purpose
React.js	Frontend framework
React Router	Navigation and routing
JavaScript (ES6+)	Application logic
HTML5	Structure
CSS3	Styling
FakeStoreAPI	Product data API
Local Storage	Persist cart data
📂 Project Folder Structure
src
│
App.js
index.js
│
components
│
├── Navbar
│   └── Navbar.js
│
├── ProductList
│   └── ProductList.js
│
├── ProductCard
│   └── ProductCard.js
│
├── Cart
│   └── Cart.js
│
└── Checkout
    └── Checkout.js
│
pages
│
├── Home.js
├── ProductDetail.js
├── CartPage.js
└── CheckoutPage.js
│
contexts
│
├── CartContext.js
└── AuthContext.js
│
hooks
│
└── useProducts.js
│
services
│
└── api.js
│
styles
🔗 API Integration

The application uses FakeStoreAPI to fetch product data.

API Endpoint:

https://fakestoreapi.com/products

Example API request:

const API = "https://fakestoreapi.com/products";

export async function getProducts(){
  const res = await fetch(API);
  return res.json();
}

This API provides:

Product title

Product price

Product image

Product description

Product rating

Product category

🧩 Application Features
🏪 Product Listing

Displays products fetched from the external API.

📄 Product Details

Allows users to view complete product information.

🛒 Shopping Cart

Users can add items to their cart.

💳 Checkout

Simulated checkout form for order placement.

🔍 Routing

Implemented using React Router for navigation between pages.

⚡ Dynamic Data Fetching

Products are loaded using custom React hooks and asynchronous API calls.

🧠 State Management

The project uses React Context API for global state management.

Example:

export const CartContext = createContext();

This allows components to access cart data globally.

💾 Local Storage

Local Storage is used to:

Store cart items

Persist user data between sessions

Example:

localStorage.setItem("cart", JSON.stringify(cartItems));
🚀 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/yourusername/ecommerce-frontend.git
2️⃣ Navigate to project folder
cd ecommerce-frontend
3️⃣ Install dependencies
npm install
4️⃣ Run the project
npm start

Application will run at:

http://localhost:3000
🖥️ Application Pages
Page	Description
Home	Displays product catalog
Product Detail	Shows detailed product info
Cart	Displays added products
Checkout	Simulated purchase form
⚡ Performance Optimization

The project includes:

Lazy loading images

Efficient API data fetching

Component-based architecture

Minimal re-rendering

🧪 Testing

Manual testing was performed to ensure:

Correct API data fetching

Navigation works properly

Cart functionality works correctly

Checkout form works properly

📸 Screenshots

Add screenshots of:

Home Page

Product Page

Cart Page

Checkout Page

Example folder:

screenshots/
home.png
cart.png
checkout.png
🌐 Deployment

The project can be deployed using:

Netlify

Vercel

GitHub Pages

Example deployment steps:

npm run build

Upload the build folder to hosting platform.

⚠️ Challenges Faced

Managing component communication

Handling asynchronous API requests

Implementing cart state management

Designing scalable project structure

📚 Learning Outcomes

Through this project, the following concepts were learned:

React component architecture

API integration

State management using Context API

React Router navigation

Local Storage usage

Frontend project deployment

👩‍💻 Author

Sanika Karche

Frontend Development Capstone Project
