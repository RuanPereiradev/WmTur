import React from 'react';
import { MiniCar } from './Car.jsx';
import WaLink from './WaLink.jsx';
import { useActiveSection, useMobile, useScrolled } from '../hooks.js';

const NAV = [['passeios', 'Passeios'], ['translados', 'Translados'], ['frota', 'Frota'], ['galeria', 'Galeria']];

export default function Header() {
  const mobile = useMobile(); const scrolled = useScrolled(); const sec = useActiveSection(NAV.map(n => n[0]));
  return (
    <header className={'site-header' + (scrolled ? ' is-scrolled' : '')}>
      <a href="#topo" className="brand" aria-label="WM TUR, voltar ao topo">
        <MiniCar />
        <span className="logo">WM TUR<span className="dot">.</span></span>
        {!mobile && <span className="hashtag">#vemprajeri</span>}
      </a>
      {!mobile && <nav className="nav-links">{NAV.map(([id, label]) => <a key={id} href={'#' + id} className={sec === id ? 'is-active' : ''}>{label}</a>)}</nav>}
      <WaLink msg="Olá, WmTur! Vim pelo site e quero reservar um passeio em Jeri." className="btn">
        <WaIcon /> {mobile ? 'Reservar' : 'Reservar no WhatsApp'}
      </WaLink>
    </header>
  );
}

export function WaIcon({ size = 18, color = 'currentColor' }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.3.5-.4.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.7-.1 1.3Z" /></svg>;
}
