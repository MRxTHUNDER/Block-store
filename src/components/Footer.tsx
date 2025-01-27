import React from 'react';
import { Store, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 py-16">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-5 gap-8 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Store className="text-blue-500" size={24} />
                            <span className="text-white font-bold text-xl">Block Store</span>
                        </div>
                        <div className="flex gap-4">
                            <Facebook className="text-gray-400 hover:text-white cursor-pointer" size={20} />
                            <Twitter className="text-gray-400 hover:text-white cursor-pointer" size={20} />
                            <Instagram className="text-gray-400 hover:text-white cursor-pointer" size={20} />
                            <Linkedin className="text-gray-400 hover:text-white cursor-pointer" size={20} />
                        </div>
                    </div>
                    {['Company', 'Support', 'Legal'].map((section) => (
                        <div key={section}>
                            <h3 className="text-white font-semibold mb-4">{section}</h3>
                            <ul className="space-y-2">
                                {['About', 'Careers', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-400 hover:text-white">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="border-t border-gray-800 pt-8">
                    <p className="text-gray-400 text-center">© 2024 Block Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;