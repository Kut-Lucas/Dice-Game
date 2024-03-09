let output = document.querySelector(".output");
let btn1 = document.querySelector(".btn1");
let refreshButton = document.querySelector(".refresh");

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");


const dice1 = {
    num: 1,
    image: "./images/dice1.png"
  }
  const dice2 = {
    num: 2,
    image: "./images/dice2.png"
  }
  const dice3 = {
    num: 3,
    image: "./images/dice3.png"
  }
  const dice4 = {
    num: 4,
    image: "./images/dice4.png"
  }
  const dice5 = {
    num: 5,
    image: "./images/dice5.png"
  }
  const dice6 = {
    num: 6,
    image: "./images/dice6.png"
  }

// Generate two random numbers between 1 and 6 (inclusive)
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

console.log("Random Number 1:", randomNumber1);
console.log("Random Number 2:", randomNumber2);



btn1.addEventListener('click', ()=>{

// Compare the rounded numbers using if statements
if (randomNumber1 === randomNumber2) {
    output.innerHTML = `Draw! Try again`;
    console.log("Both numbers are equal.");
  } else if (randomNumber1 > randomNumber2) {
    output.innerHTML = `Player 1 wins!`;
    console.log("Number 1 is greater than Number 2.");
  } else {
    output.innerHTML = `Player 2 wins!`;
    console.log("Number 2 is greater than Number 1.");
  }

 



  // for Dice player 2
  if (randomNumber2 === dice1.num)
  {
    img2.src = dice1.image;
  }
  else if (randomNumber2 === dice2.num)
  {
    img2.src = dice2.image;
  }
  else if (randomNumber2 === dice3.num)
  {
    img2.src = dice3.image;
  }
  else if (randomNumber2 === dice4.num)
  {
    img2.src = dice4.image;
  }
  else if (randomNumber2 === dice5.num)
  {
    img2.src = dice5.image;
  }
  else if (randomNumber2 === dice6.num)
  {
    img2.src = dice6.image;
  }
  else
  {
    console.log("error");
  }


  // for player1

  if (randomNumber1 === dice1.num)
  {
    img1.src = dice1.image;
  }
  else if (randomNumber1 === dice2.num)
  {
    img1.src = dice2.image;
  }
  else if (randomNumber1 === dice3.num)
  {
    img1.src = dice3.image;
  }
  else if (randomNumber1 === dice4.num)
  {
    img1.src = dice4.image;
  }
  else if (randomNumber1 === dice5.num)
  {
    img1.src = dice5.image;
  }
  else if (randomNumber1 === dice6.num)
  {
    img1.src = dice6.image;
  }
  else
  {
    console.log("error");
  }
});


// Add event listener to the refresh button
refreshButton.addEventListener('click', function() {
    // Reload the window
    location.reload();
  });