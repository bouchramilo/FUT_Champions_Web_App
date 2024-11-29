// // Récupérer le tableau du localStorage
// let players = JSON.parse(localStorage.getItem('players'));

// // Vérifier si le tableau existe
// if (players && Array.isArray(players)) {
//     // Vider le tableau
//     players = [];

//     // Sauvegarder le tableau vide dans localStorage
//     localStorage.setItem('players', JSON.stringify(players));
//     console.log("Le tableau a été vidé avec succès.");
// } else {
//     console.log("Aucun tableau trouvé dans localStorage.");
// }




// // Récupérer le tableau du localStorage
// let playersRemp = JSON.parse(localStorage.getItem('playersRemp'));

// // Vérifier si le tableau existe
// if (playersRemp && Array.isArray(playersRemp)) {
//     // Vider le tableau
//     playersRemp = [];

//     // Sauvegarder le tableau vide dans localStorage
//     localStorage.setItem('playersRemp', JSON.stringify(playersRemp));
//     console.log("Le tableau a été vidé avec succès.");
// } else {
//     console.log("Aucun tableau trouvé dans localStorage.");
// }



// Récupérer le tableau du localStorage
// let playersTrrn = JSON.parse(localStorage.getItem('playersTrrn'));

// // Vérifier si le tableau existe
// if (playersTrrn && Array.isArray(playersTrrn)) {
//     // Vider le tableau
//     playersTrrn = [];

//     // Sauvegarder le tableau vide dans localStorage
//     localStorage.setItem('playersTrrn', JSON.stringify(playersTrrn));
//     console.log("Le tableau a été vidé avec succès.");
// } else {
//     console.log("Aucun tableau trouvé dans localStorage.");
// }



// pour vider les table de local storage 

localStorage.setItem("players", JSON.stringify([]));
localStorage.setItem("playersRemp", JSON.stringify([]));
localStorage.setItem("playersTrrn", JSON.stringify([]));


console.log(localStorage.getItem("players")); // Affichera "[]"
console.log(localStorage.getItem("playersRemp")); // Affichera "[]"
console.log(localStorage.getItem("playersTrrn")); // Affichera "[]"
