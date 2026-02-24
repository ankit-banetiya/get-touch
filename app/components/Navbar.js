'use client';

import Link from 'next/link';
import { Pen } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="max-w-7xl mx-auto">
      <nav className="flex items-center justify-between md:px-0 md:py-2 bg-white">
        {/* Left side - Logo/Brand */}
        <div className="flex items-center space-x-2">
          <Image
            src="/assets/img/logo.png"
            alt="Dummy UI Left"
            width={215}
            height={50}
          />
        </div>

        {/* Center - Navigation Links */}
        <div className="flex px-6 py-1 items-center space-x-8 rounded-lg  text-sm">
          <Link href="#work" className="text-black hover:text-gray-900 transition-colors font-medium">
            Home
          </Link>
          <Link href="#experience" className="text-black hover:text-gray-900 transition-colors font-medium">
            About us
          </Link>
          <Link href="#about" className="text-black hover:text-gray-900 transition-colors font-medium">
            Service
          </Link>
          <Link href="#resume" className="text-black hover:text-gray-900 transition-colors font-medium">
            Contact
          </Link>
        </div>

        {/* Right side - CTA Button */}
        <div className="flex items-center gap-4">
          <button className="font-medium text-sm bg-gray-100 flex items-center space-x-2 px-4 py-1 bg-black text-black rounded-full hover:bg-gray-800 transition-colors">
           Socials
          </button>
          <button className="font-medium text-sm flex items-center space-x-2 px-4 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
            <span>
             Get in Touch
            </span>
               <Image src="/assets/img/get-touch.png" alt="nav-icon" width={10} height={10} />
          </button>
        </div>
      </nav>
    </div>
  );
}
