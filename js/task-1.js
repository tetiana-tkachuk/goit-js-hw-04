function isEnoughCapacity(products, containerSize) {
  const fruits = Object.values(products);
  let fruitsTotalNumber = 0;
  for (const fruit of fruits) {
    fruitsTotalNumber += fruit;
  }

  return fruitsTotalNumber <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
