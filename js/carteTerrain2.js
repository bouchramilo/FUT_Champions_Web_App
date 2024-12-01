const players = [
  {
    name: "Lionel Messi",
    photo: "https://cdn.sofifa.net/players/158/023/25_120.png",
    position: "RW",
    nationality: "Argentina",
    flag: "https://cdn.sofifa.net/flags/ar.png",
    club: "Inter Miami",
    logo: "https://cdn.sofifa.net/meta/team/239235/120.png",
    rating: 93,
    pace: 85,
    shooting: 92,
    passing: 91,
    dribbling: 95,
    defending: 35,
    physical: 65
  },
  {
    name: "Cristiano Ronaldo",
    photo: "https://cdn.sofifa.net/players/020/801/25_120.png",
    position: "ST",
    nationality: "Portugal",
    flag: "https://cdn.sofifa.net/flags/pt.png",
    club: "Al Nassr",
    logo: "https://cdn.sofifa.net/meta/team/2506/120.png",
    rating: 91,
    pace: 84,
    shooting: 94,
    passing: 82,
    dribbling: 87,
    defending: 34,
    physical: 77
  },
  {
    name: "Kevin De Bruyne",
    photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
    position: "CM",
    nationality: "Belgium",
    flag: "https://cdn.sofifa.net/flags/be.png",
    club: "Manchester City",
    logo: "https://cdn.sofifa.net/players/239/085/25_120.png",
    rating: 91,
    pace: 74,
    shooting: 86,
    passing: 93,
    dribbling: 88,
    defending: 64,
    physical: 78
  },
  {
    name: "Kylian Mbappé",
    photo: "https://cdn.sofifa.net/players/231/747/25_120.png",
    position: "ST",
    nationality: "France",
    flag: "https://cdn.sofifa.net/flags/fr.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 92,
    pace: 97,
    shooting: 89,
    passing: 80,
    dribbling: 92,
    defending: 39,
    physical: 77
  },
  {
    name: "Virgil van Dijk",
    photo: "https://cdn.sofifa.net/players/203/376/25_120.png",
    position: "CB",
    nationality: "Netherlands",
    flag: "https://cdn.sofifa.net/flags/nl.png",
    club: "Liverpool",
    logo: "https://cdn.sofifa.net/meta/team/8/120.png",
    rating: 90,
    pace: 75,
    shooting: 60,
    passing: 70,
    dribbling: 72,
    defending: 92,
    physical: 86
  },
  {
    name: "Antonio Rudiger",
    photo: "https://cdn.sofifa.net/players/205/452/25_120.png",
    position: "CB",
    nationality: "Germany",
    flag: "https://cdn.sofifa.net/flags/de.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 88,
    pace: 82,
    shooting: 55,
    passing: 73,
    dribbling: 70,
    defending: 86,
    physical: 86
  },
  {
    name: "Neymar Jr",
    photo: "https://cdn.sofifa.net/players/190/871/25_120.png",
    position: "LW",
    nationality: "Brazil",
    flag: "https://cdn.sofifa.net/flags/br.png",
    club: "Al-Hilal",
    logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
    rating: 90,
    pace: 91,
    shooting: 83,
    passing: 86,
    dribbling: 94,
    defending: 37,
    physical: 61
  },
  {
    name: "Mohamed Salah",
    photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
    position: "RW",
    nationality: "Egypt",
    flag: "https://cdn.sofifa.net/flags/eg.png",
    club: "Liverpool",
    logo: "https://cdn.sofifa.net/meta/team/8/120.png",
    rating: 89,
    pace: 93,
    shooting: 87,
    passing: 81,
    dribbling: 90,
    defending: 45,
    physical: 75
  },
  {
    name: "Joshua Kimmich",
    photo: "https://cdn.sofifa.net/players/212/622/25_120.png",
    position: "CM",
    nationality: "Germany",
    flag: "https://cdn.sofifa.net/flags/de.png",
    club: "Bayern Munich",
    logo: "https://cdn.sofifa.net/meta/team/503/120.png",
    rating: 89,
    pace: 70,
    shooting: 75,
    passing: 88,
    dribbling: 84,
    defending: 84,
    physical: 81
  },
  {
    name: "Jan Oblak",
    photo: "https://cdn.sofifa.net/players/200/389/25_120.png",
    position: "GK",
    nationality: "Slovenia",
    flag: "https://cdn.sofifa.net/flags/si.png",
    club: "Atletico Madrid",
    logo: "https://cdn.sofifa.net/meta/team/7980/120.png",
    rating: 91,
    diving: 89,
    handling: 90,
    kicking: 78,
    reflexes: 92,
    speed: 50,
    positioning: 88
  },
  {
    name: "Luka Modrić",
    photo: "https://cdn.sofifa.net/players/177/003/25_120.png",
    position: "CM",
    nationality: "Croatia",
    flag: "https://cdn.sofifa.net/flags/hr.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 88,
    pace: 74,
    shooting: 78,
    passing: 89,
    dribbling: 90,
    defending: 72,
    physical: 65
  },
  {
    name: "Vinicius Junior",
    photo: "https://cdn.sofifa.net/players/238/794/25_120.png",
    position: "LW",
    nationality: "Brazil",
    flag: "https://cdn.sofifa.net/flags/br.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 89,
    pace: 91,
    shooting: 88,
    passing: 85,
    dribbling: 94,
    defending: 39,
    physical: 61
  },
  {
    name: "Brahim Diáz",
    photo: "https://cdn.sofifa.net/players/231/410/25_120.png",
    position: "LW",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 82,
    pace: 85,
    shooting: 74,
    passing: 78,
    dribbling: 85,
    defending: 31,
    physical: 56
  },
  {
    name: "Karim Benzema",
    photo: "https://cdn.sofifa.net/players/165/153/25_120.png",
    position: "ST",
    nationality: "France",
    flag: "https://cdn.sofifa.net/flags/fr.png",
    club: "Al-Ittihad",
    logo :"https://cdn.sofifa.net/meta/team/476/120.png",
    rating: 90,
    pace: 77,
    shooting: 90,
    passing: 83,
    dribbling: 88,
    defending: 40,
    physical: 78
  },
  {
    name: "Erling Haaland",
    photo: "https://cdn.sofifa.net/players/239/085/25_120.png",
    position: "ST",
    nationality: "Norway",
    flag: "https://cdn.sofifa.net/flags/no.png",
    club: "Manchester City",
    logo: "https://cdn.sofifa.net/players/239/085/25_120.png",
    rating: 91,
    pace: 89,
    shooting: 94,
    passing: 65,
    dribbling: 80,
    defending: 45,
    physical: 88
  },
  {
    name: "N'Golo Kanté",
    photo: "https://cdn.sofifa.net/players/215/914/25_120.png",
    position: "CM",
    nationality: "France",
    flag: "https://cdn.sofifa.net/flags/fr.png",
    club: "Al-Ittihad",
    logo: "https://cdn.sofifa.net/meta/team/476/120.png",
    rating: 87,
    pace: 77,
    shooting: 66,
    passing: 75,
    dribbling: 82,
    defending: 88,
    physical: 82
  },
  {
    name: "Alphonso Davies",
    photo: "https://cdn.sofifa.net/players/234/396/25_120.png",
    position: "LB",
    nationality: "Canada",
    flag: "https://cdn.sofifa.net/flags/ca.png",
    club: "Bayern Munich",
    logo: "https://cdn.sofifa.net/meta/team/503/120.png",
    rating: 84,
    pace: 96,
    shooting: 68,
    passing: 77,
    dribbling: 82,
    defending: 76,
    physical: 77
  },
  {
    name: "Yassine Bounou",
    photo: "https://cdn.sofifa.net/players/209/981/25_120.png",
    position: "GK",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Al-Hilal",
    logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
    rating: 84,
    diving: 81,
    handling: 82,
    kicking: 77,
    reflexes: 86,
    speed: 38,
    positioning: 83
  },
  {
    name: "Bruno Fernandes",
    photo: "https://cdn.sofifa.net/players/212/198/25_120.png",
    position: "CM",
    nationality: "Portugal",
    flag: "https://cdn.sofifa.net/flags/pt.png",
    club: "Manchester United",
    logo: "https://cdn.sofifa.net/meta/team/14/120.png",
    rating: 88,
    pace: 75,
    shooting: 85,
    passing: 89,
    dribbling: 84,
    defending: 69,
    physical: 77
  },
  {
    name: "Jadon Sancho",
    photo: "https://cdn.sofifa.net/players/233/049/25_120.png",
    position: "LW",
    nationality: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    club: "Manchester United",
    logo: "https://cdn.sofifa.net/meta/team/14/120.png",
    rating: 84,
    pace: 85,
    shooting: 74,
    passing: 78,
    dribbling: 88,
    defending: 34,
    physical: 63
  },
  {
    name: "Trent Alexander-Arnold",
    photo: "https://cdn.sofifa.net/players/231/281/25_120.png",
    position: "RB",
    nationality: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    club: "Liverpool",
    logo: "https://cdn.sofifa.net/meta/team/8/120.png",
    rating: 87,
    pace: 76,
    shooting: 66,
    passing: 89,
    dribbling: 80,
    defending: 79,
    physical: 71
  },
  {
    name: "Achraf Hakimi",
    photo: "https://cdn.sofifa.net/players/235/212/25_120.png",
    position: "RB",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Paris Saint-Germain",
    logo: "https://cdn.sofifa.net/meta/team/591/120.png",
    rating: 84,
    pace: 91,
    shooting: 76,
    passing: 80,
    dribbling: 80,
    defending: 75,
    physical: 78
  },
  {
    name: "Youssef En-Nesyri",
    photo: "https://cdn.sofifa.net/players/235/410/25_120.png",
    position: "ST",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Fenerbahçe",
    logo: "https://cdn.sofifa.net/meta/team/88/120.png",
    rating: 83,
    pace: 82,
    shooting: 82,
    passing: 63,
    dribbling: 77,
    defending: 36,
    physical: 80
  },
  {
    name: "Noussair Mazraoui",
    photo: "https://cdn.sofifa.net/players/236/401/25_120.png",
    position: "LB",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Manchester United",
    logo: "https://cdn.sofifa.net/meta/team/14/120.png",
    rating: 81,
    pace: 78,
    shooting: 66,
    passing: 77,
    dribbling: 83,
    defending: 77,
    physical: 71
  },
  {
    name: "Ismael Saibari",
    photo: "https://cdn.sofifa.net/players/259/480/25_120.png",
    position: "CM",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "PSV",
    logo: "https://cdn.sofifa.net/meta/team/682/120.png",
    rating: 83,
    pace: 89,
    shooting: 78,
    passing: 80,
    dribbling: 86,
    defending: 55,
    physical: 84
  },
  {
    name: "Gianluigi Donnarumma",
    photo: "https://cdn.sofifa.net/players/230/621/25_120.png",
    position: "GK",
    nationality: "Italy",
    flag: "https://cdn.sofifa.net/flags/it.png",
    club: "Paris Saint-Germain",
    logo: "https://cdn.sofifa.net/meta/team/591/120.png",
    rating: 89,
    diving: 88,
    handling: 84,
    kicking: 75,
    reflexes: 90,
    speed: 50,
    positioning: 85
  }
]
localStorage.setItem("players", JSON.stringify(players));
// ===========================================================================================================

// let players = [];
// if (localStorage.getItem("players")) {
//   players = JSON.parse(localStorage.getItem("players"));
// }

let playersTrrn = [];
if (localStorage.getItem("playersTrrn")) {
  playersTrrn = JSON.parse(localStorage.getItem("playersTrrn"));
}

let playersRemp = [];
if (localStorage.getItem("playersRemp")) {
  playersRemp = JSON.parse(localStorage.getItem("playersRemp"));
}



// Sélection du formulaire par son tag <form>
const form = document.querySelector("form");
// let n = 12 ;
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

// Listner pour le formilaire d'ajout des joueurs
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

    // let DIVplayer = document.getElementById("cartes");

    // afficher la carte de joueur
    // DIVplayer.innerHTML = ``;
    // if (positionJoueur === "GK") {
    //     let DIVGK = document.getElementById("gk");



    function afficherCarteTerrain(DivCarte) {
      if (positionJoueur === "GK") {

        // DivCarte.className = "card-rempl";
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

    // let n = 12 ;

    function afficherCarteRemplacement() {
      alert("Ajout la carte au remplacement !!!!");
      const RemplacementCartes = document.getElementById("RemplacementCartes");
      if (positionJoueur === "GK") {
        RemplacementCartes.innerHTML += `
                        <button data-id="" class=" card-rempl h-60 w-[95%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "${joueur.position}">
                            <div id="cb1" class="w-full h-max  mx-3 text-white text-center font-bold">
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
                        <button data-id="" class=" card-rempl h-60 w-[95%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "${joueur.position}">
                            <div id="cb1" class="w-full h-max  mx-3 text-white text-center font-bold">
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
                            </div>
                        </button>
                `;
                
      }

      playersRemp.push(joueur);
      localStorage.setItem("playersRemp", JSON.stringify(playersRemp));
    }

    // }
    // else{
    let DIVplayer;
    switch (positionJoueur) {
      case "GK":
        if (document.getElementById("gk")) {
          DIVplayer = document.getElementById("gk");
          if (DIVplayer.innerText === "") {
            afficherCarteTerrain(DIVplayer);
            // alert("vide");
          } else {
            afficherCarteRemplacement();
            alert("pas vide");
          }
        } else {
          afficherCarteRemplacement();
        }
        break;

      case "CB1":
        if (document.getElementById("cb1")) {
          DIVplayer = document.getElementById("cb1");
          if (DIVplayer.innerText === "") {
            afficherCarteTerrain(DIVplayer);
            // alert("vide");
          } else {
            afficherCarteRemplacement();
            // alert("pas vide");
          }
        } else {
          afficherCarteRemplacement();
        }
        break;

      case "CB2":
        if (document.getElementById("cb2")) {
          DIVplayer = document.getElementById("cb2");
          if (DIVplayer.innerText === "") {
            afficherCarteTerrain(DIVplayer);
            // alert("vide");
          } else {
            afficherCarteRemplacement();
            // alert("pas vide");
          }
        } else {
          afficherCarteRemplacement();
        }
        break;

      case "RB":
        if (document.getElementById("rb")) {
          DIVplayer = document.getElementById("rb");
          if (DIVplayer.innerText === "") {
            afficherCarteTerrain(DIVplayer);
            // alert("vide");
          } else {
            afficherCarteRemplacement();
            // alert("pas vide");
          }
        } else {
          afficherCarteRemplacement();
        }
        break;

      case "LB":
        if (document.getElementById("lb")) {
          DIVplayer = document.getElementById("lb");
          if (DIVplayer.innerText === "") {
            afficherCarteTerrain(DIVplayer);
            // alert("vide");
          } else {
            afficherCarteRemplacement();
            // alert("pas vide");
          }
        } else {
          afficherCarteRemplacement();
        }
        break;

      case "CM1":
        if (document.getElementById("cm1")) {
          DIVplayer = document.getElementById("cm1");
          if (DIVplayer.innerText === "") {
            afficherCarteTerrain(DIVplayer);
            // alert("vide");
          } else {
            afficherCarteRemplacement();
            // alert("pas vide");
          }
        } else {
          afficherCarteRemplacement();
        }
        break;

      case "CM2":
        if (document.getElementById("cm2")) {
          DIVplayer = document.getElementById("cm2");
          if (DIVplayer.innerText === "") {
            afficherCarteTerrain(DIVplayer);
            // alert("vide");
          } else {
            afficherCarteRemplacement();
            // alert("pas vide");
          }
        } else {
          afficherCarteRemplacement();
        }
        break;

      case "CM3":
        if (document.getElementById("cm3")) {
          DIVplayer = document.getElementById("cm3");
          if (DIVplayer.innerText === "") {
            afficherCarteTerrain(DIVplayer);
            // alert("vide");
          } else {
            afficherCarteRemplacement();
            // alert("pas vide");
          }
        } else {
          afficherCarteRemplacement();
        }
        break;

      case "RM":
        if (document.getElementById("rm")) {
          DIVplayer = document.getElementById("rm");
          if (DIVplayer.innerText === "") {
            afficherCarteTerrain(DIVplayer);
            // alert("vide");
          } else {
            afficherCarteRemplacement();
            // alert("pas vide");
          }
        } else {
          afficherCarteRemplacement();
        }
        break;

      case "LM":
        if (document.getElementById("lm")) {
          DIVplayer = document.getElementById("lm");
          if (DIVplayer.innerText === "") {
            afficherCarteTerrain(DIVplayer);
            // alert("vide");
          } else {
            afficherCarteRemplacement();
            // alert("pas vide");
          }
        } else {
          afficherCarteRemplacement();
        }
        break;

      case "LW":
        if (document.getElementById("lw")) {
          DIVplayer = document.getElementById("lw");
          if (DIVplayer.innerText === "") {
            afficherCarteTerrain(DIVplayer);
            // alert("vide");
          } else {
            afficherCarteRemplacement();
            // alert("pas vide");
          }
        } else {
          afficherCarteRemplacement();
        }
        break;

      case "RW":
        if (document.getElementById("rw")) {
          DIVplayer = document.getElementById("rw");
          if (DIVplayer.innerText === "") {
            afficherCarteTerrain(DIVplayer);
            // alert("vide");
          } else {
            afficherCarteRemplacement();
            // alert("pas vide");
          }
        } else {
          afficherCarteRemplacement();
        }
        break;

      case "ST1":
        if (document.getElementById("st1")) {
          DIVplayer = document.getElementById("st1");
          if (DIVplayer.innerText === "") {
            afficherCarteTerrain(DIVplayer);
            // alert("vide");
          } else {
            afficherCarteRemplacement();
            // alert("pas vide");
          }
        } else {
          afficherCarteRemplacement();
        }
        break;
      
        case "ST2":
        if (document.getElementById("st2")) {
          DIVplayer = document.getElementById("st2");
          if (DIVplayer.innerText === "") {
            afficherCarteTerrain(DIVplayer);
            // alert("vide");
          } else {
            afficherCarteRemplacement();
            // alert("pas vide");
          }
        } else {
          afficherCarteRemplacement();
        }
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
    q;
  }
});
