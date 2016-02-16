describe("fizzBuzz", function() {

  describe("gives fizz on multiplies of 3",function() {
    it("gives a fizz when passed a 3", function() {
      expect(fizzBuzz(3)).toEqual('Fizz');
    });

    it("gives a fizz when passed a number divided by 3", function() {
      expect(fizzBuzz(9)).toEqual('Fizz');
    });

  });

  describe("gives buzz on multiplies of 5",function() {

    it("gives a buzz when passed a 5", function() {
      expect(fizzBuzz(5)).toEqual('Buzz');
    });

    it("gives a fizz when passed a number divided by 5", function() {
      expect(fizzBuzz(20)).toEqual('Buzz');
    });
  });

  describe("gives fizzbuzz on multiplies of 15",function() {

    it("gives a fizzbuzz when passed a number divided by 3 or 5", function() {
      expect(fizzBuzz(15)).toEqual('FizzBuzz');
    });
  });

  describe("gives nothing on all other numbers", function() {
    it("gives blank when passed a 2", function() {
      expect(fizzBuzz(7)).toEqual('');
    })
  });


});
