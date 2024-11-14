let g = 3;
console.log("Bonjour à tous les" + g);//affiche Bonjour à tous les3, pk pas d'espace
console.log(g + "3");//affiche 33

let h = "coucou" * 2;// n'affiche rien

let numStudent = 4;
let statement = `Dans mon groupe on est ${numStudent} moussaillons`;/*Attention 
ce ne sont pas des guillemets mais un accent grave av la touche 7, en appuyant
d'abord sur altgr puis touche 7 puis espace - affiche la phrase avec le 4*/
console.log(statement);

let phrase = "the Hacking Project";
console.log(phrase.length);//affiche la longueur du mot 19, il compte les espaces

console.log("the hacking project"[0]);//affiche la lettre t
console.log("the hacking project"[4]);//affiche la lettre h

//chercher la position av indexOf
let phrase3 = `the hacking project`.indexOf("hack");// 0=t, 1=h, 2=e, 3=rien, 4=h
console.log(phrase3);//affiche 4 car le mot hack commence à la 4éme position

//chercher la position av indexOf
let phrase4 = `the hacking project`.indexOf("mama");
console.log(phrase4);//affiche -1 car il n'y a pas mama

//mets la phrase en majuscule av fonction toUpperCase
let phrase5 = 'petit poisson'.toUpperCase();
console.log(phrase5);

//mets la phrase en minuscule av fonction toLowerCase
let phrase6 = 'PETITE SIRENE'.toLowerCase();
console.log(phrase6);

//fonction split av une virgule ou un trait
const contentOfTHP = "git-ruby-rails-html-css-js";//variable contentOfTHP
const lesson = contentOfTHP.split("-");//variable lesson
console.log(lesson[0]);//affiche git
console.log(lesson[5]);//affiche js
console.log(lesson[2]);//affiche rails

//fonction join fonctionne av un array (av virgule ou trait)
const jolieTravail = ["progret", "a", "faire"];
const joie = jolieTravail.join(",");
console.log(joie);//affiche les elements du tableau
console.log(joie[1]);//affiche la lettre r

//fonction join av split pr transforme la chaine de caractere en array
const jolieTravail1 = "progret,a,faire"//chaine de caractere
const joie1 = jolieTravail1.split(",")//transforme la chaine de caractere en array
const joie2 = joie1.join(" ");
console.log(joie1)//affiche un array ['proget', 'a', 'faire']
console.log(joie2)//affiche progret a faire
//console.log(joie1[2]) affiche une erreur car joie1 est string et non array
console.log(joie2[2])//affiche o
