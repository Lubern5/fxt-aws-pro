"use client";

import { useEffect } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const DRAWER_MS = 380;
  const EASE_GLIDE: number[] = [0.22, 1, 0.36, 1]; // original glide easing
  const STAGGER = 0.08;

  const LINKS: { label: string; href: string }[] = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Why Choose Us", href: "/#why-us" },
    { label: "About", href: "/#about" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Contact", href: "/#contact" },
  ];

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const backdropVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  } as Variants;

  const drawerVariants = {
    initial: { x: "100%" },
    animate: {
      x: 0,
      transition: { duration: DRAWER_MS / 1000, ease: EASE_GLIDE as any },
    },
    exit: {
      x: "100%",
      transition: { duration: DRAWER_MS / 1000, ease: EASE_GLIDE as any },
    },
  } as Variants;

  const listVariants = {
    initial: {},
    animate: {
      transition: { staggerChildren: STAGGER, delayChildren: 0.38 },
    },
    exit: {
      transition: { staggerDirection: -1, staggerChildren: 0.05 },
    },
  } as Variants;

  const itemVariants = {
    initial: { opacity: 0, y: 8 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.22, ease: "easeOut" as any },
    },
    exit: {
      opacity: 0,
      y: 6,
      transition: { duration: 0.18, ease: "easeIn" as any },
    },
  } as Variants;

  const ctaDelay = 0.38 + LINKS.length * STAGGER + 0.06;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            variants={backdropVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={onClose}
          />

          <motion.aside
            key="drawer"
            className="fixed top-0 right-0 z-50 h-full w-[85%] max-w-xs bg-white shadow-xl"
            variants={drawerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="flex h-full flex-col py-8 px-6">
              <div className="flex flex-col items-center gap-2 mb-8">
                <img
                  src="/images/FXT-Picsart-BackgroundRemover.jpeg"
                  alt="FXT Logo"
                  className="h-14 w-14 rounded-full object-cover"
                />
                <span className="text-lg font-semibold text-gray-900">
                  FXT Repair
                </span>
              </div>

              <motion.span
                className="text-xs tracking-widest text-gray-500 mb-3"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.32, duration: 0.2 } }}
                exit={{ opacity: 0, y: 4, transition: { duration: 0.18 } }}
              >
                MENU
              </motion.span>

              <motion.nav
                className="flex flex-col gap-5 text-[1.05rem] font-medium text-gray-800"
                variants={listVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {LINKS.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    variants={itemVariants}
                    className="hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      onClose();
                      setTimeout(() => {
                        if (link.href.startsWith("/#")) {
                          const id = link.href.replace("/#", "");
                          const el = document.getElementById(id);
                          if (el) {
                            const yOffset = -70;
                            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                            window.scrollTo({ top: y, behavior: "smooth" });
                            return;
                          }
                          window.location.href = link.href;
                        } else {
                          window.location.href = link.href;
                        }
                      }, DRAWER_MS + 40);
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.nav>

              <motion.div
                className="mt-10 border-t border-gray-200 pt-6"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0, transition: { delay: ctaDelay, duration: 0.22 } }}
                exit={{ opacity: 0, y: 6, transition: { duration: 0.18 } }}
              >
                <a
                  href="https://pro.housecallpro.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-primary text-white py-2.5 rounded-lg font-semibold hover:bg-primary-dark transition"
                >
                  Book Appointment
                </a>
              </motion.div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
