// import { addition } from '../calc.js'
const addition = require('../calc.js')

describe('Calculator', () => {
  describe('Addition function', () => {
    it('should return 3 when 1 + 2', () => {
      expect(addition(1, 2)).toBe(3)
    })
    it('should return 5 when 2 + 3', () => {
      expect(addition(2, 3)).toBe(5)
    })

    it('should throw an error when called without parameters', () => {
      expect(addition()).toBeNaN()
    })

    it('should throw an error when called with one parameter', () => {
      expect(addition(1)).toBeNaN()
    })

    it('should return 5 when one parameter is null and the other is 5', () => {
      expect(addition(null, 5)).toBe(5)
    })
    it('should return 0 when both parameters are null', () => {
      expect(addition(null, null)).toBe(0)
    })

    it('should return NaN when one parameter is undefined', () => {
      expect(addition(undefined, 5)).toBeNaN()
    })

    it('should accurately add floating point numbers', () => {
      expect(addition(0.1, 0.2)).toBeCloseTo(0.3)
    })

    it('should return the correct result with negative numbers', () => {
      expect(addition(-1, -1)).toBe(-2)
      expect(addition(-1, 1)).toBe(0)
    })
  })

  describe('Subtraction function', () => {})

  describe('Multiplication function', () => {})

  describe('Division function', () => {})
})
