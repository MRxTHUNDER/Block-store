import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../lib/product';

interface ProductCardProps {
    product: Product;
    onBuy: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onBuy }) => {
    return (
        <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
            <a href={product.url} className="relative overflow-hidden">
                <div className="h-64 overflow-hidden bg-gray-100">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain object-center transform group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
                {product.discount > 0 && (
                    <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-md text-sm font-semibold">
                        {product.discount}% OFF
                    </div>
                )}
            </a>

            <div className="p-5 flex-grow flex flex-col">
                <div className="mb-2 flex justify-between items-start">
                    <a href={product.url} className="hover:text-blue-600 transition-colors">
                        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{product.name}</h3>
                    </a>
                    <div className="flex flex-col items-end">
                        {product.originalPrice && product.originalPrice > product.price ? (
                            <>
                                <span className="text-gray-400 line-through text-sm">${product.originalPrice.toFixed(2)}</span>
                                <span className="text-blue-700 font-bold">₹{product.price}</span>
                            </>
                        ) : (
                            <span className="text-blue-700 font-bold">₹{product.price}</span>
                        )}
                    </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{product.description}</p>

                <a href={product.url} className="relative overflow-hidden">
                <button
                    className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 mt-auto group"
                >
                    <ShoppingCart size={18} className="group-hover:animate-pulse" />
                    <span>Buy</span>
                </button>
                </a>
            </div>
        </div>
    );
};

export default ProductCard;