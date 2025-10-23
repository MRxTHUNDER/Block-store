import {Facebook, Twitter, Instagram, Youtube} from 'lucide-react';
import logo from "../../assets/block_store_wm.png";


const Footer = () => {
    return (
        <footer className="bg-gray-900 py-16">

            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-5 gap-8 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img src={logo} alt="Block Store Logo" className="h-10 w-auto"/>
                        </div>
                        <div className="flex gap-4 mt-6 justify-center">
                            {[
                                {
                                    icon: <Youtube size={20} />,
                                    label: "Youtube",
                                    url: "https://www.youtube.com/@BlockStoreX",
                                },
                                {
                                    icon: <Twitter size={20} />,
                                    label: "Twitter",
                                    url: "https://x.com/BlockstoreX",
                                },
                                {
                                    icon: <Instagram size={20} />,
                                    label: "Instagram",
                                    url: "https://www.instagram.com/blockstorex/",
                                },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:border-transparent bg-white hover:bg-gradient-to-br from-blue-600 to-purple-600 transition duration-300"
                                    aria-label={social.label}
                                >
                                    <div className="text-gray-400 group-hover:text-white transition duration-300">
                                        {social.icon}
                                    </div>
                                    <span className="sr-only">{social.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* {['Company'].map((section) => (*/}
                    {/*    <div key={section}>*/}
                    {/*        <h3 className="text-white font-semibold mb-4">{section}</h3>*/}
                    {/*        <ul className="space-y-2">*/}
                    {/*            {['About', 'Careers', 'Contact'].map((item) => (*/}
                    {/*                <li key={item}>*/}
                    {/*                    <a href="#" className="text-gray-400 hover:text-white">{item}</a>*/}
                    {/*                </li>*/}
                    {/*            ))}*/}
                    {/*        </ul>*/}
                    {/*    </div>*/}
                    {/*))}*/}
                </div>
                <div className="border-t border-gray-800 pt-8">
                    <p className="text-gray-400 text-center">© 2025 Block Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;