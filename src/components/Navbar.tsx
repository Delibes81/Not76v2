"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "¿Quiénes somos?", href: "#about" },
    { name: "Servicios", href: "#services" },
    { name: "Instalaciones", href: "#installations" },
    { name: "Nuestro Equipo", href: "#team" },
    { name: "Clientes", href: "#clients" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "py-3 bg-white/90 backdrop-blur-md shadow-sm"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group relative z-50">
          <div className={cn(
            "transition-all duration-500 rounded-xl overflow-hidden",
            isScrolled ? "p-0" : "bg-white p-2 shadow-sm border border-slate-100"
          )}>
            <img 
              src="/images/extracted/logo.png" 
              alt="Notaría 76" 
              className={cn("w-auto transition-all duration-500", isScrolled ? "h-10" : "h-12")} 
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm font-semibold tracking-wide">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative hover:text-green transition-colors duration-300",
                    isScrolled ? "text-slate-700" : "text-blue drop-shadow-sm"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="tel:5562713179"
            className="group flex items-center gap-2 bg-green hover:bg-green-hover text-white font-semibold px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <Phone size={16} className="group-hover:rotate-12 transition-transform" />
            <span>55 6271 3179</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-full relative z-50 transition-colors",
            isScrolled ? "bg-slate-100 text-slate-800" : "bg-white text-blue shadow-sm"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-xl border-b border-slate-200 flex flex-col pt-24 pb-8 px-6"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    className="block text-2xl font-serif text-slate-800 hover:text-green hover:pl-2 transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-8 pt-8 border-t border-slate-200"
              >
                <a
                  href="tel:5562713179"
                  className="flex items-center justify-center gap-3 bg-green text-white font-semibold px-6 py-4 rounded-full text-lg shadow-md"
                >
                  <Phone size={20} />
                  <span>55 6271 3179</span>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
