document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger-menu');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    burger.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show');
    });
});