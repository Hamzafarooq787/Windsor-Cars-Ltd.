"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const handleSubmit = (e: Event) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
      if (!btn) return;
      const originalText = btn.innerText;
      btn.innerText = "Sending...";
      btn.disabled = true;
      btn.style.opacity = "0.7";

      setTimeout(() => {
        btn.innerText = "Message Sent Successfully";
        btn.classList.replace("bg-primary", "bg-green-600");
        form.reset();
        setTimeout(() => {
          btn.innerText = originalText;
          btn.classList.replace("bg-green-600", "bg-primary");
          btn.disabled = false;
          btn.style.opacity = "1";
        }, 3000);
      }, 1500);
    };

    form.addEventListener("submit", handleSubmit);
    return () => form.removeEventListener("submit", handleSubmit);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[400px] sm:h-[460px] lg:h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover"
              alt="Luxury executive sedan"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLR0zJLm7kDq0Rj7PYkxi_rCe1JGK3_AtYqM8jEjOa_PeG5m63bHLesbukyN6f8E71_YJmEwFaWmBbZcnKTMgsrfSAZ94WN2Ajnacg5MCd3Xv0q_biwgzWjMt9xUPmg3tYfgFpafFsIUXxnj55ZUApXEwuWpfAbYV6SbgVhJhgPY2ylbkVj-P7b70uTnuFInnyutyX5wI5MRjAWaqQliyy65wjsro7qZcr5m5AQH6JBciqQjswK_RW4cgYZIwqcxihkPuZPCPvvLgc"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/90 via-deep-navy/70 to-deep-navy/50"></div>
          </div>
          <div className="relative z-10 text-center px-4 sm:px-6 pt-16 sm:pt-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Get in Touch
            </h1>
            <p className="text-white opacity-90 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Excellence in executive travel starts with a single conversation. Reach out to our dedicated concierge team today.
            </p>
          </div>
        </section>

        {/* Contact Content Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16 -mt-12 sm:-mt-16 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-12 rounded-xl shadow-[0px_8px_24px_rgba(10,31,68,0.10)]">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-deep-navy mb-6 sm:mb-8">Send Us a Message</h2>
              <form ref={formRef} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-on-surface-variant">Name</label>
                    <input
                      className="border border-outline-variant rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                      placeholder="Your full name"
                      type="text"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-on-surface-variant">Email</label>
                    <input
                      className="border border-outline-variant rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                      placeholder="email@company.com"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-on-surface-variant">Phone Number</label>
                    <input
                      className="border border-outline-variant rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                      placeholder="+44 (0) 1753 677 677"
                      type="tel"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-on-surface-variant">Requested Booking Date</label>
                    <input
                      className="border border-outline-variant rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                      type="date"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-on-surface-variant">Message</label>
                  <textarea
                    className="border border-outline-variant rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                    placeholder="How can we assist with your journey?"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white w-full py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-deep-navy transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Right: Contact Details & Map */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              {/* Contact Details Card */}
              <div className="bg-deep-navy text-white p-6 sm:p-8 rounded-xl">
                <h3 className="text-lg sm:text-xl font-bold mb-5 sm:mb-6">Contact Information</h3>
                <div className="space-y-5 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span
                      className="material-symbols-outlined text-primary-fixed-dim flex-shrink-0 mt-0.5"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      location_on
                    </span>
                    <div>
                      <p className="text-sm font-semibold mb-1">Head Office</p>
                      <p className="opacity-80 text-sm">
                        1st Floor Hardware House,<br />
                        Datchet, Slough, SL3 9BJ
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span
                      className="material-symbols-outlined text-primary-fixed-dim flex-shrink-0 mt-0.5"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      call
                    </span>
                    <div>
                      <p className="text-sm font-semibold mb-1">Phone</p>
                      <a href="tel:+441753677677" className="opacity-80 text-sm hover:opacity-100 transition-opacity">
                        01753 677 677
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span
                      className="material-symbols-outlined text-primary-fixed-dim flex-shrink-0 mt-0.5"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      mail
                    </span>
                    <div>
                      <p className="text-sm font-semibold mb-1">Email</p>
                      <a href="mailto:bookings@windsorcars.com" className="opacity-80 text-sm hover:opacity-100 transition-opacity break-all">
                        bookings@windsorcars.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 24/7 Support Banner */}
              <div className="bg-surface-container p-5 sm:p-6 rounded-xl border-l-4 border-primary flex items-center gap-3 sm:gap-4">
                <span className="material-symbols-outlined text-primary text-3xl flex-shrink-0">support_agent</span>
                <div>
                  <p className="font-bold text-deep-navy text-sm sm:text-base">24/7 Support Available</p>
                  <p className="text-on-surface-variant text-sm">We are always available to assist you.</p>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-xl overflow-hidden shadow-sm" style={{ height: "300px" }}>
                <iframe
                  title="Windsor Cars Ltd – Office Location"
                  src="https://maps.google.com/maps?q=Hardware+House,+Datchet,+Slough+SL3+9BJ,+UK&output=embed&z=15"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Accounts CTA */}
        <section className="bg-surface-grey py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deep-navy mb-4">Corporate Accounts</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto mb-7 sm:mb-8 text-sm sm:text-base">
              Inquire about our bespoke corporate travel solutions and priority booking management for your executive team.
            </p>
            <a
              href="mailto:bookings@windsorcars.com?subject=Corporate Account Inquiry"
              className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-lg font-bold text-sm sm:text-base hover:bg-primary hover:text-white transition-all"
            >
              Apply for Corporate Account
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
