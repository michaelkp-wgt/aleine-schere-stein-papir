let wer = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.Shake, function () {
    wer = randint(0, 2)
    if (wer == 0) {
        basic.showIcon(IconNames.Chessboard)
    } else if (wer == 1) {
        basic.showIcon(IconNames.Scissors)
    } else if (wer == 2) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
