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