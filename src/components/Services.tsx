"use client";

import { Briefcase, Building2, Scale, ArrowRight, ShieldCheck, Check } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue/[0.03] rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="text-green font-bold tracking-widest uppercase text-sm mb-4 block">Nuestros Servicios</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-blue mb-6">Áreas de Especialidad</h2>
          <div className="w-24 h-1 bg-green mx-auto mb-8"></div>
          <p className="text-slate-600 text-lg leading-relaxed">
            Un enfoque legal estructurado e inteligente. Brindamos soluciones corporativas y personales con el más estricto apego a la ley.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto auto-rows-[minmax(280px,auto)]"
        >
          
          {/* Item 1: Wide (Derecho Mercantil) */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2 bg-blue text-white rounded-[2rem] p-8 md:p-10 relative overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700">
              <Briefcase size={280} strokeWidth={1} />
            </div>
            <div className="relative z-10 flex flex-col h-full md:w-[70%]">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-green backdrop-blur-sm">
                <Briefcase size={28} />
              </div>
              <h3 className="font-serif text-3xl font-bold mb-4">Derecho Mercantil y Corporativo</h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                Asesoría y formalización de actos para el correcto funcionamiento legal de su empresa. Protegemos los intereses corporativos desde la constitución hasta reestructuras complejas.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                {["Constitución de sociedades", "Poderes y mandatos", "Fusión y escisión", "Asambleas corporativas"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/90">
                    <Check size={16} className="text-green shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Item 2: Tall (Derecho Inmobiliario) */}
          <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-1 md:row-span-2 bg-surface-light rounded-[2rem] p-8 border border-slate-200 group hover:border-blue/30 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green/10 rounded-bl-[100px] z-0 transition-transform duration-500 group-hover:scale-150"></div>
            
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-8 text-blue relative z-10 group-hover:scale-110 transition-transform duration-500">
              <Building2 size={28} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-blue mb-4 relative z-10">Derecho Inmobiliario</h3>
            <p className="text-slate-600 mb-8 leading-relaxed relative z-10">
              Seguridad jurídica en el patrimonio de nuestros clientes mediante instrumentos públicos claros. Acompañamos cada etapa de sus transacciones inmobiliarias.
            </p>
            <div className="space-y-4 mt-auto relative z-10">
              {["Compraventas", "Donaciones", "Fideicomisos", "Adjudicaciones"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-sm group-hover:border-green/30 transition-colors">
                  <Check size={16} className="text-green shrink-0" />
                  <span className="text-sm font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Item 3: Square (Derecho Civil) */}
          <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-1 bg-white rounded-[2rem] p-8 border border-slate-100 group shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-surface-light flex items-center justify-center text-blue group-hover:bg-blue group-hover:text-white transition-colors duration-500">
                <Scale size={28} />
              </div>
              <ArrowRight size={24} className="text-slate-300 group-hover:text-green group-hover:-rotate-45 transition-all duration-500" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-blue mb-3">Derecho Civil</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-1">
              Planeación patrimonial y sucesoria con discreción para brindar tranquilidad hacia el futuro.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {["Testamentos", "Sucesiones", "Contratos"].map((item, i) => (
                <span key={i} className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-surface px-3 py-1.5 rounded-full border border-slate-200 group-hover:border-slate-300 transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Item 4: Square (Trámites Especiales) */}
          <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-1 bg-surface-light rounded-[2rem] p-8 border border-slate-200 group shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col relative overflow-hidden">
            <div className="absolute inset-0 bg-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
            
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue group-hover:text-green transition-colors duration-500">
                <ShieldCheck size={28} />
              </div>
            </div>
            <h3 className="font-serif text-2xl font-bold text-blue mb-3 relative z-10 group-hover:text-white transition-colors duration-500">Trámites Especiales</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-1 relative z-10 group-hover:text-white/80 transition-colors duration-500">
              Gestión y protocolización de documentos especializados garantizando su validez oficial.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto relative z-10">
              {["Ratificaciones", "Cotejos"].map((item, i) => (
                <span key={i} className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-white px-3 py-1.5 rounded-full shadow-sm group-hover:bg-white/20 group-hover:text-white transition-colors duration-500 border border-transparent">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
