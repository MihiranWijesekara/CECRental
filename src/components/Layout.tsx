import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

const CECLogo = new URL("../../img/CECLOGO.png", import.meta.url).href;

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(
    null,
  );
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null,
  );
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDesktopDropdown(null);
    setOpenMobileDropdown(null);
    window.scrollTo(0, 0);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Machinery",
      path: "/machinery",
      children: [
        { name: "Machinery", path: "/machinery" },
        { name: "Plants", path: "/plant" },
      ],
    },
    { name: "Transport", path: "/transport" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const hasActiveChild = (children?: { name: string; path: string }[]) =>
    Boolean(children?.some((child) => isActive(child.path)));

  return (
    <div className="min-h-screen flex flex-col">
      {/* Topbar */}
      <div className="hidden lg:block bg-secondary text-white/70 py-2 border-b border-white/10">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a
              href="tel:0777778470"
              className="flex items-center hover:text-primary transition-colors"
            >
              <Phone size={14} className="mr-2 text-primary" /> 0777778470
            </a>
            <a
              href="mailto:info@cec.lk"
              className="flex items-center hover:text-primary transition-colors"
            >
              <Mail size={14} className="mr-2 text-primary" /> info@cec.lk
            </a>
            <span className="flex items-center">
              <MapPin size={14} className="mr-2 text-primary" /> Nawala Road,
              Rajagiriya
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Facebook size={16} className="hover:text-primary cursor-pointer" />
            <Twitter size={16} className="hover:text-primary cursor-pointer" />
            <Instagram
              size={16}
              className="hover:text-primary cursor-pointer"
            />
            <Linkedin size={16} className="hover:text-primary cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white shadow-lg py-3"
            : "bg-white/90 backdrop-blur-md py-5",
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div>
              <img
                src={CECLogo}
                alt="CEC Logo"
                className="w-20 h-11 object-contain"
              />
            </div>
            <span className="text-2xl font-black tracking-tighter text-secondary">
              CEC<span className="text-primary">RENTAL</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 font-medium">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setOpenDesktopDropdown(item.name)}
                  onMouseLeave={() => setOpenDesktopDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDesktopDropdown((prev) =>
                        prev === item.name ? null : item.name,
                      )
                    }
                    className={cn(
                      "hover:text-primary transition-colors relative group flex items-center gap-1",
                      hasActiveChild(item.children)
                        ? "text-primary"
                        : "text-secondary",
                    )}
                  >
                    {item.name}
                    <ChevronDown
                      size={16}
                      className={cn(
                        "transition-transform",
                        openDesktopDropdown === item.name ? "rotate-180" : "",
                      )}
                    />
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all group-hover:w-full",
                        hasActiveChild(item.children) ? "w-full" : "w-0",
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {openDesktopDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute top-full left-0 mt-3 min-w-[190px] rounded-xl border border-gray-100 bg-white shadow-xl p-2"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            className={cn(
                              "block rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors",
                              isActive(child.path)
                                ? "text-primary"
                                : "text-secondary",
                            )}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "hover:text-primary transition-colors relative group",
                    isActive(item.path) ? "text-primary" : "text-secondary",
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all group-hover:w-full",
                      isActive(item.path) ? "w-full" : "w-0",
                    )}
                  />
                </Link>
              ),
            )}
            <button
              onClick={() => setShowPhone(!showPhone)}
              className="btn-primary min-w-[140px]"
            >
              {showPhone ? "0777778470" : "Call to Book"}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t overflow-hidden"
            >
              <div className="flex flex-col p-4 space-y-4 font-medium">
                {navItems.map((item) =>
                  item.children ? (
                    <div key={item.name}>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMobileDropdown((prev) =>
                            prev === item.name ? null : item.name,
                          )
                        }
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span
                          className={cn(
                            hasActiveChild(item.children)
                              ? "text-primary"
                              : "text-secondary",
                          )}
                        >
                          {item.name}
                        </span>
                        <ChevronDown
                          size={16}
                          className={cn(
                            "transition-transform",
                            openMobileDropdown === item.name
                              ? "rotate-180"
                              : "",
                          )}
                        />
                      </button>

                      <AnimatePresence>
                        {openMobileDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 mt-3 space-y-3 overflow-hidden"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                to={child.path}
                                className={cn(
                                  "block",
                                  isActive(child.path)
                                    ? "text-primary"
                                    : "text-secondary",
                                )}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={cn(
                        isActive(item.path) ? "text-primary" : "text-secondary",
                      )}
                    >
                      {item.name}
                    </Link>
                  ),
                )}
                <button
                  onClick={() => setShowPhone(!showPhone)}
                  className="btn-primary w-full text-center"
                >
                  {showPhone ? "0777778470" : "Call to Book"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-secondary text-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div>
                  <img
                    src={CECLogo}
                    alt="CEC Logo"
                    className="w-20 h-11 object-contain"
                  />
                </div>
                <span className="text-xl font-black tracking-tighter">
                  CEC<span className="text-primary">RENTAL</span>
                </span>
              </div>
              <p className="text-white/50 mb-8">
                Providing premium heavy machinery and transport rental services
                in Sri Lanka for over 15 years. Quality, safety, and customer
                satisfaction are our top priorities.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <Facebook size={18} />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <Twitter size={18} />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <Instagram size={18} />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4 text-white/50">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#machinery"
                    className="hover:text-primary transition-colors"
                  >
                    Our Fleet
                  </Link>
                </li>
                <li>
                  <Link
                    to="/transport"
                    className="hover:text-primary transition-colors"
                  >
                    Transport Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setShowPhone(!showPhone)}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    {showPhone ? "0777778470" : "Call to Book"}
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg mb-6">Business Hours</h4>
              <ul className="space-y-4 text-white/50">
                <li className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span className="text-white">08:00 - 17:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-white">08:00 - 17:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-primary font-bold">Closed</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg mb-6">Contact Info</h4>
              <ul className="space-y-4 text-white/50">
                <li className="flex items-start">
                  <MapPin size={20} className="text-primary mr-3 shrink-0" />
                  <span>CEC Building, No 423, Nawala Road, Rajagiriya</span>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="text-primary mr-3 shrink-0" />
                  <span>0777778470</span>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="text-primary mr-3 shrink-0" />
                  <span>info@cec.lk</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-white/30">
            <p>© 2026 CEC Rental. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
