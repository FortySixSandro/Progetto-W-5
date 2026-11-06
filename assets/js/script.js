const openModal = document.querySelector('#openModal');
const closeModal = document.querySelector('#closeModal');
const overlay = document.querySelector('#overlay');


openModal.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.style.display = 'block';
    document.body.classList.add('no-scroll');
});

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.style.display = 'none';
    document.body.classList.remove('no-scroll');
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