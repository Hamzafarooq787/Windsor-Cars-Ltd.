"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section – Matches About/Fleet style */}
        <section className="relative h-[500px] sm:h-[580px] lg:h-[614px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLR0zJLm7kDq0Rj7PYkxi_rCe1JGK3_AtYqM8jEjOa_PeG5m63bHLesbukyN6f8E71_YJmEwFaWmBbZcnKTMgsrfSAZ94WN2Ajnacg5MCd3Xv0q_biwgzWjMt9xUPmg3tYfgFpafFsIUXxnj55ZUApXEwuWpfAbYV6SbgVhJhgPY2ylbkVj-P7b70uTnuFInnyutyX5wI5MRjAWaqQliyy65wjsro7qZcr5m5AQH6JBciqQjswK_RW4cgYZIwqcxihkPuZPCPvvLgc"
              alt="Luxury executive car service"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/90 via-deep-navy/70 to-transparent"></div>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 pt-20 sm:pt-24">
            <div className="max-w-2xl text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                Our Premium Services
              </h1>
              <p className="text-base sm:text-lg opacity-90 mb-6 sm:mb-8 leading-relaxed max-w-xl">
                At Windsor Cars Ltd., we provide an unparalleled executive chauffeur experience.
                From seamless airport transfers to bespoke city tours, our fleet and professional
                drivers represent the gold standard in luxury transportation.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">
                  <span className="material-symbols-outlined text-[18px]">verified_user</span>
                  Professional Chauffeurs
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">
                  <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
                  24/7 Availability
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Service Grid */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Airport Transfers – Featured */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="h-64 md:h-full min-h-[400px] lg:min-h-[450px] relative">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Executive private jet and luxury sedan"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAanAwKfWPHFVUGlEcyFbjh-KDetavQm5PaDF6-3IXy7ope6xzNFZJ6uSq62hsoCo9YB_o21UTWn3Tfrr7SrCJw0LoVSCvvP2vXTs2M0PLTEjf2pT37MENlcNLNATSbK4_s2cT7QbZgdUYQJ13EiDJRvZcXgyXgE6RN0p3ymwS3LoxX7D9pAnH9RowwKHp3tSpzvfyfYPjyFLJPBCqP69WW84h8omLb5_Ajd8_8P0yoYzkGauspqPBiHgfVRR6PB1dvZYzQ8OETs2yj"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 sm:p-8 text-white w-full">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <span className="material-symbols-outlined text-primary-fixed text-3xl sm:text-4xl">
                      flight_takeoff
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold">Airport Transfers</h2>
                  </div>
                  <p className="text-sm sm:text-base text-white/80 mb-5 max-w-xl">
                    Serving Heathrow, Gatwick, Stansted, and Luton with precision. We track your
                    flight in real-time to ensure your driver is waiting as soon as you land.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-primary-fixed font-bold hover:gap-4 transition-all text-sm sm:text-base"
                  >
                    Book Now <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* London City & Weddings */}
            <div className="md:col-span-4 flex flex-col gap-6">
              {/* London City */}
              <div className="flex-1 bg-white rounded-xl shadow-md service-card-hover transition-all overflow-hidden flex flex-col">
                <div className="h-40 overflow-hidden relative">
                  <img
                    alt="London City Transfer"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_cf2ZyOPEUUrROdoZRu7XwGDVkfemmbafV0QtKmeu9Doh043A35yHVuOchc71tfH3023HtAyPz686QFNTormnd-AcGaWnSFtfKzRgMaGMGgTBU6zUg5_qz8opwxrMJ2-LBfkqs_KitN1VmfBLLtlzp6ByucSegiZN-cRctABK11-6A9tp2xSo6eqRk2aLpZPriRBdXRjkxfTl2V0Oa3LhQ6W7SpVvJOyXzn7BETQ9YssuWYoehkhWcFlGwrZaU7dgMCOUWa-eRCML"
                  />
                </div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-deep-navy mb-2">London City</h3>
                  <p className="text-sm sm:text-base text-on-surface-variant mb-4 flex-1">
                    Navigate the capital's heart in comfort. Perfect for financial district
                    meetings or central London shopping.
                  </p>
                  <Link
                    href="/contact"
                    className="text-primary font-bold inline-flex items-center gap-1 hover:underline text-sm"
                  >
                    Book Now <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </Link>
                </div>
              </div>
              {/* Weddings */}
              <div className="flex-1 bg-white rounded-xl shadow-md service-card-hover transition-all overflow-hidden flex flex-col">
                <div className="h-40 overflow-hidden relative">
                  <img
                    alt="Wedding Chauffeur Service"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDySzdKevyeQkemj4H_SWSNNZePpII3TZceQ5LvLuAJuAkkAF7H4HiVuDTYySMVNvFWxoIN-etZ15YYuLgREnH1JF8uOrAjHDAul5eWENMmgI4GA6mJUPdkTfk97Yk7XWkGwWAGUQefjI5hjUwZ70WKU9QOwzNTWr3npOtHaWhMSSpFWG33afhvEjX8RMHqsFuu4MzNTz9NcV3t9SAJey3mvQIc-KcK_dLpXwF-ZwK9-boKjOG74kNGZ_JfW3U2rxZMOmCn156U5AVy"
                  />
                </div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-deep-navy mb-2">Weddings</h3>
                  <p className="text-sm sm:text-base text-on-surface-variant mb-4 flex-1">
                    Arrive in elegance on your special day. Our pristine fleet adds a touch of
                    class to your celebration.
                  </p>
                  <Link
                    href="/contact"
                    className="text-primary font-bold inline-flex items-center gap-1 hover:underline text-sm"
                  >
                    Book Now <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Featured: UK-Wide Executive Travel */}
            <div className="md:col-span-12 mt-2 sm:mt-4">
              <div className="relative rounded-2xl overflow-hidden h-[350px] sm:h-[400px] lg:h-[450px] shadow-lg group">
                <img
                  alt="UK-Wide Executive Travel"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9KfG8b_C5FcuLFfKqXilP-dG75iKafowlMc7WwLyYaKF7Hw05SKgokpsrL6Hr-BsdaA9TBz5KfzOw-hmhoOuuQyasFsYo0k7v_tDRdjysdK0bkDqW254T6QBxCJ2QLmaC9j-IhuDo7L_XquxXsDD8fcOdM9gmi3851GtEFOSCQzH3eUMg1UxX8RNZiqxfRTo1C6Tmlim038jLP7OE2O2schoXCE2DvM_n_BZPtQ9VwuHl_yAkSj3UwQIEGxHKkOAuBRCr-6J0GV6c"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-end p-4 sm:p-8 lg:p-16">
                  <div className="glass-overlay p-6 sm:p-8 lg:p-10 rounded-xl max-w-md sm:max-w-lg shadow-xl w-full sm:w-auto">
                    <span className="text-primary font-bold text-xs tracking-widest uppercase mb-2 block">
                      Premium Tier
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-deep-navy mb-3 sm:mb-4">
                      UK-Wide Executive Travel
                    </h3>
                    <p className="text-on-surface-variant mb-5 sm:mb-6 text-sm sm:text-base">
                      Long-distance travel redefined. Experience absolute silence and comfort as
                      you travel between UK cities for business or pleasure.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-block bg-primary text-white px-6 sm:px-8 py-3 rounded-lg font-bold hover:bg-deep-navy transition-colors text-sm sm:text-base"
                    >
                      Configure Route
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Conferences, Tourist, Local */}
            <div className="md:col-span-4 bg-white rounded-xl shadow-md service-card-hover transition-all overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img
                  alt="Corporate Conferences"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqz14jBsrulUtY2JILO8SYnodR0nJfOMg9diOBTbJDpIfybJP7eTBcD1tnKRoOB1bv6niWyDLzweeV0hWmLoLRsI2EFBAdraMziHWABfMOr-G5jlbiOtTFeTXcBtXtbnRGmpTYyokDHlnpot5WDxU-3zd9I1MmgETyYjX5D2lcFyyvP_Z64zr4H9F52rtMnGE70BPkrx4yS-W7ZaLQQtYAEWUUnZlEVRMzH1uNW4ZfVAgrN1Mbz2o8WGxIafRjJfmgaHr7qwB6VvqZ"
                />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-deep-navy mb-3">Conferences</h3>
                <p className="text-sm sm:text-base text-on-surface-variant mb-6 flex-1">
                  Coordinated group transport for corporate events. We manage the logistics so you
                  can focus on the agenda.
                </p>
                <Link
                  href="/contact"
                  className="text-primary font-bold inline-flex items-center gap-1 hover:underline text-sm"
                >
                  Book Now <span className="material-symbols-outlined text-sm">open_in_new</span>
                </Link>
              </div>
            </div>

            <div className="md:col-span-4 bg-white rounded-xl shadow-md service-card-hover transition-all overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img
                  alt="Tourist Day Service"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuChssoo5VgthB2HEEZADSYtxmYNxeIKxdRuX8EOo9_Kwcd6rjXgQGL1N9IGysrEE6fEmkIsk956Glxl64BC44Vgv4Nnr0avkKaQc6CKGzpoFafmaE0xaFp8XBS4u4WHpqb3Zz_yxDFbMlOH3-6KB4c2pGXQsdO9kECh4EDabfA61AKWFKlD95v41U2iXgpsRa0dQBziMGBKb4YesiGmh5rYFZvy1LQhJh-1ZubyVUawBqMxUfm51enX6J6J2hWEj_fZ-06Fq7eOFXPG"
                />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-deep-navy mb-3">Tourist Day Service</h3>
                <p className="text-sm sm:text-base text-on-surface-variant mb-6 flex-1">
                  Bespoke sightseeing tours. Discover Windsor Castle, Stonehenge, or the Cotswolds
                  with a private guide.
                </p>
                <Link
                  href="/contact"
                  className="text-primary font-bold inline-flex items-center gap-1 hover:underline text-sm"
                >
                  Book Now <span className="material-symbols-outlined text-sm">open_in_new</span>
                </Link>
              </div>
            </div>

            <div className="md:col-span-4 bg-white rounded-xl shadow-md service-card-hover transition-all overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img
                  alt="Local Pickup Service"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1t_MsnPOpqVPKQ_S_tbKJFPdpic3nd1fWGhDMljd4Axr0qbA7cYGiauW6zRophCaFWo1wpQl2K4a6MyT8TzPF3sQlJ7XjNOCItLRDVGpf4_dOFrjT7zmAsthILA9lYsuImWn8hNr1ha757B0qEGBpLbcLSFfnFvqGINbFIefWyUkJNkuOZJr-Rukxy1JLQvWtUn9nPHXx2okEbGiL87q-mO4iIxA1QOzuBHvxTtiL7HHvpt9fdqB6fJrclPTpUxKKfHbImoCvjGmG"
                />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-deep-navy mb-3">Local Pickups</h3>
                <p className="text-sm sm:text-base text-on-surface-variant mb-6 flex-1">
                  Elite local travel within Windsor and surrounding counties. The executive choice
                  for everyday journeys.
                </p>
                <Link
                  href="/contact"
                  className="text-primary font-bold inline-flex items-center gap-1 hover:underline text-sm"
                >
                  Book Now <span className="material-symbols-outlined text-sm">open_in_new</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-surface-grey py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-deep-navy">
              Ready to book your next journey?
            </h2>
            <p className="text-base sm:text-lg text-on-surface-variant mb-8 max-w-xl mx-auto">
              Our team is available 24/7 to assist with your booking or create a bespoke itinerary
              for your specific travel needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-deep-navy transition-all shadow-md"
              >
                Book Online
              </Link>
              <a
                href="tel:+441753677677"
                className="inline-block bg-white border-2 border-primary text-primary px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-primary/5 transition-all"
              >
                Call 01753 677 677
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
