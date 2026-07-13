"use client";

import { Shield, Target, Award, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-light rounded-l-[100px] opacity-50 hidden lg:block"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="text-green font-bold tracking-widest uppercase text-sm mb-4 block">Sobre Nosotros</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-blue mb-6">Nuestra Notaría</h2>
          <div className="w-24 h-1 bg-green mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 font-serif italic leading-relaxed">
            "La confianza no se pide, se construye. En Notaría 76 trabajamos todos los días para ser el pilar de su tranquilidad jurídica."
          </p>
        </motion.div>

        {/* Notary Profile Section - Alternate layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-5/12 relative max-w-md mx-auto lg:mx-0"
          >
            {/* Image styling with overlapping elements */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl group">
              <div className="absolute inset-0 bg-blue/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                src="/images/extracted/mario_perez.jpg"
                alt="Notario Mario Fernando Pérez Salinas y Ramírez"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green text-white rounded-full flex items-center justify-center">
                  <Shield size={24} />
                </div>
                <div>
                  <p className="font-bold text-blue">Colegio Nacional</p>
                  <p className="text-sm text-slate-500">del Notariado Mexicano</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-7/12"
          >
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-blue mb-2">
              Lic. Mario Fernando Pérez Salinas y Ramírez
            </h3>
            <p className="text-green font-bold uppercase tracking-widest mb-8">
              Titular de la Notaría 76
            </p>
            
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg mb-8">
              <p>
                El notario Mario Fernando Pérez Salinas y Ramírez es titular de la Notaría 76 de la Ciudad de México y distinguido miembro del <strong>Colegio Nacional del Notariado Mexicano</strong> desde marzo de 2019.
              </p>
              <p>
                Su trayectoria profesional está marcada por un profundo compromiso con la excelencia jurídica, garantizando en todo momento que las operaciones de nuestros clientes se realicen con el más alto rigor legal, imparcialidad y transparencia.
              </p>
            </div>

            <ul className="space-y-3">
              {[
                "Asesoría jurídica personalizada",
                "Estricto apego a la legalidad",
                "Especialidad en derecho corporativo e inmobiliario",
                "Trato directo y confidencial"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="text-green flex-shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Misión, Visión, Valores - 3 Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Misión */}
          <motion.div variants={itemVariants} className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-16 h-16 rounded-2xl bg-surface-light group-hover:bg-blue group-hover:text-white text-blue flex items-center justify-center mb-8 transition-colors duration-300">
              <Target size={32} />
            </div>
            <h4 className="font-serif text-2xl font-bold text-blue mb-4">Nuestra Misión</h4>
            <p className="text-slate-600 leading-relaxed">
              Brindar seguridad jurídica en todas las operaciones de nuestros clientes, actuando siempre con imparcialidad, legalidad, y un alto sentido de eficiencia.
            </p>
          </motion.div>

          {/* Visión */}
          <motion.div variants={itemVariants} className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-16 h-16 rounded-2xl bg-surface-light group-hover:bg-blue group-hover:text-white text-blue flex items-center justify-center mb-8 transition-colors duration-300">
              <Award size={32} />
            </div>
            <h4 className="font-serif text-2xl font-bold text-blue mb-4">Nuestra Visión</h4>
            <p className="text-slate-600 leading-relaxed">
              Consolidarnos como la notaría de referencia en la Ciudad de México por nuestra excelencia, modernidad, y constante innovación en el servicio público notarial.
            </p>
          </motion.div>

          {/* Valores */}
          <motion.div variants={itemVariants} className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-16 h-16 rounded-2xl bg-surface-light group-hover:bg-blue group-hover:text-white text-blue flex items-center justify-center mb-8 transition-colors duration-300">
              <Shield size={32} />
            </div>
            <h4 className="font-serif text-2xl font-bold text-blue mb-4">Nuestros Valores</h4>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green" /> Honestidad y Transparencia</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green" /> Confidencialidad Absoluta</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green" /> Ética Intachable</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green" /> Rapidez y Eficiencia</li>
            </ul>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
