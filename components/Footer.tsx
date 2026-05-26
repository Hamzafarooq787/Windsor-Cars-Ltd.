// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-deep-navy text-primary-fixed pt-16 pb-8 border-t border-white/10">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        {/* 5-column responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6 lg:gap-8 mb-12">
          {/* Column 1: Company info + social */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-headline-md text-white font-bold">Windsor Cars Ltd.</span>
            </div>
            <p className="font-body-md opacity-70">
              Providing premium executive travel and airport transfer solutions since 1991.
              Quality, reliability, and professionalism at every mile.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all">
                <span className="material-symbols-outlined text-white">social_leaderboard</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all">
                <span className="material-symbols-outlined text-white">public</span>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-headline-md">Services</h4>
            <ul className="space-y-3 font-body-md">
              <li><a href="#" className="hover:text-white transition-colors">Airport Transfers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Executive Travel</a></li>
              <li><a href="#" className="hover:text-white transition-colors">London City Travel</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wedding Cars</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Corporate Accounts</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-headline-md">Quick Links</h4>
            <ul className="space-y-3 font-body-md">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Fleet</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
            </ul>
          </div>

          {/* Column 4: Address & Contact */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-headline-md">Contact Us</h4>
            <div className="space-y-4 font-body-md">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-fixed">location_on</span>
                <div>
                  <p>Windsor Cars Ltd.</p>
                  <p>1st Floor Hardware House</p>
                  <p>Datchet, Slough</p>
                  <p>SL3 9BJ</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-fixed">call</span>
                <a href="tel:+441753677677" className="hover:text-white transition-colors">01753 677 677</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-fixed">mail</span>
                <a href="mailto:bookings@windsorcars.com" className="hover:text-white transition-colors">bookings@windsorcars.com</a>
              </div>
            </div>
          </div>

          {/* Column 5: Download our app */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-headline-md">Download our app</h4>
            <p className="font-body-md opacity-80">Book faster on the go with our mobile app.</p>
            <div className="flex flex-col sm:flex-row md:flex-col gap-4">
              <a
                href="#"
                className="bg-black border border-gray-600 rounded-xl px-4 py-2 flex items-center gap-3 hover:bg-black/80 transition-all w-fit"
              >
                <span className="material-symbols-outlined text-2xl">phone_iphone</span>
                <div>
                  <p className="text-[10px] uppercase font-bold leading-tight">Download on the</p>
                  <p className="text-base font-bold leading-tight">App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="bg-black border border-gray-600 rounded-xl px-4 py-2 flex items-center gap-3 hover:bg-black/80 transition-all w-fit"
              >
                <span className="material-symbols-outlined text-2xl">android</span>
                <div>
                  <p className="text-[10px] uppercase font-bold leading-tight">Get it on</p>
                  <p className="text-base font-bold leading-tight">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 font-label-md opacity-60">
          <p>© {new Date().getFullYear()} Windsor Cars Ltd. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}