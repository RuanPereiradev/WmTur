import React from 'react';
import { A, TEXTURA, MARQUEE } from '../data.js';
import { wa } from '../config.js';
import { kicker, h2, waBtn } from './ui.jsx';

const wrap = { maxWidth: 1240, margin: '0 auto' };
const texture = { background: '#0d4f55', backgroundImage: `linear-gradient(rgba(13,79,85,.5), rgba(13,79,85,.5)), url("${TEXTURA}")`, backgroundSize: 'cover' };

export function Marquee() {
  const items = [];
  for (let r = 0; r < 4; r++) MARQUEE.forEach((p, i) => items.push(
    <span key={`${r}-${i}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 28, marginRight: 28 }}>
      <span style={{ fontFamily: "'DM Serif Display', serif", fontStyle: 'italic', fontSize: 24 }}>{p}</span>
      <span style={{ width: 36, height: 1.5, background: 'currentColor', opacity: .5 }} />
    </span>
  ));
  return (
    <div aria-hidden="true" style={{ background: '#f2894a', color: '#3a1a06', overflow: 'hidden', whiteSpace: 'nowrap', padding: '16px 0', lineHeight: 1 }}>
      <div style={{ display: 'inline-block', animation: 'wmMarquee 60s linear infinite' }}>{items}</div>
    </div>
  );
}

export function Personalizado() {
  return (
    <section style={{ ...texture, backgroundImage: `linear-gradient(rgba(13,79,85,.55), rgba(13,79,85,.55)), url("${TEXTURA}")`, color: '#fffdf6' }}>
      <div style={{ ...wrap, padding: 'clamp(40px,5vw,64px) clamp(16px,4vw,40px)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <div style={{ maxWidth: 640 }}>
          <h2 style={{ margin: 0, fontFamily: "'DM Serif Display'", fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(32px,4vw,48px)', lineHeight: 1.05, color: '#ffc59e' }}>Quer do seu jeito?</h2>
          <p style={{ margin: '10px 0 0', fontSize: 18, lineHeight: 1.5, color: 'rgba(255,253,246,.9)' }}>Personalizamos o passeio: você escolhe os lugares, o ritmo e o horário. É só dizer onde quer ir.</p>
        </div>
        <a className="light-btn" href={wa('Olá, WmTur! Quero montar um passeio personalizado em Jeri. Os lugares que quero conhecer são: ')} target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#fffdf6', color: '#0f6f77', textDecoration: 'none', fontWeight: 800, fontSize: 18, padding: '18px 26px', borderRadius: 999 }}>Montar roteiro personalizado →</a>
      </div>
    </section>
  );
}

const FLEET = [
  { n: 4, name: 'Picape', text: 'Até 4 pessoas. Ideal para casal ou família pequena.' },
  { n: 6, name: 'Toyota SW4', text: 'Até 6 pessoas, com ar e conforto para o off-road.' },
  { n: 12, name: 'Jardineira', text: 'Até 12 pessoas, aberta, vento no rosto. A cara de Jeri.', dark: true },
];

export function Frota() {
  return (
    <section id="frota" style={{ background: '#f4efe2', scrollMarginTop: 64 }}>
      <div style={{ ...wrap, padding: 'clamp(64px,8vw,100px) clamp(16px,4vw,40px)' }}>
        <h2 style={{ ...h2, margin: '0 0 32px' }}>Nossos transportes</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
          {FLEET.map(f => (
            <div key={f.name} style={{ background: f.dark ? '#0f6f77' : '#fffdf6', color: f.dark ? '#fffdf6' : undefined, borderRadius: 20, padding: 28, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ fontFamily: "'DM Serif Display'", fontSize: 64, lineHeight: 1, color: f.dark ? '#ffc59e' : '#e8743a' }}>{f.n}</div>
              <div style={{ fontWeight: 800, fontSize: 22 }}>{f.name}</div>
              <div style={{ color: f.dark ? 'rgba(255,253,246,.85)' : '#5a6b6d', fontSize: 16 }}>{f.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const Polaroid = ({ src, alt, caption, style, pad = '12px 12px 48px', shadow = '0 20px 50px rgba(13,79,85,.22)' }) => (
  <div style={{ position: 'absolute', padding: pad, background: '#fff', boxShadow: shadow, ...style }}>
    <img src={src} alt={alt} style={{ display: 'block', width: '100%', aspectRatio: '5/3', objectFit: 'cover' }} />
    {caption && <span style={{ position: 'absolute', left: 12, bottom: 6, fontFamily: 'Caveat, cursive', fontSize: 22, color: '#0f6f77' }}>{caption}</span>}
  </div>
);

export function Sobre({ mobile, waGeneral }) {
  return (
    <section style={{ ...wrap, padding: 'clamp(64px,8vw,110px) clamp(16px,4vw,40px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: 'clamp(32px,5vw,72px)', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={kicker}>Sobre nós</div>
        <p style={{ margin: 0, fontFamily: "'DM Serif Display'", fontSize: 'clamp(28px,3.2vw,40px)', lineHeight: 1.2, color: '#1d2a2c' }}>“Meu nome é Wilamar Cunha, fundador da WmTur. Há mais de 12 anos garantimos sua segurança e uma experiência única em Jeri.”</p>
        <div style={{ fontFamily: 'Caveat, cursive', fontSize: 34, color: '#0f6f77' }}>Vem com a WmTur!</div>
        <a className="wa-btn" href={waGeneral} target="_blank" rel="noopener" style={{ ...waBtn, alignSelf: 'start', fontSize: 17, padding: '16px 24px' }}>Falar com o Wilamar →</a>
      </div>
      {mobile ? (
        <div style={{ ...texture, position: 'relative', overflow: 'hidden', borderRadius: 24, padding: '28px 20px 24px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ position: 'relative', height: 300 }}>
            <Polaroid src={A + 'tour-leste.webp'} alt="Buraco Azul" caption="Buraco Azul" pad="8px 8px 38px" shadow="0 18px 40px rgba(0,0,0,.35)" style={{ left: 0, top: 0, width: '74%', animation: 'wmSwayA 6s ease-in-out infinite' }} />
            <Polaroid src={A + 'tour-extremo-leste.webp'} alt="Lagoa em Jeri" caption="Lagoa do Paraíso" pad="8px 8px 38px" shadow="0 18px 40px rgba(0,0,0,.35)" style={{ right: 0, bottom: 0, width: '70%', animation: 'wmSwayB 7s ease-in-out infinite' }} />
            <div style={{ position: 'absolute', right: 6, top: 6, width: 84, height: 84, borderRadius: '50%', background: '#f2894a', color: '#3a1a06', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', lineHeight: 1, boxShadow: '0 10px 24px rgba(0,0,0,.3)', animation: 'wmSpin 18s linear infinite' }}>
              <span style={{ fontFamily: "'DM Serif Display'", fontSize: 32 }}>12+</span>
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase' }}>anos</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, paddingTop: 16, borderTop: '1px solid rgba(255,253,246,.2)', color: '#fffdf6' }}>
            <span style={{ fontSize: 15, lineHeight: 1.35 }}>Segurança e experiência única em Jeri.</span>
            <span style={{ fontFamily: 'Caveat, cursive', fontSize: 24, color: '#ffc59e', whiteSpace: 'nowrap' }}>#vemprajeri</span>
          </div>
        </div>
      ) : (
        <div style={{ position: 'relative', minHeight: 380 }}>
          <Polaroid src={A + 'tour-leste.webp'} alt="Buraco Azul" style={{ left: 0, top: 0, width: '68%', transform: 'rotate(-4deg)' }} />
          <Polaroid src={A + 'tour-extremo-leste.webp'} alt="Lagoa em Jeri" style={{ right: 0, bottom: 0, width: '62%', transform: 'rotate(3deg)' }} />
        </div>
      )}
    </section>
  );
}

export function Fechamento({ waGeneral }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: '#e8743a', color: '#fffdf6' }}>
      <div style={{ ...wrap, padding: 'clamp(64px,8vw,110px) clamp(16px,4vw,40px)', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <h2 style={{ margin: 0, fontFamily: "'DM Serif Display'", fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(56px,9vw,128px)', lineHeight: .9 }}>Boa viagem!</h2>
        <p style={{ margin: 0, fontSize: 20, maxWidth: '40ch', color: '#fff6ee' }}>As vagas nos carros da alta temporada acabam rápido. Garanta a sua data agora.</p>
        <a className="dark-btn" href={waGeneral} target="_blank" rel="noopener" style={{ alignSelf: 'start', display: 'flex', alignItems: 'center', gap: 12, background: '#1d2a2c', color: '#fffdf6', textDecoration: 'none', fontWeight: 800, fontSize: 20, padding: '20px 30px', borderRadius: 999 }}>Reservar pelo WhatsApp →</a>
      </div>
    </section>
  );
}
