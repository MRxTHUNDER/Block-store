import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import App from './App';
import Products from "./components/Products.tsx";
import Checkout from "./components/Checkout.tsx";
import Footer from "./components/Footer.tsx";
import About from "./components/about.tsx";
import Contact from "./components/contact.tsx";
import {ComingSoon} from "./components/ComingSoon.tsx";

function Layout(){
    return (
        <HashRouter>
            <div className="min-h-screen bg-[#0A0B1A] text-white">
                <Navbar />
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/products/:productId" element={<Products />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/coming-soon" element={<ComingSoon
                        title="Exciting Feature Coming Soon"
                        description="Our team is working on something spectacular. We can't wait to show you what we've been building!"
                    />} />
                </Routes>
                <Footer/>
            </div>
        </HashRouter>
    );
}

export default Layout;