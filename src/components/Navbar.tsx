import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

const Navbar: React.FC = () => {
    return (
        <nav className="border-b-2 py-4 sm:py-2">
      <div className="max-w-7xl m-auto flex justify-between items-center px-6">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Your Book Logo" width={60} height={40} className='sm:block hidden'/>
          <h1 className="sm:text-3xl text-2xl font-semibold sm:font-bold text-blue-600">Book-Club</h1>
        </div>
        
        {/* Buttons */}
        <div className="flex gap-4">
          <Link href="/login">
            <Button variant={'outline'} >
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button variant={'destructive'} >
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
    );
};

export default Navbar;