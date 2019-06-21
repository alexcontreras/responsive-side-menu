const open = document.getElementById('open-side-menu');
const close = document.getElementById('close-side-menu');

open.addEventListener('click', openSideMenu);
close.addEventListener('click', closeSideMenu);

function openSideMenu() {
    const sideMenu = document.getElementById('side-menu');
    const main = document.getElementById('main');
    
    sideMenu.style.width = '250px';
    main.style.marginLeft = '250px';
}

function closeSideMenu() {
    const sideMenu = document.getElementById('side-menu');
    const main = document.getElementById('main');
    
    sideMenu.style.width = '0';
    main.style.marginLeft = '0';
}