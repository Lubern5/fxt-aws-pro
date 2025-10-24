"use client";

import { useState } from "react";
import ContactPopup from "@/components/ContactPopup";

export default function Contact() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section id="contact" className="contact-section py-16 container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE – BUSINESS INFO */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            Have questions or need to schedule a repair? Reach out to us and our team will respond as soon as possible.
          </p>

          <button
            onClick={() => setPopupOpen(true)}
            className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            📞 Call Now
          </button>
        </div>

        {/* RIGHT SIDE – CONTACT FORM */}
        <div className="bg-white p-6 rounded-xl shadow-soft">
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="form-input" required />
            <input type="email" placeholder="Email" className="form-input" required />
            <input type="tel" placeholder="Phone Number" className="form-input" required />

            <select className="form-input" required>
              <option value="">Select Service Needed</option>
              <option>Refrigerator Repair</option>
              <option>Oven & Stove Repair</option>
              <option>Washer & Dryer Repair</option>
              <option>Dishwasher Repair</option>
            </select>

            <input type="date" className="form-input" required />

            <textarea placeholder="Message" rows={4} className="form-input" />

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <ContactPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </section>
  );
}
