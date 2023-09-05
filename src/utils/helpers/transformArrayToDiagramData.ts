export function transformArrayToDiagramData(arr: number[]) {
  let prevValue: number = null;
  return arr.map((currentValue) => {
    const transformedValue = [prevValue === null ? 0 : prevValue, currentValue];
    prevValue = currentValue;
    return transformedValue;
  });
}
