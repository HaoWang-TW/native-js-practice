describe('test regExp', () => {
  test('should init regexp', () => {
    const regExp1 = new RegExp(/a/);
    const regExp2 = /a/;
    const regExp3 = new RegExp('a');
    for (let regExp of [regExp1, regExp2, regExp3]) {
      expect(Object.prototype.toString.apply(regExp)).toBe('[object RegExp]');
    }
  });
  test('use exec to get all matched string', () => {
    const re = /a+/g;
    const testString = 'aaabbbcccdddeeeaaabbccaaa';
    let allMatched = [];
    let matched;
    do {
      matched = re.exec(testString);
      if(matched) {
        allMatched.push(matched);
      }
    } while(matched);

    expect(allMatched.length).toBe(3);
  });

  test('use test to find whether match', () => {
    const re = /a/;
    expect(re.test('a')).toBe(true);
    expect(re.test('')).toBe(false);
  });

  test('using match to test a string', () => {
    const re = /a/;
    let matchResult = 'a'.match(re);
    expect(matchResult[0]).toBe('a');
    expect(matchResult.input).toBe('a');
    expect(matchResult.index).toBe(0);
  });
  test('should revert two word', () => {
    let words = 'wang hao';
    let re = /(\w+)\s(\w+)/;
    expect(words.replace(re, '$2 $1')).toBe('hao wang');
  });
});
