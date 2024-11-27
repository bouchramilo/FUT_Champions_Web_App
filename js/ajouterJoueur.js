// Sélection du formulaire par son tag <form>
const form = document.querySelector("form");

let players = [];
if (localStorage.getItem("players")) {
  players = JSON.parse(localStorage.getItem("players"));
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // nom de joueur ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // const nameInput = document.getElementById("name");
  const name = document.getElementById("name").value;
    console.log(name);

    // photo de joueur ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const photo = document.getElementById("photoJoueur").value;
  //   console.log(photo);


  // nationality de joueur ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const nationality = document.getElementById("nationalityJoueur").value;
  //   console.log(nationality);

  // flag de payer de joueur ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const flag = document.getElementById("flagJoueur").value;
  //   console.log(flag);

  // club de joueur +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const club = document.getElementById("clubJoueur").value;
  //   console.log(club);

  // logo de joueur +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const logo = document.getElementById("logoClubJoueur").value;
  //   console.log(logo);

  // rating de joueur +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const ratingJoueur = document.getElementById("ratingJoueur").value;
  //   console.log(ratingJoueur);
  
  
  // position de joueur +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const positionJoueur = document.getElementById("positionJoueur").value;
  //   console.log(positionJoueur);

  var joueur ;

  if (positionJoueur === "GK") {
    // diving de joueur +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const divingJoueur = document.getElementById("divingJoueur").value;
    //   console.log(divingJoueur);


    // handling de joueur +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const handlingJoueur = document.getElementById("handlingJoueur").value;
    //   console.log(handlingJoueur);


    // kicking de joueur ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const kickingJoueur = document.getElementById("kickingJoueur").value;
    //   console.log(kickingJoueur);


    // reflexes de joueur +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const reflexesJoueur = document.getElementById("reflexesJoueur").value;
    //   console.log(reflexesJoueur);


    // speed de joueur ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const speedJoueur = document.getElementById("speedJoueur").value;
    //   console.log(speedJoueur);


    // positioning de joueur ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const positioningJoueur = document.getElementById("positioningJoueur").value;
    //   console.log(positioningJoueur);

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
    const paceJoueur = document.getElementById("paceJoueur").value;
    //   console.log(paceJoueur);


    // shooting de joueur +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const shootingJoueur = document.getElementById("shootingJoueur").value;
    //   console.log(shootingJoueur);


    // passing de joueur ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const passingJoueur = document.getElementById("passingJoueur").value;
    //   console.log(passingJoueur);


    // dribbling de joueur ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const dribblingJoueur = document.getElementById("dribblingJoueur").value;
    //   console.log(dribblingJoueur);


    // defending de joueur ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const defendingJoueur = document.getElementById("defendingJoueur").value;
    //   console.log(defendingJoueur);


    // phisical de joueur +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const physicalJoueur = document.getElementById("physicalJoueur").value;
    //   console.log(physicalJoueur);

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

  console.log(joueur);

  // players.push(joueur);
  // localStorage.setItem("players", JSON.stringify(players));

  // form.reset();
  alert("Joueur ajouté avec succès !");
});
