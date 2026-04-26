document.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro-overlay');
    const introTitle = document.querySelector('.intro-title');

    // 1. Анимация входа
    setTimeout(() => {
        // Сначала меняем текст
        introTitle.style.transition = "opacity 0.5s ease";
        introTitle.style.opacity = "0";
        
        setTimeout(() => {
            introTitle.textContent = "ФАКТУР";
            introTitle.style.opacity = "1";
        }, 500);

        // Убираем белый экран вверх через 2 секунды
        setTimeout(() => {
            intro.style.transform = "translateY(-100%)";
        }, 1500);
    }, 500);

    // 2. Появление элементов при скролле (Scroll Reveal)
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Запуск один раз сразу после загрузки
    setTimeout(revealOnScroll, 2000); 
});