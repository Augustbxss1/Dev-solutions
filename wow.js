new WOW({
    boxClass: 'wow', // Classe CSS utilisée pour identifier les éléments à animer
    animateClass: 'animate__animated', // Classe CSS d'animation (par défaut : animate.css)
    offset: 100, // Distance en pixels avant que l'élément ne devienne visible
    mobile: true, // Activer les animations sur mobile
    live: true // Vérifie les nouveaux éléments ajoutés dynamiquement
}).init();