describe('type of', () => {
  test('should return type', () => {
    expect(typeof 0).toBe('number');
    expect(typeof null).toBe('object');
    expect(typeof undefined).toBe('undefined');
    expect(typeof false).toBe('boolean');
    expect(typeof new Boolean(1)).toBe('object');
    expect(typeof []).toBe('object');
    expect(typeof NaN).toBe('number');
  });
});
