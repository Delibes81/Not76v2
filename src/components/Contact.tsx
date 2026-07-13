"use client";

import { useState } from "react";
import { Send, MapPin, Clock, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    servicio: "",
    asunto: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Mensaje enviado correctamente. Nos pondremos en contacto a la brevedad.");
    setFormData({ nombre: "", email: "", servicio: "", asunto: "", mensaje: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-blue mb-4">Contacto</h2>
          <div className="w-24 h-1 bg-green mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Estamos listos para asesorarle. Déjenos sus datos y uno de nuestros abogados se comunicará con usted de forma ágil y confidencial.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 space-y-10"
          >
            <div>
              <h3 className="font-serif text-3xl font-bold text-blue mb-6">Canales Oficiales</h3>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                Visítenos en nuestras instalaciones o comuníquese a través de nuestros canales digitales para agendar una cita.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-6 p-6 rounded-3xl bg-surface-light border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
                  <MapPin className="text-green" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue text-lg mb-1">Dirección</h4>
                  <p className="text-slate-600 leading-snug">Av. Universidad 473<br/>Col. Narvarte Poniente, Ciudad de México.</p>
                </div>
              </div>

              <div className="flex gap-6 p-6 rounded-3xl bg-surface-light border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
                  <Phone className="text-green" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue text-lg mb-1">Teléfono</h4>
                  <a href="tel:5562713179" className="text-slate-600 hover:text-green font-medium transition-colors">55 6271 3179</a>
                </div>
              </div>

              <div className="flex gap-6 p-6 rounded-3xl bg-surface-light border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
                  <Mail className="text-green" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue text-lg mb-1">Email</h4>
                  <a href="mailto:mario.perez@notaria76.com.mx" className="text-slate-600 hover:text-green font-medium transition-colors break-all">mario.perez@notaria76.com.mx</a>
                </div>
              </div>

              <div className="flex gap-6 p-6 rounded-3xl bg-surface-light border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
                  <Clock className="text-green" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue text-lg mb-1">Horario de Atención</h4>
                  <p className="text-slate-600 leading-snug">Lunes a Viernes<br/>8:00 a 15:00 hrs.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 bg-surface rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden"
          >
            <h3 className="font-serif text-3xl font-bold text-blue mb-8 relative z-10">Envíenos un mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="text-xs font-bold text-slate-600 uppercase tracking-wider">Nombre completo</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-blue placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green/50 focus:border-green transition-all"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-slate-600 uppercase tracking-wider">Correo Electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-blue placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green/50 focus:border-green transition-all"
                    placeholder="ejemplo@correo.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="servicio" className="text-xs font-bold text-slate-600 uppercase tracking-wider">Tipo de Servicio</label>
                  <select 
                    id="servicio" 
                    name="servicio" 
                    required
                    value={formData.servicio}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-blue focus:outline-none focus:ring-2 focus:ring-green/50 focus:border-green transition-all"
                  >
                    <option value="" disabled>Seleccione una opción</option>
                    <option value="mercantil">Mercantil</option>
                    <option value="corporativo">Corporativo</option>
                    <option value="inmobiliario">Inmobiliario</option>
                    <option value="civil">Civil</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="asunto" className="text-xs font-bold text-slate-600 uppercase tracking-wider">Asunto</label>
                  <input 
                    type="text" 
                    id="asunto" 
                    name="asunto" 
                    required
                    value={formData.asunto}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-blue placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green/50 focus:border-green transition-all"
                    placeholder="Motivo de consulta"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="mensaje" className="text-xs font-bold text-slate-600 uppercase tracking-wider">Mensaje</label>
                <textarea 
                  id="mensaje" 
                  name="mensaje" 
                  required
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-blue placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green/50 focus:border-green transition-all resize-none"
                  placeholder="Describa brevemente su requerimiento..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-blue hover:bg-green text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-colors mt-4 shadow-md"
              >
                <span>Enviar Mensaje</span>
                <Send size={20} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
