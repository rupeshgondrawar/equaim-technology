function addNumbers(num1, num2) {
  const steps = {};
  let carry = "";
  const maxLength = Math.max(num1.toString().length, num2.toString().length);
  for (let i = 1; i <= maxLength; i++) {
    const n1 =
      parseInt(num1.toString().charAt(num1.toString().length - i)) || 0;
    const n2 =
      parseInt(num2.toString().charAt(num2.toString().length - i)) || 0;
    let sum = n1 + n2 + parseInt(carry);
    carry = sum >= 10 ? sum.toString().charAt(0) : "";
    sum = sum.toString().charAt(sum.toString().length - 1);
    const carryString = carry !== "" ? carry : undefined;
    const sumString = sum + "_".repeat(i - 1) + (carry !== "" ? carry : "");
    steps[`step${i}`] = { carryString, sumString };
  }
  return steps;
}
