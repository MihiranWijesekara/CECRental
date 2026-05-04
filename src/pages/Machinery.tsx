import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CARS } from "../data";
import { fadeInUpOnMount } from "../lib/animations";
import { useNavigate } from "react-router-dom";

const TransportBanner = new URL(
  "../../img/machineryHeroBanner.png",
  import.meta.url,
).href;

export default function Machinery() {
  const filteredCars = CARS.filter(
    (car) => car.category === "Machinery" || car.category === "Transport",
  );
  const navigate = useNavigate();

  const getMachineryRoute = (name: string) => {
    const normalizedName = name.trim().toLowerCase();

    switch (normalizedName) {
      case "jcb":
        return "/machinery/jcb";
      case "excavator":
        return "/machinery/excavator";
      case "motor grader":
        return "/machinery/motorgrader";
      case "road roller":
        return "/machinery/roadroller";
      case "tipper":
        return "/machinery/tipper";
      default:
        return "/machinery";
    }
  };

  return (
    <section className="py-10 bg-gray-50">
      <section className="relative overflow-hidden rounded-3xl h-[300px] md:h-[360px] w-full">
        <div className="absolute inset-0 opacity-550">
          <img
            src={TransportBanner}
            className="w-full h-full object-cover"
            alt="Transport Hero"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/65 to-secondary/35" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center text-center py-10 md:py-12">
          <div className="max-w-3xl">
            <motion.h2
              {...fadeInUpOnMount}
              transition={{ ...fadeInUpOnMount.transition, delay: 0.08 }}
              className="text-4xl md:text-6xl font-black text-white mb-5"
            >
              Our <span className="text-primary">Machinery Fleet</span>
            </motion.h2>

            <motion.p
              {...fadeInUpOnMount}
              transition={{ ...fadeInUpOnMount.transition, delay: 0.14 }}
              className="text-white/90 text-base md:text-lg max-w-2xl mx-auto"
            >
              Explore our heavy machinery lineup for construction and site work.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4  p-16">
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
                  <div className="relative h-50 overflow-hidden bg-gray-200 rounded-2xl mb-8">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {car.description}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => navigate(getMachineryRoute(car.name))}
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-transform transition-colors hover:-translate-y-0.5 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    Get More Info
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
