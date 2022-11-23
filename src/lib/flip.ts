
/**
 * Randomly returns either `a` or `b`
 * @param a 
 * @param b 
 * @returns `a` or `b`
 */
export function flip<A, B>(a: A, b: B): A | B {
  return Math.random() > 0.5 ? a : b;
}
