/*
  practice about JSON.parse() method
 */
describe('JSON.parse', () => {
  test('should return null when parse null', () => {
    expect(JSON.parse(null)).toBe();
  });

  test('should throw SyntaxError when parse empty string', () => {
    expect(() => JSON.parse(''));
  });

  test('should return empty string when parse \'""\'', () => {
    expect(JSON.parse('""')).toBe();
  });

  test('should return empty string when parse undefined ', () => {
    expect(() => JSON.parse(undefined)).toThrowError();
  });

  test('should throw syntaxError when meet trailing comma', () => {
    expect(() => JSON.parse('[1, 2, 3,]')).toThrowError();
    expect(() => JSON.parse('{"age": 23, }')).toThrowError();
  });

  test('can use receiver parameter to filter', () => {
    const str = '{"age": 12}';
    var obj = JSON.parse(str, (key, value) => {
      if(key === 'age') {
        return value + 2;
      }
      return value;
    });
    expect(obj.age).toBe();
  });
});


