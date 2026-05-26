"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Scroll reveal logic (same as original)
    const observerOptions = { threshold: 0.1 };
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
      {/* Hero Section – Improved text visibility */}
<section className="relative h-[614px] flex items-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      alt="Executive Chauffeur Service"
      className="w-full h-full object-cover"
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGqaTWcrSGchv0PH3bgv7WluWUcQ641rqb7dDfW39-hXrWoAHNjI0lWStc2Pdorhk7XpxTvKZWh60sIVcB1_1dJ_gncxgbTPEzOzkZEwNAoPHaim4blDgA-0eiJUEeT8Ohknu3DxaExFfSTGcEh_SkMcKE64OT_Qllx7fLjKemeSxDghW1ugD5ECTuW5uAPjqEKz56l6OI1Bc6oblf4DIeXt9qdWnEd6rVb9aRk_7Jd9m6a5AKfCdyp9myynYfu04cMTIEAOLDnysp"
    />
    {/* Dark overlay – strong enough for white text */}
    <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/90 via-deep-navy/70 to-transparent"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 px-4 sm:px-6 lg:px-margin-desktop max-w-container-max mx-auto w-full">
    <div className="max-w-2xl text-white">
      <h1 className="text-4xl sm:text-5xl lg:text-display-lg font-bold leading-tight mb-4">
        Our Legacy of Excellence
      </h1>
      <p className="text-base sm:text-lg lg:text-body-lg opacity-95">
        Experience the pinnacle of professional chauffeur services across the United Kingdom, where every journey is treated with the utmost discretion and luxury.
      </p>
    </div>
  </div>
</section>

        {/* History & Slough Hub Bento Grid */}
        <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* History Card */}
            <div className="md:col-span-8 bg-surface-container-low p-12 rounded-xl flex flex-col justify-center scroll-reveal">
              <span className="text-primary font-label-lg text-label-lg uppercase tracking-widest mb-4">Since 1991</span>
              <h2 className="font-headline-lg text-headline-lg mb-6 text-deep-navy">The Windsor Journey</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Established in 1991, Windsor Cars has grown into one of the UK's leading executive hire services. Over three decades, we have evolved from a local boutique service to a national leader in professional transport, maintaining the same commitment to punctuality and grace that defined our very first trip.
              </p>
            </div>
            {/* Slough Hub Card */}
            <div className="md:col-span-4 bg-deep-navy text-white p-12 rounded-xl flex flex-col justify-between scroll-reveal">
              <div>
                <span className="material-symbols-outlined text-4xl mb-6 text-primary-fixed">location_on</span>
                <h3 className="font-headline-md text-headline-md mb-4">The Slough Hub</h3>
                <p className="font-body-md text-body-md opacity-80">Located in the heart of Datchet, serving Slough, Windsor, and the UK.</p>
              </div>
              <div className="mt-8">
                <img
                  alt="Service Map Area"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWf7mlGTRMxZurqwcPxCwasSPLBbXOuoR7h9zZH2VOL9QO07RiGMWSJpZw-WXZnSD01ofq9qeblAMtLqSi2cB-PJtPgqY8e91RNZZoW13CtgJR8u_Paxkcp1VlDtaPbjUjfuL70BPvw58Zl6pihDPhXzprPErjnN--0u-nf-pQi9Ma-RTcWUWxCiuX6Dl2tE9lyGoOtGmFaFXWBC0r_dA7I4vexjeZIv1OfGNbVGCqUntyfez6osYYbTUd9Q-9ZjwEYiLPSMGWvJQn"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="bg-surface-grey py-24 px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="font-headline-lg text-headline-lg text-deep-navy">Our Core Values</h2>
              <div className="h-1 w-24 bg-primary mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Value 1 */}
              <div className="text-center scroll-reveal">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-deep-navy mb-4">Reliability</h4>
                <p className="font-body-md text-body-md text-on-surface-variant px-4">
                  Punctuality isn't just a goal; it's our standard. We monitor traffic and flight data in real-time to ensure we're always ahead of schedule.
                </p>
              </div>
              {/* Value 2 */}
              <div className="text-center scroll-reveal">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <span className="material-symbols-outlined text-primary text-3xl">business_center</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-deep-navy mb-4">Professionalism</h4>
                <p className="font-body-md text-body-md text-on-surface-variant px-4">
                  Our chauffeurs are meticulously trained in executive etiquette, ensuring a quiet, productive, and respectful environment for every passenger.
                </p>
              </div>
              {/* Value 3 */}
              <div className="text-center scroll-reveal">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <span className="material-symbols-outlined text-primary text-3xl">diamond</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-deep-navy mb-4">Luxury</h4>
                <p className="font-body-md text-body-md text-on-surface-variant px-4">
                  From our pristine fleet to the subtle amenities on board, we provide a premium experience that reflects the status of our clientele.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team & Safety */}
        <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 scroll-reveal">
              <div className="relative">
                <img
                  alt="Professional Chauffeur"
                  className="rounded-xl shadow-2xl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVApfdnJBL9WvgC1UFwVddW9HIR6sEY5XMol-8asv_H8ADbLZjoDjf2ngWlbVOTr7SYowSmnrQ5bBZnFeoNhgab60hx_jsfHZlWUbfyiaXeDG4E-gLnS1UMGXLo4DkdYCLFW5TqBsQ_0V275DEPtJ8xJvQ_K9DuWZBUU5wmVb-brXf3OJe0KRx1HZsV35BsK0erCKgamdRnOPbAJHUK-tIDQjsLISiVPkHbM13BC9-IDiyWYuxQK3G78tjyi78fGCrA_LOvOAgff5M"
                />
                <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-xl hidden md:block">
                  <p className="font-headline-md text-headline-md">100%</p>
                  <p className="font-label-md text-label-md opacity-80">CRB Checked Staff</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 scroll-reveal">
              <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-6">Your Safety, Our Priority</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                The cornerstone of Windsor Cars Ltd. is the safety and security of our passengers. Every member of our driving team undergoes rigorous background checks (CRB) and continuous professional development.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  <div>
                    <strong className="text-deep-navy">Professional Chauffeurs:</strong>
                    <p className="text-on-surface-variant">Expertly trained in defensive driving and client confidentiality.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  <div>
                    <strong className="text-deep-navy">CRB Checked:</strong>
                    <p className="text-on-surface-variant">Full background verification for total peace of mind.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  <div>
                    <strong className="text-deep-navy">Regular Maintenance:</strong>
                    <p className="text-on-surface-variant">Our fleet is inspected daily to meet the highest safety standards.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary px-margin-desktop text-center">
          <div className="max-w-3xl mx-auto scroll-reveal">
            <h2 className="font-display-lg text-display-lg text-white mb-8">Ready for a Premium Journey?</h2>
            <p className="font-body-lg text-body-lg text-white opacity-90 mb-10">
              Whether for corporate travel or a special occasion, experience the Windsor difference today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-primary px-10 py-4 rounded-lg font-label-lg text-label-lg font-bold hover:bg-opacity-90 transition-all">
                Book Online
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-label-lg text-label-lg font-bold hover:bg-white hover:text-primary transition-all">
                Call +44 (0) 1753 677 677
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}