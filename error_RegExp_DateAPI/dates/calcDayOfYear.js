function dayOfYear(string) {
  let date = new Date(string);
  let year = date.getFullYear();
  let startOfYear = new Date(year, 0, 1);
  let dayCount = Math.floor((date - startOfYear) / (24 * 60 * 60 * 1000)) + 1;
  return dayCount;
}

console.log(dayOfYear("12/17/2020"));
