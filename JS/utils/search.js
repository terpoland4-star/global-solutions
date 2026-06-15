export function initSearch() {
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.id = 'globalSearch';
  searchInput.placeholder = '🔍 Recherche (Ctrl+K)';
  searchInput.classList.add('quick-search');
  searchInput.style.cssText = 'position:fixed; bottom:20px; right:20px; background:#1e1e2f; border:1px solid #6366f1; border-radius:40px; padding:10px 16px; color:white; z-index:9999; width:260px;';
  document.body.appendChild(searchInput);
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      searchInput.focus();
    }
  });
  // Logique de filtrage à implémenter selon vos besoins
}
