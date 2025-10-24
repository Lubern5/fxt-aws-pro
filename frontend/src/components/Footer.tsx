"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f9f9f9] text-gray-800 py-6 md:py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-6 text-sm leading-tight">

        {/* Brand Info */}
        <div className="flex flex-col space-y-1">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/FXT-Picsart-BackgroundRemover.jpeg"
              alt="FXT Appliance Repair"
              width={50}
              height={50}
              className="object-contain"
            />
            <h4 className="font-semibold text-[14px] md:text-[15px]">FXT Appliance Repair</h4>
          </div>
          <p className="text-gray-600 text-[12.5px] md:text-[13px] max-w-xs leading-snug">
            Delivering fast, reliable, and affordable appliance repair solutions with exceptional customer care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-semibold mb-[4px] text-[14px] md:text-[15px]">Quick Links</h5>
          <ul className="space-y-[2px] text-[13px] md:text-[14px]">
            <li><Link href="/" className="hover:text-[#B71C1C]">Home</Link></li>
            <li><Link href="#services" className="hover:text-[#B71C1C]">Services</Link></li>
            <li><Link href="#about" className="hover:text-[#B71C1C]">About</Link></li>
            <li><Link href="#contact" className="hover:text-[#B71C1C]">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h5 className="font-semibold mb-[4px] text-[14px] md:text-[15px]">Our Services</h5>
          <ul className="space-y-[2px] text-[13px] md:text-[14px]">
            <li>Refrigerator Repair</li>
            <li>Oven & Stove Repair</li>
            <li>Washer & Dryer Repair</li>
            <li>Dishwasher Repair</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="font-semibold mb-[4px] text-[14px] md:text-[15px]">Contact Info</h5>
          <p className="text-[12.5px] md:text-[13px] leading-snug"><span className="font-semibold">Phone:</span> (978)609-3758</p>
          <p className="text-[12.5px] md:text-[13px] leading-snug"><span className="font-semibold">Email:</span> Repairs@Fxtappliancerepair.com</p>
          <p className="font-semibold mt-[3px] mb-[1px] text-[12.5px] md:text-[13px]">Hours:</p>
          <p className="text-[12.5px] md:text-[13px] leading-snug">Mon–Sat 8AM–6PM</p>
          <p className="text-[12.5px] md:text-[13px] leading-snug">Sun Closed</p>
        </div>

      </div>
    </footer>
  );
}
