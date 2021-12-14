//Stair climbing with javascript

const ClimbingStairs = (stairArray) => {
     
    let stairLength = stairArray.length;
    if(stairLength === 1) {
        return stairArray[0]; //In the event the array only has length one, the answer will be the element at index 0

    }
    for (let ind = stairLength - 3; ~ind; ind--) {
        stairArray[ind] += Math.min(stairArray[ind+1], stairArray[ind+2]);
    return Math.min(stairArray[0], stairArray[1]);
    }
    

}
console.log(ClimbingStairs([5, 5, 15, 25]));
console.log(ClimbingStairs([10, 15, 20]));