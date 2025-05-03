import React, { useState } from 'react';
import { Phone, Mail, MapPin, Twitter, Instagram, Disc as Discord } from 'lucide-react';

function Contact() {
    const [selectedSubject, setSelectedSubject] = useState('General Inquiry');

    return (
        <div className="p-10 min-h-screen bg-[#0f172a] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto ">
                <h1 className="text-4xl font-bold text-center text-white mb-4 pt-10">Contact Us</h1>
                <p className="text-center text-white mb-12">
                    Any question or remarks? Just write us a message!
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg overflow-hidden shadow-xl">
                    {/* Left Side - Contact Information */}
                    <div className="bg-black text-white p-8 relative">
                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                            <p className="text-gray-300 mb-8">Say something to start a live chat!</p>

                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 mr-4" />
                                    <span>+1012 3456 789</span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="w-5 h-5 mr-4" />
                                    <span>demo@gmail.com</span>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="w-5 h-5 mr-4" />
                                    <span>132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
                                </div>
                            </div>

                            <div className="flex space-x-4 mt-12">
                                <Twitter className="w-6 h-6 cursor-pointer hover:text-gray-300" />
                                <Instagram className="w-6 h-6 cursor-pointer hover:text-gray-300" />
                                <Discord className="w-6 h-6 cursor-pointer hover:text-gray-300" />
                            </div>
                        </div>

                        {/* Decorative circles */}
                        <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
                            <div className="w-32 h-32 rounded-full bg-gray-800 opacity-50"></div>
                        </div>
                        <div className="absolute bottom-0 right-0 transform translate-x-1/3 translate-y-1/3">
                            <div className="w-40 h-40 rounded-full bg-gray-800 opacity-30"></div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="p-8">
                        <form action="https://submit-form.com/MVCQs3tio" className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="mt-1 block text-black w-full border-b border-gray-300 focus:border-black focus:ring-0 bg-transparent"
                                        placeholder="Full Name"
                                    />
                                </div>
                                {/*<div>*/}
                                {/*    <label className="block text-sm font-medium text-gray-700">Last Name</label>*/}
                                {/*    <input*/}
                                {/*        type="text"*/}
                                {/*        className="mt-1 block w-full border-b border-gray-300 focus:border-black focus:ring-0 bg-transparent"*/}
                                {/*        placeholder="Doe"*/}
                                {/*    />*/}
                                {/*</div>*/}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="mt-1 block text-black w-full border-b border-gray-300 focus:border-black focus:ring-0 bg-transparent"
                                        placeholder="Email"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="mt-1 block text-black w-full border-b border-gray-300 focus:border-black focus:ring-0 bg-transparent"
                                        placeholder="+1012 3456 789"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-4">Select Subject?</label>
                                <div className="flex flex-wrap gap-4">
                                    {['General Inquiry', 'Technical Support', 'Billing Question', 'Partnership'].map((subject) => (
                                        <label key={subject} className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                name="subject"
                                                value={subject}
                                                checked={selectedSubject === subject}
                                                onChange={(e) => setSelectedSubject(e.target.value)}
                                                className="form-radio text-black focus:ring-black h-4 w-4"
                                            />
                                            <span className="ml-2 text-sm text-gray-700">{subject}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    className="mt-1 block text-black w-full border-b border-gray-300 focus:border-black focus:ring-0 bg-transparent resize-none"
                                    placeholder="Write your message.."
                                ></textarea>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;