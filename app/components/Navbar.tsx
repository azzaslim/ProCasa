'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={`navbar navbar-default navbar-trans navbar-expand-lg fixed-top ${pathname === '/Home' ? 'bg-transparent' : 'bg-black text-white'}`}>      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src="../assets/img/ProCasa-Logo.png" alt="Your Company" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link href="/Home" className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === '/Home' ? 'bg-red-400 text-white  '  : 'text-white hover:bg-red-400 hover:text-white'}`} aria-current={pathname === '/Home' ? 'page' : undefined}>
                  Home
                </Link>
                <Link href="/about" className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === '/about' ? 'bg-red-400 text-white' : 'text-white hover:bg-red-400 hover:text-white'}`}>
                  About
                </Link>
                <Link href="/proprety" className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === '/proprety' ? 'bg-red-400 text-white' : 'text-white hover:bg-red-400 hover:text-white'}`}>
                  Proprety
                </Link>
                <Link href="/contact" className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === '/contact' ? 'bg-red-400 text-white' : 'text-white hover:bg-red-400 hover:text-white'}`}>
                  Contact
                </Link>
 <a href="/" className=" loginbutton">
                {" "}
                <button className="bg-transparent text-white hover:bg-red-400 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white border-transparent rounded">
                  LOGIN
                </button>
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link href="/Home" className={`block rounded-md px-3 py-2 text-base font-medium ${pathname === '/Home' ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white'}`} aria-current={pathname === '/Home' ? 'page' : undefined}>
            Home
          </Link>
          <Link href="/about" className={`block rounded-md px-3 py-2 text-base font-medium ${pathname === '/about' ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white'}`}>
            About
          </Link>
          <Link href="/proprety" className={`block rounded-md px-3 py-2 text-base font-medium ${pathname === '/proprety' ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white'}`}>
            Proprety
          </Link>
          <Link href="/contact" className={`block rounded-md px-3 py-2 text-base font-medium ${pathname === '/contact' ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white'}`}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
