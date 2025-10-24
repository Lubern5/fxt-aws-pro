"use client";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-sm shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        <h3 className="text-xl font-semibold mb-2 text-primary">Contact FXT</h3>
        <p className="text-sm text-gray-700 mb-4">
          Call us during business hours, and we'll be happy to assist you.
        </p>

        <div className="space-y-3">
          <p><strong>Phone:</strong> (555) 123-4567</p>
          <p><strong>Hours:</strong> Mon–Sat 8AM–6PM<br />Sun Closed</p>
        </div>

        <a
          href="tel:5551234567"
          className="mt-5 block text-center bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary-dark transition"
        >
          Call Now
        </a>
      </div>
    </div>
  );
}
