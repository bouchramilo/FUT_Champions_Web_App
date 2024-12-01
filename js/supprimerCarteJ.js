

// Fonction pour supprimer un joueur
function supprimerJoueur() {
    var nom = document.getElementById("nomJ").textContent.trim();

    if (!nom) {
        console.error("Veuillez entrer un nom !");
        return;
    }

    // Trouver l'index du joueur dans le tableau avec le nom donné
    let index = players.findIndex(player => player.name.toLowerCase() === nom.toLowerCase());

    // Vérifier si le joueur existe
    if (index !== -1) {
        let joueurSupprime = players.splice(index, 1); // Supprimer le joueur
        console.log(`Joueur supprimé :`, joueurSupprime[0]);
    } else {
        console.error(`Joueur avec le nom "${nom}" introuvable.`);
    }

    console.log("Tableau mis à jour :", players);

    // Mettre à jour l'affichage après suppression
    mettreAJourAffichage();
}

// Fonction pour afficher les joueurs
function mettreAJourAffichage() {
    const RemplacementCartes = document.getElementById("RemplacementCartes");
    const trrnCartes = document.getElementById("playersCourent");

    RemplacementCartes.innerHTML = ""; // Effacer le contenu précédent
    trrnCartes.innerHTML = ""; // Effacer le contenu précédent

    // Recréer la liste de joueurs restants
    players.forEach(player => {
        afficherCarteRempl(player);
        afficherCarteTrn(player, player.position.toLowerCase());
    });
}

// Fonction simulée pour afficher une carte de remplacement
// function afficherCarteRempl(joueur) {
    
// }

// // Fonction simulée pour afficher une carte dans une autre section
// function afficherCarteTrn(player, DivCarte) {

// }

// Initialisation des affichages au chargement de la page
window.onload = function () {
    mettreAJourAffichage();
};







function modifierJoueur(){}