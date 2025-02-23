import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 mt-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-3xl font-bold mb-4 text-blue-400">Book-Club</h3>
          <p className="text-gray-300 text-md">
            Your one-stop destination for book lovers. Explore a vast collection across multiple genres and categories.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Quick Links</h3>
          <ul className="text-gray-300 space-y-3">
            <li><Link href="/" className="hover:text-white transition duration-300">Home</Link></li>
            <li><Link href="/categories" className="hover:text-white transition duration-300">Categories</Link></li>
            <li><Link href="/about" className="hover:text-white transition duration-300">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition duration-300">Contact</Link></li>
            <li><Link href="/faq" className="hover:text-white transition duration-300">FAQs</Link></li>
          </ul>
        </div>

        {/* Newsletter & Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Stay Connected</h3>
          <div className="flex space-x-4 mb-4">
            <Link href="#" className="p-2 bg-gray-700 hover:bg-blue-500 transition-all duration-300 rounded-full text-lg">
              <FaFacebookF />
            </Link>
            <Link href="#" className="p-2 bg-gray-700 hover:bg-blue-400 transition-all duration-300 rounded-full text-lg">
              <FaTwitter />
            </Link>
            <Link href="#" className="p-2 bg-gray-700 hover:bg-pink-500 transition-all duration-300 rounded-full text-lg">
              <FaInstagram />
            </Link>
            <Link href="#" className="p-2 bg-gray-700 hover:bg-blue-600 transition-all duration-300 rounded-full text-lg">
              <FaLinkedinIn />
            </Link>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Subscribe to Newsletter</h3>
          <form className="flex space-x-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="p-2 rounded-lg w-full text-black focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Book-Club. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
