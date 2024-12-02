// Fonction pour supprimer un joueur
function supprimerJoueur() {
  var nom = document.getElementById("nomJ").textContent.trim();

  if (!nom) {
    console.error("Veuillez entrer un nom !");
    return;
  }

  // Trouver l'index du joueur dans le tableau avec le nom donné
  let index = players.findIndex(
    (player) => player.name.toLowerCase() === nom.toLowerCase()
  );

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

  formContainer.classList.toggle("hidden");
}

// Fonction pour afficher les joueurs
function mettreAJourAffichage() {
  const RemplacementCartes = document.getElementById("RemplacementCartes");

  RemplacementCartes.innerHTML = "";

  players.forEach((player) => {
    afficherCarteRempl(player);
  });
}

// Initialisation des affichages au chargement de la page
window.onload = function () {
  mettreAJourAffichage();
};
