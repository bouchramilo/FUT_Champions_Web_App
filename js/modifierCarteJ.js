const formModifier = document.getElementById("formModifier");


function modifierJoueur() {

    var nom = document.getElementById("nomJ").textContent.trim();

    if (!nom) {
        console.error("Veuillez entrer un nom !");
        return;
    }

    // Trouver l'index du joueur dans le tableau avec le nom donné
    let index = players.findIndex(player => player.name.toLowerCase() === nom.toLowerCase());

    afficher_formulaire(players[index]);
  
  formContainer.classList.toggle("hidden");
}


function afficher_formulaire(plyr){
    formModifier.classList.remove("hidden");

    document.querySelector(".nameJ").value = plyr.name ;
    document.querySelector(".photoJ").value = plyr.photo ;
    document.querySelector(".flagJ").value = plyr.flag ;
    document.querySelector(".nationalityJ").value = plyr.nationality ;
    document.querySelector(".clubJ").value = plyr.club ;
    document.querySelector(".logoClubJ").value = plyr.logo ;
    document.querySelector(".positionJ").value = plyr.position ;
    document.querySelector(".ratingJ").value = plyr.rating ;

    var formPositionModifier = document.getElementById("formPositionModifier");

  if (plyr.position === "GK") {
    formPositionModifier.innerHTML += `

                            <div
                                class="w-full lg:flex lg:flex-row max-md:flex max-md:flex-row max-sm:flex max-sm:flex-col max-md:gap-2 md:flex md:gap-2   ">
                                <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                    <label class="pl-4" for="diving">diving Joueur :</label>
                                    <input type="number" id="" class="divingJ w-full p-2 mb-2 border border-gray-300 rounded-md"
                                        placeholder="diving" value=${plyr.diving} required>

                                </div>
                                <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                    <label class="pl-4" for="handling">handling Joueur :</label>
                                    <input type="number" id="" class="handlingJ w-full p-2 mb-2 border border-gray-300 rounded-md"
                                        placeholder="handling " value=${plyr.handling} required>
                                </div>
                            </div>

                            <div
                                class="w-full lg:flex lg:flex-row max-md:flex max-md:flex-row max-sm:flex max-sm:flex-col max-md:gap-2 md:flex md:gap-2   ">
                                <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                    <label class="pl-4" for="kicking">kicking Joueur :</label>
                                    <input type="number" id="" class="kickingJ w-full p-2 mb-2 border border-gray-300 rounded-md"
                                        placeholder="kicking" value=${plyr.kicking} required>

                                </div>
                                <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                    <label class="pl-4" for="reflexes">reflexes Joueur
                                        :</label>
                                    <input type="number" id="" class="reflexesJ w-full p-2 mb-2 border border-gray-300 rounded-md"
                                        placeholder="reflexes" value=${plyr.reflexes} required>
                                </div>
                            </div>

                            <div
                                class="w-full lg:flex lg:flex-row max-md:flex max-md:flex-row max-sm:flex max-sm:flex-col max-md:gap-2 md:flex md:gap-2   ">
                                <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                    <label class="pl-4" for="speed">speed Joueur
                                        :</label>
                                    <input type="number" id="" class="speedJ w-full p-2 mb-2 border border-gray-300 rounded-md"
                                        placeholder="speed" value=${plyr.speed} required>

                                </div>
                                <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                    <label class="pl-4" for="positioning">positioning Joueur :</label>
                                    <input type="number" id=""
                                        class="positioningJ w-full p-2 mb-2 border border-gray-300 rounded-md"
                                        placeholder="positioning" value=${plyr.positioning} required>
                                </div>
                            </div>
        
            `;
  } else {
    formPositionModifier.innerHTML += `

                        <div
                            class="w-full lg:flex lg:flex-row max-md:flex max-md:flex-row max-sm:flex max-sm:flex-col max-md:gap-2 md:flex md:gap-2   ">
                            <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                <label class="pl-4" for="pace">pace Joueur :</label>
                                <input type="number" id="" class="paceJ w-full p-2 mb-2 border border-gray-300 rounded-md"
                                    placeholder="pace" value=${plyr.pace} required>

                            </div>
                            <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                <label class="pl-4" for="shooting">shooting Joueur :</label>
                                <input type="number" id="" class="shootingJ w-full p-2 mb-2 border border-gray-300 rounded-md"
                                    placeholder="shooting " value=${plyr.shooting} required>
                            </div>
                        </div>

                        <div
                            class="w-full lg:flex lg:flex-row max-md:flex max-md:flex-row max-sm:flex max-sm:flex-col max-md:gap-2 md:flex md:gap-2   ">
                            <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                <label class="pl-4" for="passing">passing Joueur :</label>
                                <input type="number" id="" class="passingJ w-full p-2 mb-2 border border-gray-300 rounded-md"
                                    placeholder="passing" value=${plyr.passing} required>

                            </div>
                            <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                <label class="pl-4" for="dribbling">dribbling Joueur
                                    :</label>
                                <input type="number" id="" class="dribblingJ w-full p-2 mb-2 border border-gray-300 rounded-md"
                                    placeholder="dribbling" value=${plyr.dribbling} required>
                            </div>
                        </div>

                        <div
                            class="w-full lg:flex lg:flex-row max-md:flex max-md:flex-row max-sm:flex max-sm:flex-col max-md:gap-2 md:flex md:gap-2   ">
                            <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                <label class="pl-4" for="defending">defending Joueur
                                    :</label>
                                <input type="number" id="" class="defendingJ w-full p-2 mb-2 border border-gray-300 rounded-md"
                                    placeholder="defending" value=${plyr.defending} required>

                            </div>
                            <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                <label class="pl-4" for="physical">physical Joueur :</label>
                                <input type="number" id="" class="physicalJ w-full p-2 mb-2 border border-gray-300 rounded-md"
                                    placeholder="physical" value=${plyr.physical} required>
                            </div>
                        </div>

            `;
  }


}


// Fonction pour sauvegarder les modifications
function sauvegarderModification() {
    // Récupérer le tableau des joueurs depuis localStorage
    let players = JSON.parse(localStorage.getItem("players")) || []; // Si null, initialise un tableau vide

    let playr = {};

    // Récupérer les valeurs du formulaire
    playr.name = document.querySelector(".nameJ").value.trim(); // Supprime les espaces inutiles
    playr.photo = document.querySelector(".photoJ").value;
    playr.flag = document.querySelector(".flagJ").value;
    playr.nationality = document.querySelector(".nationalityJ").value;
    playr.club = document.querySelector(".clubJ").value;
    playr.logo = document.querySelector(".logoClubJ").value;
    playr.position = document.querySelector(".positionJ").value;
    playr.rating = parseInt(document.querySelector(".ratingJ").value) || 0; // Convertit en nombre ou 0 par défaut

    // Vérifier la position pour récupérer les statistiques spécifiques
    if (playr.position === "GK") {
        playr.diving = parseInt(document.querySelector(".divingJ").value) || 0;
        playr.handling = parseInt(document.querySelector(".handlingJ").value) || 0;
        playr.kicking = parseInt(document.querySelector(".kickingJ").value) || 0;
        playr.reflexes = parseInt(document.querySelector(".reflexesJ").value) || 0;
        playr.speed = parseInt(document.querySelector(".speedJ").value) || 0;
        playr.positioning = parseInt(document.querySelector(".positioningJ").value) || 0;
    } else {
        playr.pace = parseInt(document.querySelector(".paceJ").value) || 0;
        playr.shooting = parseInt(document.querySelector(".shootingJ").value) || 0;
        playr.passing = parseInt(document.querySelector(".passingJ").value) || 0;
        playr.dribbling = parseInt(document.querySelector(".dribblingJ").value) || 0;
        playr.defending = parseInt(document.querySelector(".defendingJ").value) || 0;
        playr.physical = parseInt(document.querySelector(".physicalJ").value) || 0;
    }

    // Trouver l'index du joueur dans le tableau
    let index = players.findIndex(
        (player) => player.name.toLowerCase() === playr.name.toLowerCase()
    );

    if (index !== -1) {
        // Si le joueur existe, le mettre à jour
        players[index] = playr;
    } else {
        console.error("Le joueur n'existe pas dans le tableau.");
        alert("Modification impossible : joueur non trouvé !");
        return; // Sortir de la fonction
    }

    // Enregistrer les modifications dans localStorage
    localStorage.setItem("players", JSON.stringify(players));
    console.log("Joueur modifié avec succès :", playr);

    // Masquer le formulaire de modification
    const formModifier = document.querySelector(".formModifier"); // Assurez-vous que cette classe existe dans votre HTML
    if (formModifier) {
        formModifier.classList.toggle("hidden");
    } else {
        console.warn("Formulaire de modification introuvable.");
    }

    // Mettre à jour l'affichage
    if (typeof mettreAJourAffichage === "function") {
        mettreAJourAffichage();
    } else {
        console.warn("La fonction mettreAJourAffichage n'existe pas.");
    }
    // formModifier.classList.toggle("hidden");

    // Feedback utilisateur
    alert("Les modifications ont été sauvegardées avec succès !");

}

// Initialisation des affichages au chargement de la page
window.onload = function () {
    if (typeof mettreAJourAffichage === "function") {
        mettreAJourAffichage();
    } else {
        console.warn("La fonction mettreAJourAffichage n'existe pas.");
    }
};
