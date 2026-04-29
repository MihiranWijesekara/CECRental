import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CARS } from "../data";
import { fadeInUpOnMount } from "../lib/animations";

const TransportBanner = new URL(
  "../../img/machineryHeroBanner.png",
  import.meta.url,
).href;

export default function Machinery() {
  const filteredCars = CARS.filter(
    (car) => car.category === "Machinery" || car.category === "Transport",
  );

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
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Our <span className="text-primary">Machinery Fleet</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Explore our heavy machinery lineup for construction and site work.
          </p>
        </div> */}

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
                <div>
                  <p className="text-dark font-bold  ">
                    Call to Book:{" "}
                    <span className="text-primary">0777778470</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
