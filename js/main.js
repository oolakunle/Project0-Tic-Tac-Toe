let player = 1;

const clickButton = function (button) {
  if (player === 1) {
    // Assign the value of X to the chosen block on the grid
    document.getElementById(button).value = "X";
    // Stop the button from changing value
    document.getElementById(button).disabled = "disabled";
    // Alternate between Player 1 and 2.
    player += 1;
    winner();
  } else {
    document.getElementById(button).value = "O";
    document.getElementById(button).disabled = "disabled";
    player -= 1;
    winner();
  }

};
// Check for the winner of the game according to the position.

const winner = function () {
  if (document.getElementById("button0").value === "X" &&
      document.getElementById("button1").value === "X" &&
      document.getElementById("button2").value === "X" ||
      document.getElementById("button3").value === "X" &&
      document.getElementById("button4").value === "X" &&
      document.getElementById("button5").value === "X" ||
      document.getElementById("button6").value === "X" &&
      document.getElementById("button7").value === "X" &&
      document.getElementById("button8").value === "X" ||
      document.getElementById("button0").value === "X" &&
      document.getElementById("button3").value === "X" &&
      document.getElementById("button6").value === "X" ||
      document.getElementById("button1").value === "X" &&
      document.getElementById("button4").value === "X" &&
      document.getElementById("button7").value === "X" ||
      document.getElementById("button2").value === "X" &&
      document.getElementById("button5").value === "X" &&
      document.getElementById("button8").value === "X" ||
      document.getElementById("button0").value === "X" &&
      document.getElementById("button4").value === "X" &&
      document.getElementById("button8").value === "X" ||
      document.getElementById("button2").value === "X" &&
      document.getElementById("button4").value === "X" &&
      document.getElementById("button6").value === "X"
  ) {
    alert("Player 1 won!!!");
    reset();
  } else if (document.getElementById("button0").value === "O" &&
        document.getElementById("button1").value === "O" &&
        document.getElementById("button2").value === "O" ||
        document.getElementById("button3").value === "O" &&
        document.getElementById("button4").value === "O" &&
        document.getElementById("button5").value === "O" ||
        document.getElementById("button6").value === "O" &&
        document.getElementById("button7").value === "O" &&
        document.getElementById("button8").value === "O" ||
        document.getElementById("button0").value === "O" &&
        document.getElementById("button3").value === "O" &&
        document.getElementById("button6").value === "O" ||
        document.getElementById("button1").value === "O" &&
        document.getElementById("button4").value === "O" &&
        document.getElementById("button7").value === "O" ||
        document.getElementById("button2").value === "O" &&
        document.getElementById("button5").value === "O" &&
        document.getElementById("button8").value === "O" ||
        document.getElementById("button0").value === "O" &&
        document.getElementById("button4").value === "O" &&
        document.getElementById("button8").value === "O" ||
        document.getElementById("button2").value === "O" &&
        document.getElementById("button4").value === "O" &&
        document.getElementById("button6").value === "O"
  ) {
    alert("Player 2 won!!!");
    reset();
  }
};

// Reset the game altogether.

const reset = function () {
  document.getElementById("button0").value = "";
  document.getElementById("button1").value = "";
  document.getElementById("button2").value = "";
  document.getElementById("button3").value = "";
  document.getElementById("button4").value = "";
  document.getElementById("button5").value = "";
  document.getElementById("button6").value = "";
  document.getElementById("button7").value = "";
  document.getElementById("button8").value = "";
  document.getElementById("button0").disabled = "";
  document.getElementById("button1").disabled = "";
  document.getElementById("button2").disabled = "";
  document.getElementById("button3").disabled = "";
  document.getElementById("button4").disabled = "";
  document.getElementById("button5").disabled = "";
  document.getElementById("button6").disabled = "";
  document.getElementById("button7").disabled = "";
  document.getElementById("button8").disabled = "";
};
