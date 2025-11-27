import React from 'react';
import Button from './Button';
import { openWhatsApp } from '../utils/actions';

const SolutionItem: React.FC<{ number: string; title: string; text: string }> = ({ number, title, text }) => (
  <div className="flex flex-col md:flex-row gap-6">
    <div className="min-w-[60px] text-accent font-serif text-3xl">{number}</div>
    <div>
      <h3 className="text-xl font-bold uppercase tracking-wide mb-3 font-sans">{title}</h3>
      <p className="text-textMuted font-sans">{text}</p>
    </div>
  </div>
);

const Solution: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual */}
          <div className="relative h-[400px] md:h-[600px] w-full bg-secondary overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop" 
              alt="Detalle arquitectónico de alta calidad" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary p-6 flex items-center justify-center hidden md:flex z-10">
               <span className="text-accent font-serif text-5xl italic font-bold">100%</span>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-12 font-serif">
              Ejecución Militar. <br/><span className="text-accent">Estética de Museo.</span>
            </h2>

            <div className="space-y-12">
              <SolutionItem 
                number="01"
                title="Sistema Llave en Mano Real"
                text="Entréganos las llaves y vete de viaje. Tomamos decisiones ejecutivas. Vuelves a una casa terminada. Cero fricción."
              />
              <div className="w-full h-px bg-secondary"></div>
              
              <SolutionItem 
                number="02"
                title="Garantía Notarial"
                text="Firmamos penalizaciones económicas diarias por retraso. Nadie más apuesta contra su propia eficiencia."
              />
              <div className="w-full h-px bg-secondary"></div>

              <SolutionItem 
                number="03"
                title="Diseño Bespoke"
                text="No seguimos tendencias, creamos activos atemporales. Revalorización inmediata de tu propiedad."
              />
            </div>

            <div className="mt-12 text-center md:text-left">
              <Button onClick={openWhatsApp} variant="luxury" className="text-primary">
                Verificar Disponibilidad
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;