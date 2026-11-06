const openModal = document.querySelector('#openModal');
const closeModal = document.querySelector('#closeModal');
const overlay = document.querySelector('#overlay');
const buttonTheme = document.querySelector('.buttonTheme');
const themeIcon = buttonTheme.querySelector('i');


openModal.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.style.display = 'block';
    document.body.classList.add('no-scroll');
});

closeModal.addEventListener('click', chiudiModale);

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) chiudiModale();
});

function chiudiModale() {
    overlay.style.display = 'none';
    document.body.classList.remove('no-scroll');
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        chiudiModale()
    }
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.style.display = 'none';
    }

})

function applyTheme(isDark) {
    document.documentElement.classList.toggle('dark', isDark);
    themeIcon.classList.toggle('fa-moon', !isDark);
    themeIcon.classList.toggle('fa-sun', isDark);
}

buttonTheme.addEventListener('click', () => {
    const isDark = !document.documentElement.classList.contains('dark');
    applyTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

applyTheme(localStorage.getItem('theme') === 'dark');

const scrollGreen = document.querySelector('header');

window.addEventListener('scroll', () => {
    scrollGreen.classList.toggle('scrolled', window.scrollY > 50);
});

document.querySelectorAll('.cards, .serviceCards, .teamCards').forEach((grid) => {
    [...grid.children].forEach((card, i) => {
        card.classList.add('reveal');
        card.style.setProperty('--i', i % 2);
    });
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((card) => revealObserver.observe(card));