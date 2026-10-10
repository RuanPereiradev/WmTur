import React, { useEffect, useState } from 'react';
import WaLink from './WaLink.jsx';
import { GALLERY } from '../data.js';
import { INSTAGRAM, igHandle } from '../config.js';

// Publicação aberta em tela cheia (estilo post de rede social)
export default function Lightbox({ index, list, setIndex }) {
  const [liked, setLiked] = useState({}); const [pop, setPop] = useState(false);
  const g = GALLERY[index]; const pos = list.indexOf(index);
  const step = (d) => setIndex(list[(pos + d + list.length) % list.length]);
  const close = () => setIndex(null);
  const like = () => { setLiked(l => ({ ...l, [index]: !l[index] })); setPop(true); setTimeout(() => setPop(false), 180); };
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const k = (e) => { if (e.key === 'Escape') close(); if (e.key === 'ArrowRight') step(1); if (e.key === 'ArrowLeft') step(-1); };
    addEventListener('keydown', k); return () => { removeEventListener('keydown', k); document.body.style.overflow = ''; };
  });
  const msg = `Olá, WmTur! Vi "${g.caption}" na galeria do site e quero fazer esse passeio.`;
  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={g.caption} onClick={close}>
      <button className="lb-close" onClick={close} aria-label="Fechar">✕</button>
      <button className="lb-nav" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Anterior">←</button>
      <article className="lb-post" onClick={(e) => e.stopPropagation()}>
        <header><span className="lb-av">WM</span><span><b>{igHandle()}</b><small>Jericoacoara, Ceará</small></span><em>{pos + 1} / {list.length}</em></header>
        <div className="lb-media">
          {g.v ? <video key={g.v} src={g.v} poster={g.p} controls autoPlay playsInline loop /> : <img key={g.i} src={g.i} alt={g.caption} onDoubleClick={() => !liked[index] && like()} />}
        </div>
        <div className="lb-actions">
          <button onClick={like} aria-label="Curtir" className={liked[index] ? 'is-liked' : ''} style={{ transform: pop ? 'scale(1.25)' : 'none' }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill={liked[index] ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2"><path d="M12 20.5S3.5 15.2 3.5 9.2A4.7 4.7 0 0 1 12 6.6a4.7 4.7 0 0 1 8.5 2.6c0 6-8.5 11.3-8.5 11.3Z" /></svg>
          </button>
          <WaLink msg={msg} className="lb-reserve">Reservar →</WaLink>
          <a href={INSTAGRAM} target="_blank" rel="noopener" aria-label="Instagram" className="lb-ig">Instagram</a>
        </div>
        <p><b>{igHandle()}</b> {g.caption} <span className="accent-700">#vemprajeri</span></p>
      </article>
      <button className="lb-nav" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Próximo">→</button>
    </div>
  );
}
