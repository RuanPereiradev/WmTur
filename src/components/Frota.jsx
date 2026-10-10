import React from 'react';
import SectionHead from './SectionHead.jsx';
import { FLEET } from '../data.js';

export default function Frota() {
  return (
    <section id="frota" className="section">
      <SectionHead kicker="Nossos transportes" title={<>Um carro para<br />cada grupo.</>} />
      <div className="fleet">{FLEET.map(f => <div key={f.name} className={f.dark ? 'is-dark' : ''}><b>{f.n}</b><strong>{f.name}</strong><span>{f.text}</span></div>)}</div>
    </section>
  );
}
