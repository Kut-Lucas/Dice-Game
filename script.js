let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
let btn = document.getElementById('move-btn');



let empty = document.querySelector(".empty");



btn.addEventListener('click', function() {
    // Check if both inputs have text
    const input1 = player1.value.trim().toString();
    const input2 = player2.value.trim().toString();
    
    if (input1 === '' || input2 === '') {
      // At least one input is empty, display an alert
      alert('Both inputs are required.');
    } else {
      // Both inputs have text, display the values as strings
      alert('Input 1: ' + input1 + '\nInput 2: ' + input2);
      window.location.href = './dicee.html';
    }
  });
  




