"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FleetPage() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Header shadow on scroll micro-interaction
    const handleScroll = () => {
      const header = document.getElementById("main-header");
      if (window.scrollY > 50) {
        header?.classList.add("py-2");
        header?.classList.remove("py-4");
      } else {
        header?.classList.add("py-4");
        header?.classList.remove("py-2");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    alert("Mobile navigation would open here with a slide-in transition.");
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[614px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover brightness-50"
              alt="Luxury executive sedan"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqeptP40ZFjqx7aUmov7Dvjxj0nqw8mn-1qet6CmHcARb1WmmpjE4o5GY2eV9ckjrRFatjECS6Q1tBMqD-4Yvmx3HYzlYagpA0f-KhICRw485OGmd2NjZvq1UFWpUwfz9qE9ItFPm80O1fef1rfZaenc86nhrWYDag7gejAAbrfFEol5cychMBq6JTZQm008qj0nkBJOewQxMfR71I33cCv8csnagu8EG-9gvGWURfRO_zT4RXNjACoOFD_LL3Thcy-kD1pPyMo__d"
            />
          </div>
          <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
            <div className="max-w-2xl text-white">
              <h1 className="font-display-lg text-display-lg mb-4 tracking-tight">
                Our Premium Fleet
              </h1>
              <p className="font-body-lg text-body-lg text-surface-variant max-w-xl">
                Experience the pinnacle of executive travel with our meticulously maintained fleet
                of world-class vehicles, tailored for the discerning professional.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content: Fleet Catalog */}
        <section className="py-16 bg-surface-grey">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            {/* Quality Assurance Note */}
            <div className="mb-12 flex flex-col md:flex-row items-center justify-between p-8 bg-white border-l-4 border-primary fleet-card-shadow rounded">
              <div>
                <h2 className="font-headline-md text-headline-md text-deep-navy mb-2">
                  Excellence as Standard
                </h2>
                <p className="text-on-surface-variant font-body-md">
                  All our vehicles are maintained to the highest standards, ensuring punctuality,
                  safety, and comfort for every journey.
                </p>
              </div>
              <div className="mt-6 md:mt-0 flex gap-2">
                <span className="flex items-center gap-2 bg-primary-fixed text-on-primary-fixed px-4 py-2 rounded-full text-label-md font-label-md">
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  Professional Valeting
                </span>
              </div>
            </div>

            {/* Vehicle Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {/* Mercedes E-Class */}
              <div className="bg-white rounded overflow-hidden fleet-card-shadow transition-transform duration-300 hover:-translate-y-1">
                <div className="h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Mercedes E-Class executive sedan"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_U9cykuhLVDGx4lN9BMYq5MUENudy9UPL07l4SGktbzCQJRwAiD9jVvJUaQ22vOq_dI2a54tTHIhNBlSsotHJqbBFnNJ3oOWKOy99i_Us5wxiyKa7_gXRLPr8vp0lKNSygNVhbRyfI3a93kCALL-KfFiLXQuEs2iRbS6Tek8mWZhoTjWE76sjzbOmLlBors6Gy46YBUs9AJy2GYPF39gGXJaov6HOEe3q1eC6L5YF7UO0Zv9WgMs26Vv9K6J9pWkvRm-s9r0cEYZA"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-headline-md text-headline-md text-deep-navy">
                      Mercedes E-Class
                    </h3>
                    <span className="bg-surface-container text-on-surface-variant px-3 py-1 rounded text-label-md font-label-md">
                      Business Class
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        wifi
                      </span>
                      <span className="text-label-md">Free WiFi</span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        ac_unit
                      </span>
                      <span className="text-label-md">Climate Control</span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        airline_seat_recline_extra
                      </span>
                      <span className="text-label-md">Leather Seats</span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        usb
                      </span>
                      <span className="text-label-md">Chargers</span>
                    </div>
                  </div>
                  <button className="w-full bg-deep-navy text-white py-3 rounded font-label-lg hover:bg-primary transition-colors">
                    Book E-Class
                  </button>
                </div>
              </div>

              {/* Mercedes S-Class */}
              <div className="bg-white rounded overflow-hidden fleet-card-shadow transition-transform duration-300 hover:-translate-y-1">
                <div className="h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Mercedes S-Class luxury sedan"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXRQJ-tgLOwJlb2X2d0GwjuAB5DSYGGrwSnno5x9TeAx8XWGWZQ3DlyccXcwgnwKI8MoqfhHndaMCuPIPjlUMXLjlrBKnLoaVjOOldX954eB3BV_Hd2jadnEp-z2p8dRNSWpTXBW3sEFZYZBoyaSrKI5LXlYqVFdfcHpmaXw3NjFB4dLuYk2P2dbde9xR-Xa3LJAzjxLVa0-VMgZ0r9xInN27Ee6wP3_v_vtyPUFuRXDJDQOuFagmmZdK4GM4MwytVDGRnw1V1HQpO"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-headline-md text-headline-md text-deep-navy">
                      Mercedes S-Class
                    </h3>
                    <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded text-label-md font-label-md">
                      First Class
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        wifi
                      </span>
                      <span className="text-label-md">High-speed WiFi</span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        water_bottle
                      </span>
                      <span className="text-label-md">Still Water</span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        airline_seat_recline_extra
                      </span>
                      <span className="text-label-md">Heated Seats</span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        bolt
                      </span>
                      <span className="text-label-md">Fast Charging</span>
                    </div>
                  </div>
                  <button className="w-full bg-deep-navy text-white py-3 rounded font-label-lg hover:bg-primary transition-colors">
                    Book S-Class
                  </button>
                </div>
              </div>

              {/* BMW 5 Series */}
              <div className="bg-white rounded overflow-hidden fleet-card-shadow transition-transform duration-300 hover:-translate-y-1">
                <div className="h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="BMW 5 Series executive sedan"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbJOdCXtB2_JT6SYgZwZALrst5jQB4NK-UwXobhLjBG_f9qf6TFZkySapnzG7FkXF4FUV-Vn9zSRSoDGWOnngXHPHq1FqFF75w-HpMR5z9WezBf6BbXXhf3Gh5daj-Zggd9XlhVzRq-ZVfKLY9A01IeiUNUEzB7Dk_VhmsA6npXMc531dbc9BpkYpWupI-2dOz1AHyu8NbK3OyWeUTOLB2VL1QaMKW164qG1fRvwPex8tNKK1ZFnc4CFOMeDQI8TUJWIeH08UghOBB"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-headline-md text-headline-md text-deep-navy">
                      BMW 5 Series
                    </h3>
                    <span className="bg-surface-container text-on-surface-variant px-3 py-1 rounded text-label-md font-label-md">
                      Business Plus
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        wifi
                      </span>
                      <span className="text-label-md">Free WiFi</span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        ac_unit
                      </span>
                      <span className="text-label-md">Air Con</span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        airline_seat_recline_extra
                      </span>
                      <span className="text-label-md">Leather Interior</span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        usb
                      </span>
                      <span className="text-label-md">USB-C Ports</span>
                    </div>
                  </div>
                  <button className="w-full bg-deep-navy text-white py-3 rounded font-label-lg hover:bg-primary transition-colors">
                    Book BMW 5
                  </button>
                </div>
              </div>

              {/* Audi A8 */}
              <div className="bg-white rounded overflow-hidden fleet-card-shadow transition-transform duration-300 hover:-translate-y-1">
                <div className="h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Audi A8 luxury interior"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC816rp9TcxM0-2nOGsp-eeNtD8IMAdBbCGs8eN1DSiKJQeIUlv0wSlg65PPA6YaBkzb7NTEqzdCfWqkfqShTVqmtT3YH_f914bvIm0gWHj4B9ZC_VxUUzDOuLDygEzuYh6qeHt-Ip7JALVe7uR16zI1E00bch8l-waNVl4-4HOn-Zw-UT5yobq8G6PPe3FElj1yNFszKnfJSVwGsFiaRIlYztU8iZs506Zk3u4ADaC3QZa8oQ-Zxirn8ZRQyBt5yAwwB2bRDjoYjJ0"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-headline-md text-headline-md text-deep-navy">
                      Audi A6/A8
                    </h3>
                    <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded text-label-md font-label-md">
                      Luxury Exec
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        wifi
                      </span>
                      <span className="text-label-md">Pro WiFi</span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        privacy_tip
                      </span>
                      <span className="text-label-md">Privacy Glass</span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        airline_seat_recline_extra
                      </span>
                      <span className="text-label-md">Extra Legroom</span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        usb
                      </span>
                      <span className="text-label-md">Charging Hub</span>
                    </div>
                  </div>
                  <button className="w-full bg-deep-navy text-white py-3 rounded font-label-lg hover:bg-primary transition-colors">
                    Book Audi
                  </button>
                </div>
              </div>

              {/* People Carriers - spans 2 columns on large screens */}
              <div className="bg-white rounded overflow-hidden fleet-card-shadow transition-transform duration-300 hover:-translate-y-1 lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  <div className="h-64 md:h-auto overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="Mercedes V-Class people carrier"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsOs3L8LlzczKA7umtyWdDg0XH3g-8piwWK-GO_XNiC1C4w4qsoOXRiim0D4tLI5GQ8OTOwHTMaRVUreFXiPdACMiyYseADrFgk595xktKddAFv9Hy7cpz3u5H1zFNx5HtuhOGUELm6a1kFJDm04Z8VbRjcEfY9ZS-6R8s39LfyyuXvrEaZmNQxSr3It5gHrJCuxcR5gWmssSEOrITtq9m4C7y_xlANL7TRfGTs3h5F-8prWTCVQzQ9CxYEPIR1FXAxHFPGASLdpt0"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-headline-md text-headline-md text-deep-navy">
                        Executive People Carriers
                      </h3>
                      <span className="bg-surface-container text-on-surface-variant px-3 py-1 rounded text-label-md font-label-md">
                        6/7/8 Seater
                      </span>
                    </div>
                    <p className="text-on-surface-variant mb-6 font-body-md">
                      Ideal for group transfers, corporate events, and airport runs. Our luxury
                      MPVs offer unmatched space without compromising on the executive experience.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center gap-2 text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-[20px]">
                          group
                        </span>
                        <span className="text-label-md">Up to 8 Pax</span>
                      </div>
                      <div className="flex items-center gap-2 text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-[20px]">
                          luggage
                        </span>
                        <span className="text-label-md">Ample Luggage</span>
                      </div>
                      <div className="flex items-center gap-2 text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-[20px]">
                          wifi
                        </span>
                        <span className="text-label-md">High-speed WiFi</span>
                      </div>
                      <div className="flex items-center gap-2 text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-[20px]">
                          usb
                        </span>
                        <span className="text-label-md">Multi-chargers</span>
                      </div>
                    </div>
                    <button className="w-full bg-primary text-on-primary py-4 rounded font-label-lg font-bold hover:bg-primary-container transition-all">
                      Book Large Vehicle
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-20 bg-deep-navy text-white text-center">
          <div className="px-margin-mobile max-w-2xl mx-auto">
            <h2 className="font-display-lg text-display-lg mb-6">Ready for your next journey?</h2>
            <p className="font-body-lg text-body-lg mb-10 opacity-80">
              Book your vehicle today and enjoy the peace of mind that comes with professional
              chauffeur service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-10 py-4 rounded font-label-lg font-bold text-lg hover:bg-primary-container transition-all">
                Book Your Vehicle Today
              </button>
              <button className="border border-white/30 text-white px-10 py-4 rounded font-label-lg font-bold text-lg hover:bg-white/10 transition-all">
                Get a Quote
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}