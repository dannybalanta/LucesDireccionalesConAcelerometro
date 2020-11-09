input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        # # # # #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        for (let index = 0; index < 4; index++) {
            basic.pause(200)
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
            basic.pause(200)
            basic.showLeds(`
                . # # # .
                # # # # #
                # # # # #
                # # # # #
                . # # # .
                `)
            basic.pause(200)
        }
    } else if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 4; index++) {
            basic.pause(200)
            basic.showLeds(`
                . . . . #
                . . . # #
                . . # # #
                . . . # #
                . . . . #
                `)
            basic.pause(200)
            basic.showLeds(`
                . . # . .
                . # # . .
                # # # # #
                . # # . .
                . . # . .
                `)
            basic.pause(200)
        }
    } else if (input.buttonIsPressed(Button.B)) {
        for (let index = 0; index < 4; index++) {
            basic.pause(200)
            basic.showLeds(`
                # . . . .
                # # . . .
                # # # . .
                # # . . .
                # . . . .
                `)
            basic.pause(200)
            basic.showLeds(`
                . . # . .
                . . # # .
                # # # # #
                . . # # .
                . . # . .
                `)
            basic.pause(200)
        }
    } else {
        basic.clearScreen()
    }
})
