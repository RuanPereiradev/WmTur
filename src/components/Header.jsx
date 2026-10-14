import React, { useState } from 'react';
import { WaIcon, waBtn } from './ui.jsx';

const NAV = [['#passeios', 'Passeios'], ['#translados', 'Translados'], ['#frota', 'Frota']];

export default function Header({ mobile, waGeneral }) {
  const [menu, setMenu] = useState(false);
  const close = () => setMenu(false);
  if (mobile) return (
    <header style={{ position: 'sticky', top: 0, zIndex: 30, background: '#0b454b', color: '#fffdf6', borderBottom: '1px solid rgba(255,253,246,.12)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px 10px 18px', minHeight: 64 }}>
        <a href="#topo" onClick={close} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', marginRight: 'auto', lineHeight: 1 }}>
          <span style={{ fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em', color: '#fffdf6' }}>WM TUR</span>
          <span style={{ fontFamily: 'Caveat, cursive', fontSize: 17, color: '#f2894a', marginTop: 2 }}>#vemprajeri</span>
        </a>
        <button type="button" onClick={() => setMenu(m => !m)} aria-label="Menu" aria-expanded={menu} style={{ font: 'inherit', cursor: 'pointer', width: 44, height: 44, borderRadius: '50%', border: '1.5px solid rgba(255,253,246,.35)', background: 'transparent', color: '#fffdf6', display: 'grid', placeItems: 'center' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d={menu ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h10'} /></svg>
        </button>
        <a href={waGeneral} target="_blank" rel="noopener" aria-label="Chamar no WhatsApp" style={{ width: 44, height: 44, borderRadius: '50%', background: '#25d366', color: '#0b3b1e', display: 'grid', placeItems: 'center', textDecoration: 'none' }}>
          <WaIcon size={22} />
        </a>
      </div>
      {menu && (
        <nav style={{ display: 'flex', flexDirection: 'column', padding: '4px 18px 18px', borderTop: '1px solid rgba(255,253,246,.12)' }}>
          {NAV.map(([href, label], i) => (
            <a key={href} href={href} onClick={close} style={{ textDecoration: 'none', color: '#fffdf6', fontFamily: "'DM Serif Display'", fontStyle: 'italic', fontSize: 30, padding: '12px 0', borderBottom: i < NAV.length - 1 ? '1px solid rgba(255,253,246,.12)' : 0 }}>{label}</a>
          ))}
        </nav>
      )}
    </header>
  );
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 30, background: 'rgba(255,253,246,.92)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(15,111,119,.15)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '12px clamp(16px,4vw,40px)', display: 'flex', alignItems: 'center', gap: 24 }}>
        <a href="#topo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: 8, marginRight: 'auto' }}>
          <span style={{ fontWeight: 800, fontSize: 26, letterSpacing: '-0.02em', color: '#0f6f77' }}>WM TUR</span>
          <span style={{ fontFamily: 'Caveat, cursive', fontSize: 20, color: '#e8743a' }}>#vemprajeri</span>
        </a>
        <nav style={{ display: 'flex', gap: 22, fontWeight: 600, fontSize: 15 }}>
          {NAV.map(([href, label]) => <a key={href} href={href} style={{ textDecoration: 'none', color: '#1d2a2c' }}>{label}</a>)}
        </nav>
        <a className="wa-btn" href={waGeneral} target="_blank" rel="noopener" style={{ ...waBtn, gap: 8, padding: '11px 18px', fontSize: 15, whiteSpace: 'nowrap', boxShadow: '0 6px 18px rgba(37,211,102,.35)' }}>
          <WaIcon /> Chamar no WhatsApp
        </a>
      </div>
    </header>
  );
}
