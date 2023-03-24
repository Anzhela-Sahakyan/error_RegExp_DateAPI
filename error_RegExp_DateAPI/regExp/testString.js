function testString(string) {
  const result = /^[a-z]*$^[A-Z]*$^[0-9]*$/g.test(string);
  return result;
}

const testResult = testString("Arm$15");

console.log(testResult);
