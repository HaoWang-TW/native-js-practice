describe('array', () => {
  test('can init an array quickly', () => {
    let a = [1, 2, 3];
    a[10] = 9;
    expect(a.length).toBe(11);
    expect(a[3]).toBeUndefined();
  });

  test('can delete one element', () => {
    let a = [1, 2, 3];
    delete a[1];
    expect(a.length).toBe(3);
    expect(a[1]).toBeUndefined();
  });
})
