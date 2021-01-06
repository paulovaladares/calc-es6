const sum = (num1, num2) => (num1 + num2);
const sub = (num1, num2) => (num1 - num2);
const multi = (num1, num2) => (num1 * num2);
const div = (num1, num2) => (num1 / num2);
const calc = {
  mais: sum,
  menos: sub,
  vezes: multi,
  por: div,
};

export default calc;
export { sum, sub, multi, div };
