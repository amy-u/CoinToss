function coinFlip() {
    let number = Math.random(1,0);
if(number > 0.5){
    document.getElementById("coin").innerHTML = "Tails";
} else {

    document.getElementById("coin").innerHTML = "Heads";
};
}

function moreFlips(value){
    let arrayOfCoins = [];
    for(let i = 0; i < value; i++){
        arrayOfCoins.push(coinFlip());
    }
    document.getElementById("coin").innerHTML = arrayOfCoins;
}


var input = document.getElementById("inPut");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

