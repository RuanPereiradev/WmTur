// Edite preços, paradas e rotas aqui.
// caminho das fotos (funciona no GitHub Pages e em domínio próprio)
export const A = import.meta.env.BASE_URL + 'assets/';
export const TEXTURA = A + 'textura-agua.webp';

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

// p = preço por veículo (comp = compartilhado, por pessoa)
export const ROUTES = [
  { name: 'Jeri ⇄ Aeroporto', img: A + 'transfer-aeroporto.webp', p: { sw4: 450, picape: 300, comp: 100 } },
  { name: 'Preá ⇄ Aeroporto', img: A + 'transfer-aeroporto.webp', p: { sw4: 300, picape: 200, comp: 100 } },
  { name: 'Jeri ⇄ Fortaleza', img: A + 'transfer-fortaleza.webp', p: { sw4: 1200, picape: 1000, comp: 250 } },
  { name: 'Jeri ⇄ Parnaíba', img: A + 'tour-oeste.webp', p: { sw4: 1000, picape: 900 } },
];

export const VEHICLES = [
  { k: 'sw4', label: 'SW4', sub: 'até 6 pessoas' },
  { k: 'picape', label: 'Picape', sub: 'até 4 pessoas' },
  { k: 'comp', label: 'Compartilhado', sub: 'por pessoa' },
];

export const MARQUEE = ['Lagoa do Paraíso', 'Buraco Azul', 'Duna do Funil', 'Árvore da Preguiça', 'Tatajuba', 'Mangue Seco', 'Laguna Beach'];

export const vehicleFor = (n) => n <= 4 ? 'Picape ou SW4' : n <= 6 ? 'Toyota SW4' : n <= 12 ? 'Jardineira' : 'Mais de um veículo';
