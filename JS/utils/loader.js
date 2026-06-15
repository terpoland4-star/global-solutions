export function hideLoader() {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.classList.add('fade-out');
    setTimeout(() => loader.style.display = 'none', 500);
  }
}
