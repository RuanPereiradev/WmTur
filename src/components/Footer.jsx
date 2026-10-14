import React from 'react';
import { DEV_GITHUB } from '../config.js';

export default function Footer() {
  const dev = DEV_GITHUB.replace(/\/+$/, '').split('/').pop();
  return (
    <footer style={{ background: '#0d4f55', color: 'rgba(255,253,246,.8)', fontSize: 14 }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '24px clamp(16px,4vw,40px) 100px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <span>WM TUR · Passeios e translados · Jericoacoara, CE</span>
        <span style={{ fontFamily: 'Caveat, cursive', fontSize: 22, color: '#ffc59e' }}>#vemprajeri</span>
        <a href={DEV_GITHUB} target="_blank" rel="noopener" style={{ flexBasis: '100%', color: 'rgba(255,253,246,.55)', fontSize: 13, textDecoration: 'none' }}>Desenvolvido por {dev}</a>
      </div>
    </footer>
  );
}
