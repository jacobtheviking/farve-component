export function isHexString(value) {
  if (typeof value !== 'string') {
    return false;
  }
  const hexRegex = /^#([0-9A-F]{3}){1,2}$/i;
  return hexRegex.test(value);
}

export const randomColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16);
