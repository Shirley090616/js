// LES CONDITIONS

// if, else et else if
// >= superieur ou egale à ; > que superieur
// <= inférieur ou égal à ; < que inferieur
// !== contenu ou type différent de
// == contenu égal à, il vaut mieux utiliser celui du dessous
// === contenu et type égal à 
// && c'est ET , exemple plus bas
// || c'est ou , exemple plus bas
// ! c'est non , exemple plus bas

console.log("36" == 36);//affiche true car "36" est convertit en nombre comme l'autre
console.log("37" === 37);/*affiche false car la comparaison est STRICTEMENT BASE
sur la valeur et le type sans conversion de type*/

//condition IF
let number = 2;//variable est 2
if(number > 0) {//if = si number est superieur à 0 alors...
    console.log("le nombre est positif")//...est affiché le nombre est positif
}

let number1 = 0;//variable est 0
if(number1 > 1) {//if = si number1 est superieur à 0 alors...
    console.log("le nombre est positif")//...est affiché rien
}

//avec IF et ELSE
let number2 = 0;//variable est 0 ou 1 ou 2
if(number2 > 1) {//if = si number2 est superieur à 1 alors...
    console.log("le nombre est positif");}//...est affiché le nombre est positif

    else if(number2 === 1){//sinon si number2 est = à 1 alors...
    console.log("le nombre est nul");//...est affiché le nombre est nul
}
    else {//sinon est affiché le nombre est negatif
        console.log("le nombre est negatif");
    }

// && , || , !
if (2 && 1) {
    console.log("le message 1 s'affiche")/* car av && si les valeurs sont veritables
    (truthy)le message s'affiche si ce ne sont pas les mm rien ne s'affiche*/
}    

if(2 || 0) {
    console.log("le message 2 s'affiche")/* av || qui est ou, il faut qu'il y est
    une valeur de true*/
}

if(!0) {
    console.log("le message 3 s'affiche")/* av ! qui est non, un non sur une valeur
    déjà fausse affiche un vrai*/
}

// condition switch et break
weekNum = 1;//variable avec la valeur 1
switch (weekNum) {
    case 1:
        console.log("semaine1 - intro au code");//affiche ce message

        break;// si on ne mets pas de break il affiche aussi le mess ci-dessous
    case 2:
        console.log("semaine2 - ruby");

        break;
    case 3:
        console.log("semaine 3 - POO");

        break;
    default:
        console.log("valeur non connue");// si on mets 4 en valeur ce mess s'affiche 
};

//valeur 'undefined' , '0' , vide ''
let number3 = 1;//fais le test avec 0
if (number3) {
  console.log("ce message ne s'affiche que si number est non nul ");
}

let string = "vv"; //fais le test avec du vide
if (string) {
  console.log("ce message ne s'affiche que si string est non vide");
}

let logement = 9; // undefined. Fais le test sans rien mettre
if (logement) {
  console.log("ce message ne s'affiche que si myVariable contient une valeur ");
}