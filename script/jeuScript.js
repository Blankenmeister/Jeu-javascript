// capture de l'écran et des carrés
const fondJeu = document.querySelector("#fondJeu");
const personnage = document.querySelector("#personnage");

// variable boolean pour savoir si la souris est cliquée ou non

let isMouseClicked = false;

// en cas de click à un endroit de l'écran
// le carré rouge se déplace à cet endroit là
fondJeu.addEventListener("click", (event) => {
  let x = event.clientX - 50;
  let y = event.clientY - 50;
  console.log("Position X : " + x + " & position Y : " + y);
  personnage.style.top = y + "px";
  personnage.style.left = x + "px";
});

//lancé de saucisse

const saucisse = document.querySelector("#saucisse");

// window.addEventListener("keydown", (event) => {
//     const pressedkey = event.code;
  
//     if (pressedkey === "KeyD") {
//       setInterval(bougerSaucisse, 30);
//       function bougerSaucisse() {
//         const fondJeuRight = fondJeu.getBoundingClientRect().right;
//         const saucisseRight = saucisse.getBoundingClientRect().right;
//         const personnageRight = personnage.getBoundingClientRect().right;

//         const saucisseBotom = saucisse.getBoundingClientRect().bottom;
//         const saucisseTop = saucisse.getBoundingClientRect().top;
//         const personnageBottom = saucisse.getBoundingClientRect().bottom;
//         const personnageTop = saucisse.getBoundingClientRect().top;
        
  
//         if (saucisseRight < fondJeuRight) {
//           saucisse.style.left = saucisse.getBoundingClientRect().left + 5 + "px";
        
  
//          if ((saucisseTop > personnageTop && saucisseBotom < personnageBottom) || 
//          (saucisseTop < personnageTop && saucisseBotom > personnageBottom) &&
//          (saucisseRight > personnageRight)) {
//             saucisse.remove();
//         } else { saucisse.remove();
//       }
//     }
// }
// }
// });


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
  
        if (saucisseRight < fondJeuRight) {
          saucisse.style.left = saucisse.getBoundingClientRect().left + 5 + "px";
  
          if (
            (saucisseTop > personnageTop && saucisseBottom < personnageBottom) ||
            (saucisseTop < personnageTop &&
              saucisseBottom > personnageBottom &&
              saucisseRight > personnageRight)
          ) {
            saucisse.remove();
          }
        } else {
          saucisse.remove();
        }
      }
    }
  });

//Définir que la saucisse apparait à un endroit aléatoire de Y

Math.floor(Math.random() * 100000000);

function getRandomNumber(longueurTableau) {
  let nombreAleatoire = Math.floor(Math.random() * longueurTableau);

  //choisir au hasard un nombre entre 0 et la longueur du tableau
  return nombreAleatoire;
}
