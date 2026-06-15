import { toggleTheme } from '../theme.js';

class ThemeToggle extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<button id="themeToggle" aria-label="Changer le thème">🌙</button>`;
    this.querySelector('#themeToggle').addEventListener('click', toggleTheme);
  }
}
customElements.define('app-theme-toggle', ThemeToggle);
