import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Phone, Smartphone, Mail, Users, User, GraduationCap, Briefcase } from "lucide-react";
import lawyersData from "../../../data/lawyers.json";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return lawyersData.map((lawyer) => ({
    slug: lawyer.slug,
  }));
}

export default async function LawyerCVPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const lawyer = lawyersData.find((l) => l.slug === resolvedParams.slug);

  if (!lawyer) {
    notFound();
  }

  // Split CV text into paragraphs based on newline characters
  const cvParagraphs = lawyer.cv_text.split("\n").filter((p) => p.trim() !== "");

  return (
    <main className="min-h-screen bg-slate-light">
      <Navbar />
      
      {/* Dark background for the transparent navbar */}
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-blue z-0">
        <div className="absolute inset-0 bg-green/10 mix-blend-multiply opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-12 md:pt-40 md:pb-20 relative z-10">
        <Link 
          href="/#team" 
          className="inline-flex items-center gap-2 text-green font-semibold hover:text-green-hover transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Volver a Nuestro Equipo
        </Link>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Column: Image & Contact Info */}
          <div className="md:w-5/12 lg:w-1/3 bg-slate-50 border-r border-slate-100 flex flex-col">
            <div className="relative w-full aspect-[3/4] md:aspect-auto md:h-96 shrink-0">
              <Image 
                src={lawyer.image} 
                alt={lawyer.name}
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block bg-green text-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm mb-3">
                  Abogado Titulado
                </span>
                <h1 className="font-serif text-3xl font-bold leading-tight drop-shadow-md">
                  {lawyer.name}
                </h1>
              </div>
            </div>

            <div className="p-8 grow">
              <h3 className="font-serif text-xl font-bold text-blue mb-6 border-b border-slate-200 pb-3">Contacto Directo</h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-3 text-slate-dark">
                  <div className="w-10 h-10 rounded-full bg-slate-200/50 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-green" />
                  </div>
                  <div>
                    <p className="text-xs text-slate uppercase tracking-wider font-semibold mb-0.5">Oficina</p>
                    <span className="font-medium">{lawyer.phone}</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 text-slate-dark">
                  <div className="w-10 h-10 rounded-full bg-slate-200/50 flex items-center justify-center shrink-0">
                    <Smartphone size={18} className="text-green" />
                  </div>
                  <div>
                    <p className="text-xs text-slate uppercase tracking-wider font-semibold mb-0.5">Celular</p>
                    <span className="font-medium">{lawyer.cell}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-dark">
                  <div className="w-10 h-10 rounded-full bg-slate-200/50 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-green" />
                  </div>
                  <div>
                    <p className="text-xs text-slate uppercase tracking-wider font-semibold mb-0.5">Correo Electrónico</p>
                    <a href={`mailto:${lawyer.email}`} className="font-medium text-blue hover:text-green transition-colors break-all">
                      {lawyer.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: CV Text & Assistants */}
          <div className="md:w-7/12 lg:w-2/3 p-8 md:p-12 lg:p-16">
            
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-blue flex items-center justify-center">
                  <GraduationCap size={24} className="text-green" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-blue">Trayectoria Profesional</h2>
              </div>
              
              <div className="space-y-6 text-slate-dark leading-relaxed text-lg">
                {cvParagraphs.map((paragraph, idx) => (
                  <p key={idx} className="border-l-4 border-green/30 pl-4 py-1">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {lawyer.assistants.length > 0 && (
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-green/10 flex items-center justify-center">
                    <Users size={20} className="text-green" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-blue">Equipo de Asistentes</h3>
                </div>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {lawyer.assistants.map((assistant, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-dark font-medium p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                        <User size={14} className="text-slate-400" />
                      </div>
                      <span className="text-sm">{assistant}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
