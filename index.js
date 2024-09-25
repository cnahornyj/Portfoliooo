document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger-menu');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    burger.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show');
    });
});

function updateImage() {
    const profileImage = document.getElementById('profileImage');
    const screenWidth = window.innerWidth;

    if (screenWidth < 1200) {
        profileImage.src = './assets/do.png'; // Remplacez par le chemin de votre nouvelle image
    } else {
        profileImage.src = './assets/pic_profil.png'; // Chemin de l'image originale
    }
}

// Met à jour l'image au chargement de la page
updateImage();

// Met à jour l'image lors du redimensionnement de la fenêtre
window.addEventListener('resize', updateImage);