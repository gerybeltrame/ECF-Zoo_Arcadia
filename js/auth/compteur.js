// on sauvegarde notre element bouton dans une variable
const btn = document.getElementById("btn");
// nous sauvegardons notre element compteur dans une variable
const counterID = document.getElementById("counter");

// nous démarrons notre compteur à 0
let counter = 0;

// nous créons une fonction qui mettra à jour le compteur
function updateCounter() {
  counterID.innerHTML = `${counter} visitors clicked on this button`;
}

// nous ajoutons un écouteur d'événement sur le bouton qui incrémente le compteur
btn.addEventListener("click", function (e) {
  counter++;
  updateCounter();
});