/**
 * @param {number} numRows
 * @return {number[][]}
 */

let arr2=[]

//factorial
function factorial(n){
    let fac=1
    if (n==0) return 1;
    for(let i=1;i<=n;i++){
        fac=fac*i
    }
    return fac;
}


//formula of nCr
//i have to subtract 1 to get exact element of pascal tree
function getNCR(n, r){
return factorial(n)/(factorial(n-r)*(factorial(r)))
}


//get whole row
function getPascalRow(row){
    let arr=[]
    let n=row-1;
    //traverse whole row
for(let i=0;i<row;i++){
arr.push(getNCR(n, i))
}
return arr
}

//get all pascal element
var generate = function(numRows) {
   for(let i=1;i<=numRows;i++){
       arr2.push(getPascalRow(i))
    }

    return arr2 
};

console.log(generate(3))

//TC: O(numRows^2)
//SC: O(numRows^2)