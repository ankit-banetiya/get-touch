'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between py-3">

          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/assets/img/logo.png"
              alt="Logo"
              width={180}
              height={45}
              priority
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="#" className="hover:text-gray-600 transition">
              Home
            </Link>
            <Link href="#" className="hover:text-gray-600 transition">
              About Us
            </Link>
            <Link href="#" className="hover:text-gray-600 transition">
              Service
            </Link>
            <Link href="#" className="hover:text-gray-600 transition">
              Contact
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm px-4 py-1 rounded-full border border-black hover:bg-gray-100 transition">
              Socials
            </button>

            <button className="text-sm flex items-center gap-2 px-4 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition">
              Get in Touch
              <Image
                src="/assets/img/get-touch.png"
                alt="icon"
                width={12}
                height={12}
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 pb-4 text-sm font-medium">
            <Link href="#" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="#" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link href="#" onClick={() => setIsOpen(false)}>
              Service
            </Link>
            <Link href="#" onClick={() => setIsOpen(false)}>
              Contact
            </Link>

            <div className="flex flex-col gap-3 pt-2">
              <button className="w-full border border-black rounded-full py-2">
                Socials
              </button>

              <button className="w-full flex justify-center items-center gap-2 bg-black text-white rounded-full py-2">
                Get in Touch
                <Image
                  src="/assets/img/get-touch.png"
                  alt="icon"
                  width={12}
                  height={12}
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}