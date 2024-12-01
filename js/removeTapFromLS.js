
// pour vider les table de local storage 

localStorage.setItem("players", JSON.stringify([]));
console.log(localStorage.getItem("players")); // Affichera "[]"


localStorage.setItem("playersRemp", JSON.stringify([]));
console.log(localStorage.getItem("playersRemp")); // Affichera "[]"


localStorage.setItem("playersTrrn", JSON.stringify([]));
console.log(localStorage.getItem("playersTrrn")); // Affichera "[]"



// localStorage.setItem("playersObject", JSON.stringify([]));
// console.log(localStorage.getItem("playersObject")); // Affichera "[]"