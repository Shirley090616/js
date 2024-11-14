// VARIABLE

//affiche le texte entre ""
console.log("coucou depuis la console");

//affiche le chiffre
let myVariable = 5;
console.log(myVariable);

//affiche le type de la variable donc le type de 'pirate' qui est string
let myVariable1 ='pirate';
console.log(typeof myVariable1);

//let ou var, c'est let
let data1 = "variable en let definie dans le bloc principal";

{//début du sous-bloc
    data1 = "variable en let modifie dans le sous-bloc";
    var data2 = "variable en var definie dans le sous-bloc";
    let data3 = "variable en let definie dans le sous bloc";
    }//fin du sous-bloc

console.log(data1);//affiche le message data1 du sous-bloc
console.log(data2);//affiche le message data2 puisque var va au dela du bloc
/*console.log(data3); /mis en forme commentaire car sinon erreur sur code à chaque
                      fois, ne s'affiche pas et affiche une erreur car let data3 n'est
                      défini en dehors du bloc*/

//incrementer une variable
let a = 1;
let b = 2;
a++

console.log(a);//affiche 2 puisque a++, c'est a = 1 + 1
console.log(b += 2);//affiche 4 puisque b = 2 += 2

//concatener deux string av +
let c = "Bonjour", d = "monde";
console.log(c + "" + d)// sa affiche bonjourmonde

//concatener deux string av +
let e = "Bonjour", f = "monde";
console.log(e + " " + f)// sa affiche bonjour monde

//convertion text en nombre
let aa = "5";
let bb = "10";
console.log(Number(aa) + Number(bb));// sa affiche 15

//convertion nombre en string
let ab = 10;
let ba = 20;
console.log(String(ab) + String(ba));// sa affiche 1020


//addition
let cc = 10;
let dd = 20;
console.log(cc + dd);// sa affiche 30