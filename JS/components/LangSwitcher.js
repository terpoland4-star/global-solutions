import { setLanguage } from '../i18n.js';

class LangSwitcher extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="lang-switcher">
        <select id="langSwitcher">
          <option value="fr">🇫🇷 Français</option>
          <option value="en">🇬🇧 English</option>
          <option value="ar">🇸🇦 العربية</option>
        </select>
      </div>
    `;
    const select = this.querySelector('#langSwitcher');
    select.value = localStorage.getItem('lang') || 'fr';
    select.addEventListener('change', (e) => setLanguage(e.target.value));
  }
}
customElements.define('app-lang-switcher', LangSwitcher);
