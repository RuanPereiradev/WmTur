import React from 'react';

const STATS = [
  ['Passeios a partir de', 'R$ 500', 'por carro'],
  ['Roteiros', '4 + 1', 'Leste, Oeste, Extremos e personalizado'],
  ['Na Jardineira', '12', 'pessoas por carro'],
  ['Em Jeri há', '12+ anos', 'com Wilamar Cunha'],
];

export default function Stats() {
  return (
    <section className="stats" aria-label="Destaques">
      {STATS.map(([k, v, s]) => <div key={k}><small>{k}</small><strong>{v}</strong><span>{s}</span></div>)}
    </section>
  );
}
