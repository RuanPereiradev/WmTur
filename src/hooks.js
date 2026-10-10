import { useEffect, useState } from 'react';

// true quando a tela tem até 900px (celular e tablet)
export function useMobile(query = '(max-width: 900px)') {
  const [m, setM] = useState(() => typeof window !== 'undefined' && matchMedia(query).matches);
  useEffect(() => {
    const mq = matchMedia(query); const on = () => setM(mq.matches);
    mq.addEventListener('change', on); on();
    return () => mq.removeEventListener('change', on);
  }, [query]);
  return m;
}

// id da seção que está no meio da tela (para marcar o menu)
export function useActiveSection(ids) {
  const [sec, setSec] = useState('');
  useEffect(() => {
    const io = new IntersectionObserver((ents) => ents.forEach(e => e.isIntersecting && setSec(e.target.id)), { rootMargin: '-45% 0px -50% 0px' });
    ids.forEach(id => { const el = document.getElementById(id); el && io.observe(el); });
    return () => io.disconnect();
  }, [ids.join(',')]);
  return sec;
}

export function useScrolled(px = 24) {
  const [s, setS] = useState(false);
  useEffect(() => { const on = () => setS(scrollY > px); addEventListener('scroll', on, { passive: true }); on(); return () => removeEventListener('scroll', on); }, [px]);
  return s;
}

// rola até a âncora da URL (#passeios etc.) depois do carregamento
export function jumpToHash() {
  const id = decodeURIComponent(location.hash.slice(1)); if (!id) return;
  const el = document.getElementById(id); if (!el) return;
  const head = document.querySelector('.site-header');
  window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - (head ? head.offsetHeight : 0) });
}
