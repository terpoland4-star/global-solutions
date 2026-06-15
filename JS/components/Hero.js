import { initIcons } from '../utils/icons.js';

class Hero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="hero">
        <h2 data-i18n-key="hero_title">Langues • Intelligence Artificielle • Solutions Digitales</h2>
        <p data-i18n-key="hero_desc">Nous accompagnons les organisations d'envergure — ONG, institutions internationales et entreprises — dans leurs opérations linguistiques critiques, la structuration de données multilingues et le déploiement de solutions digitales parfaitement adaptées aux réalités du terrain africain.</p>
        <p><strong data-i18n-key="hero_stats">📊 +500 missions d'excellence | 🌍 15+ langues maîtrisées | 🤝 98% de satisfaction client</strong></p>
        <div class="hero-actions">
          <a href="#contact" class="cta-btn" data-i18n-key="btn_devis">🚀 Demander un devis sous 24h</a>
          <a href="#services" class="cta-btn secondary" data-i18n-key="btn_services">📦 Découvrir nos services</a>
          <a href="login.html" class="cta-btn secondary" data-i18n-key="btn_client">🔐 Accès Client</a>
        </div>
      </section>
    `;
    initIcons();
  }
}
customElements.define('app-hero', Hero);
