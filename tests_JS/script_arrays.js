//ARRAY

//creation tableau
let statusDeTHP =["moussaillon","corsaire","renégat"];
console.log(statusDeTHP);/* sa affiche le tableau [] + la liste 0 pr moussaillon, 1 pr
corsaire, 2 pr renegat*/

//creation tableau + affichage d'un élément
let statusDeTHP1 =["tarte","pomme","myrtille"];
console.log(statusDeTHP1[0]);//sa affiche tarte

//creation tableau + nombre d'éléments
let statusDeTHP2 =["fraise","framboise","coco"];
console.log(statusDeTHP2.length);//sa affiche 3
//affiche fraise
console.log(statusDeTHP2[0])
//il change la valeur de fraise en choco
console.log(statusDeTHP2[0]='choco')

//creation tableau + rajout d'un élément a la fin
let statusDeTHP3 =["frais","frambois","coca"];
console.log(statusDeTHP3.push("flibustier"));//sa affiche 4
console.log(statusDeTHP3);//affiche le tableau + le dernier rajout
//rajoute un élément au debut
console.log(statusDeTHP3.unshift("banane"));
console.log(statusDeTHP3);//affiche tableau + rajout element au debut de la liste
console.log(statusDeTHP3.pop())/*enléve dernier element de la liste, affiche 
                                 flibustier */
console.log(statusDeTHP3);

//creation tableau + supression element
let statusDeTHP4 =["kiwi","clem","poire","abricot","peche"];
console.log(statusDeTHP4.shift());//supprime 1er element de la liste, affiche kiwi
console.log(statusDeTHP4.splice(0,2));/*supprime 2 element de la liste à partir de, 
                                        0 donc de kiwi, affiche clem et poire*/

//creation tableau + supression element
let statusDeTHP5 =["kiwi1","clem2","poire","abricot","peche"];
console.log(statusDeTHP5.splice(1,3));/*supprime 2 element de la liste à partir de, 
1 donc de clem2, affiche clem2 et poire*/    

//creation tableau + supression element
let statusDeTHP6 =["kiwi2","clem3","poire","abricot","peche"];
console.log(statusDeTHP6.slice(0,4));/*affiche 4 element à partir de 0 à 4, 0 inclus
                                       4 exclus*/   