import React, { useEffect, useRef, useState } from 'react';
import { Car } from './Car.jsx';
import { LOADER_SECONDS } from '../config.js';

const K = 'var(--color-text)', A = 'var(--color-accent)', B = 'var(--color-bg)';
const wave = 'M0 10 q15 -8 30 0' + ' t30 0'.repeat(39);

function WaveRow({ top, dur, op, color }) {
  return (
    <div className="loop-x" style={{ top, height: 20, opacity: op, animationDuration: `${dur}s` }}>
      {[0, 1].map(k => <svg key={k} viewBox="0 0 1200 20" preserveAspectRatio="none"><path d={wave} fill="none" stroke={color} strokeWidth={2} /></svg>)}
    </div>
  );
}

function Palm({ x, s }) {
  return (
    <svg viewBox="0 0 120 200" className="palm" style={{ left: x, height: `${s}%` }}>
      <path d="M60 200 C 58 150 66 100 78 60" fill="none" stroke={K} strokeWidth={7} />
      {['M78 60 C 60 40 36 44 20 62', 'M78 60 C 70 34 52 22 32 22', 'M78 60 C 90 34 110 30 122 42', 'M78 60 C 98 52 114 64 116 84', 'M78 60 C 62 62 48 78 44 96']
        .map((d, i) => <path key={i} d={d} fill="none" stroke={K} strokeWidth={6} strokeLinecap="round" />)}
      <circle cx={74} cy={68} r={6} fill={A} /><circle cx={84} cy={66} r={6} fill={A} />
    </svg>
  );
}

export default function Loader({ phase, setPhase, onEnd }) {
  const [p, setP] = useState(0);
  const raf = useRef();
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const dur = LOADER_SECONDS * 1000, t0 = performance.now(); const timers = [];
    const tick = (now) => {
      const e = Math.min(1, (now - t0) / dur);
      setP(Math.round((1 - Math.pow(1 - e, 1.8)) * 100));
      if (e < 1) { raf.current = requestAnimationFrame(tick); return; }
      timers.push(setTimeout(() => setPhase('exit'), 100));
      timers.push(setTimeout(() => setPhase('done'), 420));
      timers.push(setTimeout(() => { setPhase('off'); document.body.style.overflow = ''; onEnd && onEnd(); }, 980));
    };
    raf.current = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf.current); timers.forEach(clearTimeout); document.body.style.overflow = ''; };
  }, []);

  const step = p < 35 ? 'Calibrando os pneus' : p < 70 ? 'Descendo pra praia' : p < 98 ? 'Pegando a beira-mar' : 'Pronto. Bora!';
  const gone = phase !== 'load';
  return (
    <div className={'loader' + (phase === 'done' ? ' is-up' : '')} aria-hidden="true">
      <header className="loader-head"><span className="logo">WM TUR<span className="dot">.</span></span><span>Passeios 4x4 em Jericoacoara</span></header>
      <div className="scene">
        <div className="sun" />
        {[['18%', '14%', 1, 0], ['26%', '22%', .75, .6], ['40%', '10%', .6, 1.1]].map(([l, t, s, d], i) => (
          <svg key={i} viewBox="0 0 26 8" className="gull" style={{ left: l, top: t, width: 30 * s, animationDelay: `${d}s` }}><path d="M1 7 Q 7 0 13 6 Q 19 0 25 7" fill="none" stroke={K} strokeWidth={2.5} strokeLinecap="round" /></svg>
        ))}
        {[['28%', 120, 0], ['40%', 70, .3], ['18%', 90, .55]].map(([top, w, d], i) => <span key={i} className="wind" style={{ top, width: w, animationDelay: `${d}s` }} />)}
        <div className="sea">
          <WaveRow top="22%" dur={14} op={.35} color="oklch(0.45 0.12 240)" />
          <WaveRow top="48%" dur={9} op={.55} color="oklch(0.95 0.03 210)" />
          <WaveRow top="74%" dur={6} op={.9} color="#fff" />
        </div>
        <div className="glint">{[90, 64, 44, 28].map((w, i) => <span key={i} style={{ width: `${w}%`, animationDuration: `${1.4 + i * .3}s`, animationDelay: `${i * .2}s` }} />)}</div>
        <div className="palms loop-x" style={{ animationDuration: '5.5s' }}>
          {[['8%', 100], ['11%', 74], ['34%', 88], ['58%', 100], ['61%', 74], ['84%', 88]].map(([x, s]) => <Palm key={x} x={x} s={s} />)}
        </div>
        <div className="floor">
          <div className="wet" />
          <svg viewBox="0 0 1200 12" preserveAspectRatio="none" className="foam"><path d={'M0 6 q20 -6 40 0' + ' t40 0'.repeat(29)} fill="none" stroke={B} strokeWidth={4} /></svg>
          <div className="ticks" style={{ top: 26 }} /><div className="ticks slow" style={{ top: 46 }} />
        </div>
        <div className={'car' + (gone ? ' is-gone' : '')}>
          {Array.from({ length: 10 }, (_, i) => (
            <span key={i} className="dust" style={{ left: '24%', bottom: '3%', width: 5 + (i % 4) * 3, height: 5 + (i % 4) * 3,
              background: i % 3 === 0 ? K : i % 3 === 1 ? 'var(--color-accent-300)' : A,
              '--dx': `${-90 - (i % 5) * 26}px`, '--dy': `${-18 - (i % 4) * 16}px`,
              animationDuration: `${0.7 + (i % 3) * 0.15}s`, animationDelay: `${i * 0.08}s` }} />
          ))}
          <Car />
        </div>
      </div>
      <footer className="loader-foot">
        <div className="bar"><span style={{ width: p + '%' }} /></div>
        <div className="loader-row">
          <div className="pct">{p}<span>%</span></div>
          <div className="step"><small>Carregando</small><strong>{step}</strong></div>
        </div>
      </footer>
    </div>
  );
}
