// Sélection du formulaire par son tag <form>
const form = document.querySelector("form");

function validNumber(valeurInput) {
  let valueInput = parseInt(valeurInput);
  // alert("typeof valueInput" + typeof valueInput);
  // alert("typeof valeurInput" + typeof valeurInput);
  if (valueInput < 0 || valueInput > 100) {
    alert("Veuillez entrer un nombre compris entre 0 et 100");
    return false;
  }
  return true;
}

let players = [];
if (localStorage.getItem("players")) {
  players = JSON.parse(localStorage.getItem("players"));
}

form.addEventListener("submit", function (e) {
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
    const paceJoueur = paceInput.value;
    //   console.log(paceJoueur);
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

    let DIVplayer = document.getElementById("cartes");

    // afficher la carte de joueur
    // DIVplayer.innerHTML = ``;
    if (positionJoueur === "GK") {
      DIVplayer.innerHTML += `
            <div class="w-40 h-52  bg-no-repeat bg-cover ">
                            <div class="relative w-full h-52  overflow-hidden">

                                <img id="bg" src="images/badge_total_rush.webp" alt="background home"
                                    class="absolute inset-0 lg:w-96 lg:h-full max-sm:w-full  object-cover">

                                <div
                                    class="relative z-10 flex flex-col items-center justify-center h-full text-white  bg-opacity-100">
                                    <!-- partie image de joueur -->
                                    <div class="w-[90%] h-2/3  ">
                                        <div
                                            class="relative w-full h-full  overflow-hidden flex flex-col items-center justify-center ">

                                            <img id="bg" src=${joueur.photo}
                                                alt="photo"
                                                class="absolute top-6 left-6 inset-0 w-28 object-cover">

                                            <div
                                                class="relative z-10 flex flex-col items-start justify-start h-full text-white  bg-opacity-100">
                                                <div class="relative top-10 right-12 text-sm font-bold">
                                                    <p class=" text-center">${joueur.rating}</p>
                                                    <p class="text-[8px] text-center">${joueur.position}</p>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div class="relative bottom-3.5 w-[95%] h-1/3 flex flex-col items-center  ">
                                        <p class=" text-[12px] font-bold text-center">${joueur.name}</p>
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
                                                    <td class="text-center font-bold">${joueur.diving}</td>
                                                    <td class="text-center font-bold">${joueur.handling}</td>
                                                    <td class="text-center font-bold">${joueur.kicking}</td>
                                                    <td class="text-center font-bold">${joueur.reflexes}</td>
                                                    <td class="text-center font-bold">${joueur.speed}</td>
                                                    <td class="text-center font-bold">${joueur.positioning}</td>
                                                </tr>
                                            </table>

                                        </div>
                                        <div class=" flex flex-row justify-center items-center gap-4 w-[90%]">
                                            <img src=${joueur.flag} alt="flag" class="w-6 h-4">
                                            <img src=${joueur.logo} alt="logo"
                                                class="w-4 h-4">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            
            `;
    } else {
      DIVplayer.innerHTML += `
          <div class="w-40 h-52  bg-no-repeat bg-cover ">
                          <div class="relative w-full h-52  overflow-hidden">
      
                              <img id="bg" src="images/badge_total_rush.webp" alt="background home"
                                  class="absolute inset-0 lg:w-96 lg:h-full max-sm:w-full  object-cover">
      
                              <div
                                  class="relative z-10 flex flex-col items-center justify-center h-full text-white  bg-opacity-100">
                                  <!-- partie image de joueur -->
                                  <div class="w-[90%] h-2/3  ">
                                      <div
                                          class="relative w-full h-full  overflow-hidden flex flex-col items-center justify-center ">
      
                                          <img id="bg" src=${joueur.photo}
                                              alt="photo"
                                              class="absolute top-6 left-6 inset-0 w-28 object-cover">
      
                                          <div
                                              class="relative z-10 flex flex-col items-start justify-start h-full text-white  bg-opacity-100">
                                              <div class="relative top-10 right-12 text-sm font-bold">
                                                  <p class=" text-center">${joueur.rating}</p>
                                                  <p class="text-[8px] text-center">${joueur.position}</p>
                                              </div>
      
                                          </div>
                                      </div>
      
                                  </div>
                                  <div class="relative bottom-3.5 w-[95%] h-1/3 flex flex-col items-center  ">
                                      <p class=" text-[12px] font-bold text-center">${joueur.name}</p>
                                      <div class="flex flex-col w-full justify-center items-center ">
                                          <table class=" w-[80%] h-full text-[8px]">
                                              <tr>
                                                  <th class="text-center font-bold">PAC</th>
                                                  <th class="text-center font-bold">SHO</th>
                                                  <th class="text-center font-bold">PAS</th>
                                                  <th class="text-center font-bold">DRI</th>
                                                  <th class="text-center font-bold">DEF</th>
                                                  <th class="text-center font-bold">RHY</th>
                                              </tr>
                                              <tr>
                                                  <td class="text-center font-bold">${joueur.pace}</td>
                                                  <td class="text-center font-bold">${joueur.shooting}</td>
                                                  <td class="text-center font-bold">${joueur.passing}</td>
                                                  <td class="text-center font-bold">${joueur.dribbling}</td>
                                                  <td class="text-center font-bold">${joueur.defending}</td>
                                                  <td class="text-center font-bold">${joueur.physical}</td>
                                              </tr>
                                          </table>
      
                                      </div>
                                      <div class=" flex flex-row justify-center items-center gap-4 w-[90%]">
                                          <img src=${joueur.flag} alt="flag" class="w-6 h-4">
                                          <img src=${joueur.logo} alt="logo"
                                              class="w-4 h-4">
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
          
          `;
    }

    // ajouter la joueur a tableau de joueur , stocker dans localStorage
    // players.push(joueur);
    // localStorage.setItem("players", JSON.stringify(players));

    // vider la formulaire
    form.reset();
    alert("Joueur ajouté avec succès !");
  } else {
    // si une donnée n'est pas valide
    alert("Données pas valides !");
  }
});
