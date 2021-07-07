import Arithmetic from "../../../pages/Calculator/arithmetic.js";

describe("Arithmetic", () => {

  describe("calculate", () => {
    it("should return the a correct value when given a customer's width and height measurements", () => {
      const width = 445;
      const height = 114.25;
      const correctAnswer = 91;
      const border = true;

      const customerCalculation = Arithmetic.calculate(width, height, border);

      expect(customerCalculation).toEqual(correctAnswer);
    });
  });
});
