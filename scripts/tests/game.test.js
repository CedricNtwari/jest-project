/**
 * @jest-environment jsdom
 */

const { game, newGame, showScore, addTurn, lightsOn, showTurns, playerTurn } = require('../game')

jest.spyOn(window, 'alert').mockImplementation(() => {})

beforeAll(() => {
  let fs = require('fs')
  let fileContents = fs.readFileSync('index.html', 'utf-8')
  document.open()
  document.write(fileContents)
  document.close()
})

describe('pre-game', () => {
  test('clicking buttons before newGame should fail', () => {
    game.lastButton = ''
    document.getElementById('button2').click()
    expect(game.lastButton).toEqual('')
  })
})

describe('game object contains correct keys', () => {
  it('score key exists', () => {
    expect('score' in game).toBe(true)
  })
  it('currentGame key exists', () => {
    expect('currentGame' in game).toBe(true)
  })
  it('playerMoves key exists', () => {
    expect('playerMoves' in game).toBe(true)
  })
  it('choices key exists', () => {
    expect('choices' in game).toBe(true)
  })
  it('choices contain correct ids', () => {
    expect(game.choices).toEqual(['button1', 'button2', 'button3', 'button4'])
  })
  it('turnNumber key exists', () => {
    expect('turnNumber' in game).toBe(true)
  })
  it('lastButton key exists', () => {
    expect('lastButton' in game).toBe(true)
  })
  it('turnInProgress key exists', () => {
    expect('turnInProgress' in game).toBe(true)
  })
  it('turnInProgress key value is false', () => {
    expect('turnInProgress' in game).toBe(true)
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
  it('expect data-listener to be true', () => {
    const elements = document.getElementsByClassName('circle')
    for (let element of elements) {
      expect(element.getAttribute('data-listener')).toEqual('true')
    }
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
  it('should add correct class to light up the buttons', () => {
    let button = document.getElementById(game.currentGame[0])
    lightsOn(game.currentGame[0])
    expect(button.classList).toContain('light')
  })
  it('showTurns should update game.turnNumber', () => {
    game.turnNumber = 42
    showTurns()
    expect(game.turnNumber).toBe(0)
  })
  it('should increment the score if the turn is correct', () => {
    game.playerMoves.push(game.currentGame[0])
    playerTurn()
    expect(game.score).toBe(1)
  })
})
