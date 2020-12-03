led.plot(1, 0)
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # # . # #
        # # # # #
        . # # # .
        # # # # #
        # # . # #
        `)
    music.playMelody("A F - D F D - C ", 120)
    basic.showLeds(`
        # # . # #
        # # # # #
        . # # # .
        # # # # #
        # # . # #
        `)
    basic.showLeds(`
        . # # . .
        . . # # .
        . . . # .
        . # # # .
        . # . . .
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
})
