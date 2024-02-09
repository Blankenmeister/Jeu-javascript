
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
})

//lancé de saucisse

const saucisse = document.querySelector('#saucisse');


window.addEventListener('keydown', (event) => {
    const pressedkey = event.code;
    //console.log(saucisse.getBoundingClientRect());

    if (pressedkey === "KeyD") {
        setInterval(bougerSaucisse, 30);
        function bougerSaucisse() {
            const fondJeuRight = fondJeu.getBoundingClientRect().right;
            const saucisseRight = saucisse.getBoundingClientRect().right;
            const personnageRight = personnage.getBoundingClientRect().right;
            //const personnageLeft = saucisse.getBoundingClientRect().left;

            console.log(fondJeuRight);
            console.log(saucisseRight);

            if (saucisseRight < fondJeuRight) {
                saucisse.style.left = saucisse.getBoundingClientRect().left + 5 + "px";
console.log("jjjjjj");
            } else saucisse.remove();

            if (saucisseRight < personnageRight) {
                saucisse.style.left = saucisse.getBoundingClientRect().left + 5 + "px";



            } else saucisse.remove();

        }

        //saucisse.style.left = saucisse.getBoundingClientRect().left + 10 + "px";

    } //else if () {



})


//Définir que la saucisse apparait à un endroit aléatoire de Y 

Math.floor(Math.random() * 100000000);

function getRandomNumber(longueurTableau) {
    let nombreAleatoire = Math.floor(Math.random() * longueurTableau);

    //choisir au hasard un nombre entre 0 et la longueur du tableau
    return nombreAleatoire;
}





