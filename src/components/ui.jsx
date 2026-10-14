import React, { useEffect, useState } from 'react';

const WA_PATH = 'M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.3.5-.4.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.7-.1 1.3Z';

export const WaIcon = ({ size = 18, fill = 'currentColor', style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} style={style} aria-hidden="true"><path d={WA_PATH} /></svg>
);

// borda/fundo de opção selecionada
export const active = (on) => ({ border: on ? '2px solid #0f6f77' : '2px solid #d9e6e4', background: on ? '#eaf4f2' : '#fff' });

// true no celular (até 720px), igual ao design
export function useMobile(query = '(max-width: 720px)') {
  const [m, setM] = useState(() => matchMedia(query).matches);
  useEffect(() => {
    const mq = matchMedia(query); const on = () => setM(mq.matches);
    mq.addEventListener('change', on); on();
    return () => mq.removeEventListener('change', on);
  }, [query]);
  return m;
}

export const kicker = { fontWeight: 800, fontSize: 14, letterSpacing: '.12em', textTransform: 'uppercase', color: '#e8743a' };
export const h2 = { margin: '6px 0 0', fontFamily: "'DM Serif Display'", fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(40px,5vw,64px)', lineHeight: 1, color: '#0f6f77' };
export const waBtn = { display: 'flex', alignItems: 'center', gap: 10, background: '#25d366', color: '#0b3b1e', textDecoration: 'none', fontWeight: 800, borderRadius: 999 };
