import { initIcons } from '../utils/icons.js';

class Solutions extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="solutions">
        <h2 data-i18n-key="solutions_title">🚀 Nos Solutions & Produits Innovants</h2>
        <p style="max-width:800px; margin:auto; text-align:center;" data-i18n-key="solutions_desc">Des outils concrets, éprouvés sur le terrain, conçus pour répondre aux défis spécifiques des ONG, entreprises et projets technologiques opérant en Afrique et à l'international.</p>
        <div class="service-grid">
          <div class="card"><a href="https://terpoland4-star.github.io/Dictionnaire-Tadaksahak/" target="_blank"><h3>📚 Dictionnaire Tadaksahak</h3><p data-i18n-key="solution_dict_desc">Application linguistique multilingue de référence dédiée à la valorisation, la préservation et la structuration des langues africaines menacées. Une ressource inestimable pour chercheurs et communautés.</p></a></div>
          <div class="card"><a href="https://ai.silencio.store?ref=8PB54N" target="_blank"><h3>🧠 Corpus & Datasets pour l'IA</h3><p data-i18n-key="solution_ai_desc">Création, annotation et validation de jeux de données linguistiques pour l'entraînement d'algorithmes d'IA et de technologies vocales. Rejoignez notre programme de collecte rémunérée (jusqu'à 10 USDC/heure).</p></a></div>
          <div class="card"><h3>💻 Plateformes SaaS Sur Mesure</h3><p data-i18n-key="solution_saas_desc">Conception et développement de dashboards clients, systèmes d'upload sécurisé, automatisation des flux de travail et gestion intégrale de projets linguistiques complexes.</p></div>
          <div class="card"><h3>🏥 Solutions Digitales Sectorielles</h3><p data-i18n-key="solution_sector_desc">Outils spécialisés pour les secteurs de la santé, de l'humanitaire et de l'éducation, intégrant les langues locales et l'accessibilité terrain (mode hors-ligne prioritaire).</p></div>
        </div>
      </section>
    `;
    initIcons();
  }
}
customElements.define('app-solutions', Solutions);
