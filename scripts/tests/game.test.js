const { game, newGame, showScore, addTurn, lightsOn, showTurns } = require('../game')

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
  it('should have choices with correct ids', () => {
    expect(game.choices).toEqual(['button1', 'button2', 'button3', 'button4'])
  })
})

describe('newGame works correctly', () => {
  beforeAll(() => {
    game.score = 42
    game.playerMoves = ['button1', 'button2']
    game.currentGame = ['button1', 'button2']
    document.getElementById('score').innerText = '42'
    newGame()
  })
  it('should set game score to zero', () => {
    expect(game.score).toEqual(0)
  })

  it('should be one move in the computer"s game', () => {
    expect(game.currentGame.length).toBe(1)
  })
  it('should display 0 for the element with id of score', () => {
    expect(document.getElementById('score').innerText).toEqual(0)
  })
  it('should clear the player moves array', () => {
    expect(game.playerMoves.length).toBe(0)
  })
})

describe('newGame works correctly', () => {
  beforeAll(() => {
    game.score = 42
    game.playerMoves = ['button1', 'button2']
    game.currentGame = ['button1', 'button2']
    document.getElementById('score').innerText = '42'
    newGame()
  })
  it('should set game score to zero', () => {
    expect(game.score).toEqual(0)
  })
  it('should display 0 for the element with id of score', () => {
    expect(document.getElementById('score').innerText).toEqual(0)
  })
  it('should clear the player moves array', () => {
    expect(game.playerMoves.length).toBe(0)
  })
  it("should add one move to the computer's game array", () => {
    expect(game.currentGame.length).toBe(1)
  })

  it('expect data-listener to be true', () => {
    newGame()
    const elements = document.getElementsByClassName('circle')
    for (let element of elements) {
      expect(element.getAttribute('data-listener')).toEqual('true')
    }
  })
})

describe('gameplay works correctly', () => {
  beforeEach(() => {
    game.score = 0
    game.currentGame = []
    game.playerMoves = []
    addTurn()
  })
  afterEach(() => {
    game.score = 0
    game.currentGame = []
    game.playerMoves = []
  })
  it('addTurn adds a new turn to the game', () => {
    addTurn()
    expect(game.currentGame.length).toBe(2)
  })
  /* it('should add correct class to light up the buttons', () => {
    let button = document.getElementById(game.currentGame[0])
    lightsOn(game.currentGame[0])
    expect(button.classList).toContain(game.currentGame[0] + 'light')
  }) */

  it('showTurns should update game.turnNumber', () => {
    game.turnNumber = 42
    showTurns()
    expect(game.turnNumber).toBe(0)
  })
})
