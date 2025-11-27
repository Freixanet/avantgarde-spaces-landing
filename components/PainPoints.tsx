import React from 'react';
import { ChaosIcon, ManagementIcon, QualityIcon } from './Icons';

interface PainPointCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PainPointCard: React.FC<PainPointCardProps> = ({ icon, title, description }) => (
  <article className="bg-white p-6 md:p-10 shadow-luxury hover:-translate-y-2 transition-transform duration-500 border-t-2 border-transparent hover:border-accent group">
    <div className="w-12 h-12 mb-6 md:mb-8 text-primary group-hover:text-accent transition-colors">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 font-serif">{title}</h3>
    <p className="text-textMuted leading-relaxed font-sans">
      {description}
    </p>
  </article>
);

const PainPoints: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6 max-w-container">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 font-serif text-balance">
            El coste real no es el dinero. <span className="text-accent italic block md:inline">Es tu tiempo.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <PainPointCard 
            icon={<ChaosIcon />}
            title="El Caos Indefinido"
            description="La mayoría de contratistas venden excusas. Retrasan entregas e inflan presupuestos. Tu vivienda se convierte en un pasivo que drena tu energía."
          />
          <PainPointCard 
            icon={<ManagementIcon />}
            title="La Micro-Gestión"
            description="No eres un jefe de obra. Eres un ejecutivo. No deberías estar persiguiendo fontaneros. Cada llamada de la obra es tiempo robado a tu negocio."
          />
          <PainPointCard 
            icon={<QualityIcon />}
            title="La Brecha de Calidad"
            description="El render aguanta todo. La realidad, no. El lujo no perdona errores de ejecución ni acabados mediocres."
          />
        </div>
      </div>
    </section>
  );
};

export default PainPoints;