import React from 'react';
import { wa } from '../config.js';
import { WaIcon } from './ui.jsx';

const pulse = { position: 'absolute', inset: 0, borderRadius: '50%', background: '#25d366', animation: 'wmPulse 1.8s ease-out infinite' };

export default function WhatsAppFloat({ mobile }) {
  if (mobile) return (
    <a href={wa('Olá, WmTur! Vim pelo site e quero reservar um passeio em Jeri.')} target="_blank" rel="noopener" style={{ position: 'fixed', left: 12, right: 12, bottom: 12, zIndex: 50, display: 'flex', alignItems: 'center', gap: 12, padding: '10px 10px 10px 18px', borderRadius: 999, background: '#1d2a2c', color: '#fffdf6', textDecoration: 'none', boxShadow: '0 12px 30px rgba(0,0,0,.3)' }}>
      <span style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
        <span style={{ fontWeight: 800, fontSize: 16 }}>Reservar pelo WhatsApp</span>
        <span style={{ fontSize: 13, color: '#ffc59e' }}>Online agora · resposta em minutos</span>
      </span>
      <span style={{ position: 'relative', width: 48, height: 48, flex: 'none', borderRadius: '50%', background: '#25d366', display: 'grid', placeItems: 'center' }}>
        <span style={pulse} />
        <WaIcon size={24} fill="#fff" style={{ position: 'relative' }} />
      </span>
    </a>
  );
  return (
    <a href={wa('Olá, WmTur! Vim pelo site e quero tirar uma dúvida.')} target="_blank" rel="noopener" aria-label="WhatsApp" style={{ position: 'fixed', right: 20, bottom: 20, zIndex: 50, display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
      <span style={{ background: '#fffdf6', color: '#1d2a2c', fontWeight: 700, fontSize: 14, padding: '10px 14px', borderRadius: 14, boxShadow: '0 8px 24px rgba(0,0,0,.18)', animation: 'wmFloat 3s ease-in-out infinite' }}>Online agora · responde rápido</span>
      <span style={{ position: 'relative', width: 64, height: 64, borderRadius: '50%', background: '#25d366', display: 'grid', placeItems: 'center', boxShadow: '0 10px 30px rgba(37,211,102,.5)' }}>
        <span style={pulse} />
        <WaIcon size={32} fill="#fff" style={{ position: 'relative' }} />
      </span>
    </a>
  );
}
