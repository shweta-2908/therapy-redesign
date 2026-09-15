"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-brand-bg)]/90 backdrop-blur-md border-b border-[var(--color-brand-surface)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-semibold tracking-wide text-[var(--color-brand-primary)]"
        >
          Dr. Maya Reynolds, PsyD
        </Link>
        <div className="hidden md:flex space-x-8 items-center text-sm font-medium text-[var(--color-brand-primary)]">
          <Link
            href="#services"
            className="hover:text-[var(--color-brand-accent)] transition"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="hover:text-[var(--color-brand-accent)] transition"
          >
            About
          </Link>
          <Link
            href="#office"
            className="hover:text-[var(--color-brand-accent)] transition"
          >
            Our Office
          </Link>
          <Link
            href="#faq"
            className="hover:text-[var(--color-brand-accent)] transition"
          >
            FAQs
          </Link>
          <a
            href="#contact"
            className="bg-[var(--color-brand-accent)] hover:bg-[var(--color-brand-accent-hover)] text-white px-5 py-2.5 rounded-md transition shadow-sm"
          >
            Book Consultation
          </a>
        </div>
        <button
          className="md:hidden text-[var(--color-brand-primary)]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col space-y-4 bg-[var(--color-brand-bg)] border-b border-[var(--color-brand-surface)]">
          <Link href="#services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link href="#about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="#office" onClick={() => setIsOpen(false)}>
            Our Office
          </Link>
          <Link href="#faq" onClick={() => setIsOpen(false)}>
            FAQs
          </Link>
          <a
            href="#contact"
            className="bg-[var(--color-brand-accent)] text-white text-center py-2.5 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Book Consultation
          </a>
        </div>
      )}
    </nav>
  );
}
