input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    pins.servoWritePin(AnalogPin.P2, dummy)
    dummy += 5
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
	
})
function fluegelinnen () {
    pins.servoWritePin(AnalogPin.P1, 45)
    pins.servoWritePin(AnalogPin.P2, 135)
}
function fluegelaussen () {
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 180)
}
let dummy = 0
dummy = 0
basic.showNumber(input.lightLevel(), 30)
fluegelinnen()
basic.forever(function () {
    if (input.lightLevel() > 100) {
        for (let index = 0; index < 4; index++) {
            fluegelaussen()
            basic.pause(300)
            fluegelinnen()
            basic.pause(300)
        }
    }
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
})
