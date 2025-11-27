import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-12 pb-12 border-t border-gray-900 text-gray-400 text-sm">
      <div className="container mx-auto px-6 max-w-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-white font-serif text-lg mb-2 tracking-wide">AvantGarde Spaces</p>
            <p className="font-sans">Barrio de Salamanca, Madrid.</p>
          </div>
          
          <div className="text-center md:text-right flex flex-col gap-2">
            <a href="tel:+34910000000" className="hover:text-accent transition-colors py-1 block md:inline-block font-sans">+34 910 000 000</a>
            <a href="mailto:private@avantgardespaces.com" className="hover:text-accent transition-colors py-1 block md:inline-block font-sans">private@avantgardespaces.com</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-wider text-gray-600 font-sans">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          </div>
          <p>&copy; 2024 AvantGarde Spaces. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;