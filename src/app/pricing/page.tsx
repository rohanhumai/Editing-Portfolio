"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-white hover:text-pink-400 transition-colors text-base font-medium"
    >
      {label}
    </Link>
  );
}

export default function PricingPage() {
  const [isOpen, setIsOpen] = useState(false);

  const plans = [
    {
      title: "Basic",
      price: "₹500",
      features: ["1 Edit", "HD Quality", "Basic Sync"],
      gradient: "from-gray-700 to-gray-900",
    },
    {
      title: "Pro",
      price: "₹1,500",
      features: ["3 Edits", "4K Quality", "Beat Sync + Transitions"],
      gradient: "from-purple-600 to-indigo-800",
    },
    {
      title: "Elite",
      price: "₹3,000",
      features: [
        "5+ Edits",
        "4K + Color Grading",
        "Motion Blur",
        "Trend Optimization"
      ],
      gradient: "from-pink-600 to-red-700",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent"
          >
            NightMare Edits
          </Link>

          <div className="hidden md:flex items-center gap-6 text-white">
            <NavLink href="/" label="Home" />
            <NavLink href="https://www.youtube.com/@nightmareditzz69" label="About" />
            <NavLink href="/Creations" label="Creations" />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-gray-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-black/90 px-4 pb-4 flex flex-col gap-3">
            <NavLink href="/" label="Home" />
            <NavLink href="https://www.youtube.com/@nightmareditzz69" label="About" />
            <NavLink href="/Creations" label="Creations" />
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-32 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Choose Your Plan
        </h1>
        <p className="text-gray-400 text-lg md:text-xl">
          Unlock premium cinematic edits tailored to your vibe.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className={`rounded-2xl p-6 shadow-xl bg-gradient-to-br ${plan.gradient} border border-white/10 hover:scale-105 transition-transform`}
          >
            <h2 className="text-2xl font-semibold mb-2 text-white">
              {plan.title}
            </h2>
            <p className="text-4xl font-bold mb-6 text-white">{plan.price}</p>
            <ul className="space-y-3 text-gray-200 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i}>✅ {feature}</li>
              ))}
            </ul>
            <Button className="w-full bg-white text-black hover:bg-gray-300 font-semibold cursor-pointer">
              Book Now
            </Button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-20 py-8 text-center text-sm text-gray-500 border-t border-white/10">
        © {new Date().getFullYear()} NightMare Edits. All rights reserved.
      </footer>
    </div>
  );
}
