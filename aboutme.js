
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

// Ouvrir la popup quand on clique sur l'icône de loupe
const loupes = document.querySelectorAll('.loupe');
const popups = document.querySelectorAll('.popup');
const closeButtons = document.querySelectorAll('.close-popup');

// Ouvrir la popup
loupes.forEach(loupe => {
    loupe.addEventListener('click', function() {
        const popupId = this.getAttribute('data-popup');
        document.getElementById(popupId).style.display = 'flex';
    });
});

// Fermer la popup
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.popup').style.display = 'none';
    });
});

// Fermer la popup en cliquant en dehors
popups.forEach(popup => {
    popup.addEventListener('click', function(e) {
        if (e.target === this) {
            this.style.display = 'none';
        }
    });
});
