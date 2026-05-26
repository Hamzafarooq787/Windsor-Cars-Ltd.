"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Fleet", path: "/fleet" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-surface py-4"
      }`}
    >
      <nav className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto">
        <Link href="/" className="flex items-center gap-4">
          <span className="text-headline-md font-bold text-primary dark:text-primary-fixed">
            Windsor Cars Ltd.
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`font-label-lg text-label-lg transition-colors duration-200 ${
                  isActive
                    ? "text-primary font-bold border-b-2 border-primary pb-1"
                    : "text-on-surface-variant font-medium hover:text-primary-container"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <Link
          href="/book"
          className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-lg font-bold hover:bg-primary-container transition-all active:opacity-80"
        >
          Book Now
        </Link>
      </nav>
    </header>
  );
}