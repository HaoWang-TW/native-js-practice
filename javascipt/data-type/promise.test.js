describe('promise', () => {
  test('get all array if all promises resolved', () => {
    expect.assertions(1);
    let promises = Promise.all([Promise.resolve(1), Promise.resolve(1)]);
    return expect(promises).resolves.toEqual([1, 1]);
  });

  test('get the failed promise\'s value', () => {
    expect.assertions(1);
    return expect(Promise.all([Promise.reject(2), Promise.reject(4)])).rejects.toBe(2);
  });
});
