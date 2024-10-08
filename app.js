class Player{
    constructor(name,hull,firePower,accuracy){
        this.name = name;
         this.hull=hull;
        this.firePower=firePower;
        this.accuracy=accuracy;
    }

    reset() {
        this.name = null;
        this.hull = null;
        this.firePower = null;
        this.accuracy = null;
    }
    }

    let captain;
    let alienShip=[]

  function createPlayerAndAliens(){
   captain = new Player("captain",20,5,0.7);
    console.log("captain created :",captain);
    
    // create aliens
    // let alienShip=[];
    for(let i=0;i<6;i++){
        let alienName = "alien"+i;
       let alienHull = Math.floor(Math.random() * (6 - 3) + 3)
       let alienFirePower = Math.floor(Math.random() * (4 - 2) + 2)
       let alienAccuracy = Number((Math.random() * (0.8 - 0.6) + 0.6).toFixed(1))
          alienShip[i]= new Player(alienName,alienHull,alienFirePower,alienAccuracy);
          alienShip.push(alienShip[i]);
           }
    
           alienNo=1;
           alienNumber.innerHTML=` : ${alienNo}`;
    console.log("alien array created with aliens:");
    console.log(alienShip);
    console.log("******************");
  }

//   createPlayerAndAliens();
    
    // let num =6;
// target the elements
let start = document.querySelector('.start') 
 
let fireBtn = document.getElementById('fire');
 let currentAlien;

let alienNumber = document.querySelector('.alienNo')

// capture captains span - hull,firepower,accuracy
let captainHullSpan = document.getElementById('captain-hull-span')
let captainFPSpan = document.getElementById('captain-firepower-span')
let captainAccuracySpan = document.getElementById('captain-accuracy-span')

// capture aliens hull,firepower,accuracy
let alienHullSpan = document.getElementById('alien-hull-span')
let alienFPSpan = document.getElementById('alien-firepower-span')
let alienAccuracySpan = document.getElementById('alien-accuracy-span')

let cWon = document.getElementById('c-won')
let aWon=document.getElementById('a-won')
let retreat =  document.querySelector('.retreat')  
let wonSound= document.getElementById('won-sound')
let alSpan = document.querySelector('al-span');

let gameStart;
let alienNo;



function resetGame(){
    console.log("game reset");
  let retreatAns= confirm('start again?');
 if(retreatAns){
    gameStart=false;
        console.log("Game has been reset with empty object");
    captain.reset();
    alienShip.length=0;
    alienNumber.textContent=0;
    fireBtn.style.border="1px solid white" ;
    retreat.classList.add('dnone')
    start.classList.remove('dnone')
    aWon.classList.add('dnone')
    cWon.classList.add('dnone')
   } else{
    console.log("should go back to prev state");
    
   }
   }


   function changeColor(){
    fireBtn.style.border="2px solid red" 
}

// calculate the accuracy with which the capatain hits alien and see if alien was hit
function calculateAliensAccuracy(){
    console.log('inside calc accuracy -> alien hits captain');
    // let random = Math.random();
    // random = Number((Math.random() * (0.8) + 0.1).toFixed(1));
    // captainAccuracySpan.textContent= ` : ${random}`;
    console.log('captains accuracy:',random);
    console.log("current aliens accuracy is: ",currentAlien.accuracy);
         if (  random < currentAlien.accuracy ){
    console.log('Alien hit the captain,reduce captains hull points')
    return true;
    }else{
    console.log('alien missed the captain')
    return false;
    }
    
    }

    function isCaptainDefeated(){
        if(captain.hull<=0){
            console.log("captain defeated,alien won");
            // display Alien won msg here using html
            //  retreat.classList.remove('dnone')
            aWon.classList.remove('dnone')
            aWon.style.display=block;
            wonSound.play(); 
            // alert('Alien won!')
             resetGame();
                 }
                 else{
                    console.log("continue game,now captain will fire");
                    setTimeout(changeColor, 900);
                 }
         
    }

    

   function alienFires(){
    const image = document.getElementById('alien-img');
    const sound = document.getElementById('click-sound-alien');

    image.classList.add('move-left');
    sound.play();
        // Remove the class after animation ends to allow it to be triggered again
        image.addEventListener('animationend', () => {
            image.classList.remove('move-left');
        }, { once: true });

    console.log('alien is attacking captain');
    let ans = calculateAliensAccuracy();
    if(ans){
       captain.hull-=currentAlien.firePower;
       captainHullSpan.textContent=` : ${captain.hull}`;
       console.log('captain hull points reduced: ',captain);
    isCaptainDefeated();   
    // fireBtn.style.border="2px solid red" 
    setTimeout(changeColor, 900);
    }else{
        console.log('You missed the traget,captain value doesnt change,captain can hit firebutton'); 
        // fireBtn.style.border="2px solid red" 
        setTimeout(changeColor, 1000);
    }
    
   }

//    let no=6;
function isDefeated(){
    if(currentAlien.hull<=0){
        console.log("currentAlien's hull is less than 0,destroy this alien");
        // put an innerhtml that says alien is destroyed
        currentAlien=alienShip.shift();
        console.log('New alien popped : ',currentAlien)
        alienNo+=1
         console.log('new alien number : ',alienNo);
        //  setTimeout(changeColor, 900);
                fireBtn.style.border="2px solid red"  
        if(alienNo<=6){
            // num=num-1;
            alienNumber.innerHTML=` : ${alienNo}`;
            alienHullSpan.textContent= ` : ${currentAlien.hull}`;
            alienFPSpan.textContent= `: ${currentAlien.firePower}`;
            alienAccuracySpan.textContent= `: ${currentAlien.accuracy}`;
            // alSpan.textContent = ` : ${num}`; 
        }else{
            console.log('All aliens defeated,Captain Won');
            
            // alert('Captain won!!')
            cWon.classList.remove('dnone')
            cWon.style.display=block;
            wonSound.play(); 
                     resetGame();
        }    
        }
        else{
        // alienFires();
        setTimeout(alienFires, 2000);
    }
}
let random;
// calculate the accuracy with which the capatain hits alien and see if alien was hit
function calculateAccuracy(){
    console.log('inside calc accuracy -> catain hits alien');
     random = Number((Math.random() * (1.0) + 0.1).toFixed(1));
    console.log('captains accuracy:',random);
    captainAccuracySpan.textContent= ` : ${random}`;
     if (random > currentAlien.accuracy ){
    console.log('captain hit the target,reduce aliens hull points')
    return true;
    }else{
    console.log('captain missed the alien')
    return false;
    }
    
    }


function captainFires(){
const image = document.getElementById('captain-img')
const sound = document.getElementById('click-sound');
// Add the animation class
image.classList.add('move-right');
sound.play();
fireBtn.style.border="1px solid white" 

// Remove the class after animation ends to allow it to be triggered again
image.addEventListener('animationend', () => {
    image.classList.remove('move-right');
}, { once: true });

  console.log('inside captain function,the captain fires the alien')
  let answer =  calculateAccuracy();
if(answer){
    currentAlien.hull-=captain.firePower; 
    console.log("current Aliens hull reduced",currentAlien.hull);
    alienHullSpan.textContent=` : ${currentAlien.hull}`;
    isDefeated();
   
}else{
    // alienFires();
    setTimeout(alienFires, 2000);
}
}




// do this on clicking fire
fireBtn.addEventListener('click',captainFires)




// start the game
start.addEventListener('click', ()=>{
    console.log('start clicked,game set to true');
    gameStart=true; 
    createPlayerAndAliens();
   currentAlien = alienShip.shift();
   console.log('first alien popped:',currentAlien);
   fireBtn.style.border="2px solid red"  
   start.classList.add('dnone')
   retreat.classList.remove('dnone')
//    set intial values:
captainHullSpan.textContent=` : ${captain.hull}`;
captainFPSpan.textContent= ` : ${captain.firePower}`;
captainAccuracySpan.textContent= ` : ${captain.accuracy}`;

alienHullSpan.textContent= ` : ${currentAlien.hull}`;
alienFPSpan.textContent= `: ${currentAlien.firePower}`;
alienAccuracySpan.textContent= `: ${currentAlien.accuracy}`;
    
})

retreat.addEventListener('click',()=>{
    console.log('retreat clicked');
    gameStart=false;
    resetGame();
})




    























   
 