import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Partners from './components/Partners';
import MiningJourney from './components/MiningJourney';
import Community from './components/Community';
import TopDePins from './components/TopDePins';
import FeaturedProducts from './components/FeaturedProducts';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
//import styles from "./style.tsx";

function App() {
    return (
        <div className="min-h-screen">
            <Navbar/>
            <Hero/>
            <ProductGrid/>
            <Partners/>
            <MiningJourney/>
            <Community/>
            <TopDePins/>
            <FeaturedProducts/>
            <Testimonials/>
            <Footer/>
        </div>
)
    ;
}

export default App;
