describe('truthy and falsy', () => {
  test('these should be falsy', () => {
    expect(0).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(null).toBeFalsy();
    expect('').toBeFalsy();
    expect(false).toBeFalsy();
    expect(NaN).toBeFalsy();
  });

  test(' there should be truthy', () => {
    expect(-1).toBeTruthy();
    expect(new Boolean(false)).toBeTruthy();
    expect({}).toBeTruthy();
    expect([]).toBeTruthy();
  });
});
