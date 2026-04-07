import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CARS } from "../data";

export default function Machinery() {
  const filteredCars = CARS.filter(
    (car) => car.category === "Machinery" || car.category === "Transport",
  );

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Our <span className="text-primary">Machinery Fleet</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Explore our heavy machinery lineup for construction and site work.
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
