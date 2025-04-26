let sums = [2, 4, 5, 3, 11];
let len = sums.length;
let target = 9;

function twoSum(sums, target){
    for(let i = 0; i < len; i++){
        for(let j = i + 1; j < len; j++){
            if(sums[i] + sums[j] === target){
                return [i, j];
            }
        }
    }
    return 'not here';
}

console.log(twoSum(sums, target));