"use client";

import { useState } from "react";
import { Building, Landmark, HeartPulse, Scale, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Clients() {
  const categories = [
    { id: "financiero", name: "Sistema Financiero", icon: <Landmark size={18} /> },
    { id: "inmobiliario", name: "Sector Inmobiliario", icon: <Building size={18} /> },
    { id: "legales", name: "Legales y Contables", icon: <Scale size={18} /> },
    { id: "salud", name: "Salud", icon: <HeartPulse size={18} /> },
    { id: "comercial", name: "Comercial", icon: <ShoppingBag size={18} /> },
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  // Muestra los logos de clientes extraídos
  const getLogosForCategory = (category: string) => {
    const logoFiles = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg"];
    
    return logoFiles.map((filename, i) => (
      <motion.div 
        key={`${category}-${i}`} 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, delay: i * 0.05 }}
        className="h-28 md:h-32 bg-white rounded-2xl border border-slate-100 flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-500 hover:shadow-md group overflow-hidden"
      >
        <img src={`/images/extracted/${filename}`} alt={`Cliente ${i + 1}`} className="max-h-full max-w-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    ));
  };

  return (
    <section id="clients" className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-blue mb-4">Nuestros Clientes</h2>
          <div className="w-24 h-1 bg-green mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Instituciones de gran prestigio confían en la solidez y eficacia de nuestros servicios jurídicos y notariales.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300",
                activeCategory === cat.id
                  ? "bg-blue text-white shadow-md border-transparent"
                  : "bg-white text-slate-500 hover:bg-slate-50 border border-slate-200 hover:text-blue"
              )}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <AnimatePresence mode="popLayout">
            {getLogosForCategory(activeCategory)}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
