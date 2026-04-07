import React, { useEffect, useState } from "react";
import {
  ChevronRight,
  Star,
  ShieldCheck,
  Clock,
  TrendingUp,
  Search,
  Filter,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CARS } from "../data";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
import { fadeInUpOnMount, fadeInUpOnScroll } from "../lib/animations";

const machine1 = new URL("../../img/machine1.jpeg", import.meta.url).href;
const tipper1 = new URL("../../img/tiper1.jpg", import.meta.url).href;
const banner = new URL("../../img/banner.jpeg", import.meta.url).href;
const banner1 = new URL("../../img/HeroBanner2.png", import.meta.url).href;
const banner2 = new URL("../../img/HeroBanner3.png", import.meta.url).href;
const banner3 = new URL("../../img/HeroBanner4.png", import.meta.url).href;
const banner4 = new URL("../../img/HeroBanner5.png", import.meta.url).href;

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showPhone, setShowPhone] = useState(false);
  const [heroBannerIndex, setHeroBannerIndex] = useState(0);

  const heroBanners = [banner, banner1, banner2, banner3, banner4];

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

  const categories = ["All", "Machinery", "Transport"];

  const getCategoryContent = (category: string) => {
    switch (category) {
      case "Machinery":
        return {
          title: (
            <>
              Our <span className="text-primary">Heavy Machinery</span>
            </>
          ),
          description:
            "High-performance Excavators, JCBs, Motor Graders, and Road Rollers for your construction projects.",
        };
      case "Transport":
        return {
          title: (
            <>
              Our <span className="text-primary">Transport Solutions</span>
            </>
          ),
          description:
            "Heavy-duty tippers and trucks designed for efficient material transport and logistics.",
        };
      default:
        return {
          title: (
            <>
              Our <span className="text-primary">Equipment Fleet</span>
            </>
          ),
          description:
            "Explore our full range of heavy machinery and transport solutions available for rent.",
        };
    }
  };

  const categoryContent = getCategoryContent(activeCategory);

  const filteredCars = CARS.filter((car) => {
    const matchesCategory =
      activeCategory === "All" || car.category === activeCategory;
    const matchesSearch = car.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-40 pb-32 overflow-hidden ">
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

      {/* Services Section */}
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
                    key={i}
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
                  src={machine1}
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

      {/* Search & Filter
      <motion.section
        className="container mx-auto px-4 -mt-16 relative z-30"
        {...fadeInUpOnScroll}
      >
        <div className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search equipment..."
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 md:col-span-3">
              <Filter size={20} className="text-gray-400 shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap",
                    activeCategory === cat
                      ? "bg-primary text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200",
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.section> */}

      {/* Fleet Section */}
      <motion.section
        id="machinery"
        className="section-padding bg-gray-50"
        {...fadeInUpOnScroll}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">
              {categoryContent.title}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {categoryContent.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredCars.map((car) => (
                <motion.div
                  layout
                  key={car.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase">
                        {car.category}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      {car.description}
                    </p>
                    <div className="space-y-2 mb-8">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Specifications
                      </p>
                      <p className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        Fuel: {car.fuel}
                      </p>
                      <p className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        Capacity: {car.capacity}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {car.features.map((f) => (
                      <span
                        key={f}
                        className="text-[10px] bg-gray-50 text-gray-500 px-2 py-1 rounded-md uppercase font-bold border border-gray-100"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredCars.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">
                No equipment found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </motion.section>

      {/* Testimonials Section */}
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
                key={i}
                {...fadeInUpOnScroll}
                transition={{ ...fadeInUpOnScroll.transition, delay: i * 0.08 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex-1"
              >
                <div className="flex text-primary mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
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

      {/* CTA Banner */}
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
