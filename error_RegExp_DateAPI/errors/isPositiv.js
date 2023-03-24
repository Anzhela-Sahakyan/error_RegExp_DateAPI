function isPositive(a) {
  try {
    if (a > 0) {
      return "Yes";
    } else if (a === 0) {
      throw new Error("Zero Error");
    } else if (a < 0) {
      throw new Error("Negative Error");
    }
  } catch (error) {
    return error;
  }
}
console.log(isPositive(-5));
