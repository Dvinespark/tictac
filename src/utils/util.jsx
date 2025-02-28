function checkWinner (arr) {
    let winnerFlag = false;
    // first check diagonals

    //  0   1   2
    //  3   4   5
    //  6   7   8
    if ((arr[0] === arr[4] === arr[8]) || (arr[2] === arr[4] === arr[6])) {
        winnerFlag = true;
    }

    for (i=0; i < (arr.length -3 ); i+=3){
        // checks rows
        if (arr[i] === arr[i+1] === arr[i+2]) {
            winnerFlag = true;
        }
    }

    for (i=0; i<2; i++) {
        // check columns
        if (arr[i] === arr[i+3] === arr[i+6]) {
            winnerFlag = true;

        }
    }
    return winnerFlag;

}