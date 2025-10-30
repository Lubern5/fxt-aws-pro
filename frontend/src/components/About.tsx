"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Title + Mascots */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <Image
            src="/images/car2.jpeg"
            alt="FXT Mascot"
            width={80}
            height={80}
            className="object-contain"
          />

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#B71C1C]">
            ABOUT FXT APPLIANCE REPAIR
          </h2>

          <Image
            src="/images/car2.jpeg"
            alt="FXT Mascot"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Intro Paragraph */}
        <p className="text-gray-700 max-w-3xl mx-auto text-lg mb-12 leading-relaxed">
          At FXT Appliance Repair, we bring over a decade of trusted expertise to every home we serve. 
          Our mission is simple — to provide reliable, affordable, and professional appliance repair 
          services that keep your household running smoothly.
        </p>

        {/* 3 Info Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-[40px] mb-3">✅</div>
            <h3 className="text-xl font-bold text-[#B71C1C] mb-3">Certified Technicians</h3>
            <p className="text-gray-600">
              Every member of our team is fully trained, certified, and dedicated to ensuring your satisfaction.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-[40px] mb-3">🤝</div>
            <h3 className="text-xl font-bold text-[#B71C1C] mb-3">Commitment to Excellence</h3>
            <p className="text-gray-600">
              We take pride in honest service and lasting repairs — not just quick fixes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-[40px] mb-3">👍</div>
            <h3 className="text-xl font-bold text-[#B71C1C] mb-3">Guaranteed Work</h3>
            <p className="text-gray-600">
              All services are backed by our satisfaction guarantee, because your peace of mind matters most.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
