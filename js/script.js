// Приклад: ✅
// example([6, 2, 3, 4, 5]) = > [2, 3, 4, 5, 6]
// example([14, 32, 3, 5, 5]) = > [3, 5, 5, 14, 32]
// example([1, 2, 3, 4, 5]) = > [1, 2, 3, 4, 5]
// example(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]) = > [0, 2, 2, 'Apple', 'Banana', 'Mango', 'Orange']

/* Задача на домашку */

function example(array) {
  const numberArray = array
    .filter(item => item >= 0)
    .sort((prev, next) => prev - next);

  const textArray = array
    .filter(item => isNaN(item))
    .sort((prev, next) => prev.localeCompare(next));

  const totalArray = [...numberArray, ...textArray];

  return totalArray;
}

// console.log(example([6, 2, 3, 4, 5]));
// console.log(example([14, 32, 3, 5, 5]));
// console.log(example([1, 2, 3, 4, 5]));
// console.log(example(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]));

const arr = [
  12,
  [34, [2, [33]]],
  34,
  [23],
  'hello',
  ['five', ['some arr', ['last arr'], { name: 'John' }]],
];

// const toString = arr => arr.flatMap(arr => arr);
// console.log(toString(arr));
//  [12,34,2,33,34,23,'hello','five','some arr','last arr', { name: 'John' }]

function deep(array) {
  let count = 0;
  for (let arr of array) {
    if (Array.isArray(arr)) {
      count += 1;
    }
  }
  return count;
}

console.log(deep([(34, [2, [33]])]));
