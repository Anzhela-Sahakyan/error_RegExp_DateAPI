function reverseString(str) {
  try {
    return str.split("").reverse().join("");
  } catch (error) {
    console.log(`${str} must be string`);
  }
  return str;
}

console.log(reverseString(123));
