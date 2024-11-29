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




let playersCourent = document.querySelector(".playersCourent"); // Cards sur le terrain
let playersRempl = document.querySelector(".playersRempl"); // cards en remplacement

let cardSelectionner = null;
let selecteddiv = null;

// fonction pour réinitialiser les styles des cartes après le switch
function reinitialiserStyle(container, cardClass) {
    container.querySelectorAll(cardClass).forEach(card => {
        card.style.scale = 1;
    });
}

// Fonction pour effectuer le switch entre deux cartes
// function switchCards(card1, card2) {
//     let tempCard = card1.innerHTML;
//     card1.innerHTML = card2.innerHTML;
//     card2.innerHTML = tempCard;

//     console.log("Switch effectué entre :", card1, card2);

//     cardSelectionner = null;
//     selecteddiv = null;

//     reinitialiserStyle(playersCourent, ".card");
//     reinitialiserStyle(playersRempl, ".card-rempl");
// }



function switchCards(card1, card2) {
    let position1 = card1.getAttribute("data-position");
    let position2 = card2.getAttribute("data-position");

    if (position1 !== position2) {
        console.log("Switch impossible : les positions des joueurs sont différentes.");
        return; // afficher un message d'erreur et Annuler le switch 
    }

    // switcher si les positions sont la même
    let tempCard = card1.innerHTML;
    card1.innerHTML = card2.innerHTML;
    card2.innerHTML = tempCard;

    console.log("Switch effectué entre :", card1, card2);

    cardSelectionner = null;
    selecteddiv = null;

    reinitialiserStyle(playersCourent, ".card");
    reinitialiserStyle(playersRempl, ".card-rempl");
}


// Écouteur pour les clics sur les cartes dans "playersCourent"
playersCourent.addEventListener("click", (e) => {
    if (e.target.classList.contains("card") && !e.target.classList.contains("empty")) {
        console.log("Carte selectionner sur le terrain : " + e.target);

        if (cardSelectionner && selecteddiv !== playersCourent) {
            switchCards(cardSelectionner, e.target);
        } else {
            reinitialiserStyle(playersCourent, ".card");
            e.target.style.scale = 1.2;
            cardSelectionner = e.target;
            selecteddiv = playersCourent;
        }
    }
});

// Écouteur pour les clics sur les cartes dans le conteneur "playersRempl"
playersRempl.addEventListener("click", (e) => {
    if (e.target.classList.contains("card-rempl") && !e.target.classList.contains("empty")) {
        console.log("Carte sélectionnée en remplacement:", e.target);

        if (cardSelectionner && selecteddiv !== playersRempl) {
            switchCards(cardSelectionner, e.target);
        } else {
            reinitialiserStyle(playersRempl, ".card-rempl");
            e.target.style.scale = 1.2;
            cardSelectionner = e.target;
            selecteddiv = playersRempl;
        }
    }
});
