import { initIcons } from '../utils/icons.js';

class Cta extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="hero-actions" style="margin: 2rem auto; text-align: center;">
        <a href="#contact" class="cta-btn" data-i18n-key="btn_devis">🚀 Demander un devis sous 24h</a>
        <a href="#services" class="cta-btn secondary" data-i18n-key="btn_services">📦 Découvrir nos services</a>
        <a href="login.html" class="cta-btn secondary" data-i18n-key="btn_client">🔐 Accès Client</a>
      </div>
    `;
    initIcons();
  }
}
customElements.define('app-cta', Cta);
