import React from 'react';
import { wa } from '../config.js';

// Qualquer link que leva ao WhatsApp usa esta classe:
// fundo laranja que vira verde da esquerda para a direita no hover.
export default function WaLink({ msg, className = '', children, ...rest }) {
  return <a href={wa(msg)} target="_blank" rel="noopener" className={'wa-sweep ' + className} {...rest}>{children}</a>;
}
