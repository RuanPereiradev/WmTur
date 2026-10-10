import React from 'react';
import WaLink from './WaLink.jsx';
import { WaIcon } from './Header.jsx';
import { TOURS, ROUTES } from '../data.js';
import { INSTAGRAM, DEV_GITHUB, wa, phone, igHandle } from '../config.js';

const NAV = [['#passeios', 'Passeios'], ['#translados', 'Translados'], ['#frota', 'Frota'], ['#galeria', 'Galeria']];

export default function Footer() {
  const dev = DEV_GITHUB.replace(/\/+$/, '').split('/').pop();
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="ft-top">
          <div className="ft-brand">
            <span className="logo">WM TUR<span className="dot">.</span></span>
            <p>Passeios de Jardineira ou SW4 e translados em Jericoacoara. Há mais de 12 anos em Jeri, com Wilamar Cunha.</p>
            <WaLink msg="Olá, WmTur! Vim pelo site e quero reservar um passeio em Jeri." className="btn"><WaIcon /> Reservar no WhatsApp</WaLink>
          </div>
          <div className="ft-col">
            <h3>Passeios</h3>
            <ul>{TOURS.map(t => <li key={t.name}><a href="#passeios">{t.name}</a></li>)}</ul>
          </div>
          <div className="ft-col">
            <h3>Translados</h3>
            <ul>{ROUTES.map(r => <li key={r.name}><a href="#translados">{r.name}</a></li>)}</ul>
          </div>
          <div className="ft-col">
            <h3>Contato</h3>
            <ul>
              <li><a href={wa('Olá, WmTur! Vim pelo site e quero tirar uma dúvida.')} target="_blank" rel="noopener">WhatsApp {phone()}</a></li>
              <li><a href={INSTAGRAM} target="_blank" rel="noopener">@{igHandle()}</a></li>
              <li>Jericoacoara · Ceará</li>
            </ul>
          </div>
        </div>
        <div className="ft-bottom">
          <span>© {new Date().getFullYear()} WmTur · Passeios e translados em Jericoacoara</span>
          <a className="ft-dev" href={DEV_GITHUB} target="_blank" rel="noopener" aria-label={'Desenvolvido por ' + dev + ' (GitHub)'}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" /></svg>
            Desenvolvido por {dev}
          </a>
        </div>
      </div>
    </footer>
  );
}
