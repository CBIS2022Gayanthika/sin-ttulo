input.onButtonPressed(Button.AB, function () {
    music.setTempo(120)
    for (let index = 0; index < 50; index++) {
        music.rest(music.beat(BeatFraction.Quarter))
        if (input.lightLevel() < 80) {
            music.playMelody("E B C5 A B G A F ", 120)
            basic.showIcon(IconNames.Ghost)
        } else {
            if (input.lightLevel() < 160) {
                music.playTone(262, music.beat(BeatFraction.Whole))
                basic.showIcon(IconNames.Chessboard)
            } else {
                basic.showLeds(`
                    # # # # #
                    . # # # .
                    # . # . #
                    . # # # .
                    # # # # #
                    `)
            }
        }
    }
})
