import React from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/block_store_wm.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate();

    return (
        <nav className="shadow-sm fixed w-full z-50 bg-[#0f172a] ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo (Always Visible) */}
                    <div className="flex items-center">
                        <button onClick={() => navigate("/")} className="focus:outline-none">
                            <img src={logo} alt="Block Store Logo" className="h-10 w-auto cursor-pointer"/>
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#/" className="text-gray-100 hover:text-blue-500">
                            Home
                        </a>
                        <a href="#/about" className="text-gray-100 hover:text-blue-500">
                            About us
                        </a>
                        <button
                            onClick={() => navigate("/contact")}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Contact
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-gray-100 hover:text-blue-400 transition duration-300"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Updated to be Visible When Open) */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-[#0f172a] transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out md:hidden`}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-6">
                    {/* Logo in Mobile View */}
                    <img src={logo} alt="Block Store Logo" className="h-12 w-auto mb-6" />

                    <a
                        href="#/"
                        className="text-gray-100 text-lg hover:text-blue-500 transition duration-300"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </a>
                    <a
                        href="#/about"
                        className="text-gray-100 text-lg hover:text-blue-500 transition duration-300"
                        onClick={() => setIsOpen(false)}
                    >
                        About us
                    </a>
                    <button
                        onClick={() => {
                            navigate("/contact");
                            setIsOpen(false);
                        }}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Contact
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
