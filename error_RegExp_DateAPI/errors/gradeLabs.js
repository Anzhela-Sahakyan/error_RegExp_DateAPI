function gradeLabs(array) {
  let result;
  for (let i = 0; i < array.length; i++) {
    try {
      if (!array[i].runLab) {
        debugger;
        throw new Error(`Error thrown for ${array[i].student}`);
      }
      result = array[i].runLab(3);
      if (result !== 27) {
        console.log(`${array[i].student} failed the lab`);
      } else {
        console.log(`${array[i].student} passed the lab`);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

let studentLabs = [
  {
    student: "Blake",
    myCode: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Jessica",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Mya",
    runLab: function (num) {
      return num * num;
    },
  },
];

gradeLabs(studentLabs);
