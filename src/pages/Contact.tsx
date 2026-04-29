import React from "react";
import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { fadeInUpOnMount, fadeInUpOnScroll } from "../lib/animations";

const contactUsBanner = new URL(
  "../../img/contactUsBanner.png",
  import.meta.url,
).href;

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <div className="pt-10">
      {/* Hero Section */}

      <section className="relative overflow-hidden rounded-3xl h-[300px] md:h-[360px] w-full">
        <div className="absolute inset-0 opacity-550">
          <img
            src={contactUsBanner}
            className="w-full h-full object-cover"
            alt="Contact Us Hero"
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
              Contact <span className="text-primary">Us</span>
            </motion.h2>

            <motion.p
              {...fadeInUpOnMount}
              transition={{ ...fadeInUpOnMount.transition, delay: 0.14 }}
              className="text-white/90 text-base md:text-lg max-w-2xl mx-auto"
            >
              Have questions? We're here to help you find the perfect machinery
            </motion.p>
          </div>
        </div>
      </section>

      {/* <section className="bg-secondary py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={contactUsBanner}
            className="w-full h-full object-cover"
            alt="Contact Hero"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            {...fadeInUpOnMount}
            className="text-5xl md:text-7xl font-black text-white mb-6"
          >
            Contact <span className="text-primary">Us</span>
          </motion.h1>
          <motion.p
            {...fadeInUpOnMount}
            transition={{ ...fadeInUpOnMount.transition, delay: 0.12 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Have questions? We're here to help you find the perfect machinery
            for your project.
          </motion.p>
        </div>
      </section> */}

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl mb-8">
                Get In <span className="text-primary">Touch</span>
              </h2>
              <p className="text-gray-600 mb-12 leading-relaxed">
                Whether you're looking for heavy machinery, specialized
                construction equipment, or heavy-duty transport, our team is
                ready to assist you. Reach out to us through any of the
                following channels.
              </p>

              <div className="space-y-8 mb-12">
                {[
                  {
                    icon: <MapPin className="text-primary" />,
                    title: "Our Location",
                    detail:
                      "CEC Building, No 423, Nawala Road, Rajagiriya, Sri Lanka",
                  },
                  {
                    icon: <Phone className="text-primary" />,
                    title: "Phone Number",
                    detail: "0777778470",
                  },
                  {
                    icon: <Mail className="text-primary" />,
                    title: "Email Address",
                    detail: "info@cec.lk / support@cec.lk",
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
                    <div className="bg-primary/10 p-4 rounded-2xl shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="text-lg font-bold mb-1">{item.title}</h5>
                      <p className="text-gray-500">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <motion.div
                    key={i}
                    {...fadeInUpOnScroll}
                    transition={{
                      ...fadeInUpOnScroll.transition,
                      delay: i * 0.06,
                    }}
                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all cursor-pointer"
                  >
                    <Icon size={20} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              {...fadeInUpOnScroll}
              transition={{ ...fadeInUpOnScroll.transition, delay: 0.12 }}
              className="bg-white p-10 rounded-[2rem] shadow-2xl border border-gray-100"
            >
              <h3 className="text-2xl mb-8">
                Send Us a <span className="text-primary">Message</span>
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Inquiry about Heavy Machinery"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us more about your requirements..."
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center py-5 text-lg"
                >
                  Send Message <Send size={20} className="ml-2" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-gray-200 relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.434444444444!2d79.88888888888889!3d6.916666666666667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259a71203e0ff%3A0x66930cf41c69120!2sNawala%20Rd%2C%20Sri%20Jayawardenepura%20Kotte!5e0!3m2!1sen!2slk!4v1620000000000!5m2!1sen!2slk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="CEC Rental Location"
        ></iframe>
      </section>
    </div>
  );
}
