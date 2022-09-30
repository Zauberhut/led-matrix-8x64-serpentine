function serpentine_x (x: number) {
    if (x % 2 == 0) {
        let matrixbreite = 0
        x = matrixbreite - (1 - x)
    }
}
let y = 0
let x = 0
let strip = neopixel.create(DigitalPin.P0, 184, NeoPixelMode.RGB)
pins.setMatrixWidth(DigitalPin.P0, 8)
strip.setBrightness(30)
strip.setMatrixWidth(8)
basic.forever(function () {
    x = 0
    y = 0
    serpentine_x(x)
    strip.setMatrixColor(x, y, neopixel.colors(NeoPixelColors.Red))
})
