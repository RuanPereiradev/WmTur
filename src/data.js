// Conteúdo do PDF da WmTur. Edite preços, paradas e rotas aqui.
export const TOURS = [
  { name: 'Passeio Leste', price: 500, dur: '4 a 6 horas', img: '/assets/tour-leste.png',
    places: ['Árvore da Preguiça', 'Preá', 'Buraco Azul', 'Laguna Beach', 'Lagoa do Paraíso', 'Lagoa entre as Dunas'] },
  { name: 'Extremo Leste', price: 500, dur: '4 a 6 horas', img: '/assets/tour-extremo-leste.png',
    places: ['Preá', 'Barrinha', 'Off-road nas dunas', 'Restaurante Komaki', 'Beira d’Água ou Munzuá'] },
  { name: 'Passeio Oeste', price: 600, dur: '6 horas', img: '/assets/tour-oeste.png',
    places: ['Cavalo Marinho', 'Travessia de balsa', 'Mangue Seco Guriú', 'Off-road nas dunas', 'Tobogã e skibunda', 'Laguna Beach'] },
  { name: 'Extremo Oeste', price: 700, dur: '6 horas', img: '/assets/tour-extremo-oeste.png',
    places: ['Nova Tatajuba', 'Dunas petrificadas', 'Duna do Funil com skibunda', 'Laguinho da Torta', 'Laguna Beach'] },
];

// Fotos que passam como "stories" na primeira tela
export const REEL = [
  { img: '/assets/tour-extremo-oeste.png', label: 'Jardineira ou SW4 · 6 horas', tour: 'Extremo Oeste', priceLabel: 'Nova Tatajuba, dunas petrificadas e Duna do Funil · por carro', price: 'R$ 700' },
  { img: '/assets/tour-leste.png', label: 'Jardineira ou SW4 · 4 a 6 horas', tour: 'Passeio Leste', priceLabel: 'Árvore da Preguiça, Buraco Azul e Lagoa do Paraíso · por carro', price: 'R$ 500' },
  { img: '/assets/tour-oeste.png', label: 'Jardineira ou SW4 · 6 horas', tour: 'Passeio Oeste', priceLabel: 'Balsa, Mangue Seco Guriú, tobogã e skibunda · por carro', price: 'R$ 600' },
  { img: '/assets/tour-extremo-leste.png', label: 'Jardineira ou SW4 · 4 a 6 horas', tour: 'Extremo Leste', priceLabel: 'Preá, Barrinha e off-road nas dunas · por carro', price: 'R$ 500' },
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
  { v: '/assets/wm-video-1.mp4', caption: 'Dunas de Jericoacoara' }, { i: '/assets/wm-foto-1.jpeg', caption: 'Pôr do sol na praia' },
  { v: '/assets/wm-video-2.mp4', caption: 'A caminho' }, { i: '/assets/wm-foto-3.jpeg', caption: 'Moradores locais' },
  { v: '/assets/wm-video-3.mp4', caption: 'Beira-mar' }, { i: '/assets/wm-foto-2.jpeg', caption: 'Fim de tarde' },
  { v: '/assets/wm-video-4.mp4', caption: 'Balsa do Rio Guriú' },
  { i: '/assets/tour-leste.png', caption: 'Passeio Leste' }, { i: '/assets/tour-extremo-leste.png', caption: 'Extremo Leste' },
  { i: '/assets/tour-oeste.png', caption: 'Passeio Oeste' }, { i: '/assets/tour-extremo-oeste.png', caption: 'Extremo Oeste' },
  { i: '/assets/transfer-aeroporto.png', caption: 'Translado aeroporto' }, { i: '/assets/transfer-fortaleza.png', caption: 'Translado Fortaleza' },
];
