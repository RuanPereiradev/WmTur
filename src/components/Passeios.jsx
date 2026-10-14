import React, { useState } from 'react';
import { TOURS, TEXTURA } from '../data.js';
import { wa, brl } from '../config.js';
import { kicker, h2, waBtn } from './ui.jsx';

const info = { padding: '12px 24px', borderLeft: '1px solid #d9e6e4', display: 'flex', flexDirection: 'column', gap: 2 };
const infoK = { fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: '#5a6b6d' };
const infoV = { fontWeight: 700, fontSize: 16, color: '#1d2a2c' };

export default function Passeios({ mobile }) {
  const [i, setI] = useState(0);
  const t = TOURS[i], price = 'R$' + t.price;
  return (
    <section id="passeios" style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(64px,8vw,110px) clamp(16px,4vw,40px)', scrollMarginTop: 64 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'end', justifyContent: 'space-between', gap: 20, marginBottom: 36 }}>
        <div>
          <div style={kicker}>Jardineira ou SW4</div>
          <h2 style={h2}>Escolha seu passeio</h2>
        </div>
        <div className="tabs" style={{ display: 'flex', flexWrap: mobile ? 'nowrap' : 'wrap', overflowX: 'auto', maxWidth: '100%', scrollbarWidth: 'none', gap: 8, background: '#eaf4f2', padding: 6, borderRadius: 999 }}>
          {TOURS.map((x, k) => (
            <button key={x.name} type="button" onClick={() => setI(k)} style={{ flex: 'none', whiteSpace: 'nowrap', font: 'inherit', cursor: 'pointer', border: 0, padding: '12px 18px', borderRadius: 999, fontWeight: 700, fontSize: 15, background: k === i ? '#0f6f77' : 'transparent', color: k === i ? '#fffdf6' : '#0f6f77' }}>{x.name}</button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 'clamp(32px,5vw,72px)', alignItems: 'center' }}>
        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 24, background: '#0d4f55', backgroundImage: `linear-gradient(rgba(13,79,85,.5), rgba(13,79,85,.5)), url("${TEXTURA}")`, backgroundSize: 'cover', padding: 'clamp(24px,4vw,40px) clamp(20px,3vw,36px) 24px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ position: 'relative', padding: '18px 8px 10px' }}>
            <div style={{ position: 'relative', padding: '10px 10px 48px', background: '#fff', boxShadow: '0 18px 40px rgba(0,0,0,.35)', animation: 'wmSwayA 6s ease-in-out infinite' }}>
              <img src={t.img} alt={t.name} style={{ display: 'block', width: '100%', aspectRatio: '5/3', objectFit: 'cover' }} />
              <span style={{ position: 'absolute', left: 16, bottom: 8, fontFamily: 'Caveat, cursive', fontSize: 28, color: '#0f6f77' }}>{t.name} · Jeri</span>
            </div>
            <div style={{ position: 'absolute', right: -4, top: -4, width: 88, height: 88, borderRadius: '50%', background: '#f2894a', color: '#3a1a06', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', lineHeight: 1, boxShadow: '0 10px 24px rgba(0,0,0,.3)', animation: 'wmSpin 18s linear infinite' }}>
              <span style={{ fontFamily: "'DM Serif Display'", fontSize: 26 }}>{price}</span>
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase', marginTop: 2 }}>por carro</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, paddingTop: 16, borderTop: '1px solid rgba(255,253,246,.2)', color: '#fffdf6' }}>
            <span style={{ fontSize: 15, lineHeight: 1.35 }}>{t.places.length} paradas · {t.dur}</span>
            <span style={{ fontFamily: 'Caveat, cursive', fontSize: 24, color: '#ffc59e', whiteSpace: 'nowrap' }}>#vemprajeri</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div>
            <h3 style={{ margin: 0, fontFamily: "'DM Serif Display'", fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(36px,4vw,52px)', color: '#e8743a', lineHeight: 1 }}>{t.name}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 18, borderTop: '1px solid #d9e6e4', borderBottom: '1px solid #d9e6e4' }}>
              <div style={{ ...info, padding: '12px 24px 12px 0', borderLeft: 0 }}><span style={infoK}>Duração</span><span style={infoV}>{t.dur}</span></div>
              <div style={info}><span style={infoK}>Paradas</span><span style={infoV}>{t.places.length} lugares</span></div>
              <div style={info}><span style={infoK}>Veículo</span><span style={infoV}>Jardineira ou SW4</span></div>
            </div>
          </div>
          <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10 }}>
            {t.places.map((p, n) => (
              <li key={p} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', background: '#fff', border: '1px solid #e3ecea', borderRadius: 12, fontWeight: 600, fontSize: 16 }}>
                <span style={{ flex: 'none', width: 28, height: 28, borderRadius: '50%', background: '#0f6f77', color: '#fffdf6', display: 'grid', placeItems: 'center', fontSize: 13, fontWeight: 800 }}>{n + 1}</span>{p}
              </li>
            ))}
          </ol>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 20, paddingTop: 6 }}>
            <div>
              <div style={{ fontSize: 13, color: '#5a6b6d' }}>por carro</div>
              <div style={{ fontFamily: "'DM Serif Display'", fontSize: 48, lineHeight: 1, color: '#1d2a2c' }}>{price}</div>
            </div>
            <a className="wa-btn" href={wa(`Olá, WmTur! Quero reservar o ${t.name} (${brl(t.price)}). Qual a disponibilidade?`)} target="_blank" rel="noopener" style={{ ...waBtn, flex: 1, minWidth: 240, justifyContent: 'space-between', fontSize: 18, padding: '18px 24px', boxShadow: '0 10px 26px rgba(37,211,102,.35)' }}><span>Reservar {t.name}</span><span>→</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
