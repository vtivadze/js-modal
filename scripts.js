let btnModalOpen = document.querySelector('.more'),
        modalWindow = document.querySelector('.overlay'),
        btnModalClose = document.querySelector('.popup-close');

function modal() {
    btnModalOpen.addEventListener('click', function() {
        modalWindow.style.display = 'block';
        btnOpen.classList.add('animation-class');
        document.body.style.overflow = 'hidden';
    });

    btnModalClose.addEventListener('click', function() {
        modalWindow.style.display = 'none';
        btnModalOpen.classList.remove('animation-class');
        document.body.style.overflow = '';
    });
}
