import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FXT Appliance Repair",
  description:
    "Professional appliance repair services with trusted experts — book fast and reliable service today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white flex flex-col">
        {/* Global Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="pt-20 flex-1">{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
