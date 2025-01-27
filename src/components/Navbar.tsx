
import React from 'react';
import { Menu, X, Store } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className=" shadow-sm fixed w-full z-50 bg-gradient-to-br from-[#0f172a] to-blue-900 min-w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center gap-2">
                        <Store className="text-blue-500" size={34}/>
                        <span className="text-white font-bold text-xl">Block Store</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-100 hover:text-blue-500">Home</a>
                        <a href="#" className="text-gray-100 hover:text-blue-500">Services</a>
                        <a href="#" className="text-gray-100 hover:text-blue-500">Our Product</a>
                        <a href="#" className="text-gray-100 hover:text-blue-500">About us</a>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                            Connect
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="block px-3 py-2 text-gray-100 hover:text-blue-500">Home</a>
                        <a href="#" className="block px-3 py-2 text-gray-100 hover:text-blue-500">Services</a>
                        <a href="#" className="block px-3 py-2 text-gray-100 hover:text-blue-500">Our Product</a>
                        <a href="#" className="block px-3 py-2 text-gray-100 hover:text-blue-500">About us</a>

                        <button className="block w-full mt-4 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                            Connect
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;