import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { 
  Globe, 
  Languages, 
  Mic, 
  Sparkles, 
  MessageSquare, 
  BookOpen, 
  Users, 
  Check, 
  ArrowRight, 
  Play, 
  Menu, 
  X,
  FileText,
  Headphones,
  Code2,
  Smartphone,
  LayoutTemplate,
  CloudCog
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&')
}

function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'newsletter', email, 'bot-field': '' }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-3 text-sm" style={{ color: '#86EFAC' }}>
        <span className="flex items-center justify-center w-6 h-6 rounded-full" style={{ background: 'rgba(134,239,172,0.15)' }}>
          <Check size={14} />
        </span>
        <span>Merci — nous vous contacterons très vite.</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <input type="hidden" name="form-name" value="newsletter" />
      <input type="hidden" name="bot-field" />
      <input
        type="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="votre@email.com"
        required
        className="newsletter-input flex-1"
        disabled={status === 'loading'}
      />
      <button
        type="submit"
        className="btn-primary whitespace-nowrap"
        disabled={status === 'loading'}
        style={{ opacity: status === 'loading' ? 0.7 : 1 }}
      >
        {status === 'loading' ? 'Inscription…' : 'S’abonner'}
      </button>
      {status === 'error' && (
        <p className="text-xs mt-1 w-full" style={{ color: '#FCA5A5' }}>
          Une erreur s’est produite — veuillez réessayer.
        </p>
      )}
    </form>
  )
}

function AppMockup() {
  return (
    <div
      className="glow-border rounded-2xl overflow-hidden w-full"
      style={{
        background: 'var(--navy-card)',
        maxWidth: '840px',
        margin: '0 auto',
      }}
    >
      {/* Mockup header bar */}
      <div
        className="flex items-center gap-2 px-5 py-3 border-b"
        style={{ borderColor: 'rgba(99,102,241,0.12)', background: 'rgba(99,102,241,0.05)' }}
      >
        <div className="flex gap-1.5">
          {['#FF5F57', '#FEBC2E', '#28C840'].map(c => (
            <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <div
          className="flex-1 mx-4 h-6 rounded-md flex items-center px-3 text-xs"
          style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)' }}
        >
          studio.hamglobalwords.com/ecosystem
        </div>
      </div>

      {/* Mockup body : split linguistique + dev */}
      <div className="flex flex-col sm:flex-row" style={{ minHeight: '360px' }}>
        {/* Left : linguistic projects */}
        <div className="flex-1 p-5 border-r" style={{ borderColor: 'rgba(99,102,241,0.1)' }}>
          <div className="text-xs font-semibold mb-3" style={{ color: 'var(--indigo-light)' }}>PROJETS LINGUISTIQUES</div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center"><Languages size={12} className="text-indigo-300"/></div>
              <span className="text-xs" style={{ color: 'var(--cream)' }}>Annotation IA – Songhaï</span>
              <span className="text-xs ml-auto text-green-400">78%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center"><Mic size={12} className="text-indigo-300"/></div>
              <span className="text-xs" style={{ color: 'var(--cream)' }}>Interprétation humanitaire (IOM)</span>
              <span className="text-xs ml-auto text-yellow-400">45%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center"><FileText size={12} className="text-indigo-300"/></div>
              <span className="text-xs" style={{ color: 'var(--cream)' }}>Traduction technique EN → AR</span>
              <span className="text-xs ml-auto text-green-400">92%</span>
            </div>
          </div>
          <div className="text-xs font-semibold mt-6 mb-3" style={{ color: 'var(--indigo-light)' }}>SOLUTIONS DIGITALES</div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center"><Code2 size={12} className="text-purple-300"/></div>
              <span className="text-xs" style={{ color: 'var(--cream)' }}>Plateforme ONG – React/Node</span>
              <span className="text-xs ml-auto text-green-400">livrée</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center"><Smartphone size={12} className="text-purple-300"/></div>
              <span className="text-xs" style={{ color: 'var(--cream)' }}>App mobile e‑learning (Flutter)</span>
              <span className="text-xs ml-auto text-blue-400">en dev</span>
            </div>
          </div>
        </div>

        {/* Right : stats & preview */}
        <div className="flex-1 p-5">
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="rounded-lg p-2 text-center" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div className="text-lg font-bold" style={{ color: 'var(--indigo-light)' }}>15+</div>
              <div className="text-xs text-muted">langues supportées</div>
            </div>
            <div className="rounded-lg p-2 text-center" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div className="text-lg font-bold" style={{ color: 'var(--indigo-light)' }}>8</div>
              <div className="text-xs text-muted">projets digitaux actifs</div>
            </div>
          </div>
          <div className="rounded-lg p-3" style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}>
            <div className="flex items-center gap-2 text-xs mb-2">
              <CloudCog size={14} className="text-indigo-300"/>
              <span className="font-medium">Stack moderne : React, Next.js, Node, Flutter, Tailwind</span>
            </div>
            <div className="text-xs text-muted">Déploiement continu · UI/UX inclusive · API multilingues</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div style={{ background: 'var(--navy)', minHeight: '100vh' }}>
      {/* NAV */}
      <nav
        className="nav-blur sticky top-0 z-50"
        style={{ position: 'sticky', top: 0, zIndex: 50 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'var(--indigo)' }}
            >
              <Globe size={16} color="white" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight" style={{ color: 'var(--cream)' }}>
              HAM Global Words
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Services', 'Solutions digitales', 'Langues', 'Projets', 'Blog', 'Contact'].map(item => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium transition-colors"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Espace client</a>
            <button className="btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }}>
              Demander un devis
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: 'var(--cream)', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div
            className="md:hidden px-6 pb-5 flex flex-col gap-4"
            style={{ borderTop: '1px solid rgba(99,102,241,0.1)', paddingTop: '20px' }}
          >
            {['Services', 'Solutions digitales', 'Langues', 'Projets', 'Blog', 'Contact'].map(item => (
              <a key={item} href="#" className="text-sm" style={{ color: 'var(--text-muted)' }}>{item}</a>
            ))}
            <button className="btn-primary mt-2">Demander un devis</button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        className="clip-angle-bottom relative overflow-hidden"
        style={{
          background: 'var(--navy)',
          paddingTop: '100px',
          paddingBottom: '140px',
        }}
      >
        <div className="blob absolute" style={{ width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)', top: '-100px', right: '-100px' }} />
        <div className="blob absolute" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)', bottom: '0px', left: '-80px' }} />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="animate-fade-up-delay-1 inline-flex items-center gap-2 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.3)', color: 'var(--indigo-light)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#34D399', boxShadow: '0 0 6px #34D399' }} />
              Full‑stack · Linguistique · Impact humanitaire
            </div>
          </div>

          <div className="animate-fade-up-delay-2">
            <h1 className="font-display leading-none tracking-tight mb-6" style={{ fontSize: 'clamp(52px, 8vw, 96px)', color: 'var(--cream)', maxWidth: '900px', letterSpacing: '-0.03em' }}>
              Où la technologie rencontre{' '}
              <span className="glow-text" style={{ color: 'var(--indigo-light)', display: 'inline-block' }}>
                l’intelligence des langues.
              </span>
            </h1>
          </div>

          <div className="animate-fade-up-delay-3">
            <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--text-muted)', maxWidth: '680px', lineHeight: '1.7' }}>
              <strong className="text-cream">HAM Global Words</strong> allie traduction / interprétation (15+ langues, dont songhaï, tamasheq) 
              et <strong className="text-indigo-light">création d’écosystèmes digitaux sur mesure</strong> – sites web, applications mobiles, dashboards. 
              Une double compétence rare pour des projets à fort impact, du Sahel au monde.
            </p>
          </div>

          <div className="animate-fade-up-delay-4 flex flex-wrap gap-4 items-center mb-16">
            <button className="btn-primary flex items-center gap-2">
              Lancer un projet
              <ArrowRight size={16} />
            </button>
            <button className="btn-ghost flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <Play size={12} fill="currentColor" />
              </div>
              Explorer nos réalisations
            </button>
          </div>

          <div className="flex items-center gap-4 mb-16 animate-fade-up-delay-4 text-sm" style={{ color: 'var(--text-muted)' }}>
            <div className="flex -space-x-2">
              {['#6366F1', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981'].map((color, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold" style={{ background: color, borderColor: 'var(--navy)', color: 'white', zIndex: 5 - i }}>
                  {['H', 'A', 'M', 'I', 'T'][i]}
                </div>
              ))}
            </div>
            <span>Accompagnant <strong style={{ color: 'var(--cream)' }}>+25 organisations</strong> (ONU, ONG, startups, institutions culturelles)</span>
          </div>

          <AppMockup />
        </div>
      </section>

      {/* FEATURES : double offre linguistique + digital */}
      <section className="clip-angle-top" style={{ background: 'var(--cream)', color: '#0A0F1E', paddingBottom: '120px' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--indigo)', letterSpacing: '0.15em' }}>Excellence hybride</p>
            <h2 className="font-display leading-tight" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', letterSpacing: '-0.03em', color: '#0A0F1E' }}>
              Des solutions qui allient<br />
              <span style={{ color: 'var(--indigo)' }}>le verbe et le code</span>
            </h2>
          </div>

          {/* Grille asymétrique enrichie */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Carte large : Création web & apps */}
            <div className="lg:col-span-3 rounded-2xl p-10 relative overflow-hidden" style={{ background: 'var(--navy)', border: '1px solid rgba(99,102,241,0.2)', color: 'var(--cream)', minHeight: '400px' }}>
              <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(99,102,241,0.3) 0%, transparent 60%)' }} />
              <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6" style={{ background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.3)' }}>
                <Code2 size={22} style={{ color: 'var(--indigo-light)' }} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 relative">Écosystèmes digitaux sur mesure</h3>
              <p className="relative leading-relaxed" style={{ color: 'var(--text-muted)', maxWidth: '480px' }}>
                Nous concevons des <strong>sites web performants</strong>, des <strong>applications mobiles (Flutter, React Native)</strong> et des <strong>dashboards d’administration</strong> adaptés aux contextes humanitaires, éducatifs ou culturels. 
                Stack moderne : React, Next.js, Node, PostgreSQL, déploiement cloud, UI/UX inclusive, accessibilité et architectures multilingues.
              </p>
              <div className="relative flex flex-wrap gap-2 mt-8">
                {['React / Next.js', 'Node.js', 'Flutter', 'Tailwind', 'Figma', 'CI/CD', 'API multilingues'].map(tool => (
                  <span key={tool} className="px-3 py-1.5 rounded-full text-xs font-medium" style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.2)', color: 'var(--indigo-light)' }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Deux petites cartes : linguistique */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="flex-1 rounded-2xl p-8" style={{ background: '#F5F3FF', border: '1px solid #DDD6FE' }}>
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5" style={{ background: '#EDE9FE' }}>
                  <Languages size={20} style={{ color: '#7C3AED' }} />
                </div>
                <h3 className="font-display text-xl font-bold mb-2" style={{ color: '#1E1B4B' }}>Traduction & interprétation</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                  15+ langues (français, anglais, arabe, songhaï, tamasheq, tadaksahak, haoussa…). Interprétation consécutive, simultanée, de liaison. Référence humanitaire (ONU, IOM, Takuba).
                </p>
              </div>
              <div className="flex-1 rounded-2xl p-8" style={{ background: '#F0FDF4', border: '1px solid #BBF7D0' }}>
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5" style={{ background: '#DCFCE7' }}>
                  <Sparkles size={20} style={{ color: '#15803D' }} />
                </div>
                <h3 className="font-display text-xl font-bold mb-2" style={{ color: '#14532D' }}>Annotation IA & données linguistiques</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                  Constitution de corpus, transcription, annotation sémantique pour modèles NLP. Une expertise unique sur les langues à faibles ressources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION DIGITALE APPROFONDIE (valeur ajoutée) */}
      <section style={{ background: 'linear-gradient(135deg, #0A0F1E 0%, #111827 100%)', padding: '90px 0' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <p className="text-indigo-300 text-sm font-semibold uppercase tracking-wide mb-3">⚡ Approche full‑stack & agile</p>
              <h2 className="font-display text-4xl lg:text-5xl tracking-tight text-cream mb-6">Du besoin terrain<br/>à l’application déployée</h2>
              <p className="text-muted text-lg leading-relaxed mb-6">
                Que vous ayez besoin d’un <strong>site institutionnel multilingue</strong>, d’une <strong>plateforme de formation en ligne</strong>, 
                d’une <strong>application mobile pour des communautés isolées</strong> ou d’un <strong>dashboard de coordination humanitaire</strong>, 
                nous concevons des produits digitaux robustes, éthiques et adaptés aux contraintes locales (faible bande passante, offline first, accessibilité).
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2"><Check size={18} className="text-green-400"/> UI/UX inclusive</div>
                <div className="flex items-center gap-2"><Check size={18} className="text-green-400"/> Responsive & mobile-first</div>
                <div className="flex items-center gap-2"><Check size={18} className="text-green-400"/> SEO & performance</div>
                <div className="flex items-center gap-2"><Check size={18} className="text-green-400"/> Sécurité & hébergement souverain</div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-sm p-1 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600">
                <div className="bg-navy-card rounded-2xl p-6 text-center">
                  <Smartphone size={48} className="text-indigo-300 mx-auto mb-4"/>
                  <div className="text-cream font-bold text-xl mb-2">Projet digital ?</div>
                  <p className="text-muted text-sm mb-4">De l’audit à la mise en production, livraison continue.</p>
                  <button className="btn-primary w-full">Discuter de votre besoin</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (ajout d’un client tech) */}
      <section style={{ background: 'var(--cream-mid)', padding: '100px 0' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--indigo)', letterSpacing: '0.15em' }}>Témoignages</p>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.03em', color: '#0A0F1E' }}>
              Ils conjuguent langues et technologie<br/>
              <span style={{ color: 'var(--indigo)' }}>avec HAM Global Words</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "L'application mobile que HAM Global Words a développée pour notre programme d'alphabétisation (songhaï/français) est un modèle d'ergonomie et de robustesse. L'équipe a su combiner traduction pédagogique et technologie adaptée aux zones rurales.",
                name: "Aissata Diallo",
                role: "Directrice",
                company: "Éducation pour Tous",
                initials: "AD",
                color: '#6366F1',
                stars: 5,
              },
              {
                quote: "Nous avions besoin d’une plateforme web pour gérer nos interprètes dans 12 pays. Flowline (leur équipe) a livré un dashboard personnalisé, sécurisé et multilingue. Un vrai partenaire technique.",
                name: "Marc T. Andersen",
                role: "CTO",
                company: "Lingua Mundi",
                initials: "MT",
                color: '#8B5CF6',
                stars: 5,
              },
              {
                quote: "Leur double compétence (linguistique + dev) est inestimable. Ils ont annoté un corpus en tamasheq pour notre moteur de traduction automatique, puis ont intégré l'API dans notre outil interne. Rapidité, précision, écoute.",
                name: "Dr. Yann Le Goff",
                role: "Head of AI",
                company: "NLP4Good",
                initials: "YL",
                color: '#EC4899',
                stars: 5,
              },
            ].map(t => (
              <div key={t.name} className="testimonial-card flex flex-col">
                <div className="flex gap-1 mb-5">{Array.from({ length: t.stars }).map((_, i) => (<svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#F59E0B"><path d="M8 1l1.85 3.75L14 5.5l-3 2.92.7 4.08L8 10.5l-3.7 1.95.7-4.08L2 5.5l4.15-.75L8 1z"/></svg>))}</div>
                <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: '#374151' }}>"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid #F3F4F6' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0" style={{ background: t.color }}>{t.initials}</div>
                  <div><div className="text-sm font-semibold" style={{ color: '#111827' }}>{t.name}</div><div className="text-xs" style={{ color: '#9CA3AF' }}>{t.role} · {t.company}</div></div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-10 mt-16 opacity-40">
            {(['UNHCR', 'IOM', 'GIZ', 'UNESCO', 'Action contre la Faim', 'Croix-Rouge']).map(name => (<span key={name} className="font-display font-bold text-lg" style={{ color: '#6B7280' }}>{name}</span>))}
          </div>
        </div>
      </section>

      {/* CTA finale unifiée */}
      <section className="clip-angle-both relative overflow-hidden" style={{ background: 'var(--navy)', textAlign: 'center' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.2) 0%, transparent 65%)' }}/>
        <div className="max-w-3xl mx-auto px-6 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8" style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.3)', color: 'var(--indigo-light)' }}>
            <Check size={14} /> Devis sous 48h
          </div>
          <h2 className="font-display leading-tight mb-6" style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', letterSpacing: '-0.03em', color: 'var(--cream)' }}>
            Prêt à hybrider langues & digital ?
          </h2>
          <p className="text-lg mb-10 mx-auto" style={{ color: 'var(--text-muted)', maxWidth: '580px', lineHeight: '1.7' }}>
            Que vous soyez une ONG, une startup ou une institution culturelle, nous construisons ensemble la solution sur mesure – linguistique, technique ou les deux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary flex items-center justify-center gap-2" style={{ fontSize: '16px', padding: '16px 36px' }}>Démarrer un projet <ArrowRight size={18}/></button>
            <button className="btn-ghost" style={{ fontSize: '16px', padding: '15px 32px' }}>Obtenir un devis combiné</button>
          </div>
          <p className="mt-6 text-sm" style={{ color: 'rgba(148,163,184,0.6)' }}>Réponse sous 24h · Audit offert · Accompagnement de bout en bout</p>
        </div>
      </section>

      {/* FOOTER (mis à jour) */}
      <footer style={{ background: '#070B15', borderTop: '1px solid rgba(99,102,241,0.1)', paddingTop: '80px', paddingBottom: '48px' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4"><div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--indigo)' }}><Globe size={16} color="white"/></div><span className="font-display font-bold text-lg" style={{ color: 'var(--cream)' }}>HAM Global Words</span></div>
              <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--text-muted)', maxWidth: '300px' }}>Prestataire linguistique & digital. Basé au Sahel, présent internationalement.</p>
              <div className="mb-4"><p className="text-sm font-semibold mb-3" style={{ color: 'var(--cream)' }}>Newsletter</p><p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>Actualités, appels d’offres & retours d’expérience.</p><NewsletterForm /></div>
            </div>
            {[
              { title: 'Linguistique', links: ['Traduction', 'Interprétation', 'Annotation IA', 'Localisation'] },
              { title: 'Digital', links: ['Sites web', 'Applications mobiles', 'Dashboards', 'API multilingues', 'Consulting tech'] },
              { title: 'Ressources', links: ['Blog', 'Études de cas', 'Glossaires', 'Partenaires'] }
            ].map(col => (
              <div key={col.title}><p className="text-xs font-bold uppercase mb-5" style={{ color: 'var(--text-muted)', letterSpacing: '0.1em' }}>{col.title}</p><ul className="space-y-3">{col.links.map(link => <li key={link}><a href="#" className="text-sm transition-colors" style={{ color: 'var(--text-muted)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--cream)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>{link}</a></li>)}</ul></div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <p className="text-xs" style={{ color: 'rgba(148,163,184,0.5)' }}>© 2025 HAM Global Words — Hamadine AG Moctar. Tous droits réservés.</p>
            <div className="flex items-center gap-6">{['LinkedIn', 'GitHub', 'Twitter'].map(social => <a key={social} href="#" className="text-xs transition-colors" style={{ color: 'rgba(148,163,184,0.5)' }}>{social}</a>)}</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
