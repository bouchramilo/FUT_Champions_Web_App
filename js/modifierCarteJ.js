const formModifier = document.getElementById("formModifier");

function modifierJoueur() {
  var nom = document.getElementById("nomJ").textContent.trim();

  if (!nom) {
    console.error("Veuillez entrer un nom !");
    return;
  }

  // Trouver l'index du joueur dans le tableau avec le nom donné
  let index = players.findIndex(
    (player) => player.name.toLowerCase() === nom.toLowerCase()
  );

  localStorage.setItem("index", JSON.stringify(index));


  console.log("Données dans local storage :", players);
  // console.log("Données modifiées :", playr);
  console.log("Index trouvé : ", index);
  // console.log("Tableau mis à jour :", players);

  afficher_formulaire(index);

  formContainer.classList.toggle("hidden");
}

function afficher_formulaire(i) {
  formModifier.classList.remove("hidden");

  document.querySelector(".nameJ").value = players[i].name;
  document.querySelector(".photoJ").value = players[i].photo;
  document.querySelector(".flagJ").value = players[i].flag;
  document.querySelector(".nationalityJ").value = players[i].nationality;
  document.querySelector(".clubJ").value = players[i].club;
  document.querySelector(".logoClubJ").value = players[i].logo;
  document.querySelector(".positionJ").value = players[i].position;
  document.querySelector(".ratingJ").value = players[i].rating;

  var formPositionModifier = document.getElementById("formPositionModifier");

  if (players[i].position === "GK") {
    formPositionModifier.innerHTML += `

                            <div
                                class="w-full lg:flex lg:flex-row max-md:flex max-md:flex-row max-sm:flex max-sm:flex-col max-md:gap-2 md:flex md:gap-2   ">
                                <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                    <label class="pl-4" for="diving">diving Joueur :</label>
                                    <input type="number" id="" class="divingJ w-full p-2 mb-2 border border-gray-300 rounded-md"
                                        placeholder="diving" value=${players[i].diving} required>

                                </div>
                                <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                    <label class="pl-4" for="handling">handling Joueur :</label>
                                    <input type="number" id="" class="handlingJ w-full p-2 mb-2 border border-gray-300 rounded-md"
                                        placeholder="handling " value=${players[i].handling} required>
                                </div>
                            </div>

                            <div
                                class="w-full lg:flex lg:flex-row max-md:flex max-md:flex-row max-sm:flex max-sm:flex-col max-md:gap-2 md:flex md:gap-2   ">
                                <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                    <label class="pl-4" for="kicking">kicking Joueur :</label>
                                    <input type="number" id="" class="kickingJ w-full p-2 mb-2 border border-gray-300 rounded-md"
                                        placeholder="kicking" value=${players[i].kicking} required>

                                </div>
                                <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                    <label class="pl-4" for="reflexes">reflexes Joueur
                                        :</label>
                                    <input type="number" id="" class="reflexesJ w-full p-2 mb-2 border border-gray-300 rounded-md"
                                        placeholder="reflexes" value=${players[i].reflexes} required>
                                </div>
                            </div>

                            <div
                                class="w-full lg:flex lg:flex-row max-md:flex max-md:flex-row max-sm:flex max-sm:flex-col max-md:gap-2 md:flex md:gap-2   ">
                                <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                    <label class="pl-4" for="speed">speed Joueur
                                        :</label>
                                    <input type="number" id="" class="speedJ w-full p-2 mb-2 border border-gray-300 rounded-md"
                                        placeholder="speed" value=${players[i].speed} required>

                                </div>
                                <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                    <label class="pl-4" for="positioning">positioning Joueur :</label>
                                    <input type="number" id=""
                                        class="positioningJ w-full p-2 mb-2 border border-gray-300 rounded-md"
                                        placeholder="positioning" value=${players[i].positioning} required>
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
                                    placeholder="pace" value=${players[i].pace} required>

                            </div>
                            <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                <label class="pl-4" for="shooting">shooting Joueur :</label>
                                <input type="number" id="" class="shootingJ w-full p-2 mb-2 border border-gray-300 rounded-md"
                                    placeholder="shooting " value=${players[i].shooting} required>
                            </div>
                        </div>

                        <div
                            class="w-full lg:flex lg:flex-row max-md:flex max-md:flex-row max-sm:flex max-sm:flex-col max-md:gap-2 md:flex md:gap-2   ">
                            <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                <label class="pl-4" for="passing">passing Joueur :</label>
                                <input type="number" id="" class="passingJ w-full p-2 mb-2 border border-gray-300 rounded-md"
                                    placeholder="passing" value=${players[i].passing} required>

                            </div>
                            <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                <label class="pl-4" for="dribbling">dribbling Joueur
                                    :</label>
                                <input type="number" id="" class="dribblingJ w-full p-2 mb-2 border border-gray-300 rounded-md"
                                    placeholder="dribbling" value=${players[i].dribbling} required>
                            </div>
                        </div>

                        <div
                            class="w-full lg:flex lg:flex-row max-md:flex max-md:flex-row max-sm:flex max-sm:flex-col max-md:gap-2 md:flex md:gap-2   ">
                            <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                <label class="pl-4" for="defending">defending Joueur
                                    :</label>
                                <input type="number" id="" class="defendingJ w-full p-2 mb-2 border border-gray-300 rounded-md"
                                    placeholder="defending" value=${players[i].defending} required>

                            </div>
                            <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                <label class="pl-4" for="physical">physical Joueur :</label>
                                <input type="number" id="" class="physicalJ w-full p-2 mb-2 border border-gray-300 rounded-md"
                                    placeholder="physical" value=${players[i].physical} required>
                            </div>
                        </div>

            `;
  }
}

// Fonction pour sauvegarder les modifications
function sauvegarderModification() {
  // Récupérer le tableau des joueurs depuis localStorage
  let Joueurs = JSON.parse(localStorage.getItem("players")) || [];
  let index = JSON.parse(localStorage.getItem("index")) || -1;


  console.log("Données récupérées :", Joueurs);

  let playr = {};

  // Récupérer les valeurs du formulaire
  playr.name = document.querySelector(".nameJ").value.trim();
  playr.photo = document.querySelector(".photoJ").value;
  playr.flag = document.querySelector(".flagJ").value;
  playr.nationality = document.querySelector(".nationalityJ").value;
  playr.club = document.querySelector(".clubJ").value;
  playr.logo = document.querySelector(".logoClubJ").value;
  playr.position = document.querySelector(".positionJ").value;
  playr.rating = parseInt(document.querySelector(".ratingJ").value) || 0;

  // Vérifier la position pour récupérer les statistiques spécifiques
  if (playr.position === "GK") {
    playr.diving = parseInt(document.querySelector(".divingJ").value) || 0;
    playr.handling = parseInt(document.querySelector(".handlingJ").value) || 0;
    playr.kicking = parseInt(document.querySelector(".kickingJ").value) || 0;
    playr.reflexes = parseInt(document.querySelector(".reflexesJ").value) || 0;
    playr.speed = parseInt(document.querySelector(".speedJ").value) || 0;
    playr.positioning =
      parseInt(document.querySelector(".positioningJ").value) || 0;
  } else {
    playr.pace = parseInt(document.querySelector(".paceJ").value) || 0;
    playr.shooting = parseInt(document.querySelector(".shootingJ").value) || 0;
    playr.passing = parseInt(document.querySelector(".passingJ").value) || 0;
    playr.dribbling =
      parseInt(document.querySelector(".dribblingJ").value) || 0;
    playr.defending =
      parseInt(document.querySelector(".defendingJ").value) || 0;
    playr.physical = parseInt(document.querySelector(".physicalJ").value) || 0;
  }

  if (index !== -1) {
    Joueurs[index] = playr;
  } else {
    console.error("Le joueur n'existe pas dans le tableau.");
    alert("Modification impossible : joueur non trouvé !");
    return;
  }

  // Enregistrer les modifications dans localStorage
  if (localStorage.setItem("players", JSON.stringify(Joueurs))) {
    console.log("Données tableau modifiées ============= :", Joueurs);
  }
  console.log("Joueur modifié avec succès :", playr);

  if (formModifier) {
    formModifier.classList.remove("hidden");
  } else {
    console.warn("Formulaire de modification introuvable.");
  }

//   console.log("test 1");

let Joueurstrn = JSON.parse(localStorage.getItem("playersTrrn")) || [];


   // Trouver l'index du joueur dans le tableau avec le nom donné
   let ind = Joueurstrn.findIndex((player) => player.name.toLowerCase() === players[index].name.toLowerCase() );

  if( ind !== -1 ){
		afficherCarteRempl(Joueurstrn[ind]);
  }

  metAJourAffichageRmep(Joueurs);

  formModifier.classList.toggle("hidden");

  alert("Les modifications ont été sauvegardées avec succès !");
}

// Fonction pour afficher les joueurs
function metAJourAffichageRmep(Joueurs) {
  const RemplacementCartes = document.getElementById("RemplacementCartes");

  RemplacementCartes.innerHTML = ""; 

  Joueurs.forEach((player) => {
    afficherCarteRempl(player);
  });
}

// Fonction pour afficher les joueurs
function metAJourAffichageTrn(Joueurs) {
  const trrnCartes = document.getElementById("playersCourent");

  trrnCartes.innerHTML = ""; 

  Joueurs.forEach((player) => {
	afficherCarteTrn(player);
  });

}
