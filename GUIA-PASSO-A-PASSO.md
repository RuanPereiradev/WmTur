# Guia passo a passo · Recriando a landing da WmTur com React e JavaScript

Este guia explica como a landing foi montada e como reproduzir cada parte do zero. Ele segue a ordem em que o visitante vê a página.

---

## 0. O que você vai precisar

| Ferramenta | Para quê |
|---|---|
| **Node.js 18+** | rodar o projeto (baixe em nodejs.org) |
| **VS Code** (ou outro editor) | editar os arquivos |
| **Vite** | cria e roda o projeto React rápido (já está no `package.json`) |
| **React 18** | monta a página em componentes |

Nada de bibliotecas extras: as animações são CSS puro e os ícones são SVG escritos à mão.

---

## 1. Criar o projeto

Se for começar do zero (em vez de usar esta pasta):

```bash
npm create vite@latest wmtur-landing -- --template react
cd wmtur-landing
npm install
npm run dev
```

Depois apague o conteúdo de `src/` e crie a estrutura abaixo.

```
wmtur-landing/
├─ index.html              ← título, descrição e a fonte Archivo
├─ public/assets/          ← fotos (.png/.jpeg) e vídeos (.mp4)
└─ src/
   ├─ main.jsx             ← liga o React na página
   ├─ App.jsx              ← junta todas as seções na ordem
   ├─ config.js            ← WhatsApp, Instagram, tempos
   ├─ data.js              ← passeios, preços, rotas, galeria
   ├─ hooks.js             ← detectar celular, seção ativa, scroll
   ├─ styles.css           ← cores, layout e animações
   └─ components/
      ├─ Loader.jsx        ← tela de carregamento (carro na praia)
      ├─ Car.jsx           ← o 4x4 em SVG + versão mini
      ├─ Header.jsx        ← topo fixo com menu
      ├─ Hero.jsx          ← primeira tela
      ├─ Stats.jsx         ← faixa de números
      ├─ Passeios.jsx      ← cards + painel de paradas
      ├─ Translados.jsx    ← tabela de rotas
      ├─ Frota.jsx         ← Picape, SW4, Jardineira
      ├─ Galeria.jsx       ← perfil + grade estilo feed
      ├─ Lightbox.jsx      ← foto/vídeo aberto em tela cheia
      ├─ WaLink.jsx        ← link de WhatsApp com a animação verde
      ├─ SectionHead.jsx   ← título padrão das seções
      └─ WhatsAppFloat.jsx ← botão redondo flutuante
```

---

## 2. Visual (o "sistema")

Tudo está no topo de `src/styles.css`, em variáveis CSS:

- **Fundo** `#f3f2f2` (quase branco), **texto** `#201e1d` (quase preto) e **destaque** `#ec3013` (laranja-vermelho).
- Tons claros do laranja (`--color-accent-100` a `300`) para fundos suaves, e escuros (`600`, `700`) para hover e textos.
- **Fonte única:** Archivo (títulos em peso 800, textos em 400–700).
- **Regras do estilo:** cantos retos (sem arredondar), linhas fortes de 2px separando tudo (`--rule`), texto e botões alinhados à esquerda.
- **WhatsApp:** verdes `#128c4a` e `#1fae5b` só no hover, e `#25d366` no botão flutuante.

> Para trocar a cor da marca, mude só `--color-accent` e os tons próximos. O site inteiro acompanha.

---

## 3. Dados num lugar só

`src/config.js` guarda o número e a função que monta o link:

```js
export const WHATSAPP = '558896449185';
export const wa = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
```

Cada botão passa uma mensagem diferente, então a conversa já chega dizendo o passeio, o carro ou a rota.

`src/data.js` tem os passeios, rotas, frota e galeria tirados do PDF. Para mudar um preço, edite só ali.

---

## 4. Tela de carregamento (`Loader.jsx` + `Car.jsx`)

**Ideia:** um contador vai de 0 a 100% em ~1,1 s enquanto o 4x4 anda na beira da praia. Depois o carro sai pela direita e o painel sobe, revelando o site.

1. **Contador.** Um `requestAnimationFrame` calcula o progresso pelo tempo e atualiza o estado `p`:
   ```js
   const e = Math.min(1, (now - t0) / dur);
   setP(Math.round((1 - Math.pow(1 - e, 1.8)) * 100)); // começa rápido, desacelera
   ```
2. **Fases.** O `App` controla `phase`: `load → exit → done → off`.
   - `exit`: o carro recebe `.is-gone` (`translateX(115vw)`) e sai.
   - `done`: o painel recebe `.is-up` (`translateY(-100%)`) e sobe.
   - `off`: o loader é removido e o `body` volta a rolar.
3. **O carro.** São dois SVGs empilhados com o mesmo `viewBox`: a **carroceria** (quica com `@keyframes bounce`) e as **rodas** (giram com `spin`). O conjunto balança com `tilt`.
   > O truque das rodas girando no lugar: `transform-box: fill-box; transform-origin: center;`.
4. **Cenário de praia.**
   - Sol (círculo laranja) e mar com degradê azul.
   - Ondas, coqueiros e marcas no chão são faixas com **200% de largura** que andam `translateX(-50%)` em loop. Como o desenho se repete duas vezes, a emenda some.
   - Poeira: bolinhas com `--dx`/`--dy` (variáveis CSS) usadas dentro do `@keyframes dust`, então cada partícula voa para um lado.
5. **Acessibilidade.** `@media (prefers-reduced-motion)` desliga tudo para quem pediu menos movimento.

---

## 5. Topo (`Header.jsx`)

- `position: sticky` deixa o topo fixo ao rolar. Ele fica mais baixo (`.is-scrolled`) depois de 24px.
- **Logo** = `<MiniCar />` (o mesmo carro, menor, com chão andando) + "WM TUR.".
- **Menu com a seção atual marcada:** `useActiveSection` usa um `IntersectionObserver` com `rootMargin: '-45% 0px -50% 0px'`. Só conta a seção que está no meio da tela.
- No celular (`useMobile`, até 900px), o menu some e o botão vira "Reservar".

---

## 6. A animação laranja → verde do WhatsApp (`WaLink.jsx`)

Degradê não anima direto em CSS, então o truque é **mover um fundo maior que o botão**:

```css
.wa-sweep {
  background-image: linear-gradient(90deg, #128c4a 0%, #1fae5b 40%, var(--color-accent) 60%, var(--color-accent) 100%);
  background-size: 260% 100%;      /* o fundo é 2,6x maior */
  background-position: 100% 0;     /* mostra só a parte laranja */
  transition: background-position .32s ease-out;
}
.wa-sweep:hover { background-position: 0 0; }   /* desliza até a parte verde */
```

Todo link que vai para o WhatsApp usa `<WaLink msg="...">`, então o efeito fica igual no site inteiro. Em fundos claros, `.wa-sweep--light` troca o laranja por transparente.

---

## 7. Primeira tela (`Hero.jsx`)

- **Título entrando linha por linha:** cada linha é um `<span>` com `overflow: hidden`, e o texto de dentro começa em `translateY(105%)`. Quando o loader termina, `.is-in` zera o deslocamento, com atrasos `.d1`, `.d2`, `.d3`.
- **Fotos estilo stories:** um `setInterval` troca a foto a cada 5 s, com zoom lento (`@keyframes zoom`) e barrinhas que enchem (`@keyframes fill`). Ao tocar numa barrinha, a foto troca e o tempo reinicia (`run`).
- Embaixo da foto, uma faixa com preço e "Reservar →" leva o passeio daquela foto para o WhatsApp.

---

## 8. Passeios, translados e frota

- **Passeios:** `useState` guarda o passeio (`t`) e o carro (`veh`) escolhidos. O painel de baixo mostra as paradas de `TOURS[t]`, e o botão monta a mensagem com o passeio e o carro.
- **Translados:** uma `<table>` comum dentro de `.table-scroll` (`overflow-x: auto`), para rolar para o lado no celular.
- **Frota:** três células numa grade com as linhas de 2px.

---

## 9. Galeria estilo feed (`Galeria.jsx` + `Lightbox.jsx`)

1. **Perfil:** avatar (o mini 4x4 num anel laranja), nome, botões Seguir/Mensagem, números e bio. No celular, uma estrutura própria (`.ig-m`) organiza tudo de cima para baixo.
2. **Destaques:** bolinhas que levam a cada parte da página.
3. **Abas** Publicações / Vídeos / Fotos: filtram a lista com `useMemo`.
4. **Grade 3 colunas** com `gap: 3px` e quadros 3:4.
   - Os vídeos usam `<AutoVideo>`, que só toca (mudo) quando o quadro aparece na tela, com um `IntersectionObserver`. Isso economiza bateria e dados no celular.
5. **Lightbox:** abre como uma publicação, com coração para curtir (ou dois cliques na foto), "Reservar →" e as setas. Fecha com Esc, com o ✕ ou clicando fora.

---

## 10. Celular

Tudo que muda está no bloco `@media (max-width: 900px)` do CSS:

- As grades viram 1 ou 2 colunas.
- O painel de passeios fica um embaixo do outro.
- O lightbox ocupa a tela toda.

Teste no navegador com F12 → ícone de celular (iPhone 12/13 = 390px).

---

## 11. Publicar

```bash
npm run build
```

A pasta `dist/` é o site pronto. Opções grátis:

- **Vercel:** `npx vercel` dentro da pasta, ou conecte o GitHub em vercel.com.
- **Netlify:** arraste a pasta `dist/` em app.netlify.com/drop.

**Dica de velocidade:** os vídeos do WhatsApp são pesados. Antes de publicar, comprima em handbrake.fr (720p, H.264) ou converta para `.webm`.

---

## 12. Checklist antes de publicar

- [ ] Número real em `WHATSAPP` (`src/config.js`)
- [ ] Perfil real em `INSTAGRAM`
- [ ] Preços conferidos em `src/data.js`
- [ ] Fotos em boa resolução no lugar das tiradas do PDF (mesmo nome em `public/assets/`)
- [ ] Vídeos comprimidos
- [ ] Testado no celular de verdade (abrir o link do WhatsApp num Android e num iPhone)
