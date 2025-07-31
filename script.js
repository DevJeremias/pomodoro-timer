// Modo Noturno
const darkModeToggle = document.getElementById('darkModeToggle');
const htmlElement = document.documentElement;

// Verifica preferência salva ou do sistema
const savedMode = localStorage.getItem('darkMode');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedMode === 'true' || (!savedMode && systemPrefersDark)) {
  htmlElement.classList.add('dark');
}

// Alternar modo
darkModeToggle.addEventListener('click', () => {
  htmlElement.classList.toggle('dark');
  const isDark = htmlElement.classList.contains('dark');
  localStorage.setItem('darkMode', isDark);
  
  // Altera o emoji do botão
  darkModeToggle.textContent = isDark ? '🌞' : '🌓';
});

// Atualiza emoji inicial
if (htmlElement.classList.contains('dark')) {
  darkModeToggle.textContent = '🌞';
}