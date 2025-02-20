import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src="" alt="Logo" className="h-8 w-8 mr-2" />
                    <span className="text-white text-xl font-bold">Your Book</span>
                </div>
                <div>
                    <Link href="/signin" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                        Sign In
                    </Link>
                    <Link href="/signup" className="bg-green-500 text-white px-4 py-2 rounded">
                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;