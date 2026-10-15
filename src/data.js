// Edite preços, paradas e rotas aqui.
// caminho das fotos (funciona no GitHub Pages e em domínio próprio)
export const A = import.meta.env.BASE_URL + 'assets/';
export const TEXTURA = A + 'textura-agua.webp';

export const TOURS = [
  { name: 'Passeio Leste', dur: '4 a 6 horas', img: A + 'tour-leste.webp',
    places: ['Árvore da Preguiça', 'Preá', 'Buraco Azul', 'Laguna Beach', 'Lagoa do Paraíso', 'Lagoa entre as Dunas'] },
  { name: 'Extremo Leste', dur: '4 a 6 horas', img: A + 'tour-extremo-leste.webp',
    places: ['Preá', 'Barrinha', 'Off-road nas dunas', 'Restaurante Komaki', 'Beira d’Água ou Munzuá'] },
  { name: 'Passeio Oeste', dur: '6 horas', img: A + 'tour-oeste.webp',
    places: ['Cavalo Marinho', 'Travessia de balsa', 'Mangue Seco Guriú', 'Off-road nas dunas', 'Tobogã e skibunda', 'Laguna Beach'] },
  { name: 'Extremo Oeste', dur: '6 horas', img: A + 'tour-extremo-oeste.webp',
    places: ['Nova Tatajuba', 'Dunas petrificadas', 'Duna do Funil com skibunda', 'Laguinho da Torta', 'Laguna Beach'] },
];

// veículos disponíveis em cada rota (comp = compartilhado)
export const ROUTES = [
  { name: 'Jeri ⇄ Aeroporto', img: A + 'transfer-aeroporto.webp', vehs: ['sw4', 'picape', 'comp'] },
  { name: 'Preá ⇄ Aeroporto', img: A + 'transfer-aeroporto.webp', vehs: ['sw4', 'picape', 'comp'] },
  { name: 'Jeri ⇄ Fortaleza', img: A + 'transfer-fortaleza.webp', vehs: ['sw4', 'picape', 'comp'] },
  { name: 'Jeri ⇄ Parnaíba', img: A + 'tour-oeste.webp', vehs: ['sw4', 'picape'] },
];

export const VEHICLES = [
  { k: 'sw4', label: 'SW4', sub: 'até 6 pessoas' },
  { k: 'picape', label: 'Picape', sub: 'até 4 pessoas' },
  { k: 'comp', label: 'Compartilhado', sub: 'divide com outros' },
];

export const MARQUEE = ['Lagoa do Paraíso', 'Buraco Azul', 'Duna do Funil', 'Árvore da Preguiça', 'Tatajuba', 'Mangue Seco', 'Laguna Beach'];

export const vehicleFor = (n) => n <= 4 ? 'Picape ou SW4' : n <= 6 ? 'Toyota SW4' : n <= 12 ? 'Jardineira' : 'Mais de um veículo';
