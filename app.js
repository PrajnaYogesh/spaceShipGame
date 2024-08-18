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
let currentAlien = alienShip.pop();
let gameStart;
console.log(currentAlien);

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
        currentAlien=alienShip.pop();
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




    























   
              
//     let currentAlien = alienShip.pop()
//     console.log(currentAlien);
   

//     function  ussAssemblysTurn(){
//         if(ussAssembly.accuracy<alienShip.accuracy){
//             console.log('uss ship has been hit');
//             if(ussAssembly.hull<=0){
//                 console.log('aliens won')
//             }else{
//                 currentAlien.hull = currentAlien.hull-ussAssembly.firePower;
//                 aliensTurn();
//             }
//         } else{
//             currentAlien.hull = currentAlien.hull-ussAssembly.firePower;
//             aliensTurn();
//         }
//     }

      



// function aliensTurn(){
// // if(alienShip.accuracy<ussAssembly.accuracy){
//     if(Math.random() > alienShip.accuracy){
//     console.log('Alienship has been hit.. reduce hull').
//     currentAlien.hull = currentAlien.hull-ussAssembly.firePower;
//     if(currentAlien.hull<=0){
//         console.log('current alien is destroyed!,bring a new Alien');
//         // prompt('you have an option to retreat,if yes put a retreat button with event listener to end the fight')
//         currentAlien = alienShip.pop();
//         if(currentAlien){
//             ussAssembly.hull = ussAssembly.hull - currentAlien.firePower;
//             ussAssemblysTurn();
//         } else{
//             console.log("USS ship won");
//                     }
        
//            }else{
//             ussAssembly.hull = ussAssembly.hull - currentAlien.firePower;
//             ussAssemblysTurn();
//            }
//         }

// else
// {
// console.log('You missed the shot')
// ussAssembly.hull = ussAssembly.hull - currentAlien.firePower;
// ussAssemblysTurn();
// }
// }


   


//     function startGame(){
        
//        aliensTurn();
      
//     }

//         startGame();

       

