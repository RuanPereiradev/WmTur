// Troque aqui os dados da empresa. Tudo no site lê deste arquivo.
export const WHATSAPP = '558896449185';           // só números, com DDI 55 + DDD
export const INSTAGRAM = 'https://instagram.com/wmtur';
export const LOADER_SECONDS = 1.1;                // duração do carregamento
export const REEL_MS = 5000;                      // tempo de cada foto na abertura
export const DEV_GITHUB = 'https://github.com/RuanPereiradev'; // crédito do desenvolvedor no rodapé

export const wa = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
export const brl = (v) => 'R$ ' + v.toLocaleString('pt-BR');
export const phone = () => WHATSAPP.replace(/^55(\d{2})(\d+)(\d{4})$/, '($1) $2-$3'); // 558896449185 -> (88) 9644-9185
export const igHandle = () => INSTAGRAM.replace(/\/+$/, '').split('/').pop();
