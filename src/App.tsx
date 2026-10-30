import { useState } from 'react'
import { perfil, links, textos } from './data/links.js'

const [primeiroNome, ...restoNome] = perfil.nome.split(' ')
const sobrenome = restoNome.join(' ')
const redesSociais = links.filter((link) => link.social !== false)

function Icon({ name, size = 22 }: { name: string; size?: number }) {
  const paths: Record<string, React.ReactNode> = {
    play: <><rect x="3" y="5" width="18" height="14" rx="4" /><path d="m10 9 5 3-5 3Z" /></>,
    youtube: <><rect x="3" y="5" width="18" height="14" rx="4" /><path d="m10 9 5 3-5 3Z" /></>,
    bag: <><path d="M5 7h14l1 14H4L5 7Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></>,
    chat: <><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l-2 2v-9A9 9 0 1 1 21 11.5Z" /><path d="M8 11h.01M12 11h.01M16 11h.01" /></>,
    cards: <><rect x="7" y="5" width="12" height="16" rx="2" /><path d="m6 17-3-1 3-14 11 2M11 10h4m-4 4h4" /></>,
    arrow: <path d="m9 5 7 7-7 7" />,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
    tiktok: <><path d="M14 3v12a5 5 0 1 1-4-5v4a2 2 0 1 0 1 2V3h3c0 4 3 5 6 5v3c-2 0-4-1-6-2" /></>,
    bolt: <path d="m13 2-8 12h6l-1 8 9-13h-6l1-7Z" />,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.play}</svg>
}

export default function App() {
  const [copied, setCopied] = useState(false)
  async function share() {
    try { await navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2200) } catch { setCopied(false) }
  }
  return (
    <div className="site-shell anniversary-theme">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <div className="background-card card-one" /><div className="background-card card-two" />
      <header className="topbar"><a href="#" className="wordmark"><span className="mini-ball" /> {textos.marca}<span className="wordmark-light">{textos.marcaDestaque}</span><span className="wordmark-dot">{textos.marcaPonto}</span></a><button className="share-button" onClick={share} aria-label={textos.compartilharAria}>{copied ? textos.linkCopiado : <><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 16V3m-5 5 5-5 5 5M5 14v6h14v-6" /></svg><span>{textos.compartilhar}</span></>}</button></header>
      <main>
        <section className="profile">
          <div className="avatar-wrap"><div className="avatar">{perfil.avatar ? <img src={perfil.avatar} alt={`${perfil.nome} (${perfil.usuario})`} className="h-full w-full object-cover" /> : <svg viewBox="0 0 120 120" aria-label={textos.avatarAria} role="img"><defs><linearGradient id="avatarBg" x2="1" y2="1"><stop stopColor="#21444c" /><stop offset="1" stopColor="#101c29" /></linearGradient></defs><rect width="120" height="120" fill="url(#avatarBg)" /><circle cx="60" cy="54" r="33" fill="#ffcd36" opacity=".12" /><path d="m26 120 7-27 18-11h19l19 11 8 27" fill="#e4e6df" /><path d="m47 85 13 14 14-14-6-9H53Z" fill="#d99f79" /><path d="M42 48v17c0 14 10 23 18 23s19-10 19-24V47Z" fill="#f1bf95" /><path d="M41 56 36 43l9-17 27-6 16 19-8 21-4-16-12 3-13-2-6 14Z" fill="#25303a" /><path d="m35 41 9-20 29-3 15 22-20-4Z" fill="#f1f2e8" /><path d="m35 41 27-8 30 9-6 6-26-7-23 5" fill="#df4549" /><path d="M53 61h2m13 0h2" stroke="#27343c" strokeWidth="3" strokeLinecap="round" /><path d="m56 73 8 1" stroke="#b8795f" strokeWidth="2" strokeLinecap="round" /><path d="m45 90 15 14 16-14 5 30H39Z" fill="#202f3a" /><path d="M32 98 24 120m64-22 10 22" stroke="#c9cfc8" strokeWidth="5" /></svg>}</div><span className="avatar-badge"><Icon name="bolt" size={15} /></span></div>
          <div className="trainer-label"><span /> {textos.sobretitulo}</div>
          <h1>{primeiroNome} <span>{sobrenome}</span><svg viewBox="0 0 24 24" width="20" height="20" aria-label={textos.verificadoAria}><path fill="#00b7e8" d="m12 1 3 2 4 1 1 4 3 4-3 3-1 5-4 1-3 2-3-2-4-1-1-5-3-3 3-4 1-4 4-1Z" /><path d="m7 12 3 3 7-7" fill="none" stroke="#0b1320" strokeWidth="2" /></svg></h1>
          <p className="bio">{perfil.bio}</p>
          <p className="tagline">{perfil.frase}</p>
          <nav className="socials" aria-label={textos.redesSociaisAria}>{redesSociais.map((rede) => <a key={rede.id} href={rede.url} target="_blank" rel="noopener noreferrer" aria-label={rede.titulo}><Icon name={rede.icone} size={19} /><span>{rede.titulo}</span></a>)}</nav>
        </section>
        <section className="links-section" aria-label={textos.linksAria}><div className="section-label"><span>{textos.linksTitulo}</span><span className="little-line" /><span className="tiny-spark">✦</span></div>
          <div className="link-stack">{links.map((link, i) => <a className={`link-card ${link.cor}`} href={link.url} key={link.id} target="_blank" rel="noopener noreferrer"><div className="link-icon"><Icon name={link.icone} size={25} /></div><div className="link-content"><div className="link-eyebrow">{i === 0 && <span className="live-dot" />}{link.rotulo}</div><h2>{link.titulo}</h2><p>{link.descricao}</p></div><div className="chevron"><Icon name="arrow" size={17} /></div></a>)}</div>
        </section>
        <div className="trainer-note"><span className="mini-ball" /><p>{textos.notaLinha1}<br /><span>{textos.notaLinha2}</span></p></div>
        <footer><div className="footer-rule" /><p>© {new Date().getFullYear()} {perfil.nome} <span>·</span> {textos.rodape}</p><div className="footer-tag">{textos.rodapeTag}</div></footer>
      </main>
    </div>
  )
}
