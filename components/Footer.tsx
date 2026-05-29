import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-primary-fixed pt-12 sm:pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* 5-column responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6 lg:gap-8 mb-10 sm:mb-12">
          {/* Column 1: Company info + social */}
          <div className="sm:col-span-2 md:col-span-1 space-y-4 sm:space-y-6">
            <div className="flex items-center">
              <span className="text-lg font-bold text-white">Windsor Cars Ltd.</span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Providing premium executive travel and airport transfer solutions since 1991.
              Quality, reliability, and professionalism at every mile.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all"
                aria-label="Facebook"
              >
                <span className="material-symbols-outlined text-white text-sm">social_leaderboard</span>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all"
                aria-label="Twitter"
              >
                <span className="material-symbols-outlined text-white text-sm">public</span>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-4 sm:space-y-5">
            <h4 className="text-white font-bold text-sm sm:text-base">Services</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li><Link href="/services" className="opacity-70 hover:opacity-100 hover:text-white transition-all">Airport Transfers</Link></li>
              <li><Link href="/services" className="opacity-70 hover:opacity-100 hover:text-white transition-all">Executive Travel</Link></li>
              <li><Link href="/services" className="opacity-70 hover:opacity-100 hover:text-white transition-all">London City Travel</Link></li>
              <li><Link href="/services" className="opacity-70 hover:opacity-100 hover:text-white transition-all">Wedding Cars</Link></li>
              <li><Link href="/contact" className="opacity-70 hover:opacity-100 hover:text-white transition-all">Corporate Accounts</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4 sm:space-y-5">
            <h4 className="text-white font-bold text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li><Link href="/about" className="opacity-70 hover:opacity-100 hover:text-white transition-all">About Us</Link></li>
              <li><Link href="/fleet" className="opacity-70 hover:opacity-100 hover:text-white transition-all">Our Fleet</Link></li>
              <li><Link href="/contact" className="opacity-70 hover:opacity-100 hover:text-white transition-all">Contact Us</Link></li>
              <li><Link href="/" className="opacity-70 hover:opacity-100 hover:text-white transition-all">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 4: Address & Contact */}
          <div className="space-y-4 sm:space-y-5">
            <h4 className="text-white font-bold text-sm sm:text-base">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-fixed text-base flex-shrink-0 mt-0.5">location_on</span>
                <div className="opacity-70">
                  <p>Windsor Cars Ltd.</p>
                  <p>1st Floor Hardware House</p>
                  <p>Datchet, Slough</p>
                  <p>SL3 9BJ</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-fixed text-base flex-shrink-0">call</span>
                <a href="tel:+441753677677" className="opacity-70 hover:opacity-100 hover:text-white transition-all">01753 677 677</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-fixed text-base flex-shrink-0">mail</span>
                <a href="mailto:bookings@windsorcars.com" className="opacity-70 hover:opacity-100 hover:text-white transition-all break-all">bookings@windsorcars.com</a>
              </div>
            </div>
          </div>

          {/* Column 5: Download our app */}
          <div className="space-y-4 sm:space-y-5">
            <h4 className="text-white font-bold text-sm sm:text-base">Download our app</h4>
            <p className="text-sm opacity-70">Book faster on the go with our mobile app.</p>
            <div className="flex flex-row sm:flex-col gap-3">
              <a
                href="#"
                className="bg-black border border-gray-600 rounded-xl px-3 py-2 flex items-center gap-2 hover:bg-black/80 transition-all w-fit"
              >
                <span className="material-symbols-outlined text-xl">phone_iphone</span>
                <div>
                  <p className="text-[9px] uppercase font-bold leading-tight">Download on the</p>
                  <p className="text-sm font-bold leading-tight">App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="bg-black border border-gray-600 rounded-xl px-3 py-2 flex items-center gap-2 hover:bg-black/80 transition-all w-fit"
              >
                <span className="material-symbols-outlined text-xl">android</span>
                <div>
                  <p className="text-[9px] uppercase font-bold leading-tight">Get it on</p>
                  <p className="text-sm font-bold leading-tight">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs sm:text-sm opacity-60">
          <p>© {new Date().getFullYear()} Windsor Cars Ltd. All rights reserved.</p>
          <a
            href="https://linkedo.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 hover:text-white transition-all"
          >
            Designed by Linkedo
          </a>
        </div>
      </div>
    </footer>
  );
}
