// Conteúdo do PDF da WmTur. Edite preços, paradas e rotas aqui.
// caminho das fotos e vídeos (funciona no GitHub Pages e em domínio próprio)
const A = import.meta.env.BASE_URL + 'assets/';
export const TOURS = [
  { name: 'Passeio Leste', price: 500, dur: '4 a 6 horas', img: A + 'tour-leste.webp',
    places: ['Árvore da Preguiça', 'Preá', 'Buraco Azul', 'Laguna Beach', 'Lagoa do Paraíso', 'Lagoa entre as Dunas'] },
  { name: 'Extremo Leste', price: 500, dur: '4 a 6 horas', img: A + 'tour-extremo-leste.webp',
    places: ['Preá', 'Barrinha', 'Off-road nas dunas', 'Restaurante Komaki', 'Beira d’Água ou Munzuá'] },
  { name: 'Passeio Oeste', price: 600, dur: '6 horas', img: A + 'tour-oeste.webp',
    places: ['Cavalo Marinho', 'Travessia de balsa', 'Mangue Seco Guriú', 'Off-road nas dunas', 'Tobogã e skibunda', 'Laguna Beach'] },
  { name: 'Extremo Oeste', price: 700, dur: '6 horas', img: A + 'tour-extremo-oeste.webp',
    places: ['Nova Tatajuba', 'Dunas petrificadas', 'Duna do Funil com skibunda', 'Laguinho da Torta', 'Laguna Beach'] },
];

// Fotos que passam como "stories" na primeira tela
export const REEL = [
  { img: A + 'tour-extremo-oeste.webp', label: 'Jardineira ou SW4 · 6 horas', tour: 'Extremo Oeste', priceLabel: 'Nova Tatajuba, dunas petrificadas e Duna do Funil · por carro', price: 'R$ 700' },
  { img: A + 'tour-leste.webp', label: 'Jardineira ou SW4 · 4 a 6 horas', tour: 'Passeio Leste', priceLabel: 'Árvore da Preguiça, Buraco Azul e Lagoa do Paraíso · por carro', price: 'R$ 500' },
  { img: A + 'tour-oeste.webp', label: 'Jardineira ou SW4 · 6 horas', tour: 'Passeio Oeste', priceLabel: 'Balsa, Mangue Seco Guriú, tobogã e skibunda · por carro', price: 'R$ 600' },
  { img: A + 'tour-extremo-leste.webp', label: 'Jardineira ou SW4 · 4 a 6 horas', tour: 'Extremo Leste', priceLabel: 'Preá, Barrinha e off-road nas dunas · por carro', price: 'R$ 500' },
];

export const ROUTES = [
  { name: 'Jeri ⇄ Aeroporto', sw4: 450, picape: 300, comp: 100 },
  { name: 'Preá ⇄ Aeroporto', sw4: 300, picape: 200, comp: 100 },
  { name: 'Jeri ⇄ Fortaleza', sw4: 1200, picape: 1000, comp: 250 },
  { name: 'Jeri ⇄ Parnaíba', sw4: 1000, picape: 900, comp: null },
];

export const FLEET = [
  { n: 4, name: 'Picape', text: 'Até 4 pessoas. Para casal ou família pequena, nos translados.' },
  { n: 6, name: 'Toyota SW4', text: 'Até 6 pessoas. Fechada e confortável, nos passeios e translados.' },
  { n: 12, name: 'Jardineira', text: 'Até 12 pessoas. Aberta, vento no rosto, a cara de Jeri.', dark: true },
];

// Galeria estilo feed. v = vídeo, i = imagem
export const GALLERY = [
  { v: A + 'wm-video-1.mp4', p: A + 'wm-video-1-capa.webp', caption: 'Dunas de Jericoacoara' }, { i: A + 'wm-foto-1.webp', caption: 'Pôr do sol na praia' },
  { v: A + 'wm-video-2.mp4', p: A + 'wm-video-2-capa.webp', caption: 'A caminho' }, { i: A + 'wm-foto-3.webp', caption: 'Moradores locais' },
  { v: A + 'wm-video-3.mp4', p: A + 'wm-video-3-capa.webp', caption: 'Beira-mar' }, { i: A + 'wm-foto-2.webp', caption: 'Fim de tarde' },
  { v: A + 'wm-video-4.mp4', p: A + 'wm-video-4-capa.webp', caption: 'Balsa do Rio Guriú' },
  { i: A + 'tour-leste.webp', caption: 'Passeio Leste' }, { i: A + 'tour-extremo-leste.webp', caption: 'Extremo Leste' },
  { i: A + 'tour-oeste.webp', caption: 'Passeio Oeste' }, { i: A + 'tour-extremo-oeste.webp', caption: 'Extremo Oeste' },
  { i: A + 'transfer-aeroporto.webp', caption: 'Translado aeroporto' }, { i: A + 'transfer-fortaleza.webp', caption: 'Translado Fortaleza' },
];
