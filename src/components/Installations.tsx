"use client";

import { useState } from "react";
import { MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const images = [
  {
    url: "/images/extracted/sala_de_juntas_1.jpg",
    title: "Salas de Juntas",
    caption: "Equipadas para reuniones y firmas corporativas",
  },
  {
    url: "/images/extracted/sala_de_juntas_2.jpg",
    title: "Atención al Público",
    caption: "Áreas modernas, confortables y discretas",
  },
  {
    url: "/images/extracted/sala_de_juntas_3.jpg",
    title: "Tecnología",
    caption: "Sistemas actualizados de vanguardia notarial",
  },
  {
    url: "/images/extracted/notaria_76.jpg",
    title: "Accesibilidad",
    caption: "Ubicación céntrica y de fácil acceso",
  },
];

export default function Installations() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="installations" className="py-24 bg-surface-light relative overflow-hidden border-y border-slate-200">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-green font-bold tracking-widest uppercase text-sm mb-4 block">Infraestructura</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-blue">Nuestras Instalaciones</h2>
          <div className="w-24 h-1 bg-green mx-auto rounded-full mb-8"></div>
          <p className="text-slate-600 text-lg leading-relaxed">
            Contamos con instalaciones de primer nivel diseñadas para brindar una experiencia cómoda, confidencial y segura. Espacios completamente equipados para todo tipo de actos jurídicos.
          </p>
        </motion.div>

        {/* Ingenious Hover-Expand Gallery */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row h-[70vh] min-h-[500px] w-full gap-3 md:gap-4 mb-16"
        >
          {images.map((image, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={cn(
                  "relative rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group",
                  isActive ? "md:flex-[4] flex-[3] shadow-xl" : "md:flex-[1] flex-[1] hover:flex-[1.2] shadow-sm"
                )}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000"
                  style={{ transform: isActive ? 'scale(1.05)' : 'scale(1)' }}
                />
                
                {/* Gradient overlay */}
                <div className={cn(
                  "absolute inset-0 transition-opacity duration-700",
                  isActive 
                    ? "bg-gradient-to-t from-blue/90 via-blue/30 to-transparent opacity-100" 
                    : "bg-gradient-to-t from-blue/80 via-blue/20 to-transparent opacity-70 group-hover:opacity-50"
                )} />
                
                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <div className={cn(
                    "transition-all duration-700",
                    isActive ? "translate-y-0 opacity-100 delay-100" : "translate-y-2 opacity-60 md:opacity-100"
                  )}>
                    <h3 className={cn(
                      "font-serif font-bold text-white transition-all duration-700",
                      isActive ? "text-3xl md:text-4xl mb-3" : "text-xl md:text-2xl mb-0"
                    )}>
                      {image.title}
                    </h3>
                    
                    <div className={cn(
                      "overflow-hidden transition-all duration-700 ease-in-out",
                      isActive ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                    )}>
                      <p className="text-white/90 text-sm md:text-lg">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Footer info bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-3 gap-6"
        >
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-wrap gap-x-8 gap-y-4 items-center justify-center lg:justify-start">
            <h4 className="w-full font-bold text-blue mb-2 text-center lg:text-left">Comodidades Destacadas</h4>
            <div className="flex items-center gap-2 text-slate-600">
              <CheckCircle2 className="text-green" size={20} />
              <span>Salas de firmas privadas</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <CheckCircle2 className="text-green" size={20} />
              <span>Tecnología avanzada</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <CheckCircle2 className="text-green" size={20} />
              <span>Atención personalizada</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <CheckCircle2 className="text-green" size={20} />
              <span>Seguridad 24/7</span>
            </div>
          </div>

          <div className="bg-blue text-white rounded-3xl p-8 shadow-lg flex items-center gap-6 group hover:bg-blue/90 transition-colors cursor-pointer">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <MapPin size={28} />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Visítenos</h4>
              <p className="text-white/80 text-sm leading-relaxed">Av. Universidad 473, Col. Narvarte Poniente, CDMX.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
