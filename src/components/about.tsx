import React from 'react';
import { Cpu, Shield, Headphones, Truck, Navigation, Plane, Cloud } from 'lucide-react';

function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
            <div className="max-w-4xl mx-auto px-4 py-16 relative">
                {/* Header Section */}
                <h1 className="text-4xl font-bold mb-6">About Us</h1>

                {/* Introduction */}
                <div className="prose prose-invert max-w-none">
                    <p className="text-xl leading-relaxed mb-8">
                        Welcome to <span className="text-blue-400 font-bold">Block Store</span>, your trusted destination for cutting-edge crypto mining devices. As an official distributor in India, we specialize in offering high-quality mining solutions for some of the most innovative crypto projects in the world, including <span className="text-green-400">GEODNET</span>, <span className="text-yellow-400">WINGBITS</span>, and <span className="text-cyan-400">WEATHERXM</span>.
                    </p>

                    <p className="text-lg mb-12">
                        At Block Store, we believe in empowering individuals and businesses to participate in the decentralized future. Our mission is to provide reliable, efficient, and advanced mining hardware that helps you maximize your crypto rewards while contributing to groundbreaking networks.
                    </p>

                    {/* Why Choose Us Section */}
                    <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div className="bg-gray-800/50 p-6 rounded-lg flex items-start space-x-4">
                            <Shield className="w-6 h-6 text-blue-400 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold mb-2">Official Distributor in India</h3>
                                <p className="text-gray-300">We are proud to be the official distributor for GEODNET, WINGBITS, and WEATHERXM devices in India.</p>
                            </div>
                        </div>

                        <div className="bg-gray-800/50 p-6 rounded-lg flex items-start space-x-4">
                            <Cpu className="w-6 h-6 text-green-400 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold mb-2">Quality You Can Trust</h3>
                                <p className="text-gray-300">Our selection of mining devices undergoes rigorous quality checks to ensure exceptional performance.</p>
                            </div>
                        </div>

                        <div className="bg-gray-800/50 p-6 rounded-lg flex items-start space-x-4">
                            <Headphones className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold mb-2">Comprehensive Support</h3>
                                <p className="text-gray-300">From purchase to setup, our team is here to guide you through every step of your mining journey.</p>
                            </div>
                        </div>

                        <div className="bg-gray-800/50 p-6 rounded-lg flex items-start space-x-4">
                            <Truck className="w-6 h-6 text-purple-400 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold mb-2">Fast and Secure Shipping</h3>
                                <p className="text-gray-300">We ensure quick and secure delivery of your mining devices across India.</p>
                            </div>
                        </div>
                    </div>

                    {/* Our Projects Section */}
                    <h2 className="text-2xl font-bold mb-6">Our Projects</h2>
                    <div className="space-y-6 mb-12">
                        <div className="bg-gray-800/50 p-6 rounded-lg">
                            <div className="flex items-center space-x-3 mb-3">
                                <Navigation className="w-6 h-6 text-green-400" />
                                <h3 className="text-xl font-bold">GEODNET</h3>
                            </div>
                            <p className="text-gray-300">Contribute to a global decentralized network of GNSS (Global Navigation Satellite System) stations while earning crypto rewards.</p>
                        </div>

                        <div className="bg-gray-800/50 p-6 rounded-lg">
                            <div className="flex items-center space-x-3 mb-3">
                                <Plane className="w-6 h-6 text-yellow-400" />
                                <h3 className="text-xl font-bold">WINGBITS</h3>
                            </div>
                            <p className="text-gray-300">Join the decentralized aviation network that uses blockchain technology to enhance global air traffic tracking and communication.</p>
                        </div>

                        <div className="bg-gray-800/50 p-6 rounded-lg">
                            <div className="flex items-center space-x-3 mb-3">
                                <Cloud className="w-6 h-6 text-cyan-400" />
                                <h3 className="text-xl font-bold">WEATHERXM</h3>
                            </div>
                            <p className="text-gray-300">Participate in a community-driven weather station network that provides real-time, hyperlocal weather data while rewarding contributors with tokens.</p>
                        </div>
                    </div>

                    {/* Closing Section */}
                    <p className="text-lg mb-8">
                        Whether you're a seasoned miner or just starting your crypto journey, Block Store is here to provide you with the tools and support you need to succeed.
                    </p>

                    <p className="text-xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                        Join the decentralized revolution with Block Store today!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;