import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
                <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">

                    
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-3">Dream BPL</h2>
                        <p className="text-sm">
                            A modern web platform built with love and passion.
                            Stay connected with us for updates and features.
                        </p>
                    </div>

                   
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">About</a></li>
                            <li><a href="#" className="hover:text-white">Services</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
                        <div className="flex gap-4 text-gray-400">
                            <a href="#" className="hover:text-white">Facebook</a>
                            <a href="#" className="hover:text-white">Instagram</a>
                            <a href="#" className="hover:text-white">Twitter</a>
                        </div>
                    </div>

                </div>

              
                <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-5 text-sm">
                    © {new Date().getFullYear()} Shakil App — All Rights Reserved.
                </div>
            </footer>
        </div>
    );
};

export default Footer;