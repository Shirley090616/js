// Demander à l'utilisateur combien d'étages il veut
let number1 = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

// Parcourir le nombre d'étages et afficher la pyramide
for (let count = 1; count <= number1; count++) {
    let espaces = " ".repeat(number1 - count);  // Calculer le nombre d'espaces avant les # pour centrer
    let hashes = "#".repeat(count);  // Créer une chaîne de # pour chaque étage
    console.log(espaces + hashes);  // Afficher l'étage avec les espaces et les #
}