import React, { useEffect, useMemo, useRef, useState } from 'react';
import { MiniCar } from './Car.jsx';
import Lightbox from './Lightbox.jsx';
import WaLink from './WaLink.jsx';
import { GALLERY } from '../data.js';
import { INSTAGRAM, igHandle } from '../config.js';
import { useMobile } from '../hooks.js';

const TABS = [['all', 'Publicações', 'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z'], ['v', 'Vídeos', 'M8 5v14l11-7z'], ['i', 'Fotos', 'M4 5h16v14H4zM4 15l5-5 4 4 3-3 4 4']];
const HL = [['#passeios', 'Passeios', 'Tour', 'accent'], ['#translados', 'Translados', 'Ida', 'dark'], ['#frota', 'Frota', '4x4', 'light'], ['#topo', 'Reservar', 'Jeri', 'accent']];

// Vídeo da grade: toca sozinho (mudo) só quando aparece na tela
function AutoVideo({ src }) {
  const ref = useRef();
  useEffect(() => {
    const v = ref.current; const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { v.muted = true; v.play().catch(() => {}); } else v.pause(); }, { threshold: .25 });
    io.observe(v); return () => io.disconnect();
  }, []);
  return <video ref={ref} src={src} muted loop playsInline preload="metadata" />;
}

export default function Galeria() {
  const mobile = useMobile(); const [tab, setTab] = useState('all'); const [open, setOpen] = useState(null);
  const vis = useMemo(() => GALLERY.map((g, i) => i).filter(i => tab === 'all' || (tab === 'v' ? GALLERY[i].v : GALLERY[i].i)), [tab]);
  const handle = igHandle();

  const profile = mobile ? (
    <div className="ig-m">
      <div className="ig-name">{handle}</div>
      <div className="ig-row"><Avatar size={86} /><div className="ig-stats-m"><Stat n={GALLERY.length} l="publicações" /><Stat n="4" l="roteiros" /><Stat n="12+" l="anos em Jeri" /></div></div>
      <Bio />
      <div className="ig-btns"><a href={INSTAGRAM} target="_blank" rel="noopener" className="ig-follow">Seguir</a><WaLink msg="Olá, WmTur! Vi a galeria no site e quero reservar um passeio." className="ig-msg">Mensagem</WaLink></div>
    </div>
  ) : (
    <div className="ig-d">
      <Avatar size={150} />
      <div className="ig-d-info">
        <div className="ig-d-top"><span className="ig-name">{handle}</span><a href={INSTAGRAM} target="_blank" rel="noopener" className="ig-follow">Seguir</a><WaLink msg="Olá, WmTur! Vi a galeria no site e quero reservar um passeio." className="ig-msg">Mensagem</WaLink></div>
        <div className="ig-stats"><span><b>{GALLERY.length}</b> publicações</span><span><b>4</b> roteiros</span><span><b>12+</b> anos em Jeri</span></div>
        <Bio />
      </div>
    </div>
  );

  return (
    <section id="galeria" className="section">
      <div className="ig">
        {profile}
        <div className="ig-hl">{HL.map(([href, label, short, tone]) => <a key={label} href={href}><span className={'hl-ring'}><span className={'hl hl-' + tone}>{short}</span></span>{label}</a>)}</div>
        <div className="ig-tabs">{TABS.map(([k, label, icon]) => <button key={k} className={tab === k ? 'is-on' : ''} onClick={() => setTab(k)}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d={icon} /></svg>{label}</button>)}</div>
        <div className="ig-grid">
          {vis.map(i => { const g = GALLERY[i]; return (
            <button key={g.v || g.i} className="ig-tile" onClick={() => setOpen(i)} aria-label={'Abrir ' + g.caption}>
              {g.v ? <AutoVideo src={g.v} /> : <img src={g.i} alt={g.caption} loading="lazy" />}
              <span className="ig-badge"><svg width="20" height="20" viewBox="0 0 24 24" fill={g.v ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2"><path d={g.v ? 'M8 5v14l11-7z' : 'M4 5h16v14H4zM4 15l5-5 4 4 3-3 4 4'} /></svg></span>
            </button>
          ); })}
          <WaLink msg="Olá, WmTur! Vi a galeria no site e quero reservar um passeio." className="ig-tile ig-cta"><strong>Seu passeio pode ser o próximo.</strong><span>Reservar →</span></WaLink>
          <a href={INSTAGRAM} target="_blank" rel="noopener" className="ig-tile ig-more"><strong>Ver mais no Instagram</strong><span>@{handle}</span></a>
        </div>
      </div>
      {open != null && <Lightbox index={open} list={vis} setIndex={setOpen} />}
    </section>
  );
}

function Avatar({ size }) { return <div className="ig-avatar" style={{ width: size, height: size }}><div><MiniCar /></div></div>; }
function Stat({ n, l }) { return <div><b>{n}</b><span>{l}</span></div>; }
function Bio() {
  return <div className="ig-bio"><b>WmTur · Passeios em Jericoacoara</b><div>Jardineira e SW4 por lagoas, dunas e off-road</div><div>Translados aeroporto · Fortaleza · Parnaíba</div><div className="accent-700">#vemprajeri</div></div>;
}
