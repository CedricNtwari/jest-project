const { game } = require('../game')

beforeAll(() => {
  let fs = require('fs')
  let fileContents = fs.readFileSync('index.html', 'utf-8')
  document.open()
  document.write(fileContents)
  document.close()
})

describe('game object contain correct key', () => {
  it('should have a score key', () => {
    expect('score' in game).toBe(true)
  })
  it('should have currentGame key', () => {
    expect('currentGame' in game).toBe(true)
  })
  it('should have playerMoves key', () => {
    expect(game).toHaveProperty('playerMoves')
  })
  it('should have choices key', () => {
    expect(game).toHaveProperty('choices')
  })
})
