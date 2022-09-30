input.onButtonPressed(Button.A, function () {
    strip.clear()
})
function serpentine (number: number) {
    if (number % 2 == 0) {
        x = matrixbreite + (1 - number)
    } else {
    	
    }
}
let x = 0
let strip: neopixel.Strip = null
let matrixbreite = 0
matrixbreite = 8
strip = neopixel.create(DigitalPin.P0, 368, NeoPixelMode.RGB)
pins.setMatrixWidth(DigitalPin.P0, matrixbreite)
x = 0
let y = 0
strip.clear()
strip.setBrightness(30)
strip.setMatrixWidth(8)
basic.forever(function () {
    if (x >= matrixbreite) {
        y += 1
        x = 0
    }
    strip.setMatrixColor(serpentine(x), y, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    x += 1
    basic.pause(100)
})
