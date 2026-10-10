import React, { useState } from 'react';
import Loader from './components/Loader.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Passeios from './components/Passeios.jsx';
import Translados from './components/Translados.jsx';
import Frota from './components/Frota.jsx';
import Galeria from './components/Galeria.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';
import Footer from './components/Footer.jsx';
import { jumpToHash } from './hooks.js';

export default function App() {
  // 'load' -> 'exit' (carro sai) -> 'done' (painel sobe) -> 'off' (removido)
  const [phase, setPhase] = useState('load');
  const heroIn = phase === 'done' || phase === 'off';
  return (
    <>
      {phase !== 'off' && <Loader phase={phase} setPhase={setPhase} onEnd={jumpToHash} />}
      <Header />
      <main id="topo" className="wrap">
        <Hero visible={heroIn} />
        <Stats />
        <Passeios />
        <Translados />
        <Frota />
        <Galeria />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
