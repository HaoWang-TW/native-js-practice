describe('array function', () => {
  let obj = {
    a: 1,
    getA() {
      return this.a;
    },
    getAByArrayFunction: () => this.a
  };

  test('array function will get undefined', () => {
    expect(obj.getA()).toBe(1);
    expect(obj.getAByArrayFunction()).toBeUndefined();
  });
});
