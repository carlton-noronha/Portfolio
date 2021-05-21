let flashcardsOpenBtn = document.getElementById("flashCardsOpen");
let flashcardsCloseBtn = document.getElementById("flashCardsClose");
let flashcardsWindow = document.getElementById("flashcardsWindow");

let minesweeperOpenBtn = document.getElementById("minesweeperOpen");
let minesweeperCloseBtn = document.getElementById("minesweeperClose");
let minesweeperWindow = document.getElementById("minesweeperWindow");

let friendlyNotifierOpenBtn = document.getElementById("friendlyNotifierOpen");
let friendlyNotifierBtn = document.getElementById("friendlyNotifierClose");
let friendlyNotifierWindow = document.getElementById("friendlyNotifierWindow");

flashcardsOpenBtn.onclick = function() {
    flashcardsWindow.style.display = "block";
};

flashcardsCloseBtn.onclick = function()  {
    flashcardsWindow.style.display = "none";
};

minesweeperOpenBtn.onclick = function() {
    minesweeperWindow.style.display = "block";
};

minesweeperCloseBtn.onclick = function() {
    minesweeperWindow.style.display = "none";
};

friendlyNotifierOpenBtn.onclick = function() {
    friendlyNotifierWindow.style.display = "block";
};

friendlyNotifierBtn.onclick = function() {
    friendlyNotifierWindow.style.display = "none";
};

const navSlide = () => {
    const hamburgerIcon = document.querySelector('.hamburgerIcon');
    const hamburger = document.querySelector('.hamburger');
    console.log(window.innerWidth);
    hamburgerIcon.addEventListener('click', () => {
        hamburger.classList.toggle('hamburgerIconActive');
        hamburgerIcon.classList.toggle('toggle');
    });
};

navSlide();