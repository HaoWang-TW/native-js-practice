describe('bind', () => {
  beforeAll( () => {
    Function.prototype.bind =  function(context){
      let self = this;
      return function() {
        self.apply(context, arguments);
      };
    };
  });
  test('should bind context', () => {
    let func = function() {
      return this.age;
    }.bind({age: 3});
    expect(func()).toBe(3);
  });
});
