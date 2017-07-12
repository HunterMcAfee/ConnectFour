
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
    addValuetoArray: function (buttonNumber) {
        for (var i = 5; i >= 0; i--) {
            if (connectFour.gridArray[buttonNumber][i] ===  0) {
                connectFour.gridArray[buttonNumber][i] = connectFour.playerTurn;
                break;
            }
        }
    },
    checkFullColumn: function (event) {

    },
    updateGamePieceDisplay: function () {
        console.log("I am working");
        for (var i = 0; i < connectFour.gridArray.length; i++) {
            for (var j = 0; j < connectFour.gridArray[i].length; j++) {
                if (connectFour.gridArray[i][j] === 1) {
                    var gamePieceCoordinate = '"' + '#' + i + '-' + j + '"';
                    console.log(gamePieceCoordinate);
                    $(gamePieceCoordinate).css("background-color", "red");
                } else if (connectFour.gridArray[i][j] === 2) {
                    var gamePieceCoordinate = '"' + '#' + i + '-' + j + '"';
                    console.log(gamePieceCoordinate);
                    $(gamePieceCoordinate).css("background-color", "black");
            }
        }
        }
    },
    addGamePiece: function (event) {
        var buttonNumber = parseInt(event.target.dataset.button);
        connectFour.addValuetoArray(buttonNumber);
        connectFour.updateGamePieceDisplay();
        // connectFour.changePlayer();
    },
};

$(".buttons").click(connectFour.addGamePiece);