// Sequence generator function (range() function in Python)
// Numbers starting at `start`, up to (but not including) `stop`
export const range = (start: number, stop: number, step: number = 1) =>
  Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

export function repeatArray<Type>(array: Type[], numTimes: number): Type[] {
  return Array(numTimes).fill(array).flat(1);
}
