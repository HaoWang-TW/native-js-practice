describe('JSON.stringify', () => {
  const obj = {
    name: 'wang',
    age: 23,
  };
  test('should stringify number', () => {
    expect(JSON.stringify(1)).toBe('1');
  });

  test('should stringify number', () => {
    expect(JSON.stringify(1)).toBe('1');
  });

  test('should stringify number', () => {
    expect(JSON.stringify('string')).toBe('"string"');
  });

  test('should not contain undefined fields', () => {
    const objWithUndefinedProperty = {
      name: 'wang',
      age: undefined,
    };
    expect(JSON.stringify(objWithUndefinedProperty).indexOf('age')).toBe(-1);
  });
  test('can use an array replacer', () => {
    expect(JSON.stringify(obj, ['name']).indexOf('age')).toBe(-1);
  });

  test('can use replacer', () => {
    const obj = {
      name: 'wang',
      age: 23,
    };
    const jsonString = JSON.stringify(obj, (key, value) => {
      if (key === 'name'){
        return value;
      }
      return undefined;
    });
    expect(jsonString).toBe(undefined);
  });

  test('can set space', () => {
    const expectStr = `{
	"name": "wang"
}`;
    expect(JSON.stringify(obj, ['name'], '\t')).toBe(expectStr)
  });
});
