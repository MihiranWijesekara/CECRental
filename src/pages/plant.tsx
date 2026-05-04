import { AnimatePresence, motion } from "motion/react";
import React from "react";
import { fadeInUpOnMount } from "../lib/animations";

const ConstructionPlantBanner = new URL(
  "../../img/ConstructionPlantBanner.png",
  import.meta.url,
).href;

interface PlantItem {
  id: number;
  category: string;
  name: string;
  description: string;
  //   fuel: string;
  features: string[];
  image: string;
}

const plantItems: PlantItem[] = [
  {
    id: 2,
    category: "Asphalt Product",
    name: "Asphalt Mix Supply",
    description:
      "Consistent asphalt products for road surfacing and maintenance with quality-controlled production. Available with transport and without transport.",
    // fuel: "N/A",
    features: [],
    image: "/img/aspaltPlant1.png",
  },
  {
    id: 3,
    category: "Quarry Product",
    name: "Quarry Material Supply",
    description:
      "High-quality aggregates and quarry products for concrete, sub-base, drainage, and civil projects. Available with transport and without transport.",
    // fuel: "N/A",
    features: ["Quarry Dust", "Chips", "ABC", 'Metal (3/4", 1/2", 1/4")'],
    image: "/img/QuarryPlant1.png",
  },
];

export default function Plant() {
  return (
    <section className="py-10 bg-gray-50">
      <section className="relative overflow-hidden rounded-3xl h-[300px] md:h-[360px] w-full">
        <div className="absolute inset-0 opacity-550">
          <img
            src={ConstructionPlantBanner}
            className="w-full h-full object-cover"
            alt="Construction Plant Hero"
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
              Our <span className="text-primary">Construction Plant</span>
            </motion.h2>

            <motion.p
              {...fadeInUpOnMount}
              transition={{ ...fadeInUpOnMount.transition, delay: 0.14 }}
              className="text-white/90 text-base md:text-lg max-w-2xl mx-auto"
            >
              We provide reliable construction plant services with quality
              asphalt products and quarry products for every stage of your
              project.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {plantItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 flex flex-col justify-between h-full"
              >
                {/* Image Section */}
                <div className="w-full h-100 overflow-hidden bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase">
                        {item.category}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.features.map((f) => (
                      <span
                        key={f}
                        className="text-[13px] bg-gray-50 text-gray-500 px-1 py-1 rounded-md uppercase font-bold border border-gray-100"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <p className="text-dark font-bold  mb-2 ">
                      Kadhapola:{" "}
                      <span className="text-primary">077 376 2709</span>
                    </p>
                    <p className="text-dark font-bold mb-2 ">
                      Vauniya:{" "}
                      <span className="text-primary">077 748 9012</span>
                    </p>
                    <p className="text-dark font-bold mb-2 ">
                      Medawachchiya:{" "}
                      <span className="text-primary">077 748 9012</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
