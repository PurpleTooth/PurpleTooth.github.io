// Модальные окна
const modalRegister = document.getElementById('modalRegister');
const modalLogin = document.getElementById('modalLogin');
const registerButton = document.getElementById('registerButton');
const loginButton = document.getElementById('loginButton');
const closeModalLog = document.getElementById('closeModalButtonLogin');
const closeModalReg = document.getElementById('closeModalButtonRegister');

loginButton.onclick = function() {
    modalLogin.style.display = "block";
}

registerButton.onclick = function() {
    modalRegister.style.display = "block";
}

closeModalReg.onclick = function() {
    modalRegister.style.display = "none";
}

closeModalLog.onclick = function() {
    modalLogin.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalLogin) {
        modalLogin.style.display = "none";
    }
    if (event.target == modalRegister) {
        modalRegister.style.display = "none";
    }
}


// Счётчик количества аккаунтов
const countAccs = document.getElementById('countAccs');
const countSellrs = document.getElementById('countSellers');

function countAccounts() {
    countAccs.innerHTML++; 
} setInterval(countAccounts, 10000);

function countSellers() {
    countSellrs.innerHTML++; 
} setInterval(countSellers, 7000);


//Слайдер комментариев

let sliderOffset = 0;

const sliderLine = document.querySelector('.SliderLine');
const sliderButtonLeft = document.querySelector('.leftArrow');
const sliderButtonRight = document.querySelector('.rightArrow');

sliderButtonRight.addEventListener('click', () => {
    sliderOffset = sliderOffset - 296;
    if (sliderOffset < -5328) {
        sliderOffset = 0;
    }
    sliderLine.style.left = sliderOffset + 'px';
})

sliderButtonLeft.addEventListener('click', () => {
    sliderOffset = sliderOffset + 296;
    if (sliderOffset > 295) {
        sliderOffset = -5328;
    }
    sliderLine.style.left = sliderOffset + 'px';
})
