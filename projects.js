
// Ouvrir la popup quand on clique sur l'icône de loupe
const loupes = document.querySelectorAll('.loupe');
const popups = document.querySelectorAll('.popup');
const closeButtons = document.querySelectorAll('.close-popup');

// Ouvrir la popup
loupes.forEach(loupe => {
    loupe.addEventListener('click', function() {
        const popupId = this.getAttribute('data-target');
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