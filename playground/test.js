// TO_DO переписать императивщину на функциональщину
const test = (heroes, n) => {
  if (n === 1) return heroes.reduce((acc, elem) => acc + elem);
  if (heroes.length < n) return Math.max(...heroes);

  let centaurArr = heroes.slice(0, n);

  for (let i = 0; i < n; i++) {
    heroes.shift();
  }

  // heroes = heroes.filter((elem, i) => i < n);

  heroes.forEach(elem => {
    let minElem = Math.min(...centaurArr);
    let minIndex = centaurArr.findIndex(elem => elem === minElem);

    centaurArr[minIndex] += elem;
  });

  return Math.max(...centaurArr);
};

console.log(test([4, 5], 1)); // 9
console.log(test([5, 7, 3, 4], 2)); // 11
console.log(test([8, 7, 3, 4], 3)); // 8
