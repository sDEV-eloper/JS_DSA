var generate = function(numRows) {
    if (numRows === 0) return [];
    const result = [[1]]; // Initialize the result with the first row [1]
    for (let i = 1; i < numRows; i++) {
        const prevRow = result[i - 1];
        const newRow = [1]; // The first element of each row is always 1
        for (let j = 1; j < i; j++) {
            newRow.push(prevRow[j - 1] + prevRow[j]);
        }
        newRow.push(1); // The last element of each row is always 1
        result.push(newRow);
    }
    return result;
};
console.log(generate(3));
//TC: O(numRows^2)
//SC: O(numRows^2)
