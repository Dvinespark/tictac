function checkWinner(arr) {
  // first check diagonals

  //  0   1   2
  //  3   4   5
  //  6   7   8
  if (
    ((arr[0] === arr[4] && arr[4] === arr[8]) ||
      (arr[2] === arr[4] && arr[4] === arr[6])) &&
    arr[4] !== ""
  ) {
    return arr[4];
  }

  for (let i = 0; i < arr.length; i += 3) {
    // checks rows
    if (
      arr[i] === arr[i + 1] &&
      arr[i + 1] === arr[i + 2] &&
      arr[i + 1] !== ""
    ) {
      return arr[i+1];
    }
  }

  for (let i = 0; i < 3; i++) {
    // check columns
    if (
      arr[i] === arr[i + 3] &&
      arr[i + 3] === arr[i + 6] &&
      arr[i + 3] !== ""
    ) {
      return arr[i+3];
    }
  }
  return "";
}

export { checkWinner };
