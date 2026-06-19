import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 pt-14 sm:pt-16 pb-8">

        {/* 5-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-10 sm:mb-12">

          {/* Column 1: Company */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-5">
            <img
              src="/Windsor Cars ltd footer logo.webp"
              alt="Windsor Cars Ltd."
              className="h-12 w-auto object-contain"
              style={{ aspectRatio: "auto" }}
            />
            <p className="text-sm text-white/60 leading-relaxed">
              Premium executive chauffeur and airport transfer services since 1991. Quality, reliability, and professionalism at every mile.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
              >
                <span className="material-symbols-outlined text-white text-base">group</span>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
              >
                <span className="material-symbols-outlined text-white text-base">public</span>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
              >
                <span className="material-symbols-outlined text-white text-base">photo_camera</span>
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Our Fleet", path: "/fleet" },
                { label: "Services", path: "/services" },
                { label: "Contact Us", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="text-white/60 hover:text-white hover:pl-1 transition-all inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                "Airport Transfers",
                "Executive Travel",
                "Wedding Cars",
                "London City Travel",
                "Corporate Events",
                "Special Occasions",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-white/60 hover:text-white hover:pl-1 transition-all inline-block"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Locations */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Locations</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                "Heathrow Airport",
                "Gatwick Airport",
                "Stansted Airport",
                "Windsor & Slough",
                "London (All Areas)",
                "UK-Wide Transfers",
              ].map((l) => (
                <li key={l}>
                  <Link
                    href="/contact"
                    className="text-white/60 hover:text-white hover:pl-1 transition-all inline-block"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-fixed text-base flex-shrink-0 mt-0.5">location_on</span>
                <p className="text-white/60 leading-relaxed">
                  1st Floor Hardware House,<br />Datchet, Slough, SL3 9BJ
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-fixed text-base flex-shrink-0">call</span>
                <a href="tel:+441753677677" className="text-white/60 hover:text-white transition-all">
                  01753 677 677
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-fixed text-base flex-shrink-0">mail</span>
                <a href="mailto:bookings@windsorcars.com" className="text-white/60 hover:text-white transition-all break-all">
                  bookings@windsorcars.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-fixed text-base flex-shrink-0">schedule</span>
                <p className="text-white/60">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Windsor Cars Ltd. All rights reserved.</p>
          <a
            href="https://linkedo.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/80 transition-all"
          >
            Designed by Linkedo
          </a>
        </div>
      </div>
    </footer>
  );
}
