// Transpose a matrix
const transpose = function (matrix) {
  
    let result = [];
    if (matrix.length === 0) {
        return result;
    }

    for (let k = 0; k < matrix[0].length; k++) {
        result.push([]);
    }

    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[x].length; y++) {
            result[y].push(matrix[x][y]);
        }
    }
    return result;
};


// Take a matrix of letters and a word and returns true if the word is found
const wordSearch = (letters, word) => {

    // Join all of the letters in an array (horizonal line) into a single string
    const horizontalJoin = letters.map(ls => ls.join(''));

    // Loop through each string in the array
    for (l of horizontalJoin) {

        // If the string contains the word we're looking for, return true
        if (l.includes(word)) {
          return true;
        }
    }

    // Transpose the letters matrix
    const transposedMatrix = transpose(letters);

    const horizontalJoin2 = transposedMatrix.map(ls => ls.join(''));

    for (l of horizontalJoin2) {
      if (l.includes(word)) {
        return true;
      }
    }
    return false;
}

module.exports = wordSearch























