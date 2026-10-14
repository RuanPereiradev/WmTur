// Troque aqui os dados da empresa. Tudo no site lê deste arquivo.
export const WHATSAPP = '558881091772';           // só números, com DDI 55 + DDD
export const DEV_GITHUB = 'https://github.com/RuanPereiradev'; // crédito do desenvolvedor no rodapé

export const wa = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
export const brl = (v) => 'R$ ' + v.toLocaleString('pt-BR');
