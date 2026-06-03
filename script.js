// 1. Inicializar animaciones de scroll (AOS)
AOS.init({
    duration: 800, 
    once: true,    
    offset: 100    
});

// 2. Función para mostrar alertas nativas del navegador
function mostrarAlerta(servicio) {
    if (servicio === 'mantenimiento') {
        alert("MANTENIMIENTO DE EQUIPOS\n\n¿Qué incluye nuestro servicio especializado?\n- Remoción de polvo fino con equipo antiestático.\n- Cambio de pasta térmica.\n- Eliminación de virus y malware del sistema.");
    } 
    else if (servicio === 'hardware') {
        alert("HARDWARE Y ACTUALIZACIONES\n\nMarcas que trabajamos: Dell, HP, Lenovo, Asus, Acer.\n\nFallas comunes que resolvemos:\n- Equipos que no dan video.\n- Pantallas rotas o teclados dañados por líquidos.\n- Lentitud extrema (Hacemos migración a discos SSD).");
    } 
    else if (servicio === 'impresoras') {
        alert("LABORATORIO DE INYECCIÓN Y LÁSER\n\nEspecialistas multimarca: Modelos Brother (como DCP-T230 y similares), HP Smart Tank y Epson EcoTank.\n\nServicios incluidos:\n- Limpieza de cabezales.\n- Cambio de gomas de arrastre (Pick-up rollers).\n- Mantenimiento de almohadillas.");
    }
}

// 3. Lógica del Modo Oscuro
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggleBtn.querySelector('i');

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        localStorage.setItem('theme', 'light');
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});
