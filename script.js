// CONSTRUCTOR //
// CONSTRUCTOR //
// CONSTRUCTOR //


class Gods {

constructor (name,image, attack, superAttack, health) {

this.name = name;
this.image = image;
this.attack = attack;
this.superAttack = superAttack;
this.health = health
}

}

//OJETS INSTANCIÉS //
//OJETS INSTANCIÉS //
//OJETS INSTANCIÉS //


let gods2 = new Gods("Zeus","/img/zeus.jpg", "Strike", "Lightning", 300) 
let gods3 = new Gods("Poséidon", "Strike" , "Giant Wave", 250)
let gods4 = new Gods("Héra", "Strike" , "Maternal ", 200) 
let gods5 = new Gods("Hadès", "Strike" ,"Sudden Death", 300) 
let gods6 = new Gods("Athèna", "Strike", "Arrows Feast", 400) 
let gods7 = new Gods("Aphrodite", "Strike", "Charming Spell", 250)

// FONCTION PUISSANCE ATTAQUE  ///


let attack = 25
// console.log(attack) 

let superAttack = 45
// console.log(superAttack)

// TEST TEST TEST TEST TEST //
// TEST TEST TEST TEST TEST //
// TEST TEST TEST TEST TEST //

// function randomIntFromInterval(min, max) { // min and max included 
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }

// const attack = randomIntFromInterval(20, 45)
// console.log(attack) 

// const superAttack = randomIntFromInterval(50, 85)
// console.log(superAttack)

// TIRAGE ALEATOIRE ATTAQUE // 
// TIRAGE ALEATOIRE ATTAQUE // 
// TIRAGE ALEATOIRE ATTAQUE // 


const attacks = ['attack', 'superAttack']
const randAttack = attacks[Math.floor(Math.random()*attacks.length)];


// TIRAGE AU SORT DES COMBATTANTS //
// TIRAGE AU SORT DES COMBATTANTS //
// TIRAGE AU SORT DES COMBATTANTS //


let fighter = [gods2, gods3, gods4, gods5, gods6, gods7]


var rand = Math.floor(Math.random()*fighter.length);

var fighter1 = fighter[rand]
var fighter2 = fighter1



        while (fighter1 === fighter2){
            rand = Math.floor(Math.random()*fighter.length)
            fighter2 = fighter[rand];
        } 

document.getElementById("fighter1").innerHTML = fighter1.image;
document.getElementById("fighter2").innerHTML = fighter2.image;

// COMBAT //
// COMBAT //
// COMBAT //


// function godsFight(fighter1,fighter2) {
//     if (fighter1.randAttack != fighter2.randAttack) {
//         if(fighter1.randAttack === userType[1]){
//         return fighter1;
//         }else {
//             return fighter2;
//         }
//     }


if (fighter2.health <= 0) {
        alert(fighter1.name)
    }
    else if (fighter1.health <= 0) {
        alert(fighter2.name)
    }


