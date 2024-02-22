// COIN FLIP SIMULATOR

// HTML ELement Variables
let outputEl = document.getElementById("output");

// Btn Click Event
document.getElementById("btn").addEventListener("click", btnHandler);

function btnHandler() {
  // First Coin Flip
  let coin1 = flipcoin();
  

  // Second Coin Flip
  let coin2 = flipcoin()
 
  // Third Coin Flip
  let coin3 = flipcoin()
 
  // Output Results
  outputEl.innerHTML = `<img src="img/${coin1}.png"> <img src="img/${coin2}.png"> <img src="img/${coin3}.png">`;
}
let probhead = Math.random();

function flipcoin(){
  if( Math.random() < 0.5){
    return "heads";
  } else {
    return "tails";
  }
}

