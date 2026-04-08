const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export function decodedValue(colorArray: string[]): number {
  const valueArray = colorArray.map((color) => COLORS.indexOf(color));
  const onlyFirstTwo = valueArray.join('').substring(0, 2)
  return Number(onlyFirstTwo);
}
