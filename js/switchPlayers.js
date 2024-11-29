// let playersCourent = document.querySelector(".playersCourent");

// // Écouteur pour les clics sur des cartes
// playersCourent.addEventListener("click", (e) => {
//     if (e.target.classList.contains("card")) {
//         console.log("test 4", e.target);

//         playersCourent.querySelectorAll(".card").forEach(card => {
//             card.style.scale = 1;
//         });

//         e.target.style.scale = 1.2;
        
//     }
// });


// // Écouteur pour les clics en dehors des cartes
// playersCourent.addEventListener("click", (e) => {
//     if (!e.target.closest(".card")) {
//         console.log("Clic en dehors des cartes");
        
//         playersCourent.querySelectorAll(".card").forEach(card => {
//             card.style.scale = 1;
//         });
//     }
// });

// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // ecouteur pour la partie des card en remplacement

// let playersRempl = document.querySelector(".playersRempl");

// // Écouteur pour les clics sur des cartes
// playersRempl.addEventListener("click", (e) => {
//     if (e.target.classList.contains("card-rempl")) {
//         console.log("test 1", e.target);

//         playersRempl.querySelectorAll(".card-rempl").forEach(card => {
//             card.style.scale = 1;
//         });

//         e.target.style.scale = 1.2;
        
//     }
// });


// // Écouteur pour les clics en dehors des cartes
// playersRempl.addEventListener("click", (e) => {
//     if (!e.target.closest(".card-rempl")) {
//         console.log("Clic en dehors des cartes remplacement");
        
//         playersRempl.querySelectorAll(".card-rempl").forEach(card => {
//             card.style.scale = 1;
//         });
//     }
// });




let playersCourent = document.querySelector(".playersCourent"); // Cartes sur le terrain
let playersRempl = document.querySelector(".playersRempl"); // Cartes en remplacement

let selectedCard = null;
let selectedContainer = null;

// fonction pour réinitialiser les styles des cartes après le switch
function reinitialiserStyle(container, cardClass) {
    container.querySelectorAll(cardClass).forEach(card => {
        card.style.scale = 1;
    });
}

// Fonction pour effectuer le switch entre deux cartes
function switchCards(card1, card2) {
    // Échanger le contenu HTML des deux cartes
    let tempContent = card1.innerHTML;
    card1.innerHTML = card2.innerHTML;
    card2.innerHTML = tempContent;

    console.log(`Switch effectué entre :`, card1, card2);

    // Réinitialiser la sélection
    selectedCard = null;
    selectedContainer = null;

    // Réinitialiser les échelles
    reinitialiserStyle(playersCourent, ".card");
    reinitialiserStyle(playersRempl, ".card-rempl");
}

// Écouteur pour les clics sur les cartes dans "playersCourent"
playersCourent.addEventListener("click", (e) => {
    if (e.target.classList.contains("card") && !e.target.classList.contains("empty")) {
        console.log("Carte selectionner sur le terrain : " + e.target);

        if (selectedCard && selectedContainer !== playersCourent) {
            // Si une carte est déjà sélectionnée dans `playersRempl`, effectuer le switch
            switchCards(selectedCard, e.target);
        } else {
            // Sinon, sélectionner la carte
            reinitialiserStyle(playersCourent, ".card");
            e.target.style.scale = 1.2;
            selectedCard = e.target;
            selectedContainer = playersCourent;
        }
    }
});

// Écouteur pour les clics sur les cartes dans le conteneur `playersRempl`
playersRempl.addEventListener("click", (e) => {
    if (e.target.classList.contains("card-rempl") && !e.target.classList.contains("empty")) {
        console.log("Carte sélectionnée en remplacement:", e.target);

        if (selectedCard && selectedContainer !== playersRempl) {
            // Si une carte est déjà sélectionnée dans `playersCourent`, effectuer le switch
            switchCards(selectedCard, e.target);
        } else {
            // Sinon, sélectionner la carte
            reinitialiserStyle(playersRempl, ".card-rempl");
            e.target.style.scale = 1.2;
            selectedCard = e.target;
            selectedContainer = playersRempl;
        }
    }
});
