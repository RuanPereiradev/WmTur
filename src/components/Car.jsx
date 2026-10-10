import React from 'react';

// 4x4 desenhado em SVG. A carroceria e as rodas são SVGs separados
// para a carroceria quicar enquanto as rodas giram.
const A = 'var(--color-accent)', K = 'var(--color-text)', B = 'var(--color-bg)';

function Wheel({ cx, mini }) {
  return (
    <g className="spin">
      <circle cx={cx} cy={110} r={mini ? 26 : 24} fill={K} />
      {!mini && <circle cx={cx} cy={110} r={19} fill="none" stroke="var(--color-neutral-700)" strokeWidth={3} strokeDasharray="5 5" />}
      <circle cx={cx} cy={110} r={mini ? 12 : 11} fill={B} />
      <path d={`M${cx} 101 L${cx} 119 M${cx - 8} 106 L${cx + 8} 114 M${cx - 8} 114 L${cx + 8} 106`} stroke={K} strokeWidth={mini ? 5 : 3} />
    </g>
  );
}

export function Car({ mini = false }) {
  return (
    <span className="car-tilt">
      <svg viewBox="0 0 260 140" className="car-layer car-wheels"><Wheel cx={72} mini={mini} /><Wheel cx={194} mini={mini} /></svg>
      <svg viewBox="0 0 260 140" className="car-layer car-body">
        <circle cx={22} cy={76} r={16} fill={K} />{!mini && <circle cx={22} cy={76} r={7} fill={B} />}
        <rect x={50} y={6} width={124} height={mini ? 8 : 5} fill={K} />
        {!mini && <><rect x={62} y={11} width={4} height={8} fill={K} /><rect x={158} y={11} width={4} height={8} fill={K} /></>}
        <polygon points="40,62 44,18 176,18 206,62" fill={A} />
        <polygon points="30,60 238,60 250,74 250,100 30,100" fill={A} />
        <polygon points="54,26 112,26 112,56 54,56" fill={B} />
        <polygon points="120,26 172,26 194,56 120,56" fill={B} />
        {!mini && <rect x={30} y={76} width={220} height={4} fill={B} />}
        <rect x={199} y={26} width={mini ? 8 : 5} height={46} fill={K} />
        <path d="M42 100 A30 30 0 0 1 102 100 Z" fill={K} /><path d="M164 100 A30 30 0 0 1 224 100 Z" fill={K} />
        {!mini && <><rect x={236} y={92} width={20} height={10} fill={K} /><rect x={22} y={92} width={14} height={10} fill={K} /></>}
      </svg>
    </span>
  );
}

// Versão pequena usada no logo e na foto do perfil
export function MiniCar() {
  return (
    <span className="mini-car" aria-hidden="true">
      <span className="mini-ground" /><span className="mini-ticks" />
      {[0, 1, 2].map(i => <span key={i} className="dust" style={{ left: 9, bottom: 4, width: 3 + i, height: 3 + i, background: i === 1 ? K : A, '--dx': `${-10 - i * 4}px`, '--dy': `${-4 - i * 3}px`, animationDelay: `${i * 0.18}s`, animationDuration: '.6s' }} />)}
      <span className="mini-car-box"><Car mini /></span>
    </span>
  );
}
