// Sélection du formulaire par son tag <form>
const form = document.querySelector("form");

let players = [];
if (localStorage.getItem("players")) {
  players = JSON.parse(localStorage.getItem("players"));
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("nomJoueur").value;
//   console.log(name);

  const photo = document.getElementById("photoJoueur").value;
//   console.log(photo);

  const positionJoueur = document.getElementById("positionJoueur").value;
//   console.log(positionJoueur);

  const nationality = document.getElementById("nationalityJoueur").value;
//   console.log(nationality);

  const flag = document.getElementById("flagJoueur").value;
//   console.log(flag);

  const club = document.getElementById("clubJoueur").value;
//   console.log(club);

  const logo = document.getElementById("logoClubJoueur").value;
//   console.log(logo);

  const ratingJoueur = document.getElementById("ratingJoueur").value;
//   console.log(ratingJoueur);

  const paceJoueur = document.getElementById("paceJoueur").value;
//   console.log(paceJoueur);

  const shootingJoueur = document.getElementById("shootingJoueur").value;
//   console.log(shootingJoueur);

  const passingJoueur = document.getElementById("passingJoueur").value;
//   console.log(passingJoueur);

  const dribblingJoueur = document.getElementById("dribblingJoueur").value;
//   console.log(dribblingJoueur);

  const defendingJoueur = document.getElementById("defendingJoueur").value;
//   console.log(defendingJoueur);

  const physicalJoueur = document.getElementById("physicalJoueur").value;
//   console.log(physicalJoueur);

  let joueur = {
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

  console.log(joueur);

  players.push(joueur);
  localStorage.setItem("players", JSON.stringify(players));


  form.reset();
  alert("Joueur ajouté avec succès !");
});
