//definir un objet
let ThpSessionNum2 = {/*l'objet est ThpSessionNum2, il est défini avec les
    attributs en sous-bloc av les {}*/
    numOfMouss: 80,
    cities: ["paris", "lyon", "montpellier"],
    sucessRate: 0.80,
    sessionMoto: "keep pushing to the top"
};
console.log(ThpSessionNum2.numOfMouss)//affiche 80 av variable.attribut
console.log(ThpSessionNum2.cities)//affiche ["paris", "lyon", "montpellier"]

//modifier un attribut tj av la variable let ci-dessus
ThpSessionNum2.numOfMouss = 82;
console.log(ThpSessionNum2.numOfMouss)//affiche 82, l'attribut a été modifie

//rajoutant un attribut tj av la variable let ci-dessus
ThpSessionNum2.favoriteLesson = "ajout d'un attribut";
console.log(ThpSessionNum2.favoriteLesson)//affiche "ajout d'un attribut"

//acceder aux donnes des attributs
let attributName = "sucessRate"
console.log(ThpSessionNum2[attributName])//affiche 0.8