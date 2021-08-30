class TicTacToe {
     constructor() { 
        this.currentPlayer = 'x';
        this.gameField = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];

     }

    getCurrentPlayerSymbol() {
        return this.currentPlayer

    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.gameField[rowIndex][columnIndex]) {        
            this.gameField[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer == 'x' ? 'o' : 'x'
        }
    }

    isFinished() {
        if (this.isDraw() || this.getWinner()) {
            return true;
        }
        return false;
    }

    getWinner() {

        for (let j = 0; j < this.gameField.length; j++){
            for (let i = 0; i < this.gameField[j].length; i++){
                if (this.gameField[0][i] == this.gameField[1][i] && this.gameField[1][i] == this.gameField[2][i]) {
                    return this.gameField[0][i];
                }
                
            }
        }
        for (let j = 0; j < this.gameField.length; j++) {
            if (this.gameField[j][0] ==  this.gameField[j][1] && this.gameField[j][1] == this.gameField[j][2] ) {
                return this.gameField[j][0];
            }
        }

        if (this.gameField[0][0] == this.gameField[1][1] && this.gameField[1][1] == this.gameField[2][2]) {
            return this.gameField[0][0];
        }
        
        if (this.gameField[0][2] == this.gameField[1][1] && this.gameField[1][1] == this.gameField[2][0]) {
            return this.gameField[0][2];
        }
        return null;

    }

    noMoreTurns() {
        let countNull = 0
        for (let j = 0; j < this.gameField.length; j++){
            for (let i = 0; i < this.gameField[j].length; i++){
                if (this.gameField[j][i] == null) {countNull++}
            }
        }
        
        if (countNull == 0) {
            return true;
        }
        return false;
    }

    isDraw() {
        if (this.noMoreTurns() && !this.getWinner()) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];

    }
}

module.exports = TicTacToe;
