"use client";

import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Title + Mascots */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <Image
            src="/images/car1.png"
            alt="FXT Mascot"
            width={80}
            height={80}
            className="object-contain"
          />

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#B71C1C]">
            WHY CHOOSE US
          </h2>

          <Image
            src="/images/car1.png"
            alt="FXT Mascot"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Subtitle */}
        <p className="text-gray-700 max-w-3xl mx-auto text-lg mb-12 leading-relaxed">
          FXT Appliance Repair stands out through our commitment to quality, transparency, 
          and exceptional customer care — ensuring a stress-free and reliable repair experience.
        </p>

        {/* 3 Cards */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-[40px] mb-3">🛠️</div>
            <h3 className="text-xl font-bold text-[#B71C1C] mb-3">Expert Quality Workmanship</h3>
            <p className="text-gray-600">
              Our certified professionals ensure every repair is done with precision, care, and long-lasting results.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-[40px] mb-3">🤝</div>
            <h3 className="text-xl font-bold text-[#B71C1C] mb-3">Transparent, Honest Pricing</h3>
            <p className="text-gray-600">
              No hidden fees — just fair, upfront pricing so you always know exactly what you're paying for.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-[40px] mb-3">⚡</div>
            <h3 className="text-xl font-bold text-[#B71C1C] mb-3">Prompt & Reliable Service</h3>
            <p className="text-gray-600">
              We respect your time — offering fast response, convenient scheduling, and dependable service you can count on.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
