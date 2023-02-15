const array = [1,2,3,4,5,6,[1,2,3,4,[1,2,3,4,5]]];
console.log(array.flat(3));
//resultu output: 1,2,3,4,5,6
            //    1,2,3,4,1,2
            //    3,4,5


// flatMap

const array2 = [1,2,3,4,5]
console.log(array2.flatMap(v => [v,v*2]));

// [
//     1, 2, 2, 4,  3,
//     6, 4, 8, 5, 10
//   ]