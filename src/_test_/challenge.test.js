const { palindromeChecker } = require ('../challenge');

describe('palindromeChecker', () => {

  it('should be false', () => {
    expect(palindromeChecker(undefined)).toBe(false);
    expect(palindromeChecker('')).toBe(false);
    expect(palindromeChecker(null)).toBe(false);
    expect(palindromeChecker('ab')).toBe(false);
    expect(palindromeChecker('Hola')).toBe(false);
  });

  it('should be true', () => {
    expect(palindromeChecker('lol')).toBe(true);
    expect(palindromeChecker('a')).toBe(true);
    expect(palindromeChecker('aa')).toBe(true);
    expect(palindromeChecker('aba')).toBe(true);
    expect(palindromeChecker('kayak')).toBe(true);
    expect(palindromeChecker('radar')).toBe(true);
    expect(palindromeChecker('level')).toBe(true);
    expect(palindromeChecker('Was it a car or a cat I saw')).toBe(true);
    expect(palindromeChecker('Step on no pets')).toBe(true);
    expect(palindromeChecker('Able was I ere I saw Elba')).toBe(true);
    expect(palindromeChecker('Amor a Roma')).toBe(true);

  });

});