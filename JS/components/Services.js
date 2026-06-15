import { initIcons } from '../utils/icons.js';

class Services extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="services">
        <h2 data-i18n-key="services_title">🛠️ Notre Gamme de Services Premium</h2>
        <p style="max-width:800px; margin:auto; text-align:center;" data-i18n-key="services_desc">Une offre complète couvrant l'intégralité de la chaîne de valeur linguistique, de la traduction assermentée à l'intelligence artificielle, avec un engagement constant envers l'excellence et la satisfaction client.</p>
        <div class="service-grid">
          <a href="services/traduction.html" class="service-btn">🌐 Traduction Professionnelle & Assermentée</a>
          <a href="services/interpretation.html" class="service-btn">🎙️ Interprétation de Conférence & Terrain</a>
          <a href="services/annotation.html" class="service-btn">🧠 Annotation de Données pour l'IA</a>
          <a href="services/webdev.html" class="service-btn">💻 Développement Web & Applications</a>
          <a href="services/codefix.html" class="service-btn">🧩 Audit & Optimisation de Code</a>
          <a href="services/remote.html" class="service-btn">📡 Interprétation à Distance (RSI/VRI)</a>
          <a href="formation-html.html" class="service-btn">🎓 Formation & Accompagnement</a>
        </div>
      </section>
    `;
    initIcons();
  }
}
customElements.define('app-services', Services);
