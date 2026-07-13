"use client";

import { Briefcase, Building2, Scale, ArrowRight, ShieldCheck, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const serviceCategories = [
    {
      title: "Derecho Mercantil y Corporativo",
      description: "Asesoría y formalización de actos para el correcto funcionamiento legal de su empresa. Protegemos los intereses corporativos desde la constitución hasta reestructuras complejas.",
      icon: <Briefcase size={40} strokeWidth={1.5} />,
      items: ["Constitución de sociedades", "Poderes y mandatos", "Fusión y escisión", "Asambleas corporativas"],
    },
    {
      title: "Derecho Inmobiliario",
      description: "Seguridad jurídica en el patrimonio de nuestros clientes mediante instrumentos públicos claros. Acompañamos cada etapa de sus transacciones inmobiliarias.",
      icon: <Building2 size={40} strokeWidth={1.5} />,
      items: ["Compraventas", "Donaciones", "Fideicomisos", "Adjudicaciones"],
    },
    {
      title: "Derecho Civil",
      description: "Protección legal en el ámbito personal y familiar para brindar tranquilidad hacia el futuro. Planeación patrimonial y sucesoria con total discreción.",
      icon: <Scale size={40} strokeWidth={1.5} />,
      items: ["Testamentos", "Sucesiones", "Contratos civiles", "Fe de hechos"],
    },
    {
      title: "Trámites Especiales",
      description: "Gestión y protocolización de documentos especializados para casos específicos, garantizando su validez oficial ante cualquier autoridad.",
      icon: <ShieldCheck size={40} strokeWidth={1.5} />,
      items: ["Ratificaciones", "Certificaciones", "Cotejo de documentos", "Notificaciones"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue/[0.02] rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <span className="text-green font-bold tracking-widest uppercase text-sm mb-4 block">Nuestros Servicios</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-blue mb-6">Áreas de Especialidad</h2>
          <div className="w-24 h-1 bg-green mx-auto mb-8"></div>
          <p className="text-slate-600 text-lg leading-relaxed">
            Ofrecemos un catálogo completo de servicios notariales, garantizando rapidez, profesionalismo y el más estricto apego a la ley mediante soluciones corporativas de alto nivel.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {serviceCategories.map((category, index) => (
            <motion.div 
              variants={itemVariants}
              key={index}
              className="bg-white rounded-[2rem] p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden flex flex-col h-full"
            >
              {/* Subtle gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-surface-light text-blue flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue group-hover:text-white transition-all duration-500">
                  {category.icon}
                </div>
                
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-blue mb-4">
                  {category.title}
                </h3>
                
                <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                  {category.description}
                </p>
                
                <div className="border-t border-slate-100 pt-6 mt-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {category.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check size={16} className="text-green mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-blue hover:text-green transition-colors group/btn">
                    <span>Solicitar servicio</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
