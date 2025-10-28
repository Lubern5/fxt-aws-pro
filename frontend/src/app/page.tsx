"use client";

import { motion } from "framer-motion";
import Services from "@/components/Services";
import About from "@/components/About";
import TestimonialsContact from "@/components/Testimonials";

// ✅ Force Amplify + Next.js to treat this page as dynamic (SSR)
export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">

      {/* ========================= HERO SECTION ========================= */}
      <section
        className="relative h-[90vh] w-full bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/hero1.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center max-w-3xl px-6"
        >
          <h1 className="text-[34px] md:text-[49px] font-extrabold leading-tight">
            Reliable Appliance Repairs You
            <br className="hidden md:block" /> Can Trust
          </h1>

          <p className="mt-4 text-[15px] md:text-[18px] text-gray-200 max-w-2xl mx-auto">
            Professional, timely, and cost-effective solutions for refrigerators, ovens,
            washers, and more — ensuring your home runs smoothly.
          </p>

          {/* CTA Button */}
          <a
            href="https://pro.housecallpro.com/app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3 mt-8 text-lg font-semibold shadow-[0_6px_20px_rgba(0,0,0,0.35)] bg-gradient-to-r from-[#8A1616] to-[#B71C1C] hover:from-[#7b1212] hover:to-[#a41414] transition"
          >
            Schedule Appointment <span className="text-[20px]">»</span>
          </a>
        </motion.div>

        {/* Floating Call Button */}
        <a
          href="tel:9786093758"
          className="absolute left-4 bottom-4 md:left-8 md:bottom-8 h-14 w-14 rounded-full bg-[#B71C1C] shadow-lg grid place-items-center hover:bg-[#8A1616] transition"
        >
          <span className="text-2xl">📞</span>
        </a>
      </section>

      {/* ========================= SERVICES SECTION ========================= */}
      <Services />

      {/* ========================= ABOUT SECTION ========================= */}
      <About />

      {/* ========================= TESTIMONIALS + CONTACT ========================= */}
      <TestimonialsContact />
    </div>
  );
}
