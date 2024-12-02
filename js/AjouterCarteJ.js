// const players = getPlayersFromLocalStorage();
localStorage.setItem("players", JSON.stringify(players));

// ===========================================================================================================

// tableaux de joueurs en terrain et de remplacements
let playersTrrn = [];
if (localStorage.getItem("playersTrrn")) {
  playersTrrn = JSON.parse(localStorage.getItem("playersTrrn"));
}

let playersRemp = [];
if (localStorage.getItem("playersRemp")) {
  playersRemp = JSON.parse(localStorage.getItem("playersRemp"));
}

// Sélection du formulaire par son tag <form>
const form = document.getElementById("addPlayer");
// let n = 12 ;
function validNumber(valeurInput) {
  let valueInput = parseInt(valeurInput);

  if (valueInput < 0 || valueInput > 100) {
    alert("Veuillez entrer un nombre compris entre 0 et 100");
    return false;
  }
  return true;
}

// Listner pour le formilaire d'ajout des joueurs
form.addEventListener("click", function (e) {
  e.preventDefault();
  var isValid = true;
  // nom de joueur ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const nameInput = document.getElementById("nomJoueur");
  const name = nameInput.value;
  let regex = /^[A-Za-z]{2,}([ -][A-Za-z]{2,})*$/;
  // console.log(name);
  if (name.trim().length < 4 || !regex.test(name)) {
    nameInput.style.backgroundColor = "red";
    isValid = false;
  }

  // photo de joueur ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const photoInput = document.getElementById("photoJoueur");
  const photo = photoInput.value;
  //   console.log(photo);
  if (photo.trim().length < 10) {
    photoInput.style.backgroundColor = "red";
    isValid = false;
  }

  // nationality de joueur ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const nationalityInput = document.getElementById("nationalityJoueur");
  const nationality = nationalityInput.value;
  let regex_2 = /^[A-Za-z]{2,}$/; // regex vérifier si le nom de la nationalité est valid

  //   console.log(nationality);
  if (!regex_2.test(nationality)) {
    nationalityInput.style.backgroundColor = "red";
    isValid = false;
  }

  // flag de payer de joueur ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const flagInput = document.getElementById("flagJoueur");
  const flag = flagInput.value;
  //   console.log(flag);
  if (flag.trim().length < 10) {
    flagInput.style.backgroundColor = "red";
    isValid = false;
  }

  // club de joueur +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const clubInput = document.getElementById("clubJoueur");
  const club = clubInput.value;
  //   console.log(club);
  if (club.trim().length < 2) {
    clubInput.style.backgroundColor = "red";
    isValid = false;
  }

  // logo de joueur +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const logoInput = document.getElementById("logoClubJoueur");
  const logo = logoInput.value;
  //   console.log(logo);
  if (logo.trim().length < 2) {
    logoInput.style.backgroundColor = "red";
    isValid = false;
  }

  // rating de joueur +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const ratingInput = document.getElementById("ratingJoueur");
  const ratingJoueur = ratingInput.value;
  //   console.log(ratingJoueur);
  if (!validNumber(ratingJoueur)) {
    ratingInput.style.backgroundColor = "red";
    isValid = false;
  }

  // position de joueur +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const positionInput = document.getElementById("positionJoueur");
  const positionJoueur = positionInput.value;
  //   console.log(positionJoueur);
  if (positionJoueur.trim().length === 0) {
    positionInput.style.backgroundColor = "red";
    isValid = false;
  }

  var joueur;

  if (positionJoueur === "GK") {
    // diving de joueur +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const divingInput = document.getElementById("divingJoueur");
    const divingJoueur = divingInput.value;
    //   console.log(divingJoueur);
    if (!validNumber(divingJoueur)) {
      divingInput.style.backgroundColor = "red";
      isValid = false;
    }

    // handling de joueur +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const handlingInput = document.getElementById("handlingJoueur");
    const handlingJoueur = handlingInput.value;
    //   console.log(handlingJoueur);
    if (!validNumber(handlingJoueur)) {
      handlingInput.style.backgroundColor = "red";
      isValid = false;
    }

    // kicking de joueur ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const kickingInput = document.getElementById("kickingJoueur");
    const kickingJoueur = kickingInput.value;
    //   console.log(kickingJoueur);
    if (!validNumber(kickingJoueur)) {
      kickingInput.style.backgroundColor = "red";
      isValid = false;
    }

    // reflexes de joueur +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const reflexesInput = document.getElementById("reflexesJoueur");
    const reflexesJoueur = reflexesInput.value;
    //   console.log(reflexesJoueur);
    if (!validNumber(reflexesJoueur)) {
      reflexesInput.style.backgroundColor = "red";
      isValid = false;
    }

    // speed de joueur ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const speedInput = document.getElementById("speedJoueur");
    const speedJoueur = speedInput.value;
    //   console.log(speedJoueur);
    if (!validNumber(speedJoueur)) {
      speedInput.style.backgroundColor = "red";
      isValid = false;
    }

    // positioning de joueur ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const positioningInput = document.getElementById("positioningJoueur");
    const positioningJoueur = positioningInput.value;
    //   console.log(positioningJoueur);
    if (!validNumber(positioningJoueur)) {
      positioningInput.style.backgroundColor = "red";
      isValid = false;
    }

    joueur = {
      name: name,
      photo: photo,
      position: positionJoueur,
      nationality: nationality,
      flag: flag,
      club: club,
      logo: logo,
      rating: ratingJoueur,
      diving: divingJoueur,
      handling: handlingJoueur,
      kicking: kickingJoueur,
      reflexes: reflexesJoueur,
      speed: speedJoueur,
      positioning: positioningJoueur,
    };
  } else {
    // pace de joueur +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const paceInput = document.getElementById("paceJoueur");
    let paceJoueur = paceInput.value;
    console.log(paceJoueur);
    if (!validNumber(paceJoueur)) {
      paceInput.style.backgroundColor = "red";
      isValid = false;
    }

    // shooting de joueur +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const shootingInput = document.getElementById("shootingJoueur");
    const shootingJoueur = shootingInput.value;
    //   console.log(shootingJoueur);
    if (!validNumber(shootingJoueur)) {
      shootingInput.style.backgroundColor = "red";
      isValid = false;
    }

    // passing de joueur ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const passingInput = document.getElementById("passingJoueur");
    const passingJoueur = passingInput.value;
    //   console.log(passingJoueur);
    if (!validNumber(passingJoueur)) {
      passingInput.style.backgroundColor = "red";
      isValid = false;
    }

    // dribbling de joueur ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const dribblingInput = document.getElementById("dribblingJoueur");
    const dribblingJoueur = dribblingInput.value;
    //   console.log(dribblingJoueur);
    if (!validNumber(dribblingJoueur)) {
      dribblingInput.style.backgroundColor = "red";
      isValid = false;
    }

    // defending de joueur ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const defendingInput = document.getElementById("defendingJoueur");
    const defendingJoueur = defendingInput.value;
    //   console.log(defendingJoueur);
    if (!validNumber(defendingJoueur)) {
      defendingInput.style.backgroundColor = "red";
      isValid = false;
    }

    // phisical de joueur +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const physicalInput = document.getElementById("physicalJoueur");
    const physicalJoueur = physicalInput.value;
    //   console.log(physicalJoueur);
    if (!validNumber(physicalJoueur)) {
      physicalInput.style.backgroundColor = "red";
      isValid = false;
    }

    joueur = {
      name: name,
      photo: photo,
      position: positionJoueur,
      nationality: nationality,
      flag: flag,
      club: club,
      logo: logo,
      rating: ratingJoueur,
      pace: paceJoueur,
      shooting: shootingJoueur,
      passing: passingJoueur,
      dribbling: dribblingJoueur,
      defending: defendingJoueur,
      physical: physicalJoueur,
    };
  }

  if (isValid) {
    console.log(joueur);

    function afficherCarteTerrain(DivCarte) {
      if (positionJoueur === "GK") {
        DivCarte.innerHTML = `
                            <!-- --------------------------------------------------------------------- -->
                                <div class="flex h-2/3 justify-center ">
                                    <div class="h-full w-4/5   bg-cover  bg-center justify-end items-center flex flex-row">
                                        <div class=" w-1/4 text-sm font-bold flex flex-col items-start justify-start ">
                                            <p class="jrating text-center">${joueur.rating}</p>
                                            <p class="jposition text-[8px] text-center">${joueur.position}</p>
                                        </div>
                                        <img src=${joueur.photo} alt="" class="jimg w-3/4 border rounded-full">

                                    </div>

                                </div>
                              <div class="relative top-4 w-[95%] h-1/3 flex flex-col items-center  ">
                                    <p class="name text-[12px] font-bold text-center">${joueur.name}</p>
                                    <div class="flex flex-col w-full justify-center items-center ">
                                        <table class=" w-[80%] h-full text-[8px]">
                                            <tr>
                                                <th class="text-center font-bold">DV</th>
                                                <th class="text-center font-bold">HDL</th>
                                                <th class="text-center font-bold">KCK</th>
                                                <th class="text-center font-bold">REF</th>
                                                <th class="text-center font-bold">SPD</th>
                                                <th class="text-center font-bold">POS</th>
                                            </tr>
                                            <tr>
                                                <td class="jdiving text-center font-bold">${joueur.diving}</td>
                                                <td class="jhandling text-center font-bold">${joueur.handling}</td>
                                                <td class="jkiking text-center font-bold">${joueur.kicking}</td>
                                                <td class="jreflexes text-center font-bold">${joueur.reflexes}</td>
                                                <td class="jspeed text-center font-bold">${joueur.speed}</td>
                                                <td class="jpositioning text-center font-bold">${joueur.positioning}</td>
                                            </tr>
                                        </table>

                                    </div>
                                    <div class=" flex flex-row justify-center items-center gap-4 w-[90%]">
                                        <img src=${joueur.flag} alt="flag" class="jflag w-6 h-4">
                                        <img src=${joueur.logo} alt="logo" class="jlogo w-4 h-4">
                                    </div>
                                </div>



                                <!-- --------------------------------------------------------------------- -->
                `;
      } else {
        DivCarte.innerHTML = `
                            <!-- --------------------------------------------------------------------- -->
                                <div class="flex h-2/3 justify-center ">
                                    <div class="h-full w-4/5   bg-cover  bg-center justify-end items-center flex flex-row">
                                        <div class=" w-1/4 text-sm font-bold flex flex-col items-start justify-start ">
                                            <p class="jrating text-center">${joueur.rating}</p>
                                            <p class="jposition text-[8px] text-center">${joueur.position}</p>
                                        </div>
                                        <img src=${joueur.photo} alt="" class="jimg w-3/4 border rounded-full">

                                    </div>

                                </div>
                              <div class="relative top-4 w-[95%] h-1/3 flex flex-col items-center  ">
                                    <p class="name text-[12px] font-bold text-center">${joueur.name}</p>
                                    <div class="flex flex-col w-full justify-center items-center ">
                                        <table class=" w-[80%] h-full text-[8px]">
                                            <tr>
                                                <th class="text-center font-bold">PAC</th>
                                                <th class="text-center font-bold">SHO</th>
                                                <th class="text-center font-bold">PAS</th>
                                                <th class="text-center font-bold">DRI</th>
                                                <th class="text-center font-bold">DEF</th>
                                                <th class="text-center font-bold">PHY</th>
                                            </tr>
                                            <tr>
                                                <td class="jpace text-center font-bold">${joueur.pace}</td>
                                                <td class="jshooting text-center font-bold">${joueur.shooting}</td>
                                                <td class="jpassing text-center font-bold">${joueur.passing}</td>
                                                <td class="jdribbling text-center font-bold">${joueur.dribbling}</td>
                                                <td class="jdefending text-center font-bold">${joueur.defending}</td>
                                                <td class="jphysical text-center font-bold">${joueur.physical}</td>
                                            </tr>
                                        </table>

                                    </div>
                                    <div class=" flex flex-row justify-center items-center gap-4 w-[90%]">
                                        <img src=${joueur.flag} alt="flag" class="jflag w-6 h-4">
                                        <img src=${joueur.logo} alt="logo" class="jlogo w-4 h-4">
                                    </div>
                                </div>



                                <!-- --------------------------------------------------------------------- -->
                `;
      }

      playersTrrn.push(joueur);
      localStorage.setItem("playersTrrn", JSON.stringify(playersTrrn));
    }

    function afficherCarteRemplacement() {
      alert("Ajout la carte au remplacement !!!!");
      const RemplacementCartes = document.getElementById("RemplacementCartes");
      if (positionJoueur === "GK") {
        RemplacementCartes.innerHTML += `
                        <button data-id="" class=" card-rempl card-details h-60 w-[95%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "${joueur.position}">
                            <div id="" class="gk w-full h-max  mx-3 text-white text-center font-bold">
                            <!-- --------------------------------------------------------------------- -->

                                <div class="flex h-2/3 justify-center ">
                                    <div class="h-full w-4/5   bg-cover  bg-center justify-end items-center flex flex-row">
                                        <div class=" w-1/4 text-sm font-bold flex flex-col items-start justify-start ">
                                            <p class="jrating text-center">${joueur.rating}</p>
                                            <p class="jposition text-[8px] text-center">${joueur.position}</p>
                                        </div>
                                        <img src=${joueur.photo} alt="" class="jimg w-3/4 border rounded-full">

                                    </div>

                                </div>
                              <div class="relative top-4 w-[95%] h-1/3 flex flex-col items-center  ">
                                    <p class="name text-[12px] font-bold text-center">${joueur.name}</p>
                                    <div class="flex flex-col w-full justify-center items-center ">
                                        <table class=" w-[80%] h-full text-[8px]">
                                            <tr>
                                                <th class="text-center font-bold">DV</th>
                                                <th class="text-center font-bold">HDL</th>
                                                <th class="text-center font-bold">KCK</th>
                                                <th class="text-center font-bold">REF</th>
                                                <th class="text-center font-bold">SPD</th>
                                                <th class="text-center font-bold">POS</th>
                                            </tr>
                                            <tr>
                                                <td class="jdiving text-center font-bold">${joueur.diving}</td>
                                                <td class="jhandling text-center font-bold">${joueur.handling}</td>
                                                <td class="jkiking text-center font-bold">${joueur.kicking}</td>
                                                <td class="jreflexes text-center font-bold">${joueur.reflexes}</td>
                                                <td class="jspeed text-center font-bold">${joueur.speed}</td>
                                                <td class="jpositioning text-center font-bold">${joueur.positioning}</td>
                                            </tr>
                                        </table>

                                    </div>
                                    <div class=" flex flex-row justify-center items-center gap-4 w-[90%]">
                                        <img src=${joueur.flag} alt="flag" class="jflag w-6 h-4">
                                        <img src=${joueur.logo} alt="logo" class="jlogo w-4 h-4">
                                    </div>
                                </div>



                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </button>
                `;
      } else {
        RemplacementCartes.innerHTML += `
                        <button data-id="" class=" card-rempl card-details h-60 w-[95%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "${
                          joueur.position
                        }">
                            <div id="" class="${positionJoueur.toLowerCase()} w-full h-max  mx-3 text-white text-center font-bold">
                            <!-- --------------------------------------------------------------------- -->
                                <div class="flex h-2/3 justify-center ">
                                    <div class="h-full w-4/5   bg-cover  bg-center justify-end items-center flex flex-row">
                                        <div class=" w-1/4 text-sm font-bold flex flex-col items-start justify-start ">
                                            <p class="jrating text-center">${
                                              joueur.rating
                                            }</p>
                                            <p class="jposition text-[8px] text-center">${
                                              joueur.position
                                            }</p>
                                        </div>
                                        <img src=${
                                          joueur.photo
                                        } alt="" class="jimg w-3/4 border rounded-full">

                                    </div>

                                </div>
                              <div class="relative top-4 w-[95%] h-1/3 flex flex-col items-center  ">
                                    <p class="name text-[12px] font-bold text-center">${
                                      joueur.name
                                    }</p>
                                    <div class="flex flex-col w-full justify-center items-center ">
                                        <table class=" w-[80%] h-full text-[8px]">
                                            <tr>
                                                <th class="text-center font-bold">PAC</th>
                                                <th class="text-center font-bold">SHO</th>
                                                <th class="text-center font-bold">PAS</th>
                                                <th class="text-center font-bold">DRI</th>
                                                <th class="text-center font-bold">DEF</th>
                                                <th class="text-center font-bold">PHY</th>
                                            </tr>
                                            <tr>
                                                <td class="jpace text-center font-bold">${
                                                  joueur.pace
                                                }</td>
                                                <td class="jshooting text-center font-bold">${
                                                  joueur.shooting
                                                }</td>
                                                <td class="jpassing text-center font-bold">${
                                                  joueur.passing
                                                }</td>
                                                <td class="jdribbling text-center font-bold">${
                                                  joueur.dribbling
                                                }</td>
                                                <td class="jdefending text-center font-bold">${
                                                  joueur.defending
                                                }</td>
                                                <td class="jphysical text-center font-bold">${
                                                  joueur.physical
                                                }</td>
                                            </tr>
                                        </table>

                                    </div>
                                    <div class=" flex flex-row justify-center items-center gap-4 w-[90%]">
                                        <img src=${
                                          joueur.flag
                                        } alt="flag" class="jflag w-6 h-4">
                                        <img src=${
                                          joueur.logo
                                        } alt="logo" class="jlogo w-4 h-4">
                                    </div>
                                </div>

                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </button>
                `;
      }

      playersRemp.push(joueur);
      localStorage.setItem("playersRemp", JSON.stringify(playersRemp));
    }

    function placerJoueur(DIVplayer) {
      if (DIVplayer.length > 0) {
        let cartePlacee = false;

        DIVplayer.forEach((posi) => {
          if (!cartePlacee && posi.innerText === "") {
            afficherCarteTerrain(posi);
            cartePlacee = true; // Stopper après avoir placé une carte
          }
        });

        // Si aucune place vide trouvée, afficher une carte de remplacement
        if (!cartePlacee) {
          afficherCarteRemplacement();
        }
      } else {
        afficherCarteRemplacement(); // Aucun élément avec la classe 'st'
      }
    }

    // }
    // else{
    let DIVplayer;
    switch (positionJoueur) {
      case "GK":
        if (document.querySelectorAll(".gk")) {
          DIVplayer = document.querySelectorAll(".gk");
          placerJoueur(DIVplayer);
        } else {
          afficherCarteRemplacement();
        }
        break;

      case "CB":
        if (document.querySelectorAll(".cb")) {
          DIVplayer = document.querySelectorAll(".cb");
          placerJoueur(DIVplayer);
        } else {
          afficherCarteRemplacement();
        }
        break;

      case "RB":
        if (document.querySelectorAll(".rb")) {
          DIVplayer = document.querySelectorAll(".rb");
          placerJoueur(DIVplayer);
        } else {
          afficherCarteRemplacement();
        }
        break;

      case "LB":
        if (document.querySelectorAll(".lb")) {
          DIVplayer = document.querySelectorAll(".lb");
          placerJoueur(DIVplayer);
        } else {
          afficherCarteRemplacement();
        }
        break;

      case "CM":
        if (document.querySelectorAll(".cm")) {
          DIVplayer = document.querySelectorAll(".cm");
          placerJoueur(DIVplayer);
        } else {
          afficherCarteRemplacement();
        }
        break;

      case "RM":
        if (document.querySelectorAll(".rm")) {
          DIVplayer = document.querySelectorAll(".rm");
          placerJoueur(DIVplayer);
        } else {
          afficherCarteRemplacement();
        }
        break;

      case "LM":
        if (document.querySelectorAll(".lm")) {
          DIVplayer = document.querySelectorAll(".lm");
          placerJoueur(DIVplayer);
        } else {
          afficherCarteRemplacement();
        }
        break;

      case "LW":
        if (document.querySelectorAll(".lw")) {
          DIVplayer = document.querySelectorAll(".lw");
          placerJoueur(DIVplayer);
        } else {
          afficherCarteRemplacement();
        }
        break;

      case "RW":
        if (document.querySelectorAll(".rw")) {
          DIVplayer = document.querySelectorAll(".rw");
          placerJoueur(DIVplayer);
        } else {
          afficherCarteRemplacement();
        }
        break;

      case "ST":
        DIVplayer = document.querySelectorAll(".st");
        placerJoueur(DIVplayer);
        break;
    }

    // ajouter la joueur a tableau de joueur , stocker dans localStorage
    players.push(joueur);
    localStorage.setItem("players", JSON.stringify(players));

    // vider la formulaire
    form.reset();
    alert("Joueur ajouté avec succès !");
  } else {
    // si une donnée n'est pas valide
    alert("Données pas valides !");
    form.reset();
  }
});
