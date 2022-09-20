const multiplier = (factor) => {
  return (number) => number * factor;
};

let twice = multiplier(2);
console.log(twice(5));

// Returns 10

// Here we have to start with multiplier function. It takes factor and returns a function with replacing factor with the number 2
// in the place of factor. And when twice is introduced with passing 2 in multiplier then it becomes a function like this
// (number) => number * 2
// then when twice is called with passing 5 as an argument then then 5 is placed in the place of 'number' and the equation
// becomes like this :
// 5 * 2
// Hence it prints 10
