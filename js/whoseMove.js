// function whoseMove(lastPlayer, win) {
//   let nextPlayer;

//   switch (true) {
//     case lastPlayer === "black" && win:
//       nextPlayer = "black";
//       break;
//     case lastPlayer === "black" && !win:
//       nextPlayer = "white";
//       break;
//     case lastPlayer === "white" && win:
//       nextPlayer = "white";
//       break;
//     default:
//       nextPlayer = "black";
//   }

//   return nextPlayer;
// }

// // Example usage:
// console.log(whoseMove("black", true));

// function whoseMove(lastPlayer, win) {
//   if (lastPlayer === "black" && win === false) {
//     console.log("white");
//   } else if (lastPlayer === "white" && win === true) {
//     console.log("white");
//   } else {
//     console.log("black");
//   }
// }

// whoseMove("black", true);

// function whoseMove(lastPlayer, win) {
//   if (lastPlayer === "black" && win === true) {
//     console.log("black");
//   } else if (lastPlayer === "black" && win === false) {
//     console.log("white");
//   } else if (lastPlayer === "white" && win === true) {
//     console.log("white");
//   } else {
//     console.log("black");
//   }
// }

// whoseMove("black", false);

function whoseMove(lastPlayer, win) {
  //coding and coding..

  if (lastPlayer === "black" && win) {
    return "black";
  } else if (lastPlayer === "black" && !win) {
    return "white";
  } else if (lastPlayer === "white" && win) {
    return "white";
  } else {
    return "black";
  }
}

// function whoseMove(lastPlayer, win) {
//   return lastPlayer === "black"
//     ? win
//       ? "black"
//       : "white"
//     : win
//     ? "white"
//     : "black";
// }

console.log(whoseMove("black", true));

