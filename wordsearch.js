// This function transposes a matrix
const transpose = function(matrix) {
  
  // Create an array to store the result
  let result = [];

  // If the matrix is empty, return an empty array
  if (matrix.length === 0) {
    return result;
  }

  // Iterate through the matrix length and add an empty array to the results array
  for (let i = 0; i < matrix[0].length; i++) {
    result.push([]);
  }


  // Iterate through the row of the matrix
  for (let x = 0; x < matrix.length; x++) {

    // Iterate through the column of the matrix
    for (let y = 0; y < matrix[x].length; y++) {

      // Push the letter at [x][y] in to the results array
      result[y].push(matrix[x][y]);
    }
  }


  // Return the result
  return result;
};



// Word Search function
// This function takes a matrix of letters and a word, and returns true if the word is found
const wordSearch = (letters, word) => {

  // Join all of the letters in an array (horizonal line) into a single string
  const horizontalJoin = letters.map(ls => ls.join(''));

  // Loop through each string in the array
  for (let string of horizontalJoin) {

    // If the string contains the word we're looking for, return true
    if (string.includes(word)) {
      return true;
    }
  }


  // Transpose the letters matrix
  const transposedMatrix = transpose(letters);

  // Join all of the letters in an array (horizonal line) into a single string
  const horizontalJoin2 = transposedMatrix.map(ls => ls.join(''));

  // Loop through each string in the array
  for (let string of horizontalJoin2) {

    // If the string contains the word we're looking for, return true
    if (string.includes(word)) {
      return true;
    }
  }


  // Otherwise return false
  return false;
};



module.exports = wordSearch;



