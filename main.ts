input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            `)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(200)
    }
    basic.clearScreen()
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
        basic.clearScreen()
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
        basic.clearScreen()
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
        basic.clearScreen()
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    }
})
