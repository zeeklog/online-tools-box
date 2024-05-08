import { x as shuffleString } from '../entry-server.js';

function createToken({
  withUppercase = true,
  withLowercase = true,
  withNumbers = true,
  withSymbols = false,
  length = 64,
  alphabet
}) {
  const allAlphabet = alphabet ?? [
    withUppercase ? "ABCDEFGHIJKLMOPQRSTUVWXYZ" : "",
    withLowercase ? "abcdefghijklmopqrstuvwxyz" : "",
    withNumbers ? "0123456789" : "",
    withSymbols ? `.,;:!?./-"'#{([-|\\@)]=}*+` : ""
  ].join("");
  return shuffleString(allAlphabet.repeat(length)).substring(0, length);
}

export { createToken as c };
