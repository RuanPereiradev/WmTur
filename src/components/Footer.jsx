import React from 'react';
import { TOURS, ROUTES, TEXTURA } from '../data.js';
import { INSTAGRAM, DEV_GITHUB, wa, phone, igHandle } from '../config.js';
import { WaIcon, waBtn } from './ui.jsx';

const col = { display: 'flex', flexDirection: 'column', gap: 10, minWidth: 0 };
const colH = { margin: '0 0 4px', fontSize: 13, fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: '#ffc59e' };
const link = { color: 'rgba(255,253,246,.85)', textDecoration: 'none', fontSize: 15 };
const list = { margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 };

const IgIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
);
const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
);

export default function Footer({ mobile }) {
  const dev = DEV_GITHUB.replace(/\/+$/, '').split('/').pop();
  return (
    <footer className="site-footer" style={{ background: '#0b454b', backgroundImage: `linear-gradient(rgba(11,69,75,.88), rgba(11,69,75,.94)), url("${TEXTURA}")`, backgroundSize: 'cover', color: 'rgba(255,253,246,.8)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: `clamp(56px,7vw,88px) clamp(16px,4vw,40px) 110px` }}>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : '1.7fr 1fr 1fr 1fr', gap: 'clamp(32px,4vw,48px)', paddingBottom: 40, borderBottom: '1px solid rgba(255,253,246,.15)' }}>
          <div style={{ ...col, gap: 16, gridColumn: mobile ? '1 / -1' : undefined, maxWidth: 420 }}>
            <a href="#topo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: 10 }}>
              <span style={{ fontWeight: 800, fontSize: 34, letterSpacing: '-0.02em', color: '#fffdf6' }}>WM TUR</span>
              <span style={{ fontFamily: 'Caveat, cursive', fontSize: 26, color: '#f2894a' }}>#vemprajeri</span>
            </a>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55 }}>Passeios de Jardineira ou SW4 e translados em Jericoacoara. Há mais de 12 anos em Jeri, com Wilamar Cunha.</p>
            <a className="wa-btn" href={wa('Olá, WmTur! Vim pelo site e quero reservar um passeio em Jeri.')} target="_blank" rel="noopener" style={{ ...waBtn, alignSelf: 'start', fontSize: 16, padding: '14px 22px' }}><WaIcon /> Reservar no WhatsApp</a>
          </div>
          <nav style={col} aria-label="Passeios">
            <h3 style={colH}>Passeios</h3>
            <ul style={list}>{TOURS.map(t => <li key={t.name}><a className="ft-link" href="#passeios" style={link}>{t.name}</a></li>)}
              <li><a className="ft-link" href={wa('Olá, WmTur! Quero montar um passeio personalizado em Jeri.')} target="_blank" rel="noopener" style={link}>Personalizado</a></li>
            </ul>
          </nav>
          <nav style={col} aria-label="Translados">
            <h3 style={colH}>Translados</h3>
            <ul style={list}>{ROUTES.map(r => <li key={r.name}><a className="ft-link" href="#translados" style={link}>{r.name}</a></li>)}</ul>
          </nav>
          <div style={{ ...col, gridColumn: mobile ? '1 / -1' : undefined }}>
            <h3 style={colH}>Contato</h3>
            <ul style={list}>
              <li><a className="ft-link" href={wa('Olá, WmTur! Vim pelo site e quero tirar uma dúvida.')} target="_blank" rel="noopener" style={{ ...link, display: 'inline-flex', alignItems: 'center', gap: 8 }}><WaIcon size={16} /> {phone()}</a></li>
              <li><a className="ft-link" href={INSTAGRAM} target="_blank" rel="noopener" style={{ ...link, display: 'inline-flex', alignItems: 'center', gap: 8 }}><IgIcon /> @{igHandle()}</a></li>
              <li style={{ ...link, display: 'inline-flex', alignItems: 'center', gap: 8 }}><PinIcon /> Jericoacoara · Ceará</li>
            </ul>
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12, paddingTop: 22, fontSize: 13, color: 'rgba(255,253,246,.6)' }}>
          <span>© {new Date().getFullYear()} WM TUR · Passeios e translados em Jericoacoara, CE</span>
          <a className="ft-link" href={DEV_GITHUB} target="_blank" rel="noopener" style={{ color: 'rgba(255,253,246,.6)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" /></svg>
            Desenvolvido por {dev}
          </a>
        </div>
      </div>
    </footer>
  );
}
