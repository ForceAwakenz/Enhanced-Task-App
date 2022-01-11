import { compare } from "./compare";

describe('compare function',() => {

  it('should correctly compare two numbers', () => {
    expect(compare(1, 2, false)).toBe(1);
  });

  it('should correctly compare two strings', () => {
    expect(compare('1', '2', false)).toBe(1);
  });

})