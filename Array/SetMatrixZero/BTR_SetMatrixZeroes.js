 const matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]  
let row=[], col=[];
var setZeroes = function(matrix) {
    for (let i=0;i<matrix.length;i++){
        for (let j=0;j<matrix[0].length;j++){
            if(matrix[i][j]==0){                                
                        row[i]=1
                        col[j]=1
            }
          
        }
    }  
    console.log(row, col)
    makeMarkedRowColZero(matrix)     //Time Complexity: m*n
};

function makeMarkedRowColZero(matrix){
 for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[0].length;j++){
        if(row[i]==1|| col[j]==1){
            matrix[i][j]=0
    }
 }
}
}

setZeroes(matrix)    //Time Complexity: m*n
console.log(matrix)


//Total Time Complexity: (m*n)+(m*n) = O(m* n + m * n) =O(n^2)
//Total Space Complexity:  O(m) + O(n)