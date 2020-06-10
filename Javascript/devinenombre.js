/* Algorithme :
Choisir un chiffre entre 0 et 10
Dmmander utilisateur rentrer un chiffre
Tant que le chiffre n'est pas bon 
    Si chiffre au dessus alors
        alert au dessus
    Sinon 
        alert en dessous
    Demande à l'utilisateur de rentrer un autre chiffre
Fin tant que
Alert chiffre ok
*/
//Sélectionner le paragraphe avec l'id buttondevine
let buttondevine = document.getElementById('buttondevine')
// Ajouter un évènement au clic
buttondevine.addEventListener('click', function () {
window.alert("Vous avez trois essais pour deviner un nombre entre 0 et 10. On vous indiquera à chaque essai râté si vous êtes au dessus ou en dessous. Bonne chance !")
// Produire un chiffre aléatoire
let aDeviner = Math.round(Math.random()*10)
// Demander à l'utilisateur de saisir sa supposition
let guess = window.prompt("Entrez un chiffre entre 0 et 10")
// Ne pas oublier de convertir en nombre la chaîne de caractère reçue par prompt
guess = parseInt(guess)
// Définir le nombre d'essais à 3
let essais = 3;
// Faire une boucle pour les essais manqués
while (guess!=aDeviner && essais > 0) {
    essais--
    // Essai prendra un s pour 2 et 3 mais pas pour 1
    if (essais > 1) {
        if (guess>aDeviner) {
            window.alert("Vous avez dit "+guess+". Désolé, vous êtes au dessus. Encore "+essais+" essais.")
        }
        else {
            window.alert("Vous avez dit "+guess+". Désolé, vous êtes en dessous. Encore "+essais+" essais.")
        }
        guess = window.prompt("Retentez votre chance en saississant un autre chiffre")
        guess = parseInt(guess)
    }
    else if (essais == 1) {
        if (guess>aDeviner) {
            window.alert("Vous avez dit "+guess+". Désolé, vous êtes au dessus. Encore "+essais+" essai.")
        }
        else {
            window.alert("Vous avez dit "+guess+". Désolé, vous êtes en dessous. Encore "+essais+" essai.")
        }
        guess = window.prompt("Retentez votre chance en saississant un autre chiffre")
        guess = parseInt(guess)
    }
}
if (guess == aDeviner) {
    window.alert("Bravo vous avez trouvé le bon chiffre : "+aDeviner+" !")
}
else {
    window.alert("Désolé vous avez perdu. Le nombre à trouver était : "+aDeviner+".")
}
} )