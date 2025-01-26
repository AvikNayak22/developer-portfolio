"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gray-900 border-b border-gray-800">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-emerald-500">
            AN
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-emerald-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-emerald-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FiMenu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-300 hover:text-emerald-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
