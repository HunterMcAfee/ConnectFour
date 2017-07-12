
var connectFour = {
    playerTurn: 1,
    gridArray: [
        [0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0,],
        ],
    checkFullColumn: function (event) {

    },
    updateGamePieceDisplay: function () {

    },
    addGamePiece: function (event) {
        var buttonNumber = parseInt(event.target.dataset.button);
        console.log(buttonNumber);
        for (var i = 5; i >= 0; i--) {
            if (connectFour.gridArray[buttonNumber][i] ===  0) {
                connectFour.gridArray[buttonNumber][i] = connectFour.playerTurn;
                break;
            }
        }
        updateGamePieceDisplay(buttonNumber);
        connectFour.changePlayer();
    },
};

$(".buttons").click(connectFour.addGamePiece);