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
    
let fireBtn = document.getElementById('fire');



    























   
              
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

       

