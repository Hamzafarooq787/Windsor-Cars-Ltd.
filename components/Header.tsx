"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Fleet", path: "/fleet" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-deep-navy/95 backdrop-blur-sm shadow-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center w-full px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto py-4 sm:py-5">
        <Link href="/" className="flex items-center flex-shrink-0">
          <img
            src="/Windsor Cars ltd logo.webp"
            alt="Windsor Cars Ltd."
            className="h-12 sm:h-14 w-auto object-contain"
            style={{ aspectRatio: "auto" }}
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-all duration-200 relative group ${
                  isActive ? "text-white font-bold" : "text-white/80 hover:text-white"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* Phone on desktop */}
          <a
            href="tel:+441753677677"
            className="hidden lg:flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition-colors"
          >
            <span className="material-symbols-outlined text-xl">call</span>
            01753 677 677
          </a>
          <Link
            href="/contact"
            className="bg-primary text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm font-bold hover:bg-primary-container transition-all active:scale-95"
          >
            Book Now
          </Link>
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-white text-2xl">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-deep-navy border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center justify-between px-2 py-4 text-sm font-medium border-b border-white/5 transition-colors ${
                    isActive ? "text-white font-bold" : "text-white/60 hover:text-white"
                  }`}
                >
                  {item.name}
                  <span className="material-symbols-outlined text-white/30 text-base">chevron_right</span>
                </Link>
              );
            })}
            <div className="py-5 flex flex-col gap-3">
              <a
                href="tel:+441753677677"
                className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
              >
                <span className="material-symbols-outlined text-base">call</span>
                01753 677 677
              </a>
              <a
                href="mailto:bookings@windsorcars.com"
                className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
              >
                <span className="material-symbols-outlined text-base">mail</span>
                bookings@windsorcars.com
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
