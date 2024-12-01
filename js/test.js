// Sélection des éléments
const button = document.getElementById("monBouton");
const message = document.getElementById("message");
const actionText = document.getElementById("action");

// Délai pour différencier simple clic et double-clic
let clickTimer;

// Gestionnaire pour un clic simple
button.addEventListener("click", () => {
  clearTimeout(clickTimer); // Réinitialiser si un double-clic suit
  clickTimer = setTimeout(() => {
    actionText.textContent = "Simple clic";
    message.classList.remove("hidden"); // Afficher le message
    message.classList.add("text-blue-500");
  }, 200); // Délai avant exécution (200 ms)
});

// Gestionnaire pour un double-clic
button.addEventListener("dblclick", () => {
  clearTimeout(clickTimer); // Annuler le clic simple
  actionText.textContent = "Double clic";
  message.classList.remove("hidden"); // Afficher le message
  message.classList.add("text-red-500");
});
