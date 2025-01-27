import React, { useState } from 'react';
import { Star, ChevronDown, Bitcoin, ArrowRight } from 'lucide-react';

function Products() {
    const [quantity, setQuantity] = useState(1);

    const renderStars = (rating: number) => {
        return [...Array(5)].map((_, index) => (
            <Star
                key={index}
                className={`w-4 h-4 ${
                    index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                }`}
            />
        ));
    };

    return (
        <div className="min-h-screen bg-[#020817] text-white p-10">
            {/*/!* Navigation *!/*/}
            {/*<nav className="container mx-auto px-6 py-4 flex items-center justify-between">*/}
            {/*    <div className="flex items-center space-x-8">*/}
            {/*        <h1 className="text-xl font-bold">Block Store</h1>*/}
            {/*        <div className="space-x-6">*/}
            {/*            <a href="#" className="hover:text-blue-500">Home</a>*/}
            {/*            <a href="#" className="hover:text-blue-500">Services</a>*/}
            {/*            <a href="#" className="hover:text-blue-500">Our Project</a>*/}
            {/*            <a href="#" className="hover:text-blue-500">About us</a>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">*/}
            {/*        Contact us*/}
            {/*    </button>*/}
            {/*</nav>*/}

            {/* Main Content */}
            <main className="container mx-auto px-6 py-8">
                {/* Product Section */}
                <div className="grid grid-cols-2 gap-12">
                    {/* Product Images */}
                    <div className="space-y-4">
                        <div className="bg-[#0f1729] w-50 h-50 p-8 rounded-xl">
                            <img
                                src="https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?auto=format&fit=crop&q=80&w=500"
                                alt="GeodNet MobileCM"
                                className="w-50 h-50 rounded-lg"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#0f1729] p-4 rounded-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?auto=format&fit=crop&q=80&w=200"
                                    alt="GeodNet MobileCM Thumbnail 1"
                                    className="w-full rounded-lg"
                                />
                            </div>
                            <div className="bg-[#0f1729] p-4 rounded-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?auto=format&fit=crop&q=80&w=200"
                                    alt="GeodNet MobileCM Thumbnail 2"
                                    className="w-full rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">GeodNet MobileCM (Triple-band)</h2>
                        <div className="space-y-2">
                            <p className="text-2xl font-bold">Rs. 69,999</p>
                            <p className="text-gray-400">Free shipping on all orders</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            {renderStars(5)}
                            <span className="text-gray-400">(128)</span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <label className="text-gray-400">Quantity</label>
                                <select
                                    value={quantity}
                                    onChange={(e) => setQuantity(Number(e.target.value))}
                                    className="bg-[#0f1729] border border-gray-700 rounded-lg px-4 py-2"
                                >
                                    {[1,2,3,4,5].map(num => (
                                        <option key={num} value={num}>{num}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <button className="w-full bg-[#0f1729] border border-gray-700 rounded-lg px-4 py-2 flex items-center justify-between">
                                    <span>Select Add-ons</span>
                                    <ChevronDown className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                                Add to Cart
                            </button>
                            <button className="w-full bg-[#0f1729] border border-gray-700 text-white py-3 rounded-lg hover:bg-gray-800">
                                Go to Checkout
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product Description */}
                <section className="mt-16">
                    <h3 className="text-2xl font-bold mb-6">Product Description</h3>
                    <div className="bg-[#0f1729] rounded-xl p-6 space-y-6">
                        <div>
                            <h4 className="text-lg font-semibold mb-2">What it does?</h4>
                            <p className="text-gray-400">
                                The GEODNET mission is to gather dense real-time geospatial data from our Earth and her Atmospheres
                                using a vast network of roof-mounted Space Weather stations. You will earn GEOD tokens for installing this.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-2">What's included & recommended parts:</h4>
                            <ul className="text-gray-400 list-disc list-inside space-y-1">
                                <li>MobileCM Triple-Band 4 Constellation GNSS Receiver</li>
                                <li>Survey Grade Triple-Band Roof Antenna</li>
                                <li>POE Antenna Cable</li>
                                <li>Mounting Hardware</li>
                                <li>Mounting Pole ID-bits and Brackets Included</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* How Much Can You Earn Section */}
                <section className="mt-16 grid grid-cols-2 gap-12">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">How Much Can You Earn?</h3>
                        <p className="text-gray-400">
                            Position your GEODNET miners with clear line of sight and no
                            obstructions with a 5-degree line of sight. You want to ensure that
                            you are the first one in your hex. If you do not you cannot be
                            granted a Location NFT. This proves you're effectively contributing
                            to our network.
                        </p>
                        <button className="flex items-center space-x-2 text-blue-500 hover:text-blue-400">
                            <span>Explore Mining Rewards</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="bg-blue-500 rounded-full p-8">
                            <Bitcoin className="w-16 h-16" />
                        </div>
                    </div>
                </section>

                {/* Installation Process */}
                <section className="mt-16">
                    <h3 className="text-2xl font-bold mb-6">Installation Process?</h3>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="bg-[#0f1729] rounded-xl p-6">
                            {/* Add installation process illustration here */}
                        </div>
                        <div className="space-y-4">
                            <p className="text-gray-400">
                                Position your GEODNET miners with clear line of sight and no
                                obstructions with a 5-degree line of sight. You want to ensure that
                                you are the first one in your hex.
                            </p>
                            <button className="flex items-center space-x-2 text-blue-500 hover:text-blue-400">
                                <span>See the Installation Guide</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Reviews Section */}
                <section className="mt-16">
                    <h3 className="text-2xl font-bold mb-6">Product Reviews</h3>
                    <div className="grid grid-cols-2 gap-8">
                        {[1, 2, 3, 4].map((review) => (
                            <div key={review} className="bg-[#0f1729] rounded-xl p-6">
                                <div className="flex items-center space-x-2 mb-4">
                                    {renderStars(5)}
                                </div>
                                <p className="text-gray-400">
                                    Lorem ipsum dolor amet, consectetur adipiscing elit. Nam
                                    hendrerit nisi sed sollicitudin pellentesque. Nunc posuere
                                    purus rhoncus pulvinar aliquam.
                                </p>
                                <div className="mt-4 flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                                    <span className="font-medium">Random Person</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-[#0f1729] mt-16 py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-4 gap-8">
                        <div>
                            <h4 className="font-bold mb-4">Block Store</h4>
                            <div className="flex space-x-2 mt-4">
                                {renderStars(5)}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">COMPANY</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>About</li>
                                <li>Features</li>
                                <li>Works</li>
                                <li>Career</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">HELP</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>Customer Support</li>
                                <li>Delivery Details</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">FAQ</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>Account</li>
                                <li>Manage Deliveries</li>
                                <li>Orders</li>
                                <li>Payments</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Products;