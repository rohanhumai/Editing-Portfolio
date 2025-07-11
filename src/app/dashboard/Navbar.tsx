"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-black hover:text-gray-600">
          NightMare Edits
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center text-lg hover:text-black">
          <NavLink href="/" label="Home" />
          <NavLink href="https://www.youtube.com/@nightmareditzz69" label="About" />
          <NavLink href="/Creations" label="Creations" />
          <Link
            href="/pricing"
            className="bg-black text-white px-6 py-3 rounded hover:bg-white hover:text-black text-center transition text-lg"
          >
            Join Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black focus:outline-none hover:text-black"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-3 px-2">
          <NavLink href="/dashboard" label="Home" />
          <NavLink href="https://www.youtube.com/@nightmareditzz69" label="About" />
          <NavLink href="/Creations" label="Creations" />
          <Link
            href="/pricing"
            className="bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black text-center transition"
          >
            Join Us
          </Link>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-black hover:text-gray-700 transition-colors"
    >
      {label}
    </Link>
  );
}
