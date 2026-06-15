import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Zap, Users, BarChart3, Check, ArrowRight, Play, Menu, X } from 'lucide-react'

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
        <span>You're on the list. We'll be in touch.</span>
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
        placeholder="your@email.com"
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
        {status === 'loading' ? 'Joining…' : 'Get early access'}
      </button>
      {status === 'error' && (
        <p className="text-xs mt-1 w-full" style={{ color: '#FCA5A5' }}>
          Something went wrong — please try again.
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
        maxWidth: '720px',
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
          app.flowline.io/workspace
        </div>
      </div>

      {/* Mockup body */}
      <div className="flex" style={{ height: '320px' }}>
        {/* Sidebar */}
        <div className="hidden sm:flex flex-col gap-2 p-4 border-r w-48 shrink-0" style={{ borderColor: 'rgba(99,102,241,0.1)' }}>
          {['Overview', 'Active Flows', 'Analytics', 'Team', 'Settings'].map((item, i) => (
            <div
              key={item}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium"
              style={{
                background: i === 1 ? 'rgba(99,102,241,0.2)' : 'transparent',
                color: i === 1 ? 'var(--indigo-light)' : 'var(--text-muted)',
              }}
            >
              <div
                className="w-2 h-2 rounded-sm"
                style={{ background: i === 1 ? 'var(--indigo)' : 'rgba(148,163,184,0.3)' }}
              />
              {item}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-5 overflow-hidden">
          {/* Stat row */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { label: 'Flows active', value: '24' },
              { label: 'Tasks done', value: '1,847' },
              { label: 'Hours saved', value: '312' },
            ].map(stat => (
              <div
                key={stat.label}
                className="rounded-lg p-3"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(99,102,241,0.1)' }}
              >
                <div className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
                <div className="text-lg font-bold font-display" style={{ color: 'var(--indigo-light)' }}>{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Flow list */}
          <div className="space-y-2">
            <div className="text-xs mb-3 font-medium" style={{ color: 'var(--text-muted)' }}>ACTIVE WORKFLOWS</div>
            {[
              { name: 'Onboarding sequence', status: 'running', pct: 78 },
              { name: 'Lead nurture v3', status: 'running', pct: 45 },
              { name: 'Churn detection', status: 'paused', pct: 60 },
            ].map(flow => (
              <div
                key={flow.name}
                className="flex items-center gap-3 p-3 rounded-lg"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: flow.status === 'running' ? '#34D399' : '#94A3B8' }}
                />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium truncate" style={{ color: 'var(--cream)' }}>{flow.name}</div>
                  <div className="mt-1.5 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.07)' }}>
                    <div
                      className="h-full rounded-full skeleton-shimmer"
                      style={{ width: `${flow.pct}%`, background: flow.status === 'running' ? 'var(--indigo)' : '#475569' }}
                    />
                  </div>
                </div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{flow.pct}%</div>
              </div>
            ))}
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
              <Zap size={16} fill="white" color="white" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight" style={{ color: 'var(--cream)' }}>
              flowline
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Product', 'Pricing', 'Docs', 'Blog'].map(item => (
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
            <a href="#" className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Sign in</a>
            <button className="btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }}>
              Start free trial
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
            {['Product', 'Pricing', 'Docs', 'Blog'].map(item => (
              <a key={item} href="#" className="text-sm" style={{ color: 'var(--text-muted)' }}>{item}</a>
            ))}
            <button className="btn-primary mt-2">Start free trial</button>
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
        {/* Ambient blobs */}
        <div
          className="blob absolute"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)',
            top: '-100px',
            right: '-100px',
            animationDelay: '0s',
          }}
        />
        <div
          className="blob absolute"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
            bottom: '0px',
            left: '-80px',
            animationDelay: '-4s',
          }}
        />

        <div className="max-w-6xl mx-auto px-6 relative">
          {/* Badge */}
          <div className="animate-fade-up-delay-1 inline-flex items-center gap-2 mb-8">
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: 'rgba(99,102,241,0.12)',
                border: '1px solid rgba(99,102,241,0.3)',
                color: 'var(--indigo-light)',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: '#34D399', boxShadow: '0 0 6px #34D399' }}
              />
              Now in public beta — free for teams under 5
            </div>
          </div>

          {/* Headline — oversized, left-aligned, breaking the grid slightly */}
          <div className="animate-fade-up-delay-2">
            <h1
              className="font-display leading-none tracking-tight mb-6"
              style={{
                fontSize: 'clamp(52px, 8vw, 96px)',
                color: 'var(--cream)',
                maxWidth: '820px',
                letterSpacing: '-0.03em',
              }}
            >
              Your team's work,{' '}
              <span
                className="glow-text"
                style={{
                  color: 'var(--indigo-light)',
                  display: 'inline-block',
                }}
              >
                finally in flow.
              </span>
            </h1>
          </div>

          <div className="animate-fade-up-delay-3">
            <p
              className="text-lg leading-relaxed mb-10"
              style={{ color: 'var(--text-muted)', maxWidth: '520px', lineHeight: '1.7' }}
            >
              Flowline connects your tools, automates the handoffs between them, and surfaces exactly what each person needs to do next — without the status meetings.
            </p>
          </div>

          <div className="animate-fade-up-delay-4 flex flex-wrap gap-4 items-center mb-16">
            <button className="btn-primary flex items-center gap-2">
              Start free trial
              <ArrowRight size={16} />
            </button>
            <button className="btn-ghost flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.08)' }}
              >
                <Play size={12} fill="currentColor" />
              </div>
              Watch 3-min demo
            </button>
          </div>

          {/* Social proof */}
          <div
            className="flex items-center gap-4 mb-16 animate-fade-up-delay-4 text-sm"
            style={{ color: 'var(--text-muted)' }}
          >
            <div className="flex -space-x-2">
              {['#6366F1', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981'].map((color, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                  style={{
                    background: color,
                    borderColor: 'var(--navy)',
                    color: 'white',
                    zIndex: 5 - i,
                  }}
                >
                  {['M', 'S', 'A', 'K', 'R'][i]}
                </div>
              ))}
            </div>
            <span>Trusted by <strong style={{ color: 'var(--cream)' }}>2,400+</strong> teams shipping faster</span>
          </div>

          {/* App mockup */}
          <AppMockup />
        </div>
      </section>

      {/* FEATURES */}
      <section
        className="clip-angle-top"
        style={{ background: 'var(--cream)', color: '#0A0F1E', paddingBottom: '120px' }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: 'var(--indigo)', letterSpacing: '0.15em' }}
            >
              Why Flowline
            </p>
            <h2
              className="font-display leading-tight"
              style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', letterSpacing: '-0.03em', color: '#0A0F1E' }}
            >
              Built for teams that hate<br />
              <span style={{ color: 'var(--indigo)' }}>wasting time on process.</span>
            </h2>
          </div>

          {/* Asymmetric feature grid: 1 large + 2 stacked */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Large card */}
            <div
              className="lg:col-span-3 rounded-2xl p-10 relative overflow-hidden"
              style={{
                background: 'var(--navy)',
                border: '1px solid rgba(99,102,241,0.2)',
                color: 'var(--cream)',
                minHeight: '360px',
              }}
            >
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background: 'radial-gradient(ellipse at 80% 20%, rgba(99,102,241,0.3) 0%, transparent 60%)',
                }}
              />
              <div
                className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6"
                style={{ background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.3)' }}
              >
                <Zap size={22} style={{ color: 'var(--indigo-light)' }} />
              </div>
              <h3
                className="font-display text-2xl font-bold mb-4 relative"
                style={{ letterSpacing: '-0.02em' }}
              >
                Smart Automation
              </h3>
              <p className="relative leading-relaxed" style={{ color: 'var(--text-muted)', maxWidth: '420px' }}>
                Define rules once, in plain language. Flowline watches your tools — Slack, GitHub, Linear, Notion — and fires the right actions at exactly the right time. No Zapier chains, no brittle webhooks.
              </p>
              <div
                className="relative flex flex-wrap gap-2 mt-8"
              >
                {['Slack', 'GitHub', 'Linear', 'Notion', 'Salesforce', '+40 more'].map(tool => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.2)', color: 'var(--indigo-light)' }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Right column — 2 stacked */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div
                className="flex-1 rounded-2xl p-8 relative overflow-hidden"
                style={{
                  background: '#F5F3FF',
                  border: '1px solid #DDD6FE',
                  minHeight: '168px',
                }}
              >
                <div
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5"
                  style={{ background: '#EDE9FE' }}
                >
                  <Users size={20} style={{ color: '#7C3AED' }} />
                </div>
                <h3
                  className="font-display text-xl font-bold mb-2"
                  style={{ color: '#1E1B4B', letterSpacing: '-0.02em' }}
                >
                  Real-time Collaboration
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                  Every teammate sees the same live view. Comments, mentions, and task handoffs happen in-context — not buried in email threads.
                </p>
              </div>

              <div
                className="flex-1 rounded-2xl p-8 relative overflow-hidden"
                style={{
                  background: '#F0FDF4',
                  border: '1px solid #BBF7D0',
                  minHeight: '168px',
                }}
              >
                <div
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5"
                  style={{ background: '#DCFCE7' }}
                >
                  <BarChart3 size={20} style={{ color: '#15803D' }} />
                </div>
                <h3
                  className="font-display text-xl font-bold mb-2"
                  style={{ color: '#14532D', letterSpacing: '-0.02em' }}
                >
                  Powerful Analytics
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                  See where work stalls. Identify your team's true capacity. Make retrospectives data-driven instead of anecdote-driven.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: 'var(--cream-mid)', padding: '100px 0' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: 'var(--indigo)', letterSpacing: '0.15em' }}
            >
              From the teams using it
            </p>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.03em', color: '#0A0F1E' }}
            >
              Less process theater,<br />
              <span style={{ color: 'var(--indigo)' }}>more actual shipping.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "We cut our weekly standup time by 73% in the first month. Flowline just tells everyone what's blocked and who needs to unblock it. The meeting became optional.",
                name: "Priya Mehrotra",
                role: "Head of Engineering",
                company: "Canopii",
                initials: "PM",
                color: '#6366F1',
                stars: 5,
              },
              {
                quote: "Our onboarding flow used to take 3 different people touching 5 different tools. Now it's one Flowline automation that runs itself. We onboarded 47 users last week without touching a single thing.",
                name: "Tom Okafor",
                role: "Founder & CEO",
                company: "Stitchly",
                initials: "TO",
                color: '#8B5CF6',
                stars: 5,
              },
              {
                quote: "I was skeptical about 'no-code automation' claims. Flowline is different — the logic is actually readable. My non-technical co-founder set up three flows herself. That says everything.",
                name: "Anika Sørensen",
                role: "CTO",
                company: "Lumify Health",
                initials: "AS",
                color: '#EC4899',
                stars: 5,
              },
            ].map(t => (
              <div key={t.name} className="testimonial-card flex flex-col">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#F59E0B">
                      <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.7 4.08L8 10.5l-3.7 1.95.7-4.08L2 5.5l4.15-.75L8 1z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: '#374151' }}>
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid #F3F4F6' }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                    style={{ background: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: '#111827' }}>{t.name}</div>
                    <div className="text-xs" style={{ color: '#9CA3AF' }}>{t.role} · {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap justify-center items-center gap-10 mt-16 opacity-40">
            {['Vercel', 'Stripe', 'Linear', 'Figma', 'Notion', 'Loom'].map(name => (
              <span
                key={name}
                className="font-display font-bold text-lg"
                style={{ color: '#6B7280', letterSpacing: '-0.02em' }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="clip-angle-both relative overflow-hidden"
        style={{
          background: 'var(--navy)',
          textAlign: 'center',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.2) 0%, transparent 65%)',
          }}
        />
        <div className="max-w-3xl mx-auto px-6 relative">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{
              background: 'rgba(99,102,241,0.12)',
              border: '1px solid rgba(99,102,241,0.3)',
              color: 'var(--indigo-light)',
            }}
          >
            <Check size={14} />
            No credit card required
          </div>
          <h2
            className="font-display leading-tight mb-6"
            style={{
              fontSize: 'clamp(36px, 5.5vw, 64px)',
              letterSpacing: '-0.03em',
              color: 'var(--cream)',
            }}
          >
            Ready to get your team into flow?
          </h2>
          <p
            className="text-lg mb-10 mx-auto"
            style={{ color: 'var(--text-muted)', maxWidth: '480px', lineHeight: '1.7' }}
          >
            Start free. Connect your first integration in minutes. See what your team can actually accomplish.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary flex items-center justify-center gap-2" style={{ fontSize: '16px', padding: '16px 36px' }}>
              Start for free
              <ArrowRight size={18} />
            </button>
            <button className="btn-ghost" style={{ fontSize: '16px', padding: '15px 32px' }}>
              Talk to sales
            </button>
          </div>
          <p className="mt-6 text-sm" style={{ color: 'rgba(148,163,184,0.6)' }}>
            Free for teams of 5 · No setup fees · Cancel anytime
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#070B15', borderTop: '1px solid rgba(99,102,241,0.1)', paddingTop: '80px', paddingBottom: '48px' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand + newsletter */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'var(--indigo)' }}
                >
                  <Zap size={16} fill="white" color="white" />
                </div>
                <span className="font-display font-bold text-lg" style={{ color: 'var(--cream)' }}>flowline</span>
              </div>
              <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--text-muted)', maxWidth: '300px' }}>
                Workflow automation that respects how your team actually works. Built for speed, designed to last.
              </p>

              <div className="mb-4">
                <p className="text-sm font-semibold mb-3" style={{ color: 'var(--cream)' }}>Stay in the loop</p>
                <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>
                  Product updates, tips, and early access. Once or twice a month — no spam.
                </p>
                <NewsletterForm />
              </div>
            </div>

            {/* Link columns */}
            {[
              {
                title: 'Product',
                links: ['Features', 'Integrations', 'Changelog', 'Roadmap', 'Pricing'],
              },
              {
                title: 'Company',
                links: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
              },
              {
                title: 'Legal',
                links: ['Privacy', 'Terms', 'Security', 'DPA', 'Cookies'],
              },
            ].map(col => (
              <div key={col.title}>
                <p
                  className="text-xs font-bold uppercase mb-5"
                  style={{ color: 'var(--text-muted)', letterSpacing: '0.1em' }}
                >
                  {col.title}
                </p>
                <ul className="space-y-3">
                  {col.links.map(link => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm transition-colors"
                        style={{ color: 'var(--text-muted)' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
            style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
          >
            <p className="text-xs" style={{ color: 'rgba(148,163,184,0.5)' }}>
              © 2025 Flowline, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {['Twitter', 'GitHub', 'LinkedIn'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="text-xs transition-colors"
                  style={{ color: 'rgba(148,163,184,0.5)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(148,163,184,0.5)')}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
