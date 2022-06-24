input.onButtonPressed(Button.A, function () {
    jogador.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    virus = game.createSprite(randint(0, 4), 0)
    jogador = game.createSprite(2, 4)
    game.setScore(0)
})
input.onButtonPressed(Button.B, function () {
    jogador.change(LedSpriteProperty.X, 1)
})
/**
 * O bloco REPRODUZA SOM... é específico para a v2, caso você esteja utilizando a micro:bit v1 com alto falante externo, você poderá substituir este bloco por algum outro bloco da categoria Música, por exemplo, PLAY MELODY...
 */
let virus: game.LedSprite = null
let jogador: game.LedSprite = null
music.setTempo(180)
jogador = game.createSprite(2, 4)
virus = game.createSprite(randint(0, 4), 0)
let timer = 300
game.setScore(0)
game.setLife(3)
basic.forever(function () {
    if (jogador.isTouching(virus)) {
        soundExpression.slide.playUntilDone()
        virus.set(LedSpriteProperty.Y, 0)
        virus.set(LedSpriteProperty.X, randint(0, 4))
        game.removeLife(1)
    } else if (virus.get(LedSpriteProperty.Y) < 4) {
        virus.change(LedSpriteProperty.Y, 1)
        basic.pause(timer)
    } else {
        music.playTone(494, music.beat(BeatFraction.Eighth))
        music.playTone(659, music.beat(BeatFraction.Eighth))
        music.playTone(659, music.beat(BeatFraction.Quarter))
        game.addScore(1)
        virus.set(LedSpriteProperty.Y, 0)
        virus.set(LedSpriteProperty.X, randint(0, 4))
        if (game.score() % 5 == 0) {
            timer += -20
        }
    }
})
