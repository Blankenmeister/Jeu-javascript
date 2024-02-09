
//la tête de chien est à la même position que la souris pour pouvoir 
// attraper la saucisse.

// récupérer les éléments
const fondJeu = document.querySelector("#fondJeu");
const personnage = document.querySelector("#personnage");

// variable boolean pour savoir si la souris est cliquée ou non

let isMouseClicked = false;

fondJeu.addEventListener("click", (event) => {
  let x = event.clientX - 50;
  let y = event.clientY - 50;
  console.log("Position X : " + x + " & position Y : " + y);
  personnage.style.top = y + "px";
  personnage.style.left = x + "px";
});

//lancé de saucisse (gérer la collision entre la tête de chien et la saucisse)???

const saucisse = document.querySelector("#saucisse");

// quand la touche D est enfoncé la saucisse défile
window.addEventListener("keydown", (event) => {
  const pressedkey = event.code;

  if (pressedkey === "KeyD") {
    setInterval(bougerSaucisse, 30);
    function bougerSaucisse() {
      const fondJeuRight = fondJeu.getBoundingClientRect().right;

      const saucisseRight = saucisse.getBoundingClientRect().right;
      const saucisseTop = saucisse.getBoundingClientRect().top;
      const saucisseBottom = saucisse.getBoundingClientRect().bottom;

      const personnageRight = personnage.getBoundingClientRect().right;
      const personnageTop = personnage.getBoundingClientRect().top;
      const personnageBottom = personnage.getBoundingClientRect().bottom;
// collision entre la saucisse et le fond du jeu (ça marche)
      if (saucisseRight < fondJeuRight) {
        saucisse.style.left = saucisse.getBoundingClientRect().left + 5 + "px";
//fin de la collision

// essai de collision entre la saucisse et le chien (ça marche pas)
        if ((saucisseTop > personnageTop && saucisseBottom < personnageBottom) ||
          (saucisseTop < personnageTop && saucisseBottom > personnageBottom && saucisseRight > personnageRight)) {
          saucisse.remove();
        }
      } else {
        saucisse.remove();
      }
    }
  }
});

//NE PAS PRENDRE EN COMPTE LE CODE DESSOUS

//Définir que la saucisse apparait à un endroit aléatoire de Y

// Math.floor(Math.random() * 100000000);

// function getRandomNumber(longueurTableau) {
//   let nombreAleatoire = Math.floor(Math.random() * longueurTableau);

//   //choisir au hasard un nombre entre 0 et la longueur du tableau
//   return nombreAleatoire;
// }
