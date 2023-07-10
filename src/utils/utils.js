export function getRandomInt(min, max) {
  if (min === undefined) {
    throw new Error("getRandomInt must have at least one parameter: max");
  }
  // If one parameter is given, use it as max and default min to 0
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function getRandomFromArray(arr) {
  return arr[getRandomInt(0, arr.length - 1)];
}
export const parseRoll = (str) => {
  if (!str.includes("D")) {
    return Number(str);
  } else {
    const [rolls, addition = 0] = str.split("+");
    const [dice, limit] = rolls.split("D");
    let sum = 0;
    for (let i = 0; i < dice; i++) {
      sum += getRandomInt(1, limit);
    }
    return sum + Number(addition);
  }
};
export function capitalize(str) {
  const [first, ...rest] = str.split("");
  return first.toUpperCase() + rest.join("");
}
