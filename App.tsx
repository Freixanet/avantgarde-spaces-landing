import React from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import SocialProof from './components/SocialProof';
import Offer from './components/Offer';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <PainPoints />
      <Solution />
      <SocialProof />
      <Offer />
      <Footer />
    </main>
  );
};

export default App;