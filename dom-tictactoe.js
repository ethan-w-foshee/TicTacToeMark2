//       ***********************
//            INSTRUCTIONS
//       ***********************

// 1. Read the code below and figure out the data flow
// 2. Add in your code from the terminal app (check for win logic)
// 3. Look for the @TODO, to fix
// next to each @TODO you will find tasks that need to be finished
// 4. GET THIS GAME WORKING!!

let currentMarker = 'X'
let board = [
  ['','',''],
  ['','',''],
  ['','','']
];
let playCount = 0;
// is called when a square is clicked. "this" = element here
const handleClick = (element) => {
  // check to see if the square clicked has anything in it, if not continue
  // this prevents an X being changed to an O
  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
    updateBoard(element.id)
    if(currentMarker === 'X'){
      element.style.backgroundColor = 'red'
    }
    else{
      element.style.backgroundColor = 'cyan'
    }
    checkForWin()
  }
}

const addMarker = (id) => {
  console.log(`We'll place a mark on square: ${id}`)
  // @TODO, Mix & Match. 
  // You will need the following pieces:
  document.getElementById(id).innerHTML = currentMarker
  // = currentMarker
  // .getElementById(id)
  // document
  // .innerHTML 

  // Arrange the above pieces into a single line of code
  // to add an X or O to the board to the DOM so it can be scene on the screen.
}

// passes the element's id attribute from HTML to be used
const updateBoard = (id) => {
  // parses the id string into a number then captures the first and last part of the newly created number as row & column
  const row = parseInt(id.charAt(0))
  const column = parseInt(id.charAt(2)) 

  console.log(`you clicked the sq at ${row} and ${column}`)
  console.log(board)

  // @TODO, Your code here: use the above information to change the board variable(array of arrays)
  board[row][column] = currentMarker
  // HINT: in your browser open up the dev tools -> console

  document.getElementById('currentPlayer').innerHTML = currentMarker;
}

const checkForWin = () => {
  // calls each checkForWin possibility and if any are true gives a page alert,
  if((horizontalWin() || verticalWin() || diagonalWin()) && playCount >= 4) {
    // **BONUS** you could make the dismissal of this alert window reset the board...
    window.alert(`Player ${currentMarker} won!`)
    resetBoard();
  }
  else if (playCount == 8) {
    window.alert(`Tie game!`)
    resetBoard();
  } else {
    // if no win, change the marker from X to O, or O to X for the next player.
    changeMarker()
    playCount++
  }
}

const verticalWin = () => {
  // Your code here to check for vertical wins
  console.log("Vertical Check.")
  if (((board[0][0] == board[1][0] && board[0][0] == board[2][0]) && board[0][0] != '') ||
    ((board[0][1] == board[1][1] && board[0][1] == board[2][1]) && board[1][1] != '') || 
    ((board[0][2] == board[1][2] && board[0][2] == board[2][2]) && board[2][2] != '')) {
      console.log("Vertical Win!")
    return true;
  }
  else {
    console.log("Vertical Fail.")
    return false;
  }
}

const horizontalWin = () => {
  // Your code here to check for horizontal wins
  console.log("Horizontal Check.")
  if (((board[0][0] == board[0][1] && board[0][0] == board[0][2]) && board[0][0] != '') ||
    ((board[1][0] == board[1][1] && board[1][0] == board[1][2]) && board[1][1] != '') ||
    ((board[2][0] == board[2][1] && board[2][0] == board[2][2]) && board[2][2] != '')) {
      console.log("Horizontal Win!")
      return true;
  }
  else {
    console.log("Horizontal Fail.")
    return false;
  }
}

const diagonalWin = () => {
  // Your code here to check for diagonal wins
  console.log("Diagonal Check.")
  if (((board[0][0] == board[1][1] && board[0][0] == board[2][2]) && board[0][0] != '') || 
    ((board[0][2] == board[1][1] && board[0][2] == board[2][0])  && board[1][1] != '')) {
      console.log("Diagonal Win!")
    return true;
  }
  else {
    console.log("Diagonal Fail.")
    return false;
  }
}

const changeMarker = () => {
  // ternary operator: if it's an X make it an O, if O make it an X
  currentMarker = currentMarker === "X" ? "O" : "X"
}

const resetBoard = () => {
  // sanity check: this tells us the function is being called
  console.log("the board was cleared!")

  // collects all of the "td"s into an HTML Collection: https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp  
  const squares = document.getElementsByTagName("TD")
  
  // loops over the HTML Collections and clears out the Xs and Os
  for (i=0; i<squares.length; i++) {
    console.log(squares[i])
    squares[i].innerHTML = null
    squares[i].style.backgroundColor = null
  }
  
  // @TODO, Your code here: make sure to reset the array of arrays to empty for a new game
  board = [
    ['','',''],
    ['','',''],
    ['','','']
  ]

  playCount = 0;
}

// **BONUSES**

// 1. Display the current player's turn
// 2. Count number of wins for each player and display them
// 3. Reset the number of wins
// 4. Clear the board on alert window dismissal
// 5. Add players names and display who wins, i.e. "Congrats Emily, you won with 0s!"
