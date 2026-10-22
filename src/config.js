// Troque aqui os dados da empresa. Tudo no site lê deste arquivo.
export const WHATSAPP = '558881091772';           // só números, com DDI 55 + DDD
export const INSTAGRAM = 'https://www.instagram.com/wmturjeri';
export const DEV_GITHUB = 'https://github.com/RuanPereiradev'; // crédito do desenvolvedor no rodapé

export const wa = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
export const phone = () => WHATSAPP.replace(/^55(\d{2})(\d+)(\d{4})$/, '($1) $2-$3'); // 558881091772 -> (88) 8109-1772
export const igHandle = () => INSTAGRAM.replace(/\/+$/, '').split('/').pop();
