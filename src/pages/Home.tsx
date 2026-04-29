import React, { useEffect, useState } from "react";
import {
  ChevronRight,
  Star,
  ShieldCheck,
  Clock,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { fadeInUpOnMount, fadeInUpOnScroll } from "../lib/animations";

const cab = new URL("../../img/cab.jpeg", import.meta.url).href;
const tipper1 = new URL("../../img/tiper1.jpg", import.meta.url).href;
const banner = new URL("../../img/banner.png", import.meta.url).href;
const banner3 = new URL("../../img/HeroBanner4.png", import.meta.url).href;
const banner4 = new URL("../../img/HeroBanner5.png", import.meta.url).href;

const VIPSectionBanner = new URL(
  "../../img/VIPSectionBanner1.png",
  import.meta.url,
).href;
const GenaralSectionBanner = new URL(
  "../../img/GenaralSectionBanner1.png",
  import.meta.url,
).href;
const machinerySectionBanner = new URL(
  "../../img/machinerySectionBanner1.png",
  import.meta.url,
).href;

export default function Home() {
  const [showPhone, setShowPhone] = useState(false);
  const [heroBannerIndex, setHeroBannerIndex] = useState(0);

  const heroBanners = [banner, banner3, banner4];

  useEffect(() => {
    const preloadedImages = heroBanners.map((src) => {
      const image = new Image();
      image.src = src;
      return image;
    });

    const intervalId = window.setInterval(() => {
      setHeroBannerIndex((prev) => (prev + 1) % heroBanners.length);
    }, 4000);

    return () => {
      window.clearInterval(intervalId);
      void preloadedImages;
    };
  }, [heroBanners.length]);

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBanners[heroBannerIndex]}
            className="w-full h-full object-cover"
            alt="Hero Background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            {...fadeInUpOnMount}
            transition={{ ...fadeInUpOnMount.transition, duration: 0.8 }}
            className="max-w-4xl text-white"
          >
            <h4 className="text-primary font-bold uppercase tracking-widest mb-4">
              THE ULTIMATE RENTAL EXPERIENCE
            </h4>
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
              Elite VVIP Travel & <br />
              <span className="text-primary">Professional Machinery</span>
            </h1>
            <p className="text-xl text-white/75 mb-10 max-w-lg leading-relaxed">
              From luxury SUVs to construction equipment including JCBs and
              Excavators. We provide high-end transport and machinery solutions
              across Sri Lanka.
            </p>
            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-4">
              <a
                href="#machinery"
                className="btn-primary flex items-center justify-center px-10"
              >
                Explore Our Fleet <ChevronRight size={20} className="ml-2" />
              </a>
              <Link
                to="/contact"
                className="btn-outline border-white text-white hover:bg-white hover:text-secondary flex items-center justify-center px-10"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h4 className="text-primary font-bold uppercase tracking-widest mb-4">
                Why Choose Us
              </h4>
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
                Reliable Solutions for Every Journey
                <span className="text-primary"> & Project</span>
              </h2>

              <div className="space-y-8">
                {[
                  {
                    icon: <ShieldCheck className="text-primary" />,
                    title: "Fully Insured",
                    desc: "All our vehicles and machinery come with comprehensive insurance for your total peace of mind.",
                  },
                  {
                    icon: <Clock className="text-primary" />,
                    title: "24/7 Support",
                    desc: "Our dedicated support team is available around the clock to assist you, whether you're on the road or at the site.",
                  },
                  {
                    icon: <TrendingUp className="text-primary" />,
                    title: "Best Rates",
                    desc: "We offer premium quality at competitive rates, ensuring value with no hidden charges or surprise fees.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    {...fadeInUpOnScroll}
                    transition={{
                      ...fadeInUpOnScroll.transition,
                      delay: i * 0.08,
                    }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-primary/10 p-3 rounded-2xl shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="text-xl mb-2">{item.title}</h5>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={tipper1}
                  className="w-full aspect-[4/3] object-cover rounded-3xl shadow-2xl mt-12"
                  alt="Service 1"
                  referrerPolicy="no-referrer"
                />
                <img
                  src={cab}
                  className="w-full aspect-[4/3] object-cover rounded-3xl shadow-2xl"
                  alt="Service 2"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-3xl shadow-2xl hidden md:block">
                <p className="text-4xl font-bold mb-1">15+</p>
                <p className="text-sm font-medium opacity-80 uppercase tracking-widest">
                  Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <motion.section
        id="machinery"
        className="section-padding bg-gray-50"
        {...fadeInUpOnScroll}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">
              Our <span className="text-primary">Service Sections</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Explore VVIP, General, and Machinery services with one click.
            </p>
          </div>

          <div className="space-y-10">
            <motion.div
              {...fadeInUpOnScroll}
              className="overflow-hidden rounded-[3rem] shadow-2xl bg-[#0b0f19] text-white border border-white/10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-3 relative min-h-[360px] md:min-h-[460px]">
                  <img
                    src={VIPSectionBanner}
                    alt="VVIP Section"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />
                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#d8b36a]/40 bg-[#d8b36a]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#f5d38a] w-fit mb-4 backdrop-blur-sm">
                      Premium Travel
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black tracking-tight max-w-xl drop-shadow-lg">
                      VVIP Section
                    </h3>
                    <p className="mt-4 max-w-xl text-white/80 leading-relaxed">
                      Elite chauffeur-driven travel with premium comfort,
                      privacy, and a polished executive look.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-2 p-8 md:p-12 bg-[radial-gradient(circle_at_top_right,rgba(216,179,106,0.14),transparent_30%),linear-gradient(180deg,#0f1522_0%,#0b0f19_100%)] flex flex-col justify-center">
                  <p className="text-[#f5d38a] font-bold uppercase tracking-[0.25em] text-xs mb-4">
                    Premium Travel
                  </p>
                  <h4 className="text-2xl md:text-3xl font-black mb-4">
                    VVIP Section
                  </h4>
                  <p className="text-white/75 leading-relaxed mb-8 max-w-xl">
                    Luxury transport for airport transfers, high-profile events,
                    and executive travel.
                  </p>
                  <div className="grid grid-cols-1 gap-3 mb-8">
                    {[
                      "Airport transfers",
                      "Executive rides",
                      "Luxury comfort",
                    ].map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-white/90"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 mb-8 text-sm text-white/70">
                    <span className="rounded-full bg-white/10 px-4 py-2">
                      Private
                    </span>
                    <span className="rounded-full bg-white/10 px-4 py-2">
                      Executive
                    </span>
                    <span className="rounded-full bg-white/10 px-4 py-2">
                      Luxury
                    </span>
                  </div>
                  <div>
                    <Link
                      to="/transport"
                      className="inline-flex items-center gap-2 rounded-full bg-[#d8b36a] px-8 py-3 font-bold tracking-wide text-[#0b0f19] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#efc87a] hover:shadow-2xl"
                    >
                      Read More <ChevronRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUpOnScroll}
              className="overflow-hidden rounded-[3rem] shadow-2xl border border-emerald-100 bg-[#f7faf5]"
            >
              <div className="relative h-[300px] md:h-[420px]">
                <img
                  src={GenaralSectionBanner}
                  alt="General Section"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute top-6 left-6 flex items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-[#2f3b2a]/90 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-lg">
                    Daily Transport
                  </span>
                  <span className="inline-flex items-center rounded-full bg-white/85 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-secondary shadow-lg backdrop-blur-md">
                    Clean Fleet
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                  <h3 className="text-3xl md:text-5xl font-black tracking-tight drop-shadow-lg max-w-2xl">
                    General Section
                  </h3>
                  <p className="text-white/85 mt-4 max-w-2xl leading-relaxed text-base md:text-lg">
                    Reliable day-to-day transport vehicles for personal and
                    business use.
                  </p>
                </div>
              </div>

              <div className="p-8 md:p-10 bg-[linear-gradient(180deg,#f7faf5_0%,#ffffff_100%)]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                      {[
                        "Staff transport",
                        "Family travel",
                        "Business trips",
                      ].map((point) => (
                        <div
                          key={point}
                          className="rounded-2xl border border-emerald-100 bg-white px-4 py-4 text-sm font-semibold text-secondary shadow-sm"
                        >
                          {point}
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-600 leading-relaxed max-w-2xl">
                      Comfortable and dependable transport that works for daily
                      travel, staff movement, and business use across Sri Lanka.
                    </p>
                  </div>

                  <div className="lg:col-span-4 flex lg:justify-end">
                    <Link
                      to="/transport"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-[#2f3b2a] bg-[#2f3b2a] px-8 py-3 font-bold tracking-wide text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#23301f] hover:shadow-2xl"
                    >
                      Read More <ChevronRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUpOnScroll}
              className="rounded-[2.75rem] overflow-hidden shadow-xl border border-gray-100 bg-secondary text-white"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-3 relative min-h-[340px] md:min-h-[420px]">
                  <img
                    src={machinerySectionBanner}
                    alt="Machinery Section"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/40 to-transparent" />
                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                    <span className="inline-flex items-center rounded-full bg-primary/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] w-fit mb-4">
                      Site Power
                    </span>
                    <h3 className="text-3xl md:text-5xl font-black tracking-tight max-w-lg">
                      Machinery Section
                    </h3>
                    <p className="text-white/80 mt-4 max-w-xl leading-relaxed">
                      Heavy machinery for construction, excavation, and site
                      operations.
                    </p>
                  </div>
                  <div className="absolute top-8 right-8 w-28 h-28 rounded-full bg-primary/20 blur-3xl" />
                </div>

                <div className="lg:col-span-2 p-8 md:p-12 bg-[#111827] flex flex-col justify-center">
                  <p className="text-primary font-bold uppercase tracking-[0.25em] text-xs mb-4">
                    Site Power
                  </p>
                  <div className="space-y-4 mb-8">
                    {["Excavation", "Road work", "Project support"].map(
                      (point) => (
                        <div
                          key={point}
                          className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-4"
                        >
                          <span className="h-3 w-3 rounded-full bg-primary shrink-0" />
                          <span className="font-medium text-white/90">
                            {point}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                  <Link
                    to="/machinery"
                    className="inline-flex items-center gap-2 self-start bg-primary text-white px-8 py-3 rounded-full font-bold tracking-wide shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Read More <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="section-padding bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our customers have to
              say about their experience with CEC Rental.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {[
              {
                name: "Kamal Perera",
                role: "Construction Manager",
                text: "The JCB and Tippers we rented were in excellent condition. They helped us complete our project ahead of schedule.",
                rating: 5,
              },
              {
                name: "Sunil Silva",
                role: "Logistics Coordinator",
                text: "Reliable transport service. Their tipper trucks are heavy-duty and the drivers are very professional.",
                rating: 5,
              },
              {
                name: "Anura Bandara",
                role: "Site Supervisor",
                text: "The Dozer was powerful and handled the terrain perfectly. Great support and competitive rates.",
                rating: 5,
              },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                {...fadeInUpOnScroll}
                transition={{ ...fadeInUpOnScroll.transition, delay: i * 0.08 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex-1"
              >
                <div className="flex text-primary mb-4">
                  {[...Array(t.rating)].map((_, starIndex) => (
                    <Star key={starIndex} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{t.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold mr-4">
                    {t.name[0]}
                  </div>
                  <div>
                    <h5 className="font-bold">{t.name}</h5>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        className="container mx-auto px-4 mb-24"
        {...fadeInUpOnScroll}
      >
        <div className="bg-secondary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1920"
              className="w-full h-full object-cover opacity-20"
              alt="CTA Background"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -ml-32 -mb-32" />

          <div className="relative z-10">
            <h2 className="text-white text-4xl md:text-6xl mb-6">
              Need Heavy Equipment?
            </h2>
            <p className="text-white/60 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Get the best rates on Excavators, Tippers, JCBs, Motor Graders,
              and Road Rollers. Contact us today to discuss your project
              requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => setShowPhone(!showPhone)}
                className="btn-primary bg-accent text-secondary hover:bg-white min-w-[180px]"
              >
                {showPhone ? "0777778470" : "Call to Book"}
              </button>
              <Link to="/contact" className="btn-primary">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
