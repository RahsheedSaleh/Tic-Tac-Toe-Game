let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".resetBtn");
let currentPlayer = "X";
let border = ["", "", "", "", "", "", "", "", ""];

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (box.textContent !== "") {
      alert("This is already done!");
    } else {
      box.textContent = currentPlayer;
      border[index] = currentPlayer;
      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
    }

    // Checking "X"
    if (border[0] === "X" && border[1] === "X" && border[2] === "X") {
      alert("YOU WIN!!!!!!!!!!");
    }
    if (border[0] === "X" && border[3] === "X" && border[6] === "X") {
      alert("YOU WIN!!!!!!!!!!");
    }
    if (border[0] === "X" && border[4] === "X" && border[8] === "X") {
      alert("YOU WIN!!!!!!!!!!");
    }
    if (border[1] === "X" && border[4] === "X" && border[7] === "X") {
      alert("YOU WIN!!!!!!!!!!");
    }
    if (border[2] === "X" && border[4] === "X" && border[6] === "X") {
      alert("YOU WIN!!!!!!!!!!");
    }
    if (border[3] === "X" && border[4] === "X" && border[5] === "X") {
      alert("YOU WIN!!!!!!!!!!");
    }
    if (border[6] === "X" && border[7] === "X" && border[8] === "X") {
      alert("YOU WIN!!!!!!!!!!");
    }
    if (border[2] === "X" && border[5] === "X" && border[8] === "X") {
      alert("YOU WIN!!!!!!!!!!");
    }

    // Checking "O"
    if (border[0] === "O" && border[1] === "O" && border[2] === "O") {
      alert("YOU WIN!!!!!!!!!!");
    }
    if (border[0] === "O" && border[3] === "O" && border[6] === "O") {
      alert("YOU WIN!!!!!!!!!!");
    }
    if (border[0] === "O" && border[4] === "O" && border[8] === "O") {
      alert("YOU WIN!!!!!!!!!!");
    }
    if (border[1] === "O" && border[4] === "O" && border[7] === "O") {
      alert("YOU WIN!!!!!!!!!!");
    }
    if (border[2] === "O" && border[4] === "O" && border[6] === "O") {
      alert("YOU WIN!!!!!!!!!!");
    }
    if (border[3] === "O" && border[4] === "O" && border[5] === "O") {
      alert("YOU WIN!!!!!!!!!!");
    }
    if (border[6] === "O" && border[7] === "O" && border[8] === "O") {
      alert("YOU WIN!!!!!!!!!!");
    }
    if (border[2] === "O" && border[5] === "O" && border[8] === "O") {
      alert("YOU WIN!!!!!!!!!!");
    }
  });
  reset.addEventListener("click", ()=>{
    boxes.forEach((box,index)=>{
      box.textContent = "";
      border[index] = "";
    })
  })
});
