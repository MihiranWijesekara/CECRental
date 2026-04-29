import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Users, Award, MapPin } from "lucide-react";
import { fadeInUpOnMount, fadeInUpOnScroll } from "../lib/animations";

const ashokaImage = new URL("../../img/Ashoka.png", import.meta.url).href;
const gaminiImage = new URL("../../img/gamini.jpg", import.meta.url).href;
const sulekaImage = new URL("../../img/Suleka.png", import.meta.url).href;
const CECImage = new URL("../../img/CECBuilding1.png", import.meta.url).href;
const aboutUsbanner = new URL("../../img/aboutUsBanner.png", import.meta.url)
  .href;

export default function About() {
  return (
    <div className="pt-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl h-[300px] md:h-[360px] w-full">
        <div className="absolute inset-0 opacity-550">
          <img
            src={aboutUsbanner}
            className="w-full h-full object-cover"
            alt="About Us Hero"
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
              About <span className="text-primary">CEC Rental</span>
            </motion.h2>

            <motion.p
              {...fadeInUpOnMount}
              transition={{ ...fadeInUpOnMount.transition, delay: 0.14 }}
              className="text-white/90 text-base md:text-lg max-w-2xl mx-auto"
            >
              Your premier choice for heavy machinery and reliable transport
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUpOnScroll}>
              <h2 className="text-4xl mb-6">
                Our <span className="text-primary">Story</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2011, CEC Rental started with a simple mission: to
                provide high-quality, reliable heavy machinery and
                transportation solutions for construction and industrial needs.
                Over the years, we have grown to become a trusted partner for
                large-scale projects across Sri Lanka.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We pride ourselves on our specialized fleet, focusing on JCBs,
                Tippers, and Excavators for construction and industrial needs.
                Our core strength lies in supporting the industrial and
                construction sectors with heavy-duty machinery and reliable
                transport solutions.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-primary text-3xl font-bold mb-2">15+</h4>
                  <p className="text-gray-500 font-medium uppercase text-xs tracking-widest">
                    Years Experience
                  </p>
                </div>
                <div>
                  <h4 className="text-primary text-3xl font-bold mb-2">500+</h4>
                  <p className="text-gray-500 font-medium uppercase text-xs tracking-widest">
                    Happy Clients
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              {...fadeInUpOnScroll}
              transition={{ ...fadeInUpOnScroll.transition, delay: 0.12 }}
              className="relative"
            >
              <img
                src={CECImage}
                className="rounded-[2rem] shadow-2xl"
                alt="Office"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary p-8 rounded-2xl shadow-xl text-white">
                <ShieldCheck size={40} />
                <p className="mt-4 font-bold">
                  32 years of <br />
                  engineering excellency
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="text-gray-500">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {[
              {
                icon: <Users size={32} />,
                title: "Customer First",
                desc: "We prioritize our customers' needs and safety above all else.",
              },
              {
                icon: <Award size={32} />,
                title: "Quality Fleet",
                desc: "Every vehicle in our fleet undergoes rigorous maintenance checks.",
              },
              {
                icon: <MapPin size={32} />,
                title: "Local Expertise",
                desc: "Deep knowledge of Sri Lankan roads and travel requirements.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                {...fadeInUpOnScroll}
                transition={{ ...fadeInUpOnScroll.transition, delay: i * 0.08 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                  {value.icon}
                </div>
                <h4 className="text-xl mb-4">{value.title}</h4>
                <p className="text-gray-500">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">
              Our <span className="text-primary">Leadership</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-500 leading-relaxed">
                Consulting Engineers & Contractors (Pvt) Ltd (CEC), now
                rebranded as the CEC Group of Companies, is a trusted leader in
                road construction and civil engineering in Sri Lanka, with over
                30 years of experience delivering quality projects on time.
              </p>
              <a
                href="https://www.cec.lk/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-transform transition-colors hover:-translate-y-0.5 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                See more
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2   max-w-2xl mx-auto">
            {[
              {
                name: "Eng. Ashoka Randeni",
                role: "Founder & Managing Director",
                img: ashokaImage,
              },
              {
                name: "Suleka Jayawardena",
                role: "Group of Director",
                img: sulekaImage,
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                {...fadeInUpOnScroll}
                transition={{ ...fadeInUpOnScroll.transition, delay: i * 0.08 }}
                className="group text-center"
              >
                <div className="relative overflow-hidden rounded-3xl mb-4 flex justify-center">
                  <img
                    src={member.img}
                    className="w-60 h-60 md:w-56 md:h-56 object-cover rounded-3xl transition-transform group-hover:scale-110"
                    alt={member.name}
                  />
                </div>
                <h4 className="text-lg font-bold">{member.name}</h4>
                <p className="text-sm text-gray-500">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
