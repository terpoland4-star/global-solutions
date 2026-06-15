import { initIcons } from '../utils/icons.js';

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <p>© <span id="year"></span> HAM Global Words — <span data-i18n-key="footer_text">Ingénierie Linguistique, IA & Innovation pour l'Afrique</span></p>
        <a href="about.html" class="cta-btn" data-i18n-key="about_btn">🌍 Notre Histoire</a>
        <div class="footer-logo">
          <img src="assets/img/HAM.png" alt="HAM Global Words" loading="lazy">
        </div>
      </footer>
    `;
    document.getElementById('year').textContent = new Date().getFullYear();
    initIcons();
  }
}
customElements.define('app-footer', Footer);
