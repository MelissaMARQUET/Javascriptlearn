/*
Inspiré de l'exercice de la plateforme 3WA
*/
// Etape 1 : Déclarer les variables pour les choix joueur et ordinateur
    let joueur = ""
    let ordinateur = ""
// Etape 2 : Faire démarrer le jeu au clic sur le bouton
let buttonchifoumi = document.getElementById('buttonchifoumi')
buttonchifoumi.addEventListener('click', function chifoumi () {
    // Ne pas afficher le choix de l'ordinateur tant que le joueur n'a pas choisi
    let choixordi = document.getElementById("choixordi")
    choixordi.style = "display: none"
    // Faire disparaître l'image d'illustration et le bouton démarrer
    let chifoumiimg = document.getElementById("chifoumiimg")
    chifoumiimg.style = "display: none"
    buttonchifoumi.style = "display: none"
    // Faire apparaître les choix pour le joueur
    let choixjoueur = document.querySelector(".choixjoueur")
    choixjoueur.style = "display : block"
    // Déclarer une fonction qui définit le choix de l'ordinateur, l'affiche et détermine qui a gagné
    function choixordinateur () {
        // Récupérer dans des variables les différents choix
        let ordipierre = document.getElementById("ordipierre")
        let ordifeuille = document.getElementById("ordifeuille")
        let ordiciseaux = document.getElementById("ordiciseaux")
        // Afficher la section des choix mais cacher les choix
        choixordi.style = "display: block"
        ordipierre.style = "display: none"
        ordifeuille.style = "display: none"
        ordiciseaux.style = "display: none"
        // Générer un nombre entre 1 et 3
        let random = Math.floor(Math.random()*3)+1;
        // Selon le résultat définir le choix de l'ordinateur et l'afficher
        if (random===1) {
            ordinateur = "pierre"
            introchoixordi.style = "display: block"
            ordipierre.style = "display: block"
        }
        else if (random===2) {
            ordinateur = "feuille"
            introchoixordi.style = "display: block"
            ordifeuille.style = "display: block"
        }
        else {
            ordinateur = "ciseaux"
            introchoixordi.style = "display: block"
            ordiciseaux.style = "display: block"
        }
        // Récupérer le paragraphe pour afficher le résultat
        let resulatchifoumi = document.getElementById("resulatchifoumi")
        if (joueur===ordinateur) {
            resulatchifoumi.textContent = "Egalité"
            resulatchifoumi.style = "color : blue"
        }
        else {
            if (joueur === "pierre") {
                if (ordinateur === "feuille") {
                    resulatchifoumi.textContent = "Vous avez perdu"
                    resulatchifoumi.style = "color : red"
                }
                else {
                    resulatchifoumi.textContent = "Vous avez gagné"
                    resulatchifoumi.style = "color : green"
                }
            }
            if (joueur === "feuille") {
                if (ordinateur === "pierre") {
                    resulatchifoumi.textContent = "Vous avez gagné"
                    resulatchifoumi.style = "color : green"
                }
                else {
                    resulatchifoumi.textContent = "Vous avez perdu"
                    resulatchifoumi.style = "color : red"
                }
            }
            if (joueur === "ciseaux") {
                if (ordinateur === "feuille") {
                    resulatchifoumi.textContent = "Vous avez gagné"
                    resulatchifoumi.style = "color : green"
                }
                else {
                    resulatchifoumi.textContent = "Vous avez perdu"
                    resulatchifoumi.style = "color : red"
                }
            }
        }
        // Faire un reset pour revenir au choix
        buttonchifoumi.textContent = "Rejouer"
        buttonchifoumi.style = "display: block"
        buttonchifoumi.addEventListener ('click', function () {
            joueur = ""
            ordinateur = ""
            resulatchifoumi.style = "display: none"
            choixjoueur.style = "display: block"
            pierre.style = "display: inline-block"
            feuille.style = "display: inline-block"
            ciseaux.style = "display: inline-block"
            choixordi.style = "display: none"
        })
    }
    // Attribuer le choix du joueur, l'afficher et afficher le choix de l'ordinateur
    // Récupérer dans des variables les différents choix
    let pierre = document.getElementById("pierre")
    let feuille = document.getElementById("feuille")
    let ciseaux = document.getElementById("ciseaux")
    //Attribuer sa valeur à player et faire apparaître le choix du joueur
    //CAS 1 : le joueur choisi pierre
    pierre.addEventListener('click', function () {
        joueur = "pierre"
        feuille.style = "display: none"
        ciseaux.style = "display: none"
        choixordinateur ()
    } )//fin du cas 1
    //CAS 2 : le joueur choisi feuille
    feuille.addEventListener('click', function () {
        joueur = "feuille"
        pierre.style = "display:none"
        ciseaux.style = "display:none"
        choixordinateur ()
    } )//fin du cas 2
    //CAS 3 : le joueur choisi ciseaux
    ciseaux.addEventListener('click', function () {
        joueur = "ciseaux"
        feuille.style = "display:none"
        pierre.style = "display:none"
        choixordinateur ()
    } )//fin du cas 3
} ) // Fin de la fonction du jeu