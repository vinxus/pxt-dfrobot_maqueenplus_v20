maqueenPlusV2.I2CInit()
music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Forever)
maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 255)
basic.forever(function () {
    maqueenPlusV2.setIndexColor(maqueenPlusV2.ledRange(0, 3), maqueenPlusV2.NeoPixelColors.Red)
basic.pause(1000)
    maqueenPlusV2.setIndexColor(maqueenPlusV2.ledRange(0, 3), maqueenPlusV2.NeoPixelColors.Blue)
basic.pause(1000)
})
