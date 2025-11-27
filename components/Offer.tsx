import React from 'react';
import Button from './Button';
import { openWhatsApp } from '../utils/actions';

const Offer: React.FC = () => {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-primary text-white text-center">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
          La excelencia no escala.
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto font-sans">
          Para garantizar este nivel de obsesión por el detalle, solo aceptamos 4 proyectos integrales al año. Actualmente estamos cerrando la agenda para el próximo trimestre.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <Button 
            variant="primary" 
            className="bg-accent text-white hover:bg-white hover:text-primary border-accent hover:border-white w-full md:w-auto shadow-lg shadow-accent/20"
            onClick={openWhatsApp}
          >
            Solicitar Consultoría de Viabilidad
          </Button>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-4 font-sans">
            Sin compromiso. Análisis técnico previo. No trabajamos con urgencias, trabajamos con planificación.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offer;