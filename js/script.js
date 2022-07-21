// TODO Task_1 ✅
/*
 *Є масив. Значення в масиві будуть або числами, рядками, або їх комбінацією. Ваше завдання - повернути масив, в якому будуть йти спочатку числа, відсортовані в порядку зростання, а потім рядки, відсортовані в алфавітному порядку. Значення повинні зберегти свій вихідний тип. Якщо на вході був рядок, то й повернутися повинен рядок, якщо число - число.
 */

function example(array) {
  const numberArray = array
    .filter(item => typeof item === 'number')
    .sort((prev, next) => prev - next);

  const textArray = array
    .filter(item => typeof item === 'string')
    .sort((prev, next) => prev.localeCompare(next));

  return [...numberArray, ...textArray];
}

// Приклад:
// example([6, 2, 3, 4, 5]) = > [2, 3, 4, 5, 6]
// example([14, 32, 3, 5, 5]) = > [3, 5, 5, 14, 32]
// example([1, 2, 3, 4, 5]) = > [1, 2, 3, 4, 5]
// example(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]) = > [0, 2, 2, 'Apple', 'Banana', 'Mango', 'Orange']

// console.log(example([6, 2, 3, 4, 5]));
// console.log(example([14, 32, 3, 5, 5]));
// console.log(example([1, 2, 3, 4, 5]));
console.log(example(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, -2]));

// * Alternative Variant

const sorArray = array => {
  return array
    .reduce((acc, element) => {
      typeof element === 'string' ? acc.push(element) : acc.unshift(element);

      return acc;
    }, [])
    .sort((a, b) => {
      return typeof a === 'string' ? a.localeCompare(b) : a - b;
    });
};

console.log(sorArray(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]));

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

// arr.flat(Infinity);  - розгорнути на Infinity;

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

/*
Є багатомірний масив. Треба зробити його розгладити на один рівень
*/

// * Alternative Variant

const getFlatArray = array => {
  // return array.flat(Infinity);

  let result = [];

  array.forEach(element => {
    if (Array.isArray(element)) {
      result = [...result, ...getFlatArray(element)];
    } else {
      result.push(element);
    }
  });

  return result;
};

console.log(getFlatArray(arr));

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

пше; // * Alternative Variant
const getValues = array => {
  return array.reduce((acc, { name, value, children }) => {
    acc[name] = value;

    if (children) {
      acc = { ...acc, ...getValues(children) };
    }

    return acc;
  }, {});
};

console.log(getValues(arr));
