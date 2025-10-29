"use client";

import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Title + Mascots */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <Image
             src="/images/car1.png"
            alt="FXT Mascot"
            width={80}
            height={80}
            className="object-contain"
          />
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#B71C1C]">
            OUR PROFESSIONAL SERVICES
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
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          Expert repairs for all major household appliances — fast, reliable, and built to last.
        </p>

        {/* Service Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Refrigerator */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <img
              src="/images/Fridge.jpg"
              alt="Refrigerator Repair"
              className="w-full h-56 object-cover rounded-xl mb-5"
            />
            <h3 className="text-xl font-bold text-[#B71C1C] mb-3">
              ❄️ Refrigerator Repair
            </h3>
            <p className="text-gray-600">
              We handle temperature issues, leaks, and noises — restoring efficiency and peace of mind.
            </p>
          </div>

          {/* Oven & Stove */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <img
              src="/images/stove.avif"
              alt="Oven & Stove Repair"
              className="w-full h-56 object-cover rounded-xl mb-5"
            />
            <h3 className="text-xl font-bold text-[#B71C1C] mb-3">
              🔥 Oven & Stove Repair
            </h3>
            <p className="text-gray-600">
              From gas to electric systems, we ensure your kitchen appliances perform at peak precision.
            </p>
          </div>

          {/* Washer & Dryer */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <img
              src="/images/washer.jpg"
              alt="Washer & Dryer Repair"
              className="w-full h-56 object-cover rounded-xl mb-5"
            />
            <h3 className="text-xl font-bold text-[#B71C1C] mb-3">
              🧼 Washer & Dryer Repair
            </h3>
            <p className="text-gray-600">
              We eliminate leaks, clogs, and spin cycle issues to keep your laundry days smooth and stress-free.
            </p>
          </div>

          {/* Dishwasher */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <img
              src="/images/dishwasher.jpg"
              alt="Dishwasher Repair"
              className="w-full h-56 object-cover rounded-xl mb-5"
            />
            <h3 className="text-xl font-bold text-[#B71C1C] mb-3">
              🍽️ Dishwasher Repair
            </h3>
            <p className="text-gray-600">
              From poor drainage to stuck cycles, we restore performance so your dishes sparkle every time.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
