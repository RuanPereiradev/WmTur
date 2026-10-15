import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Passeios from './components/Passeios.jsx';
import Translados from './components/Translados.jsx';
import { Marquee, Personalizado, Frota, Sobre, Fechamento } from './components/Secoes.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';
import { useMobile } from './components/ui.jsx';
import { wa } from './config.js';

const waGeneral = wa('Olá, WmTur! Vim pelo site e quero reservar um passeio em Jeri. 🏝️');

export default function App() {
  const mobile = useMobile();
  return (
    <>
      <Header mobile={mobile} waGeneral={waGeneral} />
      <main>
        <Hero waGeneral={waGeneral} />
        <Marquee />
        <Passeios mobile={mobile} />
        <Personalizado />
        <Translados />
        <Frota />
        <Sobre mobile={mobile} waGeneral={waGeneral} />
        <Fechamento waGeneral={waGeneral} />
      </main>
      <Footer mobile={mobile} />
      <WhatsAppFloat mobile={mobile} />
    </>
  );
}
