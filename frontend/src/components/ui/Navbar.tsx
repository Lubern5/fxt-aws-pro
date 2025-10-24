"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-soft">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <img
            src="/images/FXT-Picsart-BackgroundRemover.jpeg"
            alt="FXT Logo"
            className="h-10 w-auto rounded-full"
          />
          FXT Repair
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <Link href="/" className="hover:text-primary">Home</Link>
          <Link href="/#services" className="hover:text-primary">Services</Link>
          <Link href="/#about" className="hover:text-primary">About</Link>
          <Link href="/#contact" className="hover:text-primary">Contact</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 hover:text-primary"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-soft">
          <div className="flex flex-col gap-4 py-4 px-6 text-gray-700 font-medium">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/#services" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/#about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/#contact" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
