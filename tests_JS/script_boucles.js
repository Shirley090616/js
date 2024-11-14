//boucles

//for([initialisation]; [condition]; [incrémentation])
for(let count = 0;count <=5; count++){//count à la valeur 0, count jusqu'à 5
    console.log(`on va compter jusqu'à 5: ${count}`);
}
/*console.log(count);pour avoir le resulat de cette ligne, en formation il voulait
mettre var au lieu de let mais ce n'est pas conseillé, un exemple ci-dessous pour
utiliser que let*/

//ne pas mettre var mais let en dehors de la boucle
let count;
for(count = 0; count <=5; count++) {
console.log(`on va compter jusqu'à 5: ${count}`);
}
console.log(count);

//while et prompt
let answer = "";
while(answer !== "oui") {
    console.log("alors ?")
    answer = prompt("tu kiffes THP?")/*affiche la fenetre avec la question pr
                                       utilisateur*/
}
console.log("haaa, tu nous fais plaisir !")/*affiche ce message lorsque
                                             l'utilisateur a repondu*/ 

//sortir d'une boucle while av break
let word = "";
let letter;

while (true) {
    letter = prompt('tape une lettre stp :');//la question posé à l'utilisateur
    if (letter) {//si une lettre est rentre par l'utilisateur...
        word += letter;
        console.log(word);}/*...alors sa continue de lui pose la question afin
        qu'il rentre une autre lettre*/
    else {//sinon(donc si l'utilisateur ne rentre pas de lettre)...
        break;}//...stop et...
        console.log(`voila ce que tu as tapé: ${word}`)/*...cette phrase s'affiche
        avec toutes les lettres rentré par l'utilisateur */
}

//for in pour parcourir
let week =["semaine 1", "semaine 2", "semaine 3"]//on declare un array
let week1 = {semaine4: "ruby", semaine6: "html"}//on declare un objet

console.log("parcourons le array :")//affiche le texte
for(let index in week) {
    console.log(index);//count les elements du tableau et le marque 0 1 2
    console.log(week[index]);//affiche en dessous du count à quoi ils correspondent
                             //0 semaine 1 , 1 semaine 2, 2 semaine 3
    }

 console.log("Parcourons l'objet :")//affiche le message
 for(let Attribut in week1) {//boucle pour répéter le bloc
   console.log(Attribut); //la variable attribut parcour l'objet
   console.log(week1[Attribut]);
 } 
 
 //forEach qui ne fonctionne que sur le array
 let week2 =["semaine 1", "semaine 2", "semaine 3"]
 console.log("Parcourons le array en forEach :")
 
 week2.forEach(weekContent => {
   console.log(weekContent)
 });