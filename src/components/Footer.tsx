import Link from "next/link";
import { Shield } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue text-slate-300 pt-20 pb-8 relative overflow-hidden">
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          
          <div className="md:col-span-5 lg:col-span-5">
            <Link href="/" className="flex items-center gap-2 mb-8 group inline-flex">
              <div className="bg-white p-3 rounded-2xl shadow-sm transition-transform group-hover:scale-105 border border-slate-100">
                <img src="/images/extracted/logo.png" alt="Notaría 76" className="h-10 w-auto" />
              </div>
            </Link>
            <p className="text-sm mb-8 leading-relaxed max-w-sm text-slate-400">
              Brindando seguridad y certeza jurídica con profesionalismo, honestidad y apego estricto a la ley, adaptados a las exigencias corporativas modernas.
            </p>
            <div className="flex items-center gap-3 text-green text-sm font-bold uppercase tracking-widest bg-green/10 w-max px-5 py-2.5 rounded-full border border-green/20">
              <Shield size={16} />
              <span>Protegiendo su patrimonio</span>
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-3 lg:col-start-7">
            <h4 className="text-white font-serif font-bold text-xl mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#about" className="text-slate-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-green transition-colors"></span>
                  ¿Quiénes Somos?
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-green transition-colors"></span>
                  Servicios Notariales
                </Link>
              </li>
              <li>
                <Link href="#installations" className="text-slate-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-green transition-colors"></span>
                  Instalaciones
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-slate-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-green transition-colors"></span>
                  Nuestro Equipo
                </Link>
              </li>
              <li>
                <Link href="#clients" className="text-slate-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-green transition-colors"></span>
                  Nuestros Clientes
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-white font-serif font-bold text-xl mb-6">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-slate-400 hover:text-green transition-colors text-sm font-medium">Aviso de Privacidad</Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-green transition-colors text-sm font-medium">Términos y Condiciones</Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
          <p>&copy; {currentYear} Notaría 76 de la Ciudad de México. Todos los derechos reservados.</p>
          <p>Titular: Lic. Mario Fernando Pérez Salinas y Ramírez</p>
        </div>
      </div>
    </footer>
  );
}
