
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
    changePlayer: function (buttonNumber) {
        if (connectFour.gridArray[buttonNumber][0] !==  0) {
                $(".gameDisplay").html("");
                $(".gameDisplay").html("<h2>This column is full! Choose another!</h2>");
        } else if (connectFour.playerTurn === 1) {
            connectFour.playerTurn = 5;
        } else if (connectFour.playerTurn === 5) {
            connectFour.playerTurn = 1;
        }
    },
    updateGamePieceDisplay: function () {
        for (var i = 0; i < connectFour.gridArray.length; i++) {
            for (var j = 0; j < connectFour.gridArray[i].length; j++) {
                if (connectFour.gridArray[i][j] === 1) {
                    var gamePieceCoordinate = '#' + i + '-' + j;
                    $(gamePieceCoordinate).css("background-color", "red");
                } else if (connectFour.gridArray[i][j] === 5) {
                    var gamePieceCoordinate = '#' + i + '-' + j;
                    $(gamePieceCoordinate).css("background-color", "black");
            }
        }
        }
    },
    checkForWin: function () {
        connectFour.checkHorizontal();
        connectFour.checkVertical();
        connectFour.checkDiagonalUp();
        connectFour.checkDiagonalDown();
    },
    checkHorizontal: function () {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < connectFour.gridArray[i].length; j++) {
                if ((connectFour.gridArray[i][j] + connectFour.gridArray[i + 1][j] + connectFour.gridArray[i + 2][j] + connectFour.gridArray[i + 3][j]) === 4) {
                    $(".gameDisplay").html("");
                    $(".gameDisplay").html("<h2>Player One wins!</h2>");
                } else if ((connectFour.gridArray[i][j] + connectFour.gridArray[i + 1][j] + connectFour.gridArray[i + 2][j] + connectFour.gridArray[i + 3][j]) === 20) {
                    $(".gameDisplay").html("");
                    $(".gameDisplay").html("<h2>Player Two wins!</h2>");   
                }
            }
        }
    },
    checkVertical: function () {
        for (var i = 0; i < connectFour.gridArray.length; i++) {
            for (var j = 0; j < 3; j++) {
                if ((connectFour.gridArray[i][j] + connectFour.gridArray[i][j + 1] + connectFour.gridArray[i][j + 2] + connectFour.gridArray[i][j + 3]) === 4) {
                    $(".gameDisplay").html("");
                    $(".gameDisplay").html("<h2>Player One wins!</h2>"); 
                } else if ((connectFour.gridArray[i][j] + connectFour.gridArray[i][j + 1] + connectFour.gridArray[i][j + 2] + connectFour.gridArray[i][j + 3]) === 20) {
                    $(".gameDisplay").html("");
                    $(".gameDisplay").html("<h2>Player Two wins!</h2>"); 
                }
            }
        }
    },
    checkDiagonalUp: function () {
        for (var i = 0; i < 4; i++) {
            for (var j = 3; j < 6; j++) {
                if ((connectFour.gridArray[i][j] + connectFour.gridArray[i + 1][j - 1] + connectFour.gridArray[i + 2][j - 2] + connectFour.gridArray[i + 3][j - 3]) === 4) {
                    $(".gameDisplay").html("");
                    $(".gameDisplay").html("<h2>Player One wins!</h2>"); 
                } else if ((connectFour.gridArray[i][j] + connectFour.gridArray[i + 1][j - 1] + connectFour.gridArray[i + 2][j - 2] + connectFour.gridArray[i + 3][j - 3]) === 20) {
                    $(".gameDisplay").html("");
                    $(".gameDisplay").html("<h2>Player Two wins!</h2>"); 
                }
            }
        }
    },
    checkDiagonalDown: function () {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 3; j++) {
                if ((connectFour.gridArray[i][j] + connectFour.gridArray[i + 1][j + 1] + connectFour.gridArray[i + 2][j + 2] + connectFour.gridArray[i + 3][j + 3]) === 4) {
                    $(".gameDisplay").html("");
                    $(".gameDisplay").html("<h2>Player One wins!</h2>");
                } else if ((connectFour.gridArray[i][j] + connectFour.gridArray[i + 1][j + 1] + connectFour.gridArray[i + 2][j + 2] + connectFour.gridArray[i + 3][j + 3]) === 20) {
                    $(".gameDisplay").html("");
                    $(".gameDisplay").html("<h2>Player Two wins!</h2>");
                }
            }
        }
    },
    addGamePiece: function (event) {
        var buttonNumber = parseInt(event.target.dataset.button);
        connectFour.changePlayer(buttonNumber);
        connectFour.addValuetoArray(buttonNumber);
        connectFour.updateGamePieceDisplay();
        connectFour.checkForWin();
    }
};

$(".buttons").click(connectFour.addGamePiece);


