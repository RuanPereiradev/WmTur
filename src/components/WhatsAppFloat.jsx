import React from 'react';
import { WaIcon } from './Header.jsx';
import { wa } from '../config.js';

export default function WhatsAppFloat() {
  return (
    <a className="wa-float" href={wa('Olá, WmTur! Vim pelo site e quero tirar uma dúvida.')} target="_blank" rel="noopener" aria-label="WhatsApp">
      <span className="pulse" /><WaIcon size={30} color="#fff" />
    </a>
  );
}
