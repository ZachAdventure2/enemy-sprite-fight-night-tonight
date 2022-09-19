input.onButtonPressed(Button.A, function () {
    Player.move(-1)
})
input.onButtonPressed(Button.B, function () {
    Player.move(1)
})
let Player: game.LedSprite = null
basic.showIcon(IconNames.Skull)
Player = game.createSprite(0, 2)
let Enemy = game.createSprite(2, 2)
basic.forever(function () {
    if (Player.isTouching(Enemy)) {
        basic.showIcon(IconNames.Asleep)
        Enemy.delete()
        Enemy = game.createSprite(randint(0, 3), randint(0, 3))
    }
})
