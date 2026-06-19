"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [countStarted, setCountStarted] = useState(false);
  const [counts, setCounts] = useState({ vehicles: 0, transfers: 0, founded: 1980 });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [tripType, setTripType] = useState<"oneway" | "return">("oneway");

  useEffect(() => {
    if (!countStarted) return;
    const duration = 2000;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts({
        vehicles: Math.round(eased * 250),
        transfers: Math.round(eased * 3000),
        founded: Math.round(1980 + eased * 11),
      });
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [countStarted]);

  useEffect(() => {
    const timer = setTimeout(() => setCountStarted(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const marqueeItems = [
    "Airport Transfers",
    "Executive Travel",
    "Wedding Cars",
    "Corporate Events",
    "24/7 Service",
    "Fixed Pricing",
    "CRB Checked Chauffeurs",
    "250+ Premium Vehicles",
    "3000+ Weekly Transfers",
    "Founded 1991",
  ];

  const serviceGridCards = [
    {
      name: "Airport Transfers",
      desc: "Real-time flight monitoring and meet-and-greet at all major London airports.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv1Ul70_NBTVSmeOxm1YOmR2wlXT_gIvMr1FY2Hq2CBk5q0Ocjfg99f3yNfjUHs1RvHc7-Jm0ORB24c3BRpE6cJ9-xAGOaeyoS_L4FOYcXsrkS8Sk0GvXN5XMVShRqDRgH-1FWBhB0EXjixy1YhXbcHwBF2j__kkqIWifDj7P0GHVTQ2q_Dq39yVcngjr22fJIKTULvzpJgU3_V_FUf1elFxZvCVWjyKzw84Hr59s2WsOxDVn_j5zEZg8qC7tgpzU0FEKWbT8a1S5F",
    },
    {
      name: "Executive Travel",
      desc: "Premium corporate solutions for busy professionals.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDspdMsrbcnhMt5Dc_5MWCMCm-0q7PUJ_spFy76rdiehsuQ6BNkd1HP5eMSJFFBjldsQL78StEFbKAOQy016YhU4Tbe4DSCFBorh8_BFna2LimDTfRbau2evRNOGA2N1YJSLILNwsso5ibnxgEiVy1tZbc5865a4JXlrIX6jpa2fm5Y4p8mj7FAs87myv9uavl5EAiNMnUOJLkhpXcqgJFrglQoluFpPBaTXCP1qR7VKtlj-KtLZdPkRA9yf2iXN9KdkPbivdAuixjC",
    },
    {
      name: "Wedding Cars",
      desc: "Bespoke wedding car hire to make your special day even more memorable.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlgq81HJ1I3xlLpkEi-Q4QiiB6qnDJttbAzqZjAG8-9bzfRlM0M6iX01igr-JeVFN6ajL2mnqDfl-n3arW2DlT_LfPvw_NaqrzTG9xrMJAWhD3PdQUT49Brp-kXazTuetGZbRQOzro2VpHYQAGe2nh5ZL060p6DpZ5drzavUXJIEtkEE9sawA2M4A24gKx_j3lx8Z6YtATjnxwsjNjUcSbENgX1xnQYyclT9Iu72pPzbmu_dkcYyifh_bTdTxdV2ppH2YVx_thIYCG",
    },
    {
      name: "London City Travel",
      desc: "Navigate the city in unparalleled comfort and style.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-s1IHiAkjNJjti0uNWyWgMQiXTVgvD_Eo5iEOA6I5cL2g2wG8bjbTcD0Eilr-Pr4TrLN4Kch3Tc95w4j4YzOdgtE94Dkvoqr2t0LSyiIvekWF0UeJM7uxCIdj7edcpRMLD_D_nqiw43AaADHLh4sNdiomTWcHAChTBsoryCVSzOveJazRrl3xlg_eFcbrUiSRulxBf1e1tOwKyp74PEua66omfHE2dnSFhYbmIVWZNWfIecWMnNK6MNAAabMbBag4e981UcqLL-nK",
    },
    {
      name: "Corporate Events",
      desc: "Professional transport solutions for conferences, meetings and corporate hospitality.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDspdMsrbcnhMt5Dc_5MWCMCm-0q7PUJ_spFy76rdiehsuQ6BNkd1HP5eMSJFFBjldsQL78StEFbKAOQy016YhU4Tbe4DSCFBorh8_BFna2LimDTfRbau2evRNOGA2N1YJSLILNwsso5ibnxgEiVy1tZbc5865a4JXlrIX6jpa2fm5Y4p8mj7FAs87myv9uavl5EAiNMnUOJLkhpXcqgJFrglQoluFpPBaTXCP1qR7VKtlj-KtLZdPkRA9yf2iXN9KdkPbivdAuixjC",
    },
    {
      name: "Tourist Day Service",
      desc: "Explore the UK's finest landmarks in absolute luxury with a knowledgeable chauffeur.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv1Ul70_NBTVSmeOxm1YOmR2wlXT_gIvMr1FY2Hq2CBk5q0Ocjfg99f3yNfjUHs1RvHc7-Jm0ORB24c3BRpE6cJ9-xAGOaeyoS_L4FOYcXsrkS8Sk0GvXN5XMVShRqDRgH-1FWBhB0EXjixy1YhXbcHwBF2j__kkqIWifDj7P0GHVTQ2q_Dq39yVcngjr22fJIKTULvzpJgU3_V_FUf1elFxZvCVWjyKzw84Hr59s2WsOxDVn_j5zEZg8qC7tgpzU0FEKWbT8a1S5F",
    },
  ];

  const fleetCars = [
    {
      name: "Mercedes E-Class",
      badge: "Business Class",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_U9cykuhLVDGx4lN9BMYq5MUENudy9UPL07l4SGktbzCQJRwAiD9jVvJUaQ22vOq_dI2a54tTHIhNBlSsotHJqbBFnNJ3oOWKOy99i_Us5wxiyKa7_gXRLPr8vp0lKNSygNVhbRyfI3a93kCALL-KfFiLXQuEs2iRbS6Tek8mWZhoTjWE76sjzbOmLlBors6Gy46YBUs9AJy2GYPF39gGXJaov6HOEe3q1eC6L5YF7UO0Zv9WgMs26Vv9K6J9pWkvRm-s9r0cEYZA",
    },
    {
      name: "Mercedes S-Class",
      badge: "First Class",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXRQJ-tgLOwJlb2X2d0GwjuAB5DSYGGrwSnno5x9TeAx8XWGWZQ3DlyccXcwgnwKI8MoqfhHndaMCuPIPjlUMXLjlrBKnLoaVjOOldX954eB3BV_Hd2jadnEp-z2p8dRNSWpTXBW3sEFZYZBoyaSrKI5LXlYqVFdfcHpmaXw3NjFB4dLuYk2P2dbde9xR-Xa3LJAzjxLVa0-VMgZ0r9xInN27Ee6wP3_v_vtyPUFuRXDJDQOuFagmmZdK4GM4MwytVDGRnw1V1HQpO",
    },
    {
      name: "BMW 5 Series",
      badge: "Business Plus",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbJOdCXtB2_JT6SYgZwZALrst5jQB4NK-UwXobhLjBG_f9qf6TFZkySapnzG7FkXF4FUV-Vn9zSRSoDGWOnngXHPHq1FqFF75w-HpMR5z9WezBf6BbXXhf3Gh5daj-Zggd9XlhVzRq-ZVfKLY9A01IeiUNUEzB7Dk_VhmsA6npXMc531dbc9BpkYpWupI-2dOz1AHyu8NbK3OyWeUTOLB2VL1QaMKW164qG1fRvwPex8tNKK1ZFnc4CFOMeDQI8TUJWIeH08UghOBB",
    },
    {
      name: "Audi A6/A8",
      badge: "Luxury Exec",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC816rp9TcxM0-2nOGsp-eeNtD8IMAdBbCGs8eN1DSiKJQeIUlv0wSlg65PPA6YaBkzb7NTEqzdCfWqkfqShTVqmtT3YH_f914bvIm0gWHj4B9ZC_VxUUzDOuLDygEzuYh6qeHt-Ip7JALVe7uR16zI1E00bch8l-waNVl4-4HOn-Zw-UT5yobq8G6PPe3FElj1yNFszKnfJSVwGsFiaRIlYztU8iZs506Zk3u4ADaC3QZa8oQ-Zxirn8ZRQyBt5yAwwB2bRDjoYjJ0",
    },
    {
      name: "Mercedes V-Class",
      badge: "6-8 Seater MPV",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsOs3L8LlzczKA7umtyWdDg0XH3g-8piwWK-GO_XNiC1C4w4qsoOXRiim0D4tLI5GQ8OTOwHTMaRVUreFXiPdACMiyYseADrFgk595xktKddAFv9Hy7cpz3u5H1zFNx5HtuhOGUELm6a1kFJDm04Z8VbRjcEfY9ZS-6R8s39LfyyuXvrEaZmNQxSr3It5gHrJCuxcR5gWmssSEOrITtq9m4C7y_xlANL7TRfGTs3h5F-8prWTCVQzQ9CxYEPIR1FXAxHFPGASLdpt0",
    },
    {
      name: "Executive MPV",
      badge: "Group Travel",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsOs3L8LlzczKA7umtyWdDg0XH3g-8piwWK-GO_XNiC1C4w4qsoOXRiim0D4tLI5GQ8OTOwHTMaRVUreFXiPdACMiyYseADrFgk595xktKddAFv9Hy7cpz3u5H1zFNx5HtuhOGUELm6a1kFJDm04Z8VbRjcEfY9ZS-6R8s39LfyyuXvrEaZmNQxSr3It5gHrJCuxcR5gWmssSEOrITtq9m4C7y_xlANL7TRfGTs3h5F-8prWTCVQzQ9CxYEPIR1FXAxHFPGASLdpt0",
    },
  ];

  const reviews = [
    {
      initials: "JD",
      name: "James Davidson",
      role: "Corporate Traveler",
      text: "Exceptional service. The driver was 10 minutes early, incredibly professional, and the car was spotless. Windsor Cars is now my go-to for all airport runs.",
    },
    {
      initials: "SH",
      name: "Sarah Hughes",
      role: "Private Client",
      text: "We used them for our wedding and couldn't have been happier. The timing was perfect, and the service was truly royal. Highly recommend!",
    },
    {
      initials: "MK",
      name: "Marcus Knight",
      role: "CEO, Knight Tech",
      text: "Punctuality is vital for my business trips. Windsor Cars has never failed me. Their 24/7 support is top-notch and prices are always transparent.",
    },
  ];

  const faqs = [
    {
      q: "How do I book a vehicle?",
      a: "You can book online via our website, through our mobile app, or by calling our 24/7 dispatch center at 01753 677 677.",
    },
    {
      q: "Do you offer airport meet and greet?",
      a: "Yes, our chauffeurs provide a professional meet and greet service at all major UK airports including Heathrow, Gatwick, Stansted, Luton and more.",
    },
    {
      q: "Are there extra charges for late-night bookings?",
      a: "No, Windsor Cars Ltd operates with transparent fixed pricing and no extra charges for bookings after midnight.",
    },
    {
      q: "Are your chauffeurs CRB checked?",
      a: "Absolutely. Every single chauffeur on our team has undergone thorough CRB (Criminal Records Bureau) checks and professional training.",
    },
    {
      q: "What areas do you cover?",
      a: "We cover Windsor, Datchet, Slough, Eton, all London areas, Oxford, Reading, Manchester and beyond. Contact us to check your specific route.",
    },
    {
      q: "What is your cancellation policy?",
      a: "We offer flexible cancellations. Please contact us for specific timeframes and requirements for your booking.",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* ===== 1. HERO ===== */}
        <section className="relative min-h-screen flex flex-col overflow-hidden bg-deep-navy">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-20"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqxSB0j6wsGemYcP9BNG3xIYQtf_Y_2ESTxUSiqcAw-CuBD8HplaeQ-n0NwcE784P6kHtXeSSQoTzir_s8U5qZ4DLcC89p4dHUG6AzmaCMhqPg4cfOveqRIIMO6BJqrPTuZ39UHkOlx6qSw4b-BObACBtY5nqM5IqyWgyfyYlAGmGgMfvMZGvDtfIxZ4LwvyIOYL-_TOx4ubFxbX9fTUsXldI8G6UYLQmUt-V51vpRrmkZ_qQAaLUQNxN2r7dH_KGP-pBTo8yeVX4i"
              alt="Luxury chauffeur car"
            />
          </div>

          {/* Marquee ticker */}
          <div className="relative z-10 bg-primary/80 py-2 overflow-hidden mt-16 sm:mt-20">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-3 text-white text-xs sm:text-sm font-medium uppercase tracking-widest mx-6"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 inline-block"></span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Main hero content */}
          <div className="relative z-10 flex-1 flex items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 w-full items-center">
              {/* Left: Text + trust badges */}
              <div className="flex-1 text-center lg:text-left space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Available 24/7 — Book Instantly
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                  Luxury Executive Travel &amp; Airport Transfers
                </h1>

                <p className="text-base sm:text-lg opacity-80 text-white max-w-lg mx-auto lg:mx-0">
                  Windsor Cars Ltd — delivering premium chauffeur services since 1991. Professional, punctual, and perfectly presented for every journey.
                </p>

                {/* Trust badge cards */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
                  {[
                    { icon: "history", label: "Founded", value: "1991" },
                    { icon: "directions_car", label: "Vehicles", value: "250+" },
                    { icon: "swap_horiz", label: "Weekly Transfers", value: "3000+" },
                  ].map((b) => (
                    <div
                      key={b.label}
                      className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-center min-w-[100px]"
                    >
                      <span
                        className="material-symbols-outlined text-primary-fixed text-xl mb-1 block"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {b.icon}
                      </span>
                      <div className="text-lg font-bold">{b.value}</div>
                      <div className="text-xs opacity-70">{b.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Booking form */}
              <div className="w-full max-w-sm bg-white rounded-2xl p-6 shadow-2xl text-gray-800 flex-shrink-0">
                <h2 className="text-xl font-bold text-deep-navy mb-4">Book Your Journey</h2>

                {/* One Way / Return toggle */}
                <div className="flex rounded-lg border border-gray-200 overflow-hidden mb-4">
                  <button
                    onClick={() => setTripType("oneway")}
                    className={`flex-1 py-2 text-sm font-semibold transition-colors ${
                      tripType === "oneway"
                        ? "bg-primary text-white"
                        : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    One Way
                  </button>
                  <button
                    onClick={() => setTripType("return")}
                    className={`flex-1 py-2 text-sm font-semibold transition-colors ${
                      tripType === "return"
                        ? "bg-primary text-white"
                        : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    Return
                  </button>
                </div>

                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs font-semibold mb-1 text-gray-600 uppercase tracking-wide">
                      Pickup Location
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                        location_on
                      </span>
                      <input
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                        type="text"
                        placeholder="Enter pickup address"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 text-gray-600 uppercase tracking-wide">
                      Drop-off Location
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                        location_on
                      </span>
                      <input
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                        type="text"
                        placeholder="Enter destination"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 text-gray-600 uppercase tracking-wide">
                      Date
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                        calendar_today
                      </span>
                      <input
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                        type="date"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 text-gray-600 uppercase tracking-wide">
                      Time
                    </label>
                    <div className="flex gap-2">
                      <select
                        className="flex-1 py-2.5 px-3 rounded-lg border border-gray-200 bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm"
                        defaultValue="HH"
                      >
                        <option disabled value="HH">
                          HH
                        </option>
                        {[...Array(24)].map((_, i) => (
                          <option key={i}>{i.toString().padStart(2, "0")}</option>
                        ))}
                      </select>
                      <select
                        className="flex-1 py-2.5 px-3 rounded-lg border border-gray-200 bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm"
                        defaultValue="MM"
                      >
                        <option disabled value="MM">
                          MM
                        </option>
                        {["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"].map((m) => (
                          <option key={m}>{m}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 text-gray-600 uppercase tracking-wide">
                      Passengers
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                        group
                      </span>
                      <select className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm appearance-none">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <option key={n}>
                            {n} Passenger{n > 1 ? "s" : ""}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full bg-primary text-white text-center py-3 rounded-lg font-bold hover:brightness-110 active:scale-[0.99] transition-all text-sm mt-1"
                  >
                    Get Instant Quote
                  </Link>
                </form>

                <p className="text-center text-xs text-gray-500 mt-3">
                  Or call us:{" "}
                  <a href="tel:01753677677" className="text-primary font-semibold hover:underline">
                    01753 677 677
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 2. SERVICES STRIP ===== */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Our Services</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deep-navy">
                Exquisite Chauffeur &amp; Executive Services
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "flight_takeoff",
                  title: "Airport Transfers",
                  desc: "Real-time flight tracking and meet-and-greet at all major London airports.",
                },
                {
                  icon: "business_center",
                  title: "Executive Travel",
                  desc: "Premium corporate solutions for the discerning business traveller.",
                },
                {
                  icon: "favorite",
                  title: "Wedding Cars",
                  desc: "Bespoke wedding car hire to make your special day unforgettable.",
                },
                {
                  icon: "groups",
                  title: "Special Events",
                  desc: "Elegant transport for corporate events, galas, and private occasions.",
                },
              ].map((s) => (
                <div
                  key={s.title}
                  className="border border-gray-100 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span
                      className="material-symbols-outlined text-primary text-2xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {s.icon}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-deep-navy mb-2">{s.title}</h3>
                  <p className="text-sm text-on-surface-variant">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 3. ABOUT SECTION ===== */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
              {/* Left */}
              <div className="flex-1 space-y-6">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">About Us</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deep-navy leading-tight">
                  Windsor Cars Ltd — Trusted Executive Chauffeur Service Since 1991
                </h2>
                <blockquote className="border-l-4 border-primary pl-5 text-on-surface-variant italic text-base sm:text-lg">
                  "We believe every journey should be a first-class experience — from the moment you book to the moment you arrive."
                </blockquote>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  For over three decades, Windsor Cars Ltd has been the trusted choice for airport transfers, executive
                  travel, and special occasion transport across the UK. Our fleet of 250+ premium vehicles and team of
                  CRB-checked, professionally trained chauffeurs ensure every trip meets the highest standards of
                  comfort, punctuality, and discretion.
                </p>

                {/* Stats row — static */}
                <div className="flex flex-wrap gap-0 pt-2">
                  {[
                    { value: "250+", label: "Premium Vehicles" },
                    { value: "30+", label: "Years of Excellence" },
                    { value: "3000+", label: "Weekly Transfers" },
                  ].map((stat, i, arr) => (
                    <div
                      key={stat.label}
                      className={`flex-1 min-w-[90px] text-center py-4 ${
                        i < arr.length - 1 ? "border-r border-gray-200" : ""
                      }`}
                    >
                      <div className="text-2xl sm:text-3xl font-bold text-deep-navy">{stat.value}</div>
                      <div className="text-xs text-on-surface-variant mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/about"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:brightness-110 transition-all"
                >
                  Learn More
                </Link>
              </div>

              {/* Right: Image with CRB badge */}
              <div className="relative w-full max-w-md lg:max-w-lg flex-shrink-0">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVApfdnJBL9WvgC1UFwVddW9HIR6sEY5XMol-8asv_H8ADbLZjoDjf2ngWlbVOTr7SYowSmnrQ5bBZnFeoNhgab60hx_jsfHZlWYuxQK3G78tjyi78fGCrA_LOvOAgff5M"
                  alt="Professional chauffeur"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span
                      className="material-symbols-outlined text-white text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      verified_user
                    </span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-deep-navy">100% CRB Checked</div>
                    <div className="text-xs text-on-surface-variant">All chauffeurs verified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 4. FEATURES SECTION ===== */}
        <section className="py-14 sm:py-20 bg-surface-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
              {/* Left: car image */}
              <div className="w-full lg:w-1/2 flex-shrink-0">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAanAwKfWPHFVUGlEcyFbjh-KDetavQm5PaDF6-3IXy7ope6xzNFZJ6uSq62hsoCo9YB_o21UTWn3Tfrr7SrCJw0LoVSCvvP2vXTs2M0PLTEjf2pT37MENlcNLNATSbK4_s2cT7QbZgdUYQJ13EiDJRvZcXgyXgE6RN0p3ymwS3LoxX7D9pAnH9RowwKHp3tSpzvfyfYPjyFLJPBCqP69WW84h8omLb5_Ajd8_8P0yoYzkGauspqPBiHgfVRR6PB1dvZYzQ8OETs2yj"
                  alt="Executive car"
                  className="w-full h-80 lg:h-[520px] object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Right: features */}
              <div className="flex-1 space-y-6">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Why Choose Us</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deep-navy leading-tight">
                  Unmatched Comfort, Exceptional Service
                </h2>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  From the moment you book to the moment you arrive, every detail is handled with precision,
                  professionalism, and genuine care.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: "verified_user",
                      title: "Professional Chauffeurs",
                      desc: "CRB-checked, smartly presented, and extensively trained for every occasion.",
                    },
                    {
                      icon: "directions_car",
                      title: "Premium Fleet",
                      desc: "250+ meticulously maintained luxury vehicles ready for your journey.",
                    },
                    {
                      icon: "sell",
                      title: "Fixed Transparent Pricing",
                      desc: "No hidden costs, no midnight surcharges — just honest, competitive fares.",
                    },
                    {
                      icon: "support_agent",
                      title: "Advanced Booking & 24/7 Support",
                      desc: "Book days ahead or last minute. Our team is always on hand to assist.",
                    },
                  ].map((f) => (
                    <div key={f.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span
                          className="material-symbols-outlined text-primary text-lg"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          {f.icon}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-deep-navy text-sm">{f.title}</h4>
                        <p className="text-xs text-on-surface-variant mt-0.5">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:brightness-110 transition-all"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 5. SERVICES GRID (dark) ===== */}
        <section className="py-14 sm:py-20 bg-deep-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-primary-fixed mb-2">What We Offer</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Explore Our Chauffeur Services</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceGridCards.map((card) => (
                <div key={card.name} className="relative group h-72 rounded-xl overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white font-bold text-base mb-1">{card.name}</h3>
                    <p className="text-white/70 text-xs mb-3 leading-relaxed">{card.desc}</p>
                    <Link
                      href="/contact"
                      className="inline-block bg-primary text-white text-xs font-semibold px-4 py-2 rounded-lg hover:brightness-110 transition-all"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 6. LOCATIONS SECTION ===== */}
        <section className="py-14 sm:py-20 bg-surface-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
              {/* Left */}
              <div className="flex-1 space-y-6">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Coverage</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deep-navy leading-tight">
                  Chauffeur Services Across Key Locations
                </h2>

                <div className="flex flex-col sm:flex-row gap-8">
                  <div className="flex-1">
                    <h4 className="font-bold text-deep-navy text-sm mb-3">Airport Transfers</h4>
                    <ul className="space-y-2">
                      {["Heathrow", "Gatwick", "Stansted", "Luton", "London City", "Birmingham"].map((loc) => (
                        <li key={loc} className="flex items-center gap-2 text-sm text-on-surface-variant">
                          <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                          {loc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-deep-navy text-sm mb-3">City Transfers</h4>
                    <ul className="space-y-2">
                      {[
                        "Windsor & Datchet",
                        "Slough & Eton",
                        "London All Areas",
                        "Oxford",
                        "Reading",
                        "Manchester & Beyond",
                      ].map((loc) => (
                        <li key={loc} className="flex items-center gap-2 text-sm text-on-surface-variant">
                          <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                          {loc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:brightness-110 transition-all"
                >
                  Check Your Route
                </Link>
              </div>

              {/* Right: map image */}
              <div className="w-full lg:w-1/2 flex-shrink-0">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWf7mlGTRMxZurqwcPxCwasSPLBbXOuoR7h9zZH2VOL9QO07RiGMWSJpZw-WXZnSD01ofq9qeblAMtLqSi2cB-PJtPgqY8e91RNZZoW13CtgJR8u_Paxkcp1VlDtaPbjUjfuL70BPvw58Zl6pihDPhXzprPErjnN--0u-nf-pQi9Ma-RTcWUWxCiuX6Dl2tE9lyGoOtGmFaFXWBC0r_dA7I4vexjeZIv1OfGNbVGCqUntyfez6osYYbTUd9Q-9ZjwEYiLPSMGWvJQn"
                  alt="Service coverage map"
                  className="w-full h-72 sm:h-80 lg:h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== 7. STEP INTO ELEGANCE CTA ===== */}
        <section className="relative py-20 sm:py-28 bg-[#0d0b22] overflow-hidden text-center">
          <div className="absolute inset-0 z-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqxSB0j6wsGemYcP9BNG3xIYQtf_Y_2ESTxUSiqcAw-CuBD8HplaeQ-n0NwcE784P6kHtXeSSQoTzir_s8U5qZ4DLcC89p4dHUG6AzmaCMhqPg4cfOveqRIIMO6BJqrPTuZ39UHkOlx6qSw4b-BObACBtY5nqM5IqyWgyfyYlAGmGgMfvMZGvDtfIxZ4LwvyIOYL-_TOx4ubFxbX9fTUsXldI8G6UYLQmUt-V51vpRrmkZ_qQAaLUQNxN2r7dH_KGP-pBTo8yeVX4i"
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto px-4 space-y-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary-fixed">Experience Windsor</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Step Into Elegance</h2>
            <p className="text-base text-white/70 max-w-lg mx-auto">
              Every journey with Windsor Cars is a statement of style, comfort and professionalism. Let us exceed your
              expectations.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3.5 rounded-lg font-bold hover:brightness-110 transition-all"
            >
              Book Your Journey
            </Link>
          </div>
        </section>

        {/* ===== 8. FLEET SECTION ===== */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Our Vehicles</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deep-navy">
                Travel In Comfort With Our Luxury Fleet
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {fleetCars.map((car) => (
                <div
                  key={car.name}
                  className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={car.img}
                      alt={car.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3 gap-2">
                      <h3 className="font-bold text-deep-navy text-base">{car.name}</h3>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {car.badge}
                      </span>
                    </div>
                    <Link
                      href="/contact"
                      className="block w-full bg-deep-navy text-white text-center text-sm font-semibold py-2.5 rounded-lg hover:bg-primary transition-colors"
                    >
                      Book This Vehicle
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/fleet"
                className="inline-block border-2 border-deep-navy text-deep-navy px-8 py-3 rounded-lg font-bold text-sm hover:bg-deep-navy hover:text-white transition-all"
              >
                View Full Fleet
              </Link>
            </div>
          </div>
        </section>

        {/* ===== 9. REVIEWS SECTION ===== */}
        <section className="py-14 sm:py-20 bg-surface-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Testimonials</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deep-navy">Our Reviews</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((r, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, s) => (
                        <span
                          key={s}
                          className="material-symbols-outlined text-lg"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                    <span className="material-symbols-outlined text-gray-400 text-base ml-auto">language</span>
                  </div>
                  <p className="text-sm text-on-surface-variant italic flex-1">"{r.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {r.initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-deep-navy">{r.name}</h4>
                      <p className="text-xs text-on-surface-variant">{r.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 10. FAQ SECTION ===== */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
              {/* Left: accordion */}
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">FAQ</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deep-navy mb-8">
                  Your Questions, Answered
                </h2>
                <div className="space-y-3">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-gray-50 transition-colors"
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      >
                        <span className="font-semibold text-deep-navy text-sm pr-4">{faq.q}</span>
                        <span
                          className={`material-symbols-outlined flex-shrink-0 text-primary transition-transform duration-200 ${
                            openFaq === idx ? "rotate-180" : ""
                          }`}
                        >
                          expand_more
                        </span>
                      </button>
                      {openFaq === idx && (
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm text-on-surface-variant border-t border-gray-100 pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: feature cards */}
              <div className="lg:w-80 flex-shrink-0 space-y-4">
                <div className="bg-primary text-white rounded-xl p-6">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <span
                      className="material-symbols-outlined text-white"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      support_agent
                    </span>
                  </div>
                  <h4 className="font-bold text-base mb-1">24/7 Support</h4>
                  <p className="text-sm text-white/80">
                    Our team is available around the clock for bookings, changes, and assistance.
                  </p>
                </div>
                <div className="bg-surface-grey rounded-xl p-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span
                      className="material-symbols-outlined text-primary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      location_on
                    </span>
                  </div>
                  <h4 className="font-bold text-deep-navy text-base mb-1">Easy Nearby Pickups</h4>
                  <p className="text-sm text-on-surface-variant">
                    We come to you — at home, office, hotel, or any location you specify.
                  </p>
                </div>
                <div className="bg-surface-grey rounded-xl p-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span
                      className="material-symbols-outlined text-primary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      groups
                    </span>
                  </div>
                  <h4 className="font-bold text-deep-navy text-base mb-1">Quality Large Group Pickups</h4>
                  <p className="text-sm text-on-surface-variant">
                    Vehicles for up to 8 passengers with ample luggage space for group travel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 11. FOOTER CTA ===== */}
        <section className="relative py-20 sm:py-28 bg-deep-navy overflow-hidden text-center">
          <div className="absolute inset-0 z-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqxSB0j6wsGemYcP9BNG3xIYQtf_Y_2ESTxUSiqcAw-CuBD8HplaeQ-n0NwcE784P6kHtXeSSQoTzir_s8U5qZ4DLcC89p4dHUG6AzmaCMhqPg4cfOveqRIIMO6BJqrPTuZ39UHkOlx6qSw4b-BObACBtY5nqM5IqyWgyfyYlAGmGgMfvMZGvDtfIxZ4LwvyIOYL-_TOx4ubFxbX9fTUsXldI8G6UYLQmUt-V51vpRrmkZ_qQAaLUQNxN2r7dH_KGP-pBTo8yeVX4i"
              alt=""
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Choose Excellence, Ride In Luxury</h2>
            <p className="text-base text-white/70 max-w-xl mx-auto">
              Whether it's an airport run, a corporate event, or a special occasion — Windsor Cars Ltd delivers an
              exceptional experience every time.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3.5 rounded-lg font-bold hover:brightness-110 transition-all"
              >
                Book Now
              </Link>
              <a
                href="tel:01753677677"
                className="inline-block border-2 border-white text-white px-8 py-3.5 rounded-lg font-bold hover:bg-white/10 transition-all"
              >
                01753 677 677
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
