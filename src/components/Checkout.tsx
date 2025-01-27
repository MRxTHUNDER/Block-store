import React, { useState } from 'react';
import { CreditCard, ArrowRight } from 'lucide-react';

function Checkout (){
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        aptSuite: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen bg-[#020817] p-10">
            {/*<Navbar />*/}

            <main className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Shipping Address Form */}
                    <div className="bg-[#0A1123] p-6 rounded-lg border border-gray-800">
                        <h2 className="text-white text-2xl font-semibold mb-6">Shipping Address</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    className="bg-transparent border border-gray-700 rounded-md p-3 text-gray-300 focus:outline-none focus:border-blue-500"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    className="bg-transparent border border-gray-700 rounded-md p-3 text-gray-300 focus:outline-none focus:border-blue-500"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                className="w-full bg-transparent border border-gray-700 rounded-md p-3 text-gray-300 focus:outline-none focus:border-blue-500"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full bg-transparent border border-gray-700 rounded-md p-3 text-gray-300 focus:outline-none focus:border-blue-500"
                                value={formData.email}
                                onChange={handleInputChange}
                            />

                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                className="w-full bg-transparent border border-gray-700 rounded-md p-3 text-gray-300 focus:outline-none focus:border-blue-500"
                                value={formData.address}
                                onChange={handleInputChange}
                            />

                            <input
                                type="text"
                                name="aptSuite"
                                placeholder="Apt/Suite"
                                className="w-full bg-transparent border border-gray-700 rounded-md p-3 text-gray-300 focus:outline-none focus:border-blue-500"
                                value={formData.aptSuite}
                                onChange={handleInputChange}
                            />

                            <div className="grid grid-cols-3 gap-4">
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    className="bg-transparent border border-gray-700 rounded-md p-3 text-gray-300 focus:outline-none focus:border-blue-500"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="text"
                                    name="state"
                                    placeholder="State"
                                    className="bg-transparent border border-gray-700 rounded-md p-3 text-gray-300 focus:outline-none focus:border-blue-500"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="text"
                                    name="zipCode"
                                    placeholder="ZIP Code"
                                    className="bg-transparent border border-gray-700 rounded-md p-3 text-gray-300 focus:outline-none focus:border-blue-500"
                                    value={formData.zipCode}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <input
                                type="text"
                                name="country"
                                placeholder="Country"
                                className="w-full bg-transparent border border-gray-700 rounded-md p-3 text-gray-300 focus:outline-none focus:border-blue-500"
                                value={formData.country}
                                onChange={handleInputChange}
                            />
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-gray-400">
                                Have an Account?{' '}
                                <a href="#" className="text-blue-500 hover:text-blue-400">
                                    Log in
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-[#0A1123] p-6 rounded-lg border border-gray-800">
                        <h2 className="text-white text-2xl font-semibold mb-6">Order Summary</h2>

                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between text-gray-300">
                                <span>Product 1 × 1</span>
                                <span>Rs. 799</span>
                            </div>
                            <div className="flex justify-between text-gray-300">
                                <span>Product 2 × 1</span>
                                <span>Rs. 799</span>
                            </div>
                            <div className="flex justify-between text-gray-300">
                                <span>Product 3 × 1</span>
                                <span>Rs. 799</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mb-6">
                            <span className="text-gray-300">Coupon Code</span>
                            <span className="text-white">"Coupon Here"</span>
                        </div>

                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between text-gray-300">
                                <span>Subtotal</span>
                                <span>Rs. 2,398</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-300">Discount (-20%)</span>
                                <span className="text-blue-500">-Rs. 479</span>
                            </div>
                            <div className="flex justify-between text-gray-300">
                                <span>Delivery Fee</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between text-white font-semibold text-lg">
                                <span>Total</span>
                                <span>Rs. 1,919</span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md flex items-center justify-center space-x-2">
                                <span>Place order</span>
                                <ArrowRight size={20} />
                            </button>

                            {/*<button className="w-full bg-transparent border border-gray-700 hover:border-gray-600 text-white py-3 rounded-md flex items-center justify-center space-x-2">*/}
                            {/*    <span>Credit/Debit Card</span>*/}
                            {/*    <CreditCard size={20} />*/}
                            {/*</button>*/}
                        </div>
                    </div>
                </div>
            </main>

            {/*<Footer />*/}
        </div>
    );
}

export default Checkout;