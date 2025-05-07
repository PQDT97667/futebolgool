let nivel = 0
input.onPinPressed(TouchPin.P0, function () {
    game.addScore(1)
    basic.showNumber(game.score())
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.InBackground)
    basic.pause(1000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(game.score())
})
input.onButtonPressed(Button.A, function () {
    game.setScore(0)
    basic.showString("NÍVEL 2")
    basic.clearScreen()
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.InBackground)
})
input.onButtonPressed(Button.AB, function () {
    game.setScore(0)
    nivel = 1
    basic.showString("NIVEL 1")
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    nivel = 3
    game.setScore(0)
    basic.showString("NÍVEL 3")
    basic.clearScreen()
    game.startCountdown(120000)
})
basic.forever(function () {
    if (game.score() == 3 && nivel == 1) {
        nivel = 2
        basic.showString("NIVEL 2 - PRESSIONE A")
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.pause(500)
        basic.clearScreen()
    }
    if (game.score() == 6 && nivel == 2) {
        game.setScore(0)
        basic.showString("NIVEL 3 - PRESSIONE B")
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.pause(500)
        basic.clearScreen()
    }
    if (game.score() == 9 && nivel == 3) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.InBackground)
        basic.showString("WIN")
        game.gameOver()
    }
})
