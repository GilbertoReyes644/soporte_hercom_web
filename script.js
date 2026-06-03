// 1. Inicializar animaciones de scroll (AOS)
AOS.init({
    duration: 800, // Duración de la animación
    once: true,    // Solo se anima la primera vez que pasas por el elemento
    offset: 100    // Píxeles antes de que se active la animación
});

// 2. Lógica del Modo Oscuro
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggleBtn.querySelector('i');

// Verificamos si el usuario ya había elegido el modo oscuro en una visita anterior
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
}

// Cambiamos el modo al hacer clic en el botón de la barra de navegación
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Guardamos la preferencia en el navegador
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        localStorage.setItem('theme', 'light');
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});
