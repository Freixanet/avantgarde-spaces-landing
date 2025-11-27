import React from 'react';

const Testimonial: React.FC<{ quote: string; name: string; role: string }> = ({ quote, name, role }) => (
  <div className="bg-white p-6 md:p-14 shadow-sm border border-gray-100 relative">
    <span className="absolute top-6 right-8 text-6xl text-gray-100 font-serif">"</span>
    <p className="text-xl md:text-2xl font-serif text-primary mb-8 leading-relaxed relative z-10">
      "{quote}"
    </p>
    <div className="border-l-2 border-accent pl-4">
      <div className="font-bold text-primary font-sans">{name}</div>
      <div className="text-sm text-textMuted uppercase tracking-wider font-sans">{role}</div>
    </div>
  </div>
);

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-secondary border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-container">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16 font-serif text-balance">
          Discreción absoluta. <span className="text-textMuted font-serif italic font-normal block md:inline mt-2 md:mt-0">Resultados visibles.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Testimonial 
            quote="Compré el ático en Salamanca y temía pasar un año de infierno. Me entregaron las llaves dos días antes de lo pactado. Impecable."
            name="J.M."
            role="Socio Director en Banca de Inversión"
          />
          <Testimonial 
            quote="No venden reformas, venden tiempo. La mejor inversión que he hecho en mi propiedad personal."
            name="Elena R."
            role="CEO Sector Tecnológico"
          />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-2xl font-serif font-bold">AD</span>
          <span className="text-2xl font-serif font-bold italic">Elle Decor</span>
          <span className="text-2xl font-sans font-bold uppercase tracking-widest">Expansión</span>
          <span className="text-2xl font-sans font-light">CASA VIVA</span>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;