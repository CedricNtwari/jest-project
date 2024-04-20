/**
 * @jest-environment jsdom
 */

const buttonClick = require('../buttton')

beforeEach(() => {
  document.body.innerHTML = '<p id="par"></p>'
})

describe('DOM tests', () => {
  describe('Button click', () => {
    it('should change the text', () => {
      buttonClick()
      expect(document.getElementById('par').innerHTML).toBe('You Clicked')
    })
  })
})
