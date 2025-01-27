import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import App from './App';
import Products from "./components/Products.tsx";
import Checkout from "./components/Checkout.tsx";



function Layout(){
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-[#0A0B1A] text-white">
                <Navbar />
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/products/:productId" element={<Products />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </div>
        </BrowserRouter>
  );
}

export default Layout;