class Player{
    constructor(name,hull,firePower,accuracy){
        this.name = name;
         this.hull=hull;
        this.firePower=firePower;
        this.accuracy=accuracy;
    }
    }

  

    let captain = new Player("captain",20,5,0.7);
    console.log(captain);
    let alienShip=[];

    for(let i=0;i<6;i++){
        let alienName = "alien"+i;
       let alienHull = Math.floor(Math.random() * (6 - 3) + 3)
       let alienFirePower = Math.floor(Math.random() * (4 - 2) + 2)
       let alienAccuracy = Number((Math.random() * (0.8 - 0.6) + 0.6).toFixed(1))
          alienShip[i]= new Player(alienName,alienHull,alienFirePower,alienAccuracy);
          alienShip.push(alienShip[i]);
           }
    
    console.log(alienShip);
    console.log("******************");
    

let start = document.querySelector('.start') 
let retreat =  document.querySelector('.retreat')   
let fireBtn = document.getElementById('fire');
let currentAlien = alienShip.shift();
let gameStart;

console.log(currentAlien);

let alienNo=1;
let alienNumber = document.querySelector('.alienNo')


function calculateAccuracy(){
    let random = Math.random();
    console.log(random);
    
    if (random > currentAlien.accuracy ){
        console.log('you hit the target,reduce opposition\'s hull')
        return true;
    }else{
        console.log('you missed the alien')
        return false;
    }
    
    }



function resetGame(){
    console.log("game reset");
  let retreatAns= prompt('do you want to retreat?');
 if(retreatAns){
    console.log("reset to start game");
   } 
   }

   function alienFires(){
    console.log('alien is attacking captain');
    let ans = calculateAccuracy();
    if(ans){
console.log('You missed the traget');

    }else{
        captain.hull-=currentAlien.firePower;
        console.log(captain);
        
    }
    
   }

function isDefeated(){
    if(currentAlien.hull<=0){
        currentAlien=alienShip.shift();
        alienNo+=1
alienNumber.innerHTML=alienNo;
        console.log(currentAlien);
        
        if(!currentAlien){
            console.log('Captain Won');
                  }
        }else{
        alienFires();
    }
}




function captainFires(){
    
    console.log('inside captain function')
      let answer =  calculateAccuracy();
if(answer){
    currentAlien.hull-=captain.firePower; 
    isDefeated();
}else{
    alienFires();
}
}





fireBtn.addEventListener('click',captainFires)

start.addEventListener('click', ()=>{
    console.log('start clicked');
        gameStart=true;

    
})

retreat.addEventListener('click',()=>{
    console.log('retreat clicked');
    gameStart=false;
    resetGame();
})




    























   
 