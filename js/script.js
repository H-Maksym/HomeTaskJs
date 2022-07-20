// TODO Task_1 ✅
/*
 *Є масив. Значення в масиві будуть або числами, рядками, або їх комбінацією. Ваше завдання - повернути масив, в якому будуть йти спочатку числа, відсортовані в порядку зростання, а потім рядки, відсортовані в алфавітному порядку. Значення повинні зберегти свій вихідний тип. Якщо на вході був рядок, то й повернутися повинен рядок, якщо число - число.
 */

// Приклад:
// example([6, 2, 3, 4, 5]) = > [2, 3, 4, 5, 6]
// example([14, 32, 3, 5, 5]) = > [3, 5, 5, 14, 32]
// example([1, 2, 3, 4, 5]) = > [1, 2, 3, 4, 5]
// example(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]) = > [0, 2, 2, 'Apple', 'Banana', 'Mango', 'Orange']

function example(array) {
  const numberArray = array
    .filter(item => item >= 0)
    .sort((prev, next) => prev - next);

  const textArray = array
    .filter(item => isNaN(item))
    .sort((prev, next) => prev.localeCompare(next));

  // const totalArray = [...numberArray, ...textArray];

  return [...numberArray, ...textArray];
}

// console.log(example([6, 2, 3, 4, 5]));
// console.log(example([14, 32, 3, 5, 5]));
// console.log(example([1, 2, 3, 4, 5]));
// console.log(example(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]));

//--------------------------------------------------------------------------------------------------
// TODO Task_2 ✅

/*
Є багатомірний масив. Треба зробити його розгладити на один рівень
*/

const arr = [
  12,
  [34, [2, [[[[[[[[[[33]]]]]]]]]]]],
  34,
  [23],
  'hello',
  ['five', ['some arr', ['last arr'], { name: 'John' }]],
];

//  [12,34,2,33,34,23,'hello','five','some arr','last arr', { name: 'John' }]

let count = 0;
function unfoldArray(array) {
  if (array.every(el => !(el instanceof Array))) {
    return array.flat(count);
  }
  count += 1;
  array = array.flat(count);
  return unfoldArray(array);
}

console.log(unfoldArray(arr));

//--------------------------------------------------------------------------------------------------
// TODO Task_3 ✅🌟

const arrObj = [
  {
    name: 'test',
    value: 1,
    children: [
      {
        name: 'test2',
        value: 2,
        children: [{ name: 'test3', value: 3 }],
      },
    ],
  },
];

// {test: 1, test2: 2, test3: 3}

const myObj = {};
function unionObj(array) {
  for (let arr of array) {
    myObj[arr.name] = arr.value;
    if (arr.children !== undefined) {
      unionObj(arr.children);
    }
  }
  return myObj;
}

console.log(unionObj(arrObj));
