import React, { useState } from 'react';
import SectionHead from './SectionHead.jsx';
import WaLink from './WaLink.jsx';
import { TOURS } from '../data.js';

const VEHS = [{ k: 'jard', label: 'Jardineira', sub: 'Aberta · até 12 pessoas' }, { k: 'sw4', label: 'Toyota SW4', sub: 'Fechada · até 6 pessoas' }];

export default function Passeios() {
  const [t, setT] = useState(0); const [veh, setVeh] = useState('jard');
  const sel = TOURS[t];
  return (
    <section id="passeios" className="section">
      <SectionHead kicker="Passeios" title={<>Escolha seu<br />roteiro.</>}>
        <p>Todos os passeios saem de Jericoacoara de Jardineira ou SW4. O valor é fechado por carro, não por pessoa.</p>
      </SectionHead>

      <div className="tour-grid">
        {TOURS.map((x, i) => (
          <button key={x.name} className={'tour-card' + (i === t ? ' is-on' : '')} onClick={() => setT(i)}>
            <span className="tour-img"><img src={x.img} alt={x.name} /><span className="tour-num">{String(i + 1).padStart(2, '0')}</span></span>
            <span className="tour-body">
              <strong>{x.name}</strong>
              <span>{x.dur} · {x.places.length} paradas</span>
              <span className="tour-price"><b>R$ {x.price}</b><small>por carro</small></span>
            </span>
          </button>
        ))}
      </div>

      <div className="tour-detail">
        <div className="tour-detail-main">
          <div className="tour-detail-head"><h3>{sel.name}</h3><span>Duração média: {sel.dur}</span></div>
          <ol className="stops">{sel.places.map((p, i) => <li key={p}><span>{String(i + 1).padStart(2, '0')}</span>{p}</li>)}</ol>
        </div>
        <div className="tour-detail-side">
          <span className="kicker">Escolha o carro</span>
          <div className="veh-list">
            {VEHS.map(v => (
              <button key={v.k} onClick={() => setVeh(v.k)} className={veh === v.k ? 'is-on' : ''}>
                <span className="radio"><i /></span><span><strong>{v.label}</strong><small>{v.sub}</small></span>
              </button>
            ))}
          </div>
          <div className="big-price"><small>Valor por carro</small><strong>R$ {sel.price}</strong></div>
          <WaLink msg={`Olá, WmTur! Quero reservar o ${sel.name} de ${veh === 'jard' ? 'Jardineira' : 'SW4'} (R$ ${sel.price}). Qual a disponibilidade?`} className="btn btn-lg"><span>Reservar agora</span><span>→</span></WaLink>
        </div>
      </div>

      <WaLink msg="Olá, WmTur! Quero montar um passeio personalizado em Jeri. Os lugares que quero conhecer são: " className="custom-banner">
        <span><strong>Passeio personalizado</strong><span>Você escolhe os lugares, o ritmo e o horário. É só dizer onde quer ir.</span></span>
        <span className="pill"><span>Montar meu roteiro</span><span>→</span></span>
      </WaLink>
    </section>
  );
}
