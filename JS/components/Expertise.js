import { initIcons } from '../utils/icons.js';

class Expertise extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="expertise">
        <h2 data-i18n-key="expertise_title">🎯 Notre Cœur d'Expertise</h2>
        <p style="max-width:800px; margin:auto; text-align:center;" data-i18n-key="expertise_desc">HAM Global Words conjugue rigueur linguistique, expertise terrain et technologies d'IA avancées pour fournir des solutions fiables, éthiques et hautement performantes dans les environnements les plus exigeants.</p>
        <div class="service-grid">
          <div class="card"><h3>🧠 Annotation IA & QA Linguistique</h3><p data-i18n-key="exp_ia_desc">Structuration, annotation et validation de corpus multilingues pour l'entraînement de modèles NLP, reconnaissance vocale et systèmes d'IA générative. Qualité certifiée par nos linguistes experts.</p></div>
          <div class="card"><h3>🌍 Interprétation & Médiation Stratégique</h3><p data-i18n-key="exp_interp_desc">Facilitation de la communication entre acteurs internationaux et communautés locales dans des contextes humanitaires, diplomatiques, médicaux et institutionnels sensibles.</p></div>
          <div class="card"><h3>📊 Pilotage de Projets Complexes</h3><p data-i18n-key="exp_ops_desc">Gestion de bout en bout de projets linguistiques d'envergure, contrôle qualité rigoureux, conformité RGPD et optimisation continue pour des livrables impeccables.</p></div>
          <div class="card"><h3>🌐 Multilinguisme Africain d'Excellence</h3><p data-i18n-key="exp_lang_desc">Maîtrise native des langues africaines clés (Tamasheq, Hausa, Songhay, Zarma, Fulfulde, Arabe) et des langues internationales (Français, Anglais). Adaptation culturelle et précision contextuelle garanties.</p></div>
        </div>
      </section>
    `;
    initIcons();
  }
}
customElements.define('app-expertise', Expertise);
