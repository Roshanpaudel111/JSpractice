const power = (base, exponent) => {
  let result = 1;
  for (let index = 0; index < exponent; index++) {
    // result = result * base;
    result *= base;
  }
  return result;
};

console.log(power(12, 2));
