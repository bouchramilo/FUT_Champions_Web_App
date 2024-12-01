
// pour vider les table de local storage 

localStorage.setItem("players", JSON.stringify([]));
localStorage.setItem("playersRemp", JSON.stringify([]));
localStorage.setItem("playersTrrn", JSON.stringify([]));
// localStorage.setItem("playersObject", JSON.stringify([]));


console.log(localStorage.getItem("players")); // Affichera "[]"
console.log(localStorage.getItem("playersRemp")); // Affichera "[]"
console.log(localStorage.getItem("playersTrrn")); // Affichera "[]"
console.log(localStorage.getItem("playersObject")); // Affichera "[]"


