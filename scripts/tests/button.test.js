/**
 * @jest-environment jsdom
 */

const buttonClick = require('../buttton')

beforeEach(() => {
  const fs = require('fs')
  const fileContents = fs.readFileSync('index.html', 'utf-8')
  document.open()
  document.write(fileContents)
  document.close()
})

describe('DOM tests', () => {
  describe('Button click', () => {
    it('should change the text', () => {
      buttonClick()
      expect(document.getElementById('par').innerHTML).toBe('You Clicked')
    })
    it('h1 should exist', () => {
      expect(document.getElementsByTagName('h1').length).toBe(1)
    })
  })
})
