import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Components/Hero';
import Cart from './Components/Cart';
import About from './Components/About';
import Shop from './Components/Shop';
import ProductDetails from './Components/ProductDetails';
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer';
import { CartProvider } from './Components/CartContext';



function App() {
  

  return (
  
  <CartProvider>
  <div className="App container mx-auto">
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
      <ToastContainer />
    </Router>
  </div>
  <Footer />
</CartProvider>
  );
}

export default App;
