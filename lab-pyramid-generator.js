function pyramid(pattern, rows, isDownwards) {
  let result = '\n';

  if (!isDownwards) {
    for (let i = 1; i <= rows; i++) {
      let spaces = ' '.repeat(rows - i);
      let patternString = pattern.repeat(2 * i - 1);
      result += spaces + patternString + '\n';
    }
  } else {
    for (let i = rows; i >= 1; i--) {
      let spaces = ' '.repeat(rows - i);
      let patternString = pattern.repeat(2 * i - 1);
      result += spaces + patternString + '\n';
    }
  }

  return result;
}
