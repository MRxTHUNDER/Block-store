import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { ShoppingCart, Search } from 'lucide-react';

const Products: React.FC = () => {
    const [cart, setCart] = useState<number[]>([]);
    const [showNotification, setShowNotification] = useState(false);
    const [categoryFilter, setCategoryFilter] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const categories = ['All', ...Array.from(new Set(products.map(product => product.category)))];

    const filteredProducts = products
        .filter(product => categoryFilter === 'All' || product.category === categoryFilter)
        .filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

    const handleBuy = (id: number) => {
        setCart(prev => [...prev, id]);
        setShowNotification(true);

        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-10">

            {/* Main Content */}
            <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
                {/* Page Title */}
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Products</h2>
                    {/*<p className="text-gray-600 max-w-2xl mx-auto">*/}
                    {/*    Discover our premium selection of technology products, curated for quality and performance.*/}
                    {/*</p>*/}
                </div>

                {/* Search Bar */}
                <div className="mb-8">
                    <div className="max-w-md mx-auto">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>

                {/* Category Filter */}
                <div className="mb-8 flex overflow-x-auto pb-2 -mx-2 justify-center">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setCategoryFilter(category)}
                            className={`mx-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                                categoryFilter === category
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    {filteredProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onBuy={handleBuy}
                        />
                    ))}
                </div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No products found in this category.</p>
                    </div>
                )}
            </main>

            {/* Notification */}
            <div
                className={`fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center transition-opacity duration-300 ${
                    showNotification ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            >
                <span className="mr-2">✓</span> Product added to cart!
            </div>
        </div>
    );
};

export default Products;