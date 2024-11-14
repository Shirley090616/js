let number = prompt("Quel nombre veux-tu calculer la factorielle?");
//utilisateur choisi son nombre

function factorielle(n) {
    let result = 1;  // On initialise result à 1
    for (let count = n; count >= 1; count--) {  // La boucle commence à n et va jusqu'à 1
        result = result * count;  // On multiplie result par chaque valeur de i
    }
    return result;  // On retourne le résultat final
}
let resultat = factorielle(number);

console.log("Le résultat est : " + resultat);