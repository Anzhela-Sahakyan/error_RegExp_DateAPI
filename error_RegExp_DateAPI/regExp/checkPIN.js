function isValidPin(string) {
  const regex = /^(\d{4}|\d{6})$/g;
  return regex.test(string);
}

console.log(isValidPin("5 151"));
