function iniciaModal (modalID) {
    const modal = document.getElementById(modalID);
    if(modal) {
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if(e.target.id == modalID || e.target.className == 'close') {
                modal.classList.remove('mostrar');
            }
        });
    }
}

const politicaPrivacidade = document.querySelector('.politica-privacidade');
politicaPrivacidade.addEventListener('click', () => iniciaModal('privacy-popup'));



