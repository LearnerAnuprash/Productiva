// function that capitalizes each word of a string and converts to Title Case
//? \b: is word boundary , and \w: word character , \g: flag , that changes all
//? occurences

export const capitalize = (word: string): string =>
  word.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
