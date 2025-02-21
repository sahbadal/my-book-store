import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-100 shadow py-2">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Your Book Logo" width={60} height={40}/>
          <h1 className="text-2xl font-bold text-blue-600">Book Club</h1>
        </div>
        
        {/* Buttons */}
        <div className="flex gap-4">
          <Link href="/login">
            <button className="px-4 py-2 border border-gray-400 text-gray-700 rounded-lg hover:bg-gray-200 transition">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
    );
};

export default Navbar;