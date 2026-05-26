"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Subtle scroll effect for the sticky header shadow (if needed, but Header already handles it)
    // Form submission micro-interaction
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
        <section className="relative h-[409px] min-h-[300px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover brightness-[0.4]"
              alt="Luxury executive sedan"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLR0zJLm7kDq0Rj7PYkxi_rCe1JGK3_AtYqM8jEjOa_PeG5m63bHLesbukyN6f8E71_YJmEwFaWmBbZcnKTMgsrfSAZ94WN2Ajnacg5MCd3Xv0q_biwgzWjMt9xUPmg3tYfgFpafFsIUXxnj55ZUApXEwuWpfAbYV6SbgVhJhgPY2ylbkVj-P7b70uTnuFInnyutyX5wI5MRjAWaqQliyy65wjsro7qZcr5m5AQH6JBciqQjswK_RW4cgYZIwqcxihkPuZPCPvvLgc"
            />
          </div>
          <div className="relative z-10 text-center px-margin-mobile">
            <h1 className="text-white font-display-lg text-display-lg md:text-display-lg mb-4">
              Get in Touch
            </h1>
            <p className="text-white opacity-90 max-w-2xl mx-auto font-body-lg text-body-lg">
              Excellence in executive travel starts with a single conversation. Reach out to our dedicated concierge team today.
            </p>
          </div>
        </section>

        {/* Contact Content Grid */}
        <section className="max-w-container-max mx-auto px-margin-desktop py-16 -mt-20 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-lg shadow-[0px_8px_24px_rgba(10,31,68,0.10)]">
              <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-8">Send Us a Message</h2>
              <form ref={formRef} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-lg text-label-lg text-on-surface-variant">Name</label>
                    <input
                      className="border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                      placeholder="Your full name"
                      type="text"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-lg text-label-lg text-on-surface-variant">Email</label>
                    <input
                      className="border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                      placeholder="email@company.com"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-lg text-label-lg text-on-surface-variant">Phone Number</label>
                    <input
                      className="border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                      placeholder="+44 (0) 1753 677 677"
                      type="tel"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-lg text-label-lg text-on-surface-variant">Requested Booking Date</label>
                    <input
                      className="border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                      type="date"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-lg text-label-lg text-on-surface-variant">Message</label>
                  <textarea
                    className="border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                    placeholder="How can we assist with your journey?"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white w-full py-4 rounded-lg font-bold font-label-lg text-label-lg hover:bg-deep-navy transition-colors shadow-[0px_4px_12px_rgba(10,31,68,0.05)]"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Right: Contact Details & Map */}
            <div className="lg:col-span-5 space-y-gutter">
              {/* Contact Details Card */}
              <div className="bg-deep-navy text-white p-8 rounded-lg">
                <h3 className="font-headline-md text-headline-md mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span
                      className="material-symbols-outlined text-primary-fixed-dim"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      location_on
                    </span>
                    <div>
                      <p className="font-label-lg text-label-lg">Head Office</p>
                      <p className="opacity-80 font-body-md text-body-md">
                        1st Floor Hardware House,<br />
                        Datchet, Slough, SL3 9BJ
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span
                      className="material-symbols-outlined text-primary-fixed-dim"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      call
                    </span>
                    <div>
                      <p className="font-label-lg text-label-lg">Phone</p>
                      <p className="opacity-80 font-body-md text-body-md">01753 677 677</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span
                      className="material-symbols-outlined text-primary-fixed-dim"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      mail
                    </span>
                    <div>
                      <p className="font-label-lg text-label-lg">Email</p>
                      <p className="opacity-80 font-body-md text-body-md">bookings@windsorcars.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 24/7 Support Banner */}
              <div className="bg-surface-container p-6 rounded-lg border-l-4 border-primary flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-3xl">support_agent</span>
                <div>
                  <p className="font-bold text-deep-navy font-label-lg text-label-lg">24/7 Support notice</p>
                  <p className="text-on-surface-variant font-body-md text-body-md">We are always available to assist you.</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-lg overflow-hidden h-[300px] shadow-sm relative group">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Map of Datchet and Slough area"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdLh1UL0la8cy8AJHQbP17xu4oHGfT75kM8dtS28AaKzcCQyxGxSt17K6v89_5DFMdNK_dw_SRbcDZtcJ2ITL2LxZ86s5Pouxszbzorn_esc4WezhRwfvDkv34snzcmg9NCNMWWkysS0aB0S2397xAZIRybTbr_RtD9-1656lFnOHgxJuyOLavVzqMgGZuD7KlVR1Skl3ijGDkcjIIF8jO5NLcnZl5FMAZXz_oRQK3l_FOkwK75VLRnX2glglVjxCt5xXECCbcmyTE"
                />
                <div className="absolute inset-0 bg-deep-navy/20 flex items-center justify-center pointer-events-none">
                  <div className="bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-alert-red"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      location_on
                    </span>
                    <span className="text-deep-navy font-bold font-label-md text-label-md">Our Datchet Office</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter / CTA Secondary */}
        <section className="bg-surface-grey py-16">
          <div className="max-w-container-max mx-auto px-margin-desktop text-center">
            <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-4">Corporate Accounts</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto mb-8 font-body-lg text-body-lg">
              Inquire about our bespoke corporate travel solutions and priority booking management for your executive team.
            </p>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition-all font-label-lg text-label-lg">
              Apply for Corporate Account
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}