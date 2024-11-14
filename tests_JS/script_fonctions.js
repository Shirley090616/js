//FONCTION

//elle se definit comme suit: function nomDeMaFonction(){le code}
//on l'appel comme suit: nomDEMaFonction()

function petitLou() {
    console.log("Bonjour toi!");
}
petitLou();

//return
function multiply(Number1, Number2) {
    let Number = Number1 * Number2;
    return Number;
}
  
console.log(multiply(2, 3));//affiche le resultat de a multiplication donc 6
console.log(multiply(2, multiply(2,3)));//affiche 12; 2 x (2 x 3)
//console.log(Number); // affiche erreur sur number car let n'est pas crée en dehors
                    // de la function/fonction

/*fonction anonyme (sans nom) mais affecter à une variable
comme ceci: myVariable = function(entrée1,...){} */
const multiply1 = function(Number4, Number5) {/*variable = multiply; parametre
     de la function = number4 et 5*/
    let Number3 = Number4 * Number5;// variable = number3
    return Number3;//il return le resultat de des opérations demandées ci-dessous
  };
  
  console.log(multiply1(5, 5));//variable = multiply ; affiche 25
  
  const otherMultiply = multiply1; /*On peut ainsi affecter la fonction à une 
  autre variable*/
  console.log(otherMultiply(6, 3));//affiche 18
  

//fonction anonyme plus epurée
const multiply2 = (Number7, Number8) => {
    let Number6 = Number7 * Number8;
    return Number6
}
console.log(multiply2(10, 6));