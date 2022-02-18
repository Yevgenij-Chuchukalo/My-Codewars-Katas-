// let x = [1, 2];
// let y = [2];
let x = [1,2,3];
let y = [1,2];

// function arrayDiff(a, b) {
//   let result =[...a];
//   for (const element of b) {
//     if (result.includes(element)) {
//       result = result.filter(num => num !== element);
//     }
//   }return result;
// }

function arrayDiff(a, b) {
  for (const element of b) {
    if (a.includes(element)) {
      a = a.filter(num => num !== element);
    }
  }return a;
}

console.log(arrayDiff(x, y));