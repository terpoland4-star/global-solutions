import { useState } from 'react'
import {
  Globe,
  Languages,
  Mic,
  Sparkles,
  MessageSquare,
  Check,
  ArrowRight,
  Play,
  Menu,
  X,
  FileText,
  Code2,
  Smartphone,
  CloudCog,
  BookOpen,
  Users,
  ShoppingCart,
  Shield
} from 'lucide-react'
import { services, achievements } from './data/services'

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
          dashboard.hamglobalwords.com/realisations
        </div>
      </div>

      <div className="flex flex-col sm:flex-row" style={{ minHeight: '360px' }}>
        <div className="flex-1 p-5 border-r" style={{ borderColor: 'rgba(99,102,241,0.1)' }}>
          <div className="text-xs font-semibold mb-3" style={{ color: 'var(--indigo-light)' }}>RÉALISATIONS CLÉS</div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center"><BookOpen size={12} className="text-indigo-300"/></div>
              <span className="text-xs" style={{ color: 'var(--cream)' }}>Dictionnaire tadaksahak (premier)</span>
              <span className="text-xs ml-auto text-green-400">publié</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center"><ShoppingCart size={12} className="text-indigo-300"/></div>
              <span className="text-xs" style={{ color: 'var(--cream)' }}>Plateforme e‑commerce Niger Laptops</span>
              <span className="text-xs ml-auto text-green-400">en ligne</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center"><Shield size={12} className="text-indigo-300"/></div>
              <span className="text-xs" style={{ color: 'var(--cream)' }}>Interprétation Takuba / Barkhane</span>
              <span className="text-xs ml-auto text-yellow-400">classifié</span>
            </div>
          </div>
          <div className="text-xs font-semibold mt-6 mb-3" style={{ color: 'var(--indigo-light)' }}>PARTENARIATS</div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center"><FileText size={12} className="text-purple-300"/></div>
              <span className="text-xs" style={{ color: 'var(--cream)' }}>RWS Group (annotation IA)</span>
              <span className="text-xs ml-auto text-blue-400">certifié</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center"><Users size={12} className="text-purple-300"/></div>
              <span className="text-xs" style={{ color: 'var(--cream)' }}>OIM / UNHCR / IOM</span>
              <span className="text-xs ml-auto text-blue-400">référence</span>
            </div>
          </div>
        </div>

        <div className="flex-1 p-5">
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="rounded-lg p-2 text-center" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div className="text-lg font-bold" style={{ color: 'var(--indigo-light)' }}>15+</div>
              <div className="text-xs text-muted">langues couvertes</div>
            </div>
            <div className="rounded-lg p-2 text-center" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div className="text-lg font-bold" style={{ color: 'var(--indigo-light)' }}>7</div>
              <div className="text-xs text-muted">projets majeurs livrés</div>
            </div>
          </div>
          <div className="rounded-lg p-3" style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}>
            <div className="flex items-center gap-2 text-xs mb-2">
              <CloudCog size={14} className="text-indigo-300"/>
              <span className="font-medium">Expertise Inde · RWS Group · ONU</span>
            </div>
            <div className="text-xs text-muted">Partenaires de confiance pour des projets à fort impact.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div style={{ background: 'var(--navy)', minHeight: '100vh' }}>
      {/* NAV */}
      <nav className="nav-blur sticky top-0 z-50" style={{ position: 'sticky', top: 0, zIndex: 50 }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--indigo)' }}>
              <Globe size={16} color="white" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight" style={{ color: 'var(--cream)' }}>
              HAM Global Words
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Services', 'Réalisations', 'Partenaires', 'Blog', 'Contact'].map(item => (
              <a key={item} href="#" className="text-sm font-medium transition-colors" style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>{item}</a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Espace client</a>
            <button className="btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }}>Demander un devis</button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ color: 'var(--cream)', background: 'none', border: 'none', cursor: 'pointer' }}>
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden px-6 pb-5 flex flex-col gap-4" style={{ borderTop: '1px solid rgba(99,102,241,0.1)', paddingTop: '20px' }}>
            {['Services', 'Réalisations', 'Partenaires', 'Blog', 'Contact'].map(item => (
              <a key={item} href="#" className="text-sm" style={{ color: 'var(--text-muted)' }}>{item}</a>
            ))}
            <button className="btn-primary mt-2">Demander un devis</button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="clip-angle-bottom relative overflow-hidden" style={{ background: 'var(--navy)', paddingTop: '100px', paddingBottom: '140px' }}>
        <div className="blob absolute" style={{ width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)', top: '-100px', right: '-100px' }} />
        <div className="blob absolute" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)', bottom: '0px', left: '-80px' }} />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="animate-fade-up-delay-1 inline-flex items-center gap-2 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.3)', color: 'var(--indigo-light)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#34D399', boxShadow: '0 0 6px #34D399' }} />
              RWS Group · OIM · UNHCR · Takuba · Expertise Inde
            </div>
          </div>

          <div className="animate-fade-up-delay-2">
            <h1 className="font-display leading-none tracking-tight mb-6" style={{ fontSize: 'clamp(52px, 8vw, 96px)', color: 'var(--cream)', maxWidth: '900px', letterSpacing: '-0.03em' }}>
              Langues, cultures, technologies :<br />
              <span className="glow-text" style={{ color: 'var(--indigo-light)', display: 'inline-block' }}>l’expertise globale.</span>
            </h1>
          </div>

          <div className="animate-fade-up-delay-3">
            <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--text-muted)', maxWidth: '680px', lineHeight: '1.7' }}>
              <strong className="text-cream">HAM Global Words</strong> – prestataire linguistique certifié (RWS Group, OIM, UNHCR, Task Force Takuba). 
              Traduction, interprétation, annotation IA, création de plateformes digitales (e‑commerce, dictionnaire tadaksahak). 
              Une double compétence linguistique & full‑stack, du Sahel au monde.
            </p>
          </div>

          <div className="animate-fade-up-delay-4 flex flex-wrap gap-4 items-center mb-16">
            <button className="btn-primary flex items-center gap-2">Discuter de votre projet <ArrowRight size={16} /></button>
            <button className="btn-ghost flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.08)' }}><Play size={12} fill="currentColor" /></div>
              Voir le dictionnaire tadaksahak
            </button>
          </div>

          <div className="flex items-center gap-4 mb-16 animate-fade-up-delay-4 text-sm" style={{ color: 'var(--text-muted)' }}>
            <div className="flex -space-x-2">
              {['#6366F1', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981'].map((color, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold" style={{ background: color, borderColor: 'var(--navy)', color: 'white', zIndex: 5 - i }}>
                  {['H', 'A', 'M', 'A', 'G'][i]}
                </div>
              ))}
            </div>
            <span>Accompagnant <strong style={{ color: 'var(--cream)' }}>+15 organisations internationales</strong> (ONU, forces armées, entreprises tech)</span>
          </div>

          <AppMockup />
        </div>
      </section>

      {/* SERVICES SECTION (5 cartes asymétriques) */}
      <section className="clip-angle-top" style={{ background: 'var(--cream)', color: '#0A0F1E', paddingBottom: '100px' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--indigo)', letterSpacing: '0.15em' }}>Savoir-faire</p>
            <h2 className="font-display leading-tight" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', letterSpacing: '-0.03em', color: '#0A0F1E' }}>
              Des prestations uniques<br /><span style={{ color: 'var(--indigo)' }}>au carrefour des langues et du numérique</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <div key={service.id} className="feature-card" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: '24px', padding: '28px' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(99,102,241,0.1)', color: 'var(--indigo)' }}>
                  {/* Ici on pourrait mapper l'icône, mais pour l'exemple on garde une générique */}
                  <FileText size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#0A0F1E' }}>{service.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{service.shortDescription}</p>
                <p className="text-sm text-gray-500">{service.description}</p>
                {service.highlights && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.highlights.map(h => (
                      <span key={h} className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700">{h}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RÉALISATIONS CLÉS (section achievements) */}
      <section style={{ background: 'var(--navy-mid)', padding: '80px 0' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--indigo-light)' }}>Preuves sociales</p>
            <h2 className="font-display text-3xl lg:text-4xl text-cream">Réalisations concrètes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map(ach => (
              <div key={ach.id} className="bg-navy-card rounded-xl p-6 border border-indigo-500/20 text-center">
                <div className="w-14 h-14 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-4">
                  {ach.icon === 'BookOpen' && <BookOpen className="text-indigo-300" size={28} />}
                  {ach.icon === 'Users' && <Users className="text-indigo-300" size={28} />}
                  {ach.icon === 'Shield' && <Shield className="text-indigo-300" size={28} />}
                  {ach.icon === 'ShoppingCart' && <ShoppingCart className="text-indigo-300" size={28} />}
                  {ach.icon === 'Sparkles' && <Sparkles className="text-indigo-300" size={28} />}
                </div>
                <h3 className="text-lg font-bold text-cream mb-2">{ach.title}</h3>
                <p className="text-sm text-muted">{ach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTENAIRES (logos stylisés) */}
      <section style={{ background: 'var(--cream-mid)', padding: '70px 0' }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-6">Ils nous font confiance</p>
          <div className="flex flex-wrap justify-center gap-12 items-center opacity-70">
            <span className="text-2xl font-display font-bold text-gray-500">RWS Group</span>
            <span className="text-2xl font-display font-bold text-gray-500">OIM · IOM</span>
            <span className="text-2xl font-display font-bold text-gray-500">UNHCR</span>
            <span className="text-2xl font-display font-bold text-gray-500">Barkhane</span>
            <span className="text-2xl font-display font-bold text-gray-500">Task Force Takuba</span>
            <span className="text-2xl font-display font-bold text-gray-500">Expertise Inde</span>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="clip-angle-both relative overflow-hidden" style={{ background: 'var(--navy)', textAlign: 'center' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.2) 0%, transparent 65%)' }}/>
        <div className="max-w-3xl mx-auto px-6 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8" style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.3)', color: 'var(--indigo-light)' }}>
            <Check size={14} /> Disponible pour missions urgentes
          </div>
          <h2 className="font-display leading-tight mb-6" style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', letterSpacing: '-0.03em', color: 'var(--cream)' }}>
            Un projet ? Une mission humanitaire ?<br/>Une plateforme à développer ?
          </h2>
          <p className="text-lg mb-10 mx-auto" style={{ color: 'var(--text-muted)', maxWidth: '580px', lineHeight: '1.7' }}>
            Que vous soyez une ONG, une entreprise tech ou une institution, nous conjuguons langues et technologie pour un impact maximal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary flex items-center justify-center gap-2" style={{ fontSize: '16px', padding: '16px 36px' }}>Demander un devis combiné <ArrowRight size={18}/></button>
            <button className="btn-ghost" style={{ fontSize: '16px', padding: '15px 32px' }}>Télécharger la plaquette</button>
          </div>
          <p className="mt-6 text-sm" style={{ color: 'rgba(148,163,184,0.6)' }}>Réponse sous 24h · Devis gratuit · Confidentialité absolue</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#070B15', borderTop: '1px solid rgba(99,102,241,0.1)', paddingTop: '80px', paddingBottom: '48px' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4"><div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--indigo)' }}><Globe size={16} color="white"/></div><span className="font-display font-bold text-lg" style={{ color: 'var(--cream)' }}>HAM Global Words</span></div>
              <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--text-muted)', maxWidth: '300px' }}>Prestataire linguistique & digital. Dictionnaire tadaksahak, missions OIM/UNHCR/Takuba, plateformes e‑commerce, annotation IA.</p>
              <div className="mb-4"><p className="text-sm font-semibold mb-3" style={{ color: 'var(--cream)' }}>Newsletter</p><p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>Actualités, appels d’offres & retours d’expérience.</p><NewsletterForm /></div>
            </div>
            {[
              { title: 'Services', links: ['Traduction & annotation', 'Interprétation', 'Solutions digitales', 'Expertise Inde'] },
              { title: 'Ressources', links: ['Dictionnaire tadaksahak', 'Études de cas', 'Blog', 'Partenaires'] },
              { title: 'Légal', links: ['Mentions légales', 'Confidentialité', 'CGU', 'Accessibilité'] }
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
