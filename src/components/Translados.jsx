import React, { useState } from 'react';
import { ROUTES, VEHICLES } from '../data.js';
import { wa, brl } from '../config.js';
import { active, kicker, h2, waBtn } from './ui.jsx';

export default function Translados() {
  const [i, setI] = useState(0), [veh, setVeh] = useState('sw4');
  const r = ROUTES[i];
  const vehs = VEHICLES.filter(v => r.p[v.k] != null);
  const k = r.p[veh] != null ? veh : 'sw4';
  const label = vehs.find(v => v.k === k).label;
  const comp = k === 'comp';
  return (
    <section id="translados" style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(64px,8vw,110px) clamp(16px,4vw,40px)', scrollMarginTop: 64 }}>
      <div style={kicker}>Porta a porta</div>
      <h2 style={{ ...h2, margin: '6px 0 12px' }}>Translados</h2>
      <p style={{ margin: '0 0 36px', fontSize: 18, color: '#5a6b6d', maxWidth: '52ch' }}>Escolha a rota e o veículo — o valor aparece na hora.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: 28, alignItems: 'stretch' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {ROUTES.map((x, n) => (
            <button key={x.name} type="button" onClick={() => setI(n)} style={{ font: 'inherit', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 16, padding: 12, borderRadius: 16, ...active(n === i), color: '#1d2a2c' }}>
              <img src={x.img} alt="" style={{ width: 84, height: 60, objectFit: 'cover', borderRadius: 10, flex: 'none' }} />
              <span style={{ flex: 1, minWidth: 0 }}>
                <span style={{ display: 'block', fontFamily: "'DM Serif Display'", fontStyle: 'italic', fontSize: 24, color: '#0f6f77', lineHeight: 1.1 }}>{x.name}</span>
                <span style={{ display: 'block', fontSize: 14, color: '#5a6b6d', marginTop: 2 }}>a partir de {brl(Math.min(...Object.values(x.p)))}</span>
              </span>
              <span style={{ fontSize: 20, color: '#e8743a', fontWeight: 800 }}>{n === i ? '●' : ''}</span>
            </button>
          ))}
        </div>

        <div style={{ background: '#fff', border: '1px solid #e3ecea', borderRadius: 22, overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 20px 50px rgba(13,79,85,.12)' }}>
          <img src={r.img} alt={r.name} style={{ display: 'block', width: '100%', height: 200, objectFit: 'cover' }} />
          <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 18, flex: 1 }}>
            <div style={{ fontFamily: "'DM Serif Display'", fontStyle: 'italic', fontSize: 32, color: '#0f6f77', lineHeight: 1 }}>{r.name}</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: 8 }}>
              {vehs.map(v => (
                <button key={v.k} type="button" onClick={() => setVeh(v.k)} style={{ font: 'inherit', cursor: 'pointer', textAlign: 'left', padding: '12px 14px', borderRadius: 12, ...active(v.k === k), color: '#1d2a2c' }}>
                  <span style={{ display: 'block', fontWeight: 800, fontSize: 15 }}>{v.label}</span>
                  <span style={{ display: 'block', fontSize: 13, color: '#5a6b6d' }}>{v.sub}</span>
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: 12, marginTop: 'auto', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 13, color: '#5a6b6d' }}>{comp ? 'por pessoa' : 'por veículo'}</div>
                <div style={{ fontFamily: "'DM Serif Display'", fontSize: 52, lineHeight: 1, color: '#e8743a' }}>{brl(r.p[k])}</div>
              </div>
              <a className="wa-btn" href={wa(`Olá, WmTur! Quero agendar o translado ${r.name.replace('⇄', '<->')} de ${label} (${brl(r.p[k])}${comp ? '/pessoa' : ''}). Data: `)} target="_blank" rel="noopener" style={{ ...waBtn, fontSize: 17, padding: '16px 22px' }}>Agendar translado →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
