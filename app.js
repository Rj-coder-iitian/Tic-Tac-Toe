let cells = document.querySelectorAll('.row > div');

for(let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}
let clickCount = 0;
function cellClicked(e) {

    // if message has content, reset the board.
    if( eleSelector('.message').length > 0 ){ 
        clearBoard();
      } else if(clickCount >= 9){ // if it's 9th click, clear board, or else carry on
        clearBoard();
      } else {
        if( e.target.classList.contains('clicked') == false){// if cell is empty, add X or O
          clickCount++; // increase click count
          e.target.classList.add('clicked');

           // check if even or odd click, add X or O
            if(clickCount % 2 == 1){ // oddNumber % 2 will return true for odd, so it is odd number
                e.target.textContent = 'X';
              } else if(clickCount % 2 == 0){ // evenNumber % 2 will return false for odd, so it is an even number
                e.target.textContent = 'O';
              }
            // check if we have a winner
            checkWinningCombo('X');
            checkWinningCombo('O');
        }
    }
}

// main function for checking the winning combinations
function checkWinningCombo(content){

    let checkBoardClass = [
      ['.one', '.two', '.three'],
      ['.four', '.five', '.six'],
      ['.seven', '.eight', '.nine'],
      ['.one', '.four', '.seven'],
      ['.two', '.five', '.eight'],
      ['.three', '.six', '.nine'],
      ['.one', '.five', '.nine'],
      ['.three', '.five', '.seven']
    ];
  
    for (let i = 0; i < checkBoardClass.length; i++) {
        [k,l,m] = [checkBoardClass[i][0],checkBoardClass[i][1],checkBoardClass[i][2]];
      
    // if winner!
        if( eleSelector(k) == content  && eleSelector(l) == content && eleSelector(m) == content ){
            document.querySelector('.message').innerHTML = content +" Wins!!";
        }
    }
  
    // if draw
        if( clickCount == 9 ){
            if( document.querySelector('.message').innerHTML == '' ){
            document.querySelector('.message').innerHTML = "It's a DRAW";
            }
        }
    }

// ****function to reset the board
function clearBoard() {
    for(let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = '';
        cells[i].classList.remove('clicked');
    }
    clickCount = 0;
    document.querySelector('.message').innerHTML = "";
   
    console.log('Game has been reset!');

}

// select element and check innerHTML
function eleSelector(e){
    return document.querySelector(e).innerHTML;
  }