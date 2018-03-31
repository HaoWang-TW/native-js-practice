describe('apply and call', () => {
  let numbers = [1, 2, 4, 5];
  test('should use apply to bind context', () => {
    expect(Math.min.apply(null, numbers)).toBe(1);
  });
  test('should use apply to call context', () => {
    expect(Math.min.call(null, ...numbers)).toBe(1);
  });
});
