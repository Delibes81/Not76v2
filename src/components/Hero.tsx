"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-background">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-surface-light rounded-bl-[100px] -z-0"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content (Text) */}
          <motion.div 
            className="max-w-2xl space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface shadow-sm border border-slate-100">
              <span className="w-2 h-2 rounded-full bg-green"></span>
              <span className="text-xs uppercase tracking-widest font-bold text-slate-600">Notaría 76 | CDMX</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-blue leading-[1.1]">
              Certeza jurídica con <span className="text-green italic font-medium">prestigio</span> notarial
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg text-slate-600 leading-relaxed max-w-lg">
              Brindamos seguridad y confianza en todas sus operaciones con el profesionalismo que nos caracteriza, adaptándonos a las exigencias modernas.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link 
                href="#contact"
                className="group relative inline-flex items-center gap-2 bg-blue text-white font-semibold px-8 py-4 rounded-full text-md transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              >
                <span>Agendar Cita</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="#services"
                className="group inline-flex items-center gap-2 text-blue font-semibold px-6 py-4 rounded-full text-md transition-all hover:bg-slate-50 w-full sm:w-auto justify-center"
              >
                <span>Nuestros Servicios</span>
                <ChevronRight size={18} className="text-slate-500 group-hover:text-green transition-colors" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content (Image) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:h-[650px] w-full flex justify-end"
          >
            <div className="relative w-full max-w-lg lg:max-w-none lg:w-[90%] h-full rounded-[2.5rem] overflow-hidden shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/extracted/sala_de_juntas_2.jpg')",
                }}
              ></div>
              {/* Overlay gradient to keep it modern but bright */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue/30 to-transparent"></div>
            </div>
            
            {/* Floating badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 lg:left-0 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center text-green font-bold text-xl">
                +25
              </div>
              <div>
                <p className="font-bold text-blue text-sm">Años de Experiencia</p>
                <p className="text-slate-600 text-xs">Protegiendo su patrimonio</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
