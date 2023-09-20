const matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]  
function markColZero(j, matrix){
    for(i=0;i<matrix.length;i++){
        if(matrix[i][j]!=0){
            matrix[i][j]=-1;
        }
    }
}
function markRowZero(i, matrix){
    for(j=0;j<matrix[0].length;j++){
        if(matrix[i][j]!=0){
            matrix[i][j]=-1;
        }
    }
}

var setZeroes = function(matrix) {
    rowLength=matrix.length;
    colLength=matrix[0].length;
    for (let i=0;i<matrix.length;i++){
        for (let j=0;j<matrix[0].length;j++){
            if(matrix[i][j]==0){
                markRowZero(i, matrix);   //O(m)
                markColZero(j, matrix);   //O(n)
            }
        }
    }  
    // console.log(matrix)
    replaceWithZero(matrix)    //O(m*n)
};

function replaceWithZero(matrix){
 for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[0].length;j++){
        if((matrix[i][j]==-1)){
            matrix[i][j]=0
    }
 }
}
}

setZeroes(matrix)  // O(m*n)+(m+n)+O(m*n)
console.log(matrix)