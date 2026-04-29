import React from "react";
import { motion } from "motion/react";
import { fadeInUpOnMount, fadeInUpOnScroll } from "../lib/animations";

const RangeRover = new URL("../../img/RangeRover.jpeg", import.meta.url).href;
const Benz = new URL("../../img/Benzcrop.jpeg", import.meta.url).href;
const LC300 = new URL("../../img/LC300.jpg", import.meta.url).href;

const DoubleCab = new URL("../../img/Double cab.jpeg", import.meta.url).href;
const HondaVezel = new URL("../../img/HondaVezel.jpeg", import.meta.url).href;
const nisan = new URL("../../img/nisan.png", import.meta.url).href;

const TransportBanner = new URL(
  "../../img/TransportvehicalBanner1.png",
  import.meta.url,
).href;

export default function Transport() {
  const vipVehicles = [
    {
      id: 1,
      name: "Range Rover",
      image: RangeRover,
    },
    {
      id: 2,
      name: "Mercedes-Benz",
      image: Benz,
    },
    {
      id: 3,
      name: "Land Cuiser LC 300",
      image: LC300,
    },
  ];

  const transportEquipment = [
    {
      id: 4,
      name: "Honda vezel",
      image: HondaVezel,
    },
    {
      id: 5,
      name: "Nissan Urvan",
      image: nisan,
    },
    {
      id: 6,
      name: "Toyota Double Cab",
      image: DoubleCab,
    },
  ];

  return (
    <>
      {/* VIP Section */}
      <section className=" py-5 relative overflow-hidden rounded-3xl h-[300px] md:h-[360px] w-full">
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
              Our <span className="text-primary">Transport Vehicles</span>
            </motion.h2>

            <motion.p
              {...fadeInUpOnMount}
              transition={{ ...fadeInUpOnMount.transition, delay: 0.14 }}
              className="text-white/90 text-base md:text-lg max-w-2xl mx-auto"
            >
              Explore our premium and general vehicle collection, designed for
              executives and everyday transportation needs.
            </motion.p>
          </div>
        </div>
      </section>
      <section className="section-padding bg-gradient-to-b from-secondary/5 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h4 className="text-primary font-bold uppercase tracking-widest mb-4">
              Premium Fleet
            </h4>
            <h2 className="text-4xl md:text-5xl mb-4">
              Our <span className="text-primary">VIP Vehicles</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Experience luxury travel with our premium collection of elite
              vehicles for executive and VVIP transportation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vipVehicles.map((vehicle, i) => (
              <motion.div
                key={vehicle.id}
                {...fadeInUpOnScroll}
                transition={{ ...fadeInUpOnScroll.transition, delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl font-bold text-secondary">
                      {vehicle.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-2">
                      Premium luxury transport
                    </p>
                    <br></br>
                    <p className="text-dark font-bold  ">
                      Call to Book:{" "}
                      <span className="text-primary">0777778470</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transport Vehicles Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h4 className="text-primary font-bold uppercase tracking-widest mb-4">
              Passenger Transport
            </h4>
            <h2 className="text-4xl md:text-5xl mb-4">
              Our <span className="text-primary">Transport Vehicles</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Comfortable and reliable vehicles for staff transport, airport
              transfers, and daily travel needs across Sri Lanka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transportEquipment.map((equipment, i) => (
              <motion.div
                key={equipment.id}
                {...fadeInUpOnScroll}
                transition={{ ...fadeInUpOnScroll.transition, delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={equipment.image}
                    alt={equipment.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl font-bold text-secondary">
                      {equipment.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-2">
                      Reliable passenger transport vehicle
                    </p>
                    <br></br>
                    <p className="text-dark font-bold  ">
                      Call to Book:{" "}
                      <span className="text-primary">0777778470</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
