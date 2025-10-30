"use client";

import { useEffect } from "react";

export default function Services() {
  // Keep your original reveal animations
  useEffect(() => {
    const revealTargets = document.querySelectorAll(".service, .about-text, .services-image");

    const handleRevealOnScroll = () => {
      revealTargets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("visible");
          (el as HTMLElement).style.transition = "opacity 0.8s ease, transform 0.8s ease";
        }
      });
    };

    window.addEventListener("scroll", handleRevealOnScroll);
    handleRevealOnScroll();

    return () => window.removeEventListener("scroll", handleRevealOnScroll);
  }, []);

  return (
    <section id="services" className="services">
      <div className="services-header">
        <img src="/images/car2.jpeg" alt="FXT Logo Left" className="services-logo" />
        <h2>Our Professional Services</h2>
        <img src="/images/car2.jpeg" alt="FXT Logo Right" className="services-logo" />
      </div>

      <p className="services-intro about-text">
        Expert repairs for all major household appliances — fast, reliable, and built to last.
      </p>

      <div className="service-grid">
        <div className="service">
          <img src="/images/Fridge.jpg" alt="Refrigerator Repair" />
          <h3><i className="fas fa-snowflake"></i> Refrigerator Repair</h3>
          <p>We handle temperature issues, leaks, and noises — restoring efficiency and peace of mind.</p>
        </div>

        <div className="service">
          <img src="/images/stove.avif" alt="Oven & Stove Repair" />
          <h3><i className="fas fa-fire"></i> Oven & Stove Repair</h3>
          <p>From gas to electric systems, we ensure your kitchen appliances perform at peak precision.</p>
        </div>

        <div className="service">
          <img src="/images/washer.jpg" alt="Washer & Dryer Repair" />
          <h3><i className="fas fa-water"></i> Washer & Dryer Repair</h3>
          <p>We eliminate leaks, clogs, and spin cycle issues to keep your laundry days stress-free.</p>
        </div>

        <div className="service">
          <img src="/images/dishwasher.jpg" alt="Dishwasher Repair" />
          <h3><i className="fas fa-utensils"></i> Dishwasher Repair</h3>
          <p>From poor drainage to stuck cycles, we restore performance so your dishes sparkle every time.</p>
        </div>
      </div>
    </section>
  );
}
