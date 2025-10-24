"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#8A1616] to-[#B71C1C] shadow-md">
      {/* ✅ Removed all padding so logo hits the edge */}
      <div className="w-full h-20 flex items-center justify-between">

        {/* ✅ Logo flush to left */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/FXT-Picsart-BackgroundRemover.jpeg"
            alt="FXT Logo"
            width={165}
            height={75}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 pr-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-white font-medium text-sm tracking-wide transition"
            >
              {item.name}
              {pathname === item.href && (
                <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-white rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-3xl pr-3"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* ✅ Mobile Menu with Blur Added */}
      {menuOpen && (
        <div className="md:hidden bg-[#8A1616]/70 backdrop-blur-sm text-white px-4 pb-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 border-b border-white/20"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
