import React from 'react';
import SectionHead from './SectionHead.jsx';
import WaLink from './WaLink.jsx';
import { ROUTES } from '../data.js';
import { brl } from '../config.js';

export default function Translados() {
  return (
    <section id="translados" className="section">
      <SectionHead kicker="Translados" title="Porta a porta."><p>SW4 e Picape com valor por veículo. No compartilhado, o valor é por pessoa.</p></SectionHead>
      <div className="table-scroll">
        <table className="routes">
          <thead><tr>
            <th><b>Rota</b></th><th><b>SW4</b><small>Até 6 pessoas</small></th><th><b>Picape</b><small>Até 4 pessoas</small></th><th><b>Compartilhado</b><small>Valor por pessoa</small></th><th />
          </tr></thead>
          <tbody>
            {ROUTES.map(r => (
              <tr key={r.name}>
                <td className="route-name">{r.name}</td><td>{brl(r.sw4)}</td><td>{brl(r.picape)}</td><td className="accent-700">{r.comp ? brl(r.comp) : '—'}</td>
                <td className="right"><WaLink msg={`Olá, WmTur! Quero agendar um translado ${r.name.replace('⇄', '<->')}. Data: `} className="chip wa-sweep--light">Agendar →</WaLink></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
