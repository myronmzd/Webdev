let xp = 0;
let health = 100;
let  gold = 50;
let currentWeapon =0;
let figthing;
let monteringHealth;
let inventory = ["stick"];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');

const text = document.querySelector('#text');
const xpText = document.querySelector('#xpText');
const healthText = document.querySelector('#healthText');
const goldText = document.querySelector('#goldText');   
const monsterStats = document.querySelector('#monsterStats');
const monsterName = document.querySelector('#monsterName'); 
const monsterHealth = document.querySelector('#monsterHealth');

const locations = [ 
    {
    name: "Town Square",
    buttonText: ["Go to Store", "Go to Cave", "Fight the Dragon"],
    buttonFunction : [goStore, goCave, fightDragon],
    text: "Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town.You are in the town square. Where do you want to go? Use the buttons above." 
    },
    {
    name: "Store",
    buttonText: ["Buy 10 health 10 gold ", "Buy weapon 30 gold","Town Square"],
    buttonFunction: [buyHealth, buyWeapon, goTown],
    text: "Welcome to the store"
    },
    {
      name: "Cave",  
      buttonText: ["Fight the monster", "Fight the clime", "Town Square"],
      buttonFunction: [fightMonster,fightClime, goTown],
      text: "You are in the cave. You see a monster. What do you want to do?"    
    }
];

 // initail bouton

 button1.onclick = goStore;
 button2.onclick = goCave;
 button3.onclick = fightDragon;

function update(locations) {
   console.log("Updating locations:", locations);
   button1.innerText = locations["buttonText"][0];
   button2.innerText = locations["buttonText"][1];
   button3.innerText = locations["buttonText"][2];
   button1.onclick = locations["buttonFunction"][0];
   button2.onclick = locations["buttonFunction"][1];
   button3.onclick = locations["buttonFunction"][2];
   text.innerText = locations.text;
}
 function goTown(){ 
   update(locations[0]);
 }
   

 function goStore(){    
   update(locations[1]);
 }
 
 function goCave(){    
   update(locations[2]);

 }

 function fightDragon(){    
   console.log("Going to the figth the Dragon");

 }


function buyHealth(){
   
   if (gold >= 10){ 
      gold -= 10;
      health += 10;
      goldText.innerText = gold;
      healthText.innerText = health;
   }
   else{
      console.log("Not enough gold");
   }
 
}   

function buyWeapon(){
 
}   

function fightMonster(){
    
   }  

function fightClime(){
      
   }  

 















// docker cp script.js webhost:/usr/share/nginx/html/script.js
