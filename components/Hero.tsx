import React from 'react';
import Button from './Button';
import { openWhatsApp } from '../utils/actions';

const Hero: React.FC = () => {
  return (
    <header className="relative w-full h-screen min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1920&auto=format&fit=crop" 
          alt="Interior minimalista de lujo, mármol y luz natural" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-container text-center text-textInverted">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-5xl mx-auto drop-shadow-lg font-serif">
          Tu única preocupación será elegir el champagne para la inauguración.
        </h1>
        <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed drop-shadow-md font-sans">
          Recupera las 300 horas que perderías gestionando una obra tradicional. Plazos firmados ante notario: si nos retrasamos un día, te pagamos.
        </p>
        <Button onClick={openWhatsApp} variant="primary">
          Verificar Disponibilidad Q3 2024
        </Button>
        <p className="mt-4 text-xs text-gray-400 uppercase tracking-widest font-sans">Solo 4 proyectos anuales</p>
      </div>
    </header>
  );
};

export default Hero;