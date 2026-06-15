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
    Promise.all([
      initI18n(),
      initTheme(),
      initSearch(),
      initIcons()
    ]).then(() => {
      hideLoader();
    });
  }
}
customElements.define('app-root', AppRoot);
