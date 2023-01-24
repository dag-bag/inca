/** @format */

export const truncate = (string: string, n: number) =>
  string?.length > n ? string.substr(0, n - 1) + "....." : string;
export default truncate;
export function isValidEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}
