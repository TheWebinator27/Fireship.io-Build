// Top message

const marqueeContent = document.querySelector('.marquee-content');
const clonedMarquee = marqueeContent.cloneNode(true);
marqueeContent.parentElement.appendChild(clonedMarquee);

// Header

let logo = document.getElementById('logo');
let fireLogo = document.getElementById('fire-logo');
let logoContainer = document.querySelector('.nav-img');

logoContainer.addEventListener('mouseover', () => {
    logo.classList.add('hide');
    fireLogo.classList.remove('hide');
});

logoContainer.addEventListener('mouseout', () => {
    logo.classList.remove('hide');
    fireLogo.classList.add('hide');
});

// Modal

const modalContainer = document.querySelector('.search-modal_container');
const searchModal = document.querySelector('.search-modal');
const modalBtn = document.getElementById('search-modal_btn');
const escBtn = document.getElementById('esc-btn');

searchModal.addEventListener('click', (event) => {
    event.stopPropagation();
});

document.addEventListener('keydown', addModalOpen)
modalBtn.addEventListener('click', addModalOpen)

function addModalOpen(event) {
    if (event.type === 'click' || event.key === '/'){
        modalContainer.classList.add('modal-open');
    }
}

modalContainer.addEventListener('click', removeModalOpen);
escBtn.addEventListener('click', removeModalOpen);
document.addEventListener('keydown', removeModalOpen);

function removeModalOpen(event) {
    if (event.type === 'click' || event.key === 'Escape') {
        modalContainer.classList.remove('modal-open');
    }
}