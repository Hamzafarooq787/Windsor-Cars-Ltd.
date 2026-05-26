"use client";

import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const testimonialContainerRef = useRef<HTMLDivElement>(null);

  const scrollTestimonials = (direction: number) => {
    if (testimonialContainerRef.current) {
      const scrollAmount = 300;
      testimonialContainerRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section – Form centered, no header overlap */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-deep-navy pt-20 md:pt-24">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-70"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqxSB0j6wsGemYcP9BNG3xIYQtf_Y_2ESTxUSiqcAw-CuBD8HplaeQ-n0NwcE784P6kHtXeSSQoTzir_s8U5qZ4DLcC89p4dHUG6AzmaCMhqPg4cfOveqRIIMO6BJqrPTuZ39UHkOlx6qSw4b-BObACBtY5nqM5IqyWgyfyYlAGmGgMfvMZGvDtfIxZ4LwvyIOYL-_TOx4ubFxbX9fTUsXldI8G6UYLQmUt-V51vpRrmkZ_qQAaLUQNxN2r7dH_KGP-pBTo8yeVX4i"
              alt="Luxury car at sunset"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/80 to-transparent"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center">

              {/* Left Text Content */}
              <div className="flex-1 text-center lg:text-left space-y-5 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                  Luxury Executive Travel &amp; Airport Transfers
                </h1>
                <p className="text-base sm:text-lg opacity-90 text-white max-w-lg mx-auto lg:mx-0">
                  Founded 1991. Over 250 cars and 3,000+ weekly airport transfers. 24/7 service with no extra charges after midnight.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <button className="bg-primary text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:scale-105 transition-transform">
                    Quick Quote
                  </button>
                  <button className="border-2 border-white text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-white/10 transition-all">
                    View Our Fleet
                  </button>
                </div>
              </div>

              {/* Booking Form – Centered, compact, and properly aligned */}
              <div className="w-full max-w-md sm:max-w-sm bg-white rounded-xl p-5 sm:p-6 shadow-xl text-gray-800">
                <h2 className="text-lg sm:text-xl font-bold text-deep-navy mb-4">Book Your Journey</h2>
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-1.5">Pick Up Location</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl">location_on</span>
                      <input
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-300 bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                        type="text"
                        placeholder="Enter pickup address"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-1.5">Drop Off Location</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl">location_on</span>
                      <input
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-300 bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                        type="text"
                        placeholder="Enter destination"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold mb-1.5">Pickup Date</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl">calendar_today</span>
                        <input
                          className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-300 bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                          type="date"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold mb-1.5">Pickup Time</label>
                      <div className="flex gap-2">
                        <select
                          className="w-1/2 p-2.5 rounded-lg border border-gray-300 bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                          defaultValue="HH"
                        >
                          <option disabled value="HH">HH</option>
                          {[...Array(24)].map((_, i) => (
                            <option key={i}>{i.toString().padStart(2, "0")}</option>
                          ))}
                        </select>

                        <select
                          className="w-1/2 p-2.5 rounded-lg border border-gray-300 bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                          defaultValue="MM"
                        >
                          <option disabled value="MM">MM</option>
                          {["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"].map((m) => (
                            <option key={m}>{m}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 pt-1">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                      <span className="text-xs sm:text-sm font-medium">Return</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                      <span className="text-xs sm:text-sm font-medium">Add Via</span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-2.5 rounded-lg font-bold hover:brightness-110 active:scale-[0.99] transition-all mt-2 text-sm"
                  >
                    Get a Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Row – Responsive */}
        <section className="bg-primary py-10 sm:py-12 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8 text-center">
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold">250+</div>
                <div className="text-xs sm:text-sm uppercase tracking-wider opacity-80">Vehicles</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold">3,000+</div>
                <div className="text-xs sm:text-sm uppercase tracking-wider opacity-80">Weekly Transfers</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold">24/7</div>
                <div className="text-xs sm:text-sm uppercase tracking-wider opacity-80">Service</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold">1991</div>
                <div className="text-xs sm:text-sm uppercase tracking-wider opacity-80">Founded</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Bento Grid – Responsive heights */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-12 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deep-navy mb-3 sm:mb-4">Our Professional Services</h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Experience unrivaled chauffeur services tailored to your specific needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-fr">
              <div className="md:col-span-8 relative group overflow-hidden rounded-xl shadow-lg h-72 md:h-auto min-h-[280px]">
                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv1Ul70_NBTVSmeOxm1YOmR2wlXT_gIvMr1FY2Hq2CBk5q0Ocjfg99f3yNfjUHs1RvHc7-Jm0ORB24c3BRpE6cJ9-xAGOaeyoS_L4FOYcXsrkS8Sk0GvXN5XMVShRqDRgH-1FWBhB0EXjixy1YhXbcHwBF2j__kkqIWifDj7P0GHVTQ2q_Dq39yVcngjr22fJIKTULvzpJgU3_V_FUf1elFxZvCVWjyKzw84Hr59s2WsOxDVn_j5zEZg8qC7tgpzU0FEKWbT8a1S5F" alt="Mercedes interior" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/40 to-transparent"></div>
                <div className="absolute bottom-0 p-4 sm:p-6 text-white">
                  <span className="material-symbols-outlined text-3xl sm:text-4xl mb-2 block" style={{ fontVariationSettings: "'FILL' 1" }}>flight_takeoff</span>
                  <h3 className="text-xl sm:text-2xl font-bold mb-1">Airport Transfers</h3>
                  <p className="text-sm sm:text-base opacity-80 max-w-md">Real-time flight monitoring and meet-and-greet at all major London airports.</p>
                  <a href="#" className="mt-3 inline-flex items-center gap-1 text-primary-fixed hover:underline text-sm">Learn More <span className="material-symbols-outlined text-base">arrow_forward</span></a>
                </div>
              </div>
              <div className="md:col-span-4 relative group overflow-hidden rounded-xl shadow-lg h-72 md:h-auto min-h-[280px]">
                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDspdMsrbcnhMt5Dc_5MWCMCm-0q7PUJ_spFy76rdiehsuQ6BNkd1HP5eMSJFFBjldsQL78StEFbKAOQy016YhU4Tbe4DSCFBorh8_BFna2LimDTfRbau2evRNOGA2N1YJSLILNwsso5ibnxgEiVy1tZbc5865a4JXlrIX6jpa2fm5Y4p8mj7FAs87myv9uavl5EAiNMnUOJLkhpXcqgJFrglQoluFpPBaTXCP1qR7VKtlj-KtLZdPkRA9yf2iXN9KdkPbivdAuixjC" alt="Chauffeur" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 to-transparent"></div>
                <div className="absolute bottom-0 p-4 sm:p-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1">Executive Travel</h3>
                  <p className="text-sm sm:text-base opacity-80">Premium corporate solutions for busy professionals.</p>
                </div>
              </div>
              <div className="md:col-span-4 relative group overflow-hidden rounded-xl shadow-lg h-72 md:h-auto min-h-[280px]">
                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-s1IHiAkjNJjti0uNWyWgMQiXTVgvD_Eo5iEOA6I5cL2g2wG8bjbTcD0Eilr-Pr4TrLN4Kch3Tc95w4j4YzOdgtE94Dkvoqr2t0LSyiIvekWF0UeJM7uxCIdj7edcpRMLD_D_nqiw43AaADHLh4sNdiomTWcHAChTBsoryCVSzOveJazRrl3xlg_eFcbrUiSRulxBf1e1tOwKyp74PEua66omfHE2dnSFhYbmIVWZNWfIecWMnNK6MNAAabMbBag4e981UcqLL-nK" alt="London bridge" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 to-transparent"></div>
                <div className="absolute bottom-0 p-4 sm:p-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1">London City</h3>
                  <p className="text-sm sm:text-base opacity-80">Navigate the city in unparalleled comfort and style.</p>
                </div>
              </div>
              <div className="md:col-span-8 relative group overflow-hidden rounded-xl shadow-lg h-72 md:h-auto min-h-[280px]">
                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlgq81HJ1I3xlLpkEi-Q4QiiB6qnDJttbAzqZjAG8-9bzfRlM0M6iX01igr-JeVFN6ajL2mnqDfl-n3arW2DlT_LfPvw_NaqrzTG9xrMJAWhD3PdQUT49Brp-kXazTuetGZbRQOzro2VpHYQAGe2nh5ZL060p6DpZ5drzavUXJIEtkEE9sawA2M4A24gKx_j3lx8Z6YtATjnxwsjNjUcSbENgX1xnQYyclT9Iu72pPzbmu_dkcYyifh_bTdTxdV2ppH2YVx_thIYCG" alt="Wedding car" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 to-transparent"></div>
                <div className="absolute bottom-0 p-4 sm:p-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1">Weddings</h3>
                  <p className="text-sm sm:text-base opacity-80 max-w-lg">Bespoke wedding car hire to make your special day even more memorable.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us – Responsive cards */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-12 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deep-navy mb-3 sm:mb-4">Why Choose Us</h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Setting the standard in luxury ground transportation.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "schedule", title: "24/7 Availability", desc: "Always ready for your journey, day or night." },
                { icon: "verified_user", title: "Professional Chauffeurs", desc: "CRB-checked and meticulously trained." },
                { icon: "sell", title: "Fixed Pricing", desc: "No hidden costs or midnight surcharges." },
                { icon: "directions_car", title: "Bespoke Service", desc: "Tailored travel solutions for every requirement." },
              ].map((item) => (
                <div key={item.title} className="p-5 sm:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow bg-gray-50">
                  <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl mb-3 block">{item.icon}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-deep-navy mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Carousel – Improved touch scroll */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-between items-end mb-8 sm:mb-12 gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deep-navy">What Our Clients Say</h2>
                <p className="text-base sm:text-lg text-gray-600">Trusted by thousands of regular travelers across the UK.</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 sm:p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-all" onClick={() => scrollTestimonials(-1)}>
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="p-2 sm:p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-all" onClick={() => scrollTestimonials(1)}>
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
            <div ref={testimonialContainerRef} className="flex gap-5 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4">
              {[
                { initials: "JD", name: "James Davidson", role: "Corporate Traveler", text: "Exceptional service. The driver was 10 minutes early, incredibly professional, and the car was spotless. Windsor Cars is now my go-to for all airport runs." },
                { initials: "SH", name: "Sarah Hughes", role: "Private Client", text: "We used them for our wedding and couldn't have been happier. The timing was perfect, and the service was truly royal. Highly recommend!" },
                { initials: "MK", name: "Marcus Knight", role: "CEO, Knight Tech", text: "Punctuality is vital for my business trips. Windsor Cars has never failed me. Their 24/7 support is top-notch." },
              ].map((t, i) => (
                <div key={i} className="min-w-[280px] sm:min-w-[350px] snap-start p-5 sm:p-6 bg-gray-100 rounded-xl border border-gray-200 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, s) => (
                        <span key={s} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 italic">"{t.text}"</p>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm sm:text-base">{t.initials}</div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-deep-navy">{t.name}</h4>
                      <p className="text-xs sm:text-sm opacity-60">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App Download Banner – Responsive stacking */}
        <section className="py-12 sm:py-16 bg-deep-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 sm:space-y-6 text-white text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Booking made easier with our mobile app</h2>
              <p className="text-sm sm:text-base opacity-80 max-w-xl mx-auto md:mx-0">Track your driver in real-time, manage bookings on the go, and receive instant receipts. Available for iOS and Android.</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <a href="#" className="bg-black border border-gray-600 rounded-xl px-4 py-2 flex items-center gap-2 hover:bg-black/80 transition-all">
                  <span className="material-symbols-outlined text-2xl">phone_iphone</span>
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold leading-tight">Download on the</p>
                    <p className="text-sm sm:text-base font-bold leading-tight">App Store</p>
                  </div>
                </a>
                <a href="#" className="bg-black border border-gray-600 rounded-xl px-4 py-2 flex items-center gap-2 hover:bg-black/80 transition-all">
                  <span className="material-symbols-outlined text-2xl">android</span>
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold leading-tight">Get it on</p>
                    <p className="text-sm sm:text-base font-bold leading-tight">Google Play</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="relative w-full max-w-[240px] sm:max-w-sm md:max-w-md">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
              <img className="relative z-10 w-full rounded-2xl shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3QuQBM4P8nx7Ah7VDko2vPbhQGS9LIUQ1IOLp6QyswxvyLxkVJBrrAsb1UZjRU1pKccN09ABWCjYwZj-oh3yaRjaPTcnO6gYeZEtizvsbm_qWDnB03Z-ZCKMxeq7NRavagYCplNPPAiZCqSlROlKmYaVfQG50JIlfcxjjtNrIX0jpdenx-D8BHptFNtFK58Xb9McnYMZuu9A1TDAxboJsdcYjiPeF6uYHPmQg0OF-Iz7sWdZUk2EURhxpP5ChLu4ihVBcMFciPXJZ" alt="App mockup" />
            </div>
          </div>
        </section>

        {/* FAQ – Responsive spacing */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-12 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deep-navy">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "How do I book a vehicle?", a: "You can book online via our website, through our mobile app, or by calling our 24/7 dispatch center." },
                { q: "Do you offer airport meet and greet?", a: "Yes, our chauffeurs provide a professional meet and greet service at all major UK airports." },
                { q: "Are there extra charges for late-night bookings?", a: "No, Windsor Cars Ltd operates with transparent pricing and no extra charges for bookings after midnight." },
                { q: "What is your cancellation policy?", a: "We offer flexible cancellations; please refer to our Terms of Service for specific timeframes." },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-gray-50 transition-colors group"
                    onClick={(e) => {
                      const content = e.currentTarget.nextElementSibling;
                      content?.classList.toggle("hidden");
                    }}
                  >
                    <span className="font-bold text-deep-navy text-sm sm:text-base">{item.q}</span>
                    <span className="material-symbols-outlined transition-transform">expand_more</span>
                  </button>
                  <div className="hidden p-4 sm:p-5 pt-0 border-t border-gray-100 text-sm sm:text-base text-gray-700">{item.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}