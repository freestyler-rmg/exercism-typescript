const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

const SIZES = ['kilo', 'mega', 'giga'];

function zeroGenerator(number: number): string {
  const zeroArray = Array(number).fill(0);
  return zeroArray.join('');
}

function zeroMetricPrefix(number: number): string {
  if (number >= 3) {
    const zeroRemains = number % 3;
    const sizeIndex = Math.floor(number / 3) - 1;
    const size = SIZES[sizeIndex];
    const temp = `${zeroGenerator(zeroRemains)} ${size}ohms`;
    return temp;
  }

  return `${zeroGenerator(number)} ohms`;
}

export function decodedResistorValue(colorArray: string[]): string {
  const valueArray = colorArray.map((color) => COLORS.indexOf(color));
  const isSecondValueZero = valueArray[1] === 0;
  const zeroCounter = isSecondValueZero ? valueArray[2] + 1 : valueArray[2];
  const postfix = zeroMetricPrefix(zeroCounter);
  return `${valueArray[0] === 0 ? '' : valueArray[0]}${isSecondValueZero ? '' : valueArray[1]}${postfix}`;
}
