"use client";

import { useState } from "react";
import { Users, UserCheck, Phone, Smartphone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import lawyersData from "../data/lawyers.json";
import { cn } from "@/lib/utils";

export default function Team() {
  const lawyers = lawyersData;
  const [activeLawyerIndex, setActiveLawyerIndex] = useState(0);
  const activeLawyer = lawyers[activeLawyerIndex];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-green font-bold tracking-widest uppercase text-sm mb-4 block">Capital Humano</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-blue mb-6">Nuestro Equipo</h2>
          <div className="w-24 h-1 bg-green mx-auto rounded-full mb-8"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            El activo más importante de la Notaría 76 es nuestro capital humano, profesionales altamente capacitados comprometidos con su tranquilidad jurídica.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-6 lg:gap-10 mb-20 max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="bg-surface-light rounded-3xl p-8 flex items-center gap-6 border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm text-green">
              <Users size={32} />
            </div>
            <div>
              <div className="font-serif text-4xl font-bold text-blue mb-1">50+</div>
              <p className="text-slate-700 font-bold">Colaboradores especializados</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-surface-light rounded-3xl p-8 flex items-center gap-6 border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm text-green">
              <UserCheck size={32} />
            </div>
            <div>
              <div className="font-serif text-4xl font-bold text-blue mb-1">8</div>
              <p className="text-slate-700 font-bold">Abogados Titulados</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Interactive Master-Detail Viewer */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:h-[520px]">
          
          {/* Master List (Directory) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 order-2 lg:order-1 flex flex-col h-full"
          >
            <h3 className="font-serif text-2xl font-bold text-blue mb-6 px-2 text-center lg:text-left shrink-0">Directorio de Abogados</h3>
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto pb-4 lg:pb-0 lg:pr-2 flex-1 hide-scrollbar">
              {lawyers.map((lawyer, index) => {
                const isActive = activeLawyerIndex === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveLawyerIndex(index)}
                    className={cn(
                      "flex items-center gap-4 p-3 rounded-2xl text-left transition-all duration-300 min-w-[240px] lg:min-w-0 border-2",
                      isActive 
                        ? "bg-blue border-blue shadow-lg lg:scale-[1.02]" 
                        : "bg-surface-light border-transparent hover:border-slate-200 opacity-70 hover:opacity-100"
                    )}
                  >
                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-white/20">
                      <img src={lawyer.image} alt={lawyer.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <div className={cn("font-bold text-sm truncate", isActive ? "text-white" : "text-blue")}>
                        {lawyer.name}
                      </div>
                      <div className={cn("text-xs uppercase tracking-wider font-semibold", isActive ? "text-blue-200" : "text-slate-500")}>
                        Abogado Titulado
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Detail View (Active Profile) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 order-1 lg:order-2 h-full"
          >
            <div className="bg-surface-light rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl relative overflow-hidden h-full flex items-center">
              {/* Decorative background shape */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLawyerIndex}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col md:flex-row gap-10 items-center w-full relative z-10"
                >
                  {/* Large Profile Photo */}
                  <div className="w-48 md:w-64 aspect-[3/4] rounded-[2rem] overflow-hidden shrink-0 shadow-2xl border-4 border-white">
                    <img 
                      src={activeLawyer.image} 
                      alt={activeLawyer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Profile Details */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-green/10 text-green font-bold text-xs uppercase tracking-widest mb-4">
                      Abogado Titulado
                    </div>
                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-blue mb-6 leading-tight">
                      {activeLawyer.name}
                    </h3>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center justify-center md:justify-start gap-4 text-slate-700">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                          <Phone size={18} className="text-blue" />
                        </div>
                        <span className="font-medium">{activeLawyer.phone}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-4 text-slate-700">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                          <Smartphone size={18} className="text-blue" />
                        </div>
                        <span className="font-medium">{activeLawyer.cell}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-4 text-slate-700">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                          <Mail size={18} className="text-blue" />
                        </div>
                        <a href={`mailto:${activeLawyer.email}`} className="font-medium hover:text-green transition-colors truncate">
                          {activeLawyer.email}
                        </a>
                      </div>
                    </div>

                    <Link 
                      href={`/cv/${activeLawyer.slug}`} 
                      className="inline-flex items-center gap-3 bg-blue text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-green hover:shadow-lg transition-all duration-300 group"
                    >
                      <span>Ver Perfil Completo</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
