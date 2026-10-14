import React, { useEffect, useRef, useState } from 'react';
import { TOURS, A, vehicleFor } from '../data.js';
import { wa, brl } from '../config.js';
import { active, waBtn } from './ui.jsx';

const HEAD = ['Jeri de um jeito', 'que você nunca sonhou.'];
const PLANS = [...TOURS.map(t => ({ label: t.name, price: brl(t.price) })), { label: 'Translado', price: brl(100) }, { label: 'Personalizado', price: 'sob consulta' }];
const step = { fontSize: 13, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', color: '#e8743a' };
const stepBtn = { font: 'inherit', cursor: 'pointer', width: 44, height: 44, border: 0, borderRadius: 9, background: '#eaf4f2', color: '#0f6f77', fontSize: 22, fontWeight: 800 };
const fmtDate = (d) => { if (!d) return 'a combinar'; const [y, m, day] = d.split('-'); return `${day}/${m}/${y}`; };

// Título em 3D (three.js). Enquanto não carrega, aparece o título normal.
function useHero3d(ref) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let dispose, dead = false;
    import('../hero3d.js')
      .then(({ mount }) => !dead && ref.current && mount(ref.current, { lines: HEAD, colors: [0xfffdf6, 0xf2894a] }))
      .then(d => { if (!d) return; if (dead) d(); else { dispose = d; setReady(true); } })
      .catch(e => console.warn('3D hero fallback', e));
    return () => { dead = true; dispose?.(); };
  }, []);
  return ready;
}

function Planner() {
  const [plan, setPlan] = useState(0), [people, setPeople] = useState(2), [date, setDate] = useState('');
  const p = PLANS[plan];
  const msg = `Olá, WmTur! Quero reservar:\n• ${p.label}\n• ${people} pessoa(s)\n• Data: ${fmtDate(date)}\n• Veículo sugerido: ${vehicleFor(people)}\nPode confirmar disponibilidade?`;
  return (
    <div style={{ background: '#fffdf6', color: '#1d2a2c', borderRadius: 22, padding: 'clamp(22px,3vw,32px)', boxShadow: '0 30px 80px rgba(0,0,0,.35)', display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div>
        <div style={{ fontFamily: "'DM Serif Display'", fontStyle: 'italic', fontSize: 30, color: '#0f6f77', lineHeight: 1.1 }}>Monte seu passeio</div>
        <div style={{ fontSize: 15, color: '#5a6b6d', marginTop: 4 }}>3 toques e sua mensagem sai pronta no WhatsApp.</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={step}>1 · Roteiro</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 8 }}>
          {PLANS.map((o, i) => (
            <button key={o.label} type="button" onClick={() => setPlan(i)} style={{ font: 'inherit', textAlign: 'left', cursor: 'pointer', padding: '11px 13px', borderRadius: 12, ...active(i === plan), color: '#1d2a2c', fontWeight: 700, fontSize: 14, lineHeight: 1.2 }}>{o.label}</button>
          ))}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 14 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={step}>2 · Pessoas</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '2px solid #d9e6e4', borderRadius: 12, padding: 4 }}>
            <button type="button" onClick={() => setPeople(n => Math.max(1, n - 1))} aria-label="Menos" style={stepBtn}>−</button>
            <span style={{ fontWeight: 800, fontSize: 22 }}>{people}</span>
            <button type="button" onClick={() => setPeople(n => Math.min(30, n + 1))} aria-label="Mais" style={stepBtn}>+</button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={step}>3 · Data</div>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} aria-label="Data" style={{ font: 'inherit', fontWeight: 600, height: 56, border: '2px solid #d9e6e4', borderRadius: 12, padding: '0 12px', background: '#fff', color: '#1d2a2c', width: '100%' }} />
        </div>
      </div>
      <div style={{ background: '#eaf4f2', borderRadius: 14, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, color: '#5a6b6d' }}>Veículo ideal para {people} pessoa(s)</div>
          <div style={{ fontWeight: 800, fontSize: 17, color: '#0f6f77' }}>{vehicleFor(people)}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 12, color: '#5a6b6d' }}>a partir de</div>
          <div style={{ fontFamily: "'DM Serif Display'", fontSize: 26, color: '#e8743a', lineHeight: 1 }}>{p.price}</div>
        </div>
      </div>
      <a className="wa-btn" href={wa(msg)} target="_blank" rel="noopener" style={{ ...waBtn, justifyContent: 'space-between', fontSize: 18, padding: '18px 22px', borderRadius: 14 }}>
        <span>Enviar pedido no WhatsApp</span><span>→</span>
      </a>
    </div>
  );
}

const Stat = ({ n, label }) => (
  <div><div style={{ fontFamily: "'DM Serif Display'", fontSize: 38, lineHeight: 1, color: '#f2894a' }}>{n}</div><div style={{ fontSize: 14, color: 'rgba(255,253,246,.8)' }}>{label}</div></div>
);

export default function Hero({ waGeneral }) {
  const stage = useRef(null);
  const ready3d = useHero3d(stage);
  return (
    <section id="topo" style={{ position: 'relative', overflow: 'hidden', background: '#0d4f55', color: '#fffdf6' }}>
      <img src={A + 'tour-extremo-oeste.webp'} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: .55 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(8,58,63,.94) 0%, rgba(8,58,63,.7) 45%, rgba(8,58,63,.15) 100%)' }} />
      <div style={{ position: 'relative', maxWidth: 1240, margin: '0 auto', padding: 'clamp(32px,8vw,110px) clamp(18px,4vw,40px) clamp(56px,7vw,96px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 700, fontSize: 14, letterSpacing: '.12em', textTransform: 'uppercase', color: '#ffc59e' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#25d366', boxShadow: '0 0 0 4px rgba(37,211,102,.25)' }} />
            Passeios e translados em Jericoacoara
          </div>
          <div style={{ position: 'relative', margin: '-8px 0 -8px -2%', width: '104%', height: 'clamp(190px, 24vw, 320px)' }}>
            <h1 style={{ position: 'absolute', inset: 0, margin: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: 'clamp(40px, 5.6vw, 76px)', lineHeight: 1, letterSpacing: '-0.01em', opacity: ready3d ? 0 : 1, transition: 'opacity .6s' }}>
              {HEAD[0]}<em style={{ color: '#f2894a' }}>{HEAD[1]}</em>
            </h1>
            <div ref={stage} aria-hidden="true" style={{ position: 'absolute', inset: 0 }} />
          </div>
          <p style={{ margin: 0, fontSize: 'clamp(17px,1.5vw,20px)', lineHeight: 1.55, maxWidth: '44ch', color: 'rgba(255,253,246,.88)' }}>Lagoas, dunas e off-road com quem roda Jeri há mais de 12 anos. Escolha o roteiro, a gente confirma tudo pelo WhatsApp em minutos.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a className="wa-btn lift" href={waGeneral} target="_blank" rel="noopener" style={{ ...waBtn, fontSize: 18, padding: '18px 28px', boxShadow: '0 10px 30px rgba(37,211,102,.4)' }}>Quero reservar agora →</a>
            <a className="ghost-btn" href="#passeios" style={{ display: 'flex', alignItems: 'center', color: '#fffdf6', textDecoration: 'none', fontWeight: 700, fontSize: 17, padding: '18px 24px', borderRadius: 999, border: '2px solid rgba(255,253,246,.5)' }}>Ver passeios</a>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28, paddingTop: 8 }}>
            <Stat n="12+" label="anos em Jeri" />
            <Stat n="4" label="roteiros + personalizado" />
            <Stat n="até 12" label="pessoas por carro" />
          </div>
        </div>
        <Planner />
      </div>
    </section>
  );
}
