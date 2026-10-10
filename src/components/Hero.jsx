import React, { useEffect, useState } from 'react';
import WaLink from './WaLink.jsx';
import { REEL } from '../data.js';
import { REEL_MS } from '../config.js';

export default function Hero({ visible }) {
  const [i, setI] = useState(0); const [run, setRun] = useState(0);
  useEffect(() => { if (!visible) return; const t = setInterval(() => setI(x => (x + 1) % REEL.length), REEL_MS); return () => clearInterval(t); }, [visible, run]);
  const go = (n) => { setI(n); setRun(r => r + 1); };
  const r = REEL[i];
  return (
    <section className={'hero' + (visible ? ' is-in' : '')}>
      <div className="hero-copy">
        <div className="fade d1"><span className="tag">Reserva pelo WhatsApp</span><span className="kicker">Passeios e translados em Jericoacoara</span></div>
        <h1>
          <span className="line"><span className="d1">Jeri de um jeito</span></span>
          <span className="line"><span className="d2">que você nunca</span></span>
          <span className="line"><span className="d3 accent">sonhou.</span></span>
        </h1>
        <p className="fade d4">Passeios de Jardineira ou SW4 por lagoas, dunas e off-road, e translados para o aeroporto, Fortaleza e Parnaíba. Há mais de 12 anos com segurança e uma experiência única em Jeri.</p>
        <div className="fade d5 hero-ctas">
          <WaLink msg="Olá, WmTur! Vim pelo site e quero reservar um passeio em Jeri." className="btn btn-lg"><span>Reservar meu passeio</span><span>→</span></WaLink>
          <a href="#passeios" className="btn btn-outline btn-lg"><span>Ver passeios</span><span>↓</span></a>
        </div>
      </div>
      <div className="hero-reel">
        <div className="reel">
          {REEL.map((s, n) => <img key={s.img + (n === i ? run + '-' + i : '')} src={s.img} alt={s.tour} className={n === i ? 'is-on' : ''} style={n === i ? { animationDuration: REEL_MS + 600 + 'ms' } : null} />)}
          <div className="reel-bars">
            {REEL.map((s, n) => (
              <button key={n} aria-label={s.tour} onClick={() => go(n)}>
                <span>{n < i && <i className="full" />}{n === i && visible && <i key={i + '-' + run} className="fill" style={{ animationDuration: REEL_MS + 'ms' }} />}</span>
              </button>
            ))}
          </div>
          <div className="reel-cap"><small>{r.label}</small><strong>{r.tour}</strong></div>
        </div>
        <WaLink msg={`Olá, WmTur! Quero reservar: ${r.tour} (${r.price}). Qual a disponibilidade?`} className="reel-row wa-sweep--light">
          <span>{r.priceLabel}</span>
          <span className="reel-price"><b>{r.price}</b><span>Reservar →</span></span>
        </WaLink>
      </div>
    </section>
  );
}
