//board

var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var Context;

window.onload = function(){
    board = document.getElementById("board");
    board.height = rows*blockSize;
    board.width = cols*blockSize;
    Context = board.getContext("2d");

    update();
}
function update(){
  Context.fillStyle="black" 
  Context.fillRec(0.0, board.width,board.height);

}