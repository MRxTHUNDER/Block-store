//import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Partners from './components/Partners';
import TopDePins from './components/TopDePins';
import FeaturedProducts from './components/FeaturedProducts';
import Testimonials from './components/Testimonials';
import {WorldMapDemo} from "./components/worldMap.tsx";
import {HeroDemo} from "./components/miningHero.tsx";
import {FeatureStepsDemo} from "./components/newFeaturedProducts.tsx";
import LatestProducts from "./components/LatestProducts.tsx";

//import Footer from './components/Footer';
//import styles from "./style.tsx";

function App() {

    return (
        <div className="min-h-screen">
            {/*<Navbar/>*/}
            <Hero/>
            <HeroDemo/>
            <ProductGrid/>
            <LatestProducts/>
            <WorldMapDemo />
            <Partners/>
            <TopDePins/>
            {/*<FeaturedProducts/>*/}
            <FeatureStepsDemo/>
            <Testimonials/>
            {/*<Footer/>*/}
        </div>
)
    ;
}

export default App;
