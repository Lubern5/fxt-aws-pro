"use client";

import Image from "next/image";

export default function TestimonialsContact() {
  return (
    <section id="testimonials" className="py-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 text-center">

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
            TESTIMONIALS & CONTACT
          </h2>

          <Image
            src="/images/car2.jpeg"
            alt="FXT Mascot"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Subtext */}
        <p className="text-gray-700 max-w-3xl mx-auto text-lg mb-12 leading-relaxed">
          See what our customers are saying and get in touch with us for fast and reliable service.
        </p>

        {/* GRID: Testimonials Left + Contact Right */}
        <div className="grid gap-10 md:grid-cols-2">

          {/* ✅ Testimonials */}
          <div className="grid gap-6">
            {/* Review #1 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-left">
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                "FXT repaired our refrigerator the same day! Honest, fast, and professional. Highly recommend!"
              </p>
              <h4 className="font-bold text-[#B71C1C]">— Sarah M.</h4>
            </div>

            {/* Review #2 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-left">
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                "Great service and fair pricing. Technician explained everything clearly. Would hire again!"
              </p>
              <h4 className="font-bold text-[#B71C1C]">— David R.</h4>
            </div>

            {/* Review #3 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-left">
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                "Washer works like brand new now! FXT delivered a 5-star experience from start to finish."
              </p>
              <h4 className="font-bold text-[#B71C1C]">— Emily S.</h4>
            </div>
          </div>

          {/* ✅ Contact Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[#B71C1C] mb-3">Contact FXT</h3>
            <p className="text-gray-700 mb-6">
              Reach out today — we’re here to help with all your appliance repair needs.
            </p>

            <p className="text-gray-700 text-lg mb-2">
              <strong>Phone:</strong> (978) 609-3758
            </p>
            <p className="text-gray-600 text-sm mb-6">
              Mon–Sat: 8AM–6PM<br />Sunday: Closed
            </p>

            <a
              href="tel:9786093758"
              className="inline-block bg-gradient-to-r from-[#8A1616] to-[#B71C1C] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:from-[#7d1212] hover:to-[#a31414] transition"
            >
              Call Now »
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
