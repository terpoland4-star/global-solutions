import './components/Navbar.js';
import './components/Hero.js';
import './components/Expertise.js';
import './components/Services.js';
import './components/Solutions.js';
import './components/Cta.js';
import './components/ContactForm.js';
import './components/Footer.js';
import './components/LangSwitcher.js';
import './components/ThemeToggle.js';
import { initI18n, setLanguage } from './i18n.js';
import { initTheme } from './theme.js';
import { hideLoader } from './utils/loader.js';
import { initSearch } from './utils/search.js';
import { initIcons } from './utils/icons.js';

class AppRoot extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <app-lang-switcher></app-lang-switcher>
      <app-theme-toggle></app-theme-toggle>
      <app-navbar></app-navbar>
      <app-hero></app-hero>
      <app-expertise></app-expertise>
      <app-services></app-services>
      <app-solutions></app-solutions>
      <app-cta></app-cta>
      <app-contact-form></app-contact-form>
      <app-footer></app-footer>
    `;
    // Après montage, initialiser les services globaux
    Promise.all([
      initI18n(),           // charge les traductions et applique la langue
      initTheme(),          // restaure le thème utilisateur
      initSearch(),         // active Ctrl+K
      initIcons()           // Lucide
    ]).then(() => {
      hideLoader();         // disparition du loader
    });
  }
}
customElements.define('app-root', AppRoot);
