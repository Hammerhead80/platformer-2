namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    mySprite.setPosition(5, 295)
    tiles.setTilemap(tiles.createTilemap(
            hex`320014000808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080805080808080808080808080808080808080808080808080808080805050808080808080808080808080808080808010101010101080808080808080808080808080808080808080808080101010101010108080808080808080808080808080808080808080808080808050808080808080808080808050508080808080808080808080808080808080808080808080808080808080808080801010101010808080808080801010101010101010808080808080808080808080808080808080808080808080508080808080808080808010808080808080808080808080808080808080808080808080808080808080808080808050101010101010808080808080808080805010808080808080808080808080505050508080808080808080105080808080101010108080808080808080808080801010108080808080808080808010101010101010808080808080801010508080808080808080808080808080808080808010808080808080508080808080808080808080808080808080808080801010808080808080808080808080808080808050808080808080808010101010101080808080808080808080808080808010101080808080808080808080808080805010101010808080808080808080808080808080508080808080808080801050808080808080808080808080808080808080101080801010808080101010808080808080801010101010108080808010101080808080808080808080505080808010808080808080808080808050808080808080508080808080808080808050808080108080808080808080101010101080808080808080808080808080801080801010101010108080808080808010101010808010808080808080808080808080808080508080808080805080808080808080808080808080808080808080808080808080808080808080808080808080808080801010808080808010101010108080808080808080808050808080808080808080808080808050808080808080805080808080808080808080808080808080808080808080805010101010808080808080808080808080101080808080808010101010108080808080808080808080808080101010101010101010101010108080808080808080808080808070808080808080808080808080808080808080808080801010101010101010101010101010b080808080808080808080808080a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 2 2 2 . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 . 
. . . . 2 2 2 2 . . . . . . . . . . . . 2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . 2 2 . 
. . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 . . . . . . . . . . . . . . . 2 2 2 
. . . . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 
. . . . . . . . . . . . . . 2 2 . . 2 2 . . . 2 2 2 . . . . . . . 2 2 2 2 2 2 . . . . 2 2 2 . . . . 
. . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 
. . . . 2 2 2 2 2 . . . . . . . . . . . . . . 2 . . 2 2 2 2 2 2 . . . . . . . 2 2 2 2 . . 2 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 2 . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . 2 2 . . 
. . . . 2 2 2 2 2 . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorDarkDiamond,sprites.dungeon.purpleSwitchDown,sprites.dungeon.greenOuterNorth1,sprites.dungeon.chestClosed,sprites.dungeon.floorDark5,sprites.dungeon.hazardSpike,sprites.builtin.brick,sprites.castle.rock0,sprites.dungeon.hazardHole,sprites.dungeon.buttonTeal],
            TileScale.Sixteen
        ))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTeal, function (sprite, location) {
    info.changeLifeBy(1)
    tiles.setTileAt(location, sprites.builtin.brick)
})
function startGame () {
    tiles.setTilemap(tiles.createTilemap(
            hex`320014000e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e050e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0d0d0d0d050e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0d0d0d0d050e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0d0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0d0e0e0e0e0d0d0e0e0e0e0e0e0e0e0e0e0e0e0e0e0505050e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0d0d0d0d0d0e0e0e0e0e0e0e0e0d0e0e0e050e0e0e0d0e0e0e0e0e0e0e0d0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0d0d0d0d0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0d0d0e0e0e0e0e0d0d0d0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0d0d0d0d0d0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0d0e0e0e0e0e0e0d0d0d0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e050e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0d0d0d0d0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e05050e0e0e0e0e0e0e0e050e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0d0d0d0d0d0d0d0d0e0e0e0e0d0e0e0e0e0e0e0e0d0d0d0e0e0e0e0e0e0d0d0d0d0d0e0e0e0e080e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0d0d0d050e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0d0d0d071010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . 2 . . . . 2 2 . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 2 2 2 2 2 . . . . . . . . 2 . . . . . . . 2 . . . . . . . 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . 2 2 2 . . . . . . . . . . . . . . . . 
. . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 2 2 2 2 . . . . 2 . . . . . . . 2 2 2 . . . . . . 2 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . 2 2 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundWest,sprites.dungeon.chestClosed,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.stairLadder,sprites.dungeon.purpleSwitchUp,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.floorLight4,sprites.dungeon.floorLight3,sprites.dungeon.floorDark5,sprites.dungeon.greenOuterNorth0,sprites.builtin.brick,sprites.castle.rock0,sprites.dungeon.hazardHole,sprites.dungeon.buttonTeal],
            TileScale.Sixteen
        ))
    mySprite = sprites.create(img`
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . . . . b c . . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. . . . b b 5 d 1 f 5 5 d f . . 
. . . . b 5 5 1 f f 5 d 4 c . . 
. . . . b 5 5 d f b d d 4 4 . . 
b d d d b b d 5 5 5 4 4 4 4 4 b 
b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
b d c 5 5 5 5 d 5 5 5 5 5 b . . 
c d d c d 5 5 b 5 5 5 5 5 5 b . 
c b d d c c b 5 5 5 5 5 5 5 b . 
. c d d d d d d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`, SpriteKind.Player)
    mySprite.setPosition(5, 295)
    mySprite.ay = 350
    controller.moveSprite(mySprite, 100, 0)
    scene.cameraFollowSprite(mySprite)
    info.setLife(3)
    numJumps = 0
    Bat = sprites.create(img`
. . f f f . . . . . . . . f f f 
. f f c c . . . . . . f c b b c 
f f c c . . . . . . f c b b c . 
f c f c . . . . . . f b c c c . 
f f f c c . c c . f c b b c c . 
f f c 3 c c 3 c c f b c b b c . 
f f b 3 b c 3 b c f b c c b c . 
. c 1 b b b 1 b c b b c c c . . 
. c 1 b b b 1 b b c c c c . . . 
c b b b b b b b b b c c . . . . 
c b 1 f f 1 c b b b b f . . . . 
f f 1 f f 1 f b b b b f c . . . 
f f 2 2 2 2 f b b b b f c c . . 
. f 2 2 2 2 b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`, SpriteKind.Enemy)
    Bat.setPosition(100, 0)
    Bat.follow(mySprite, 50)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (numJumps < 1) {
        mySprite.vy = -200
        numJumps += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, sprites.builtin.brick)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd7, function (sprite, location) {
    mySprite.setPosition(5, 295)
    tiles.setTilemap(tiles.createTilemap(
            hex`32001400080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080801010101010101080801080808080808080808080808080808080808080808080808080808080808080808080808080808080808080108080808080108080808080808080808080808080808080808080808080808080801080808080108080101010808080808010808080808010808080808080808080808080808080808080808080808080808080108080801080801080808080808080801080808080801080808080808080808010108080808080108080808080108080808010808010808080108080808080808080108080808080108080808080808080108080108080808010108080808010808080801080108080808010808080808080808010808080808010101010108080801080808080108080801080108080801080808080101080808080808010808080808080801080808080801080808010808080108080808010808080108080108080108080808010108080808080808010108080808080108080808080108080801080808010101010101080808010808080108010808080801080108080808080808010808080808010808080808010808080108080801080808080108080801080808080101080808080108080108080808080801080808080801080808080801080808010808080108080808010808080108080808080108080808010808080108080808080108080808080108080808080108080801080808010808080801080808010808080808010808080801080808080108010101080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080d0d0808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080d0d0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorDarkDiamond,sprites.dungeon.purpleSwitchDown,sprites.dungeon.greenOuterNorth1,sprites.dungeon.chestClosed,sprites.dungeon.floorDark5,sprites.dungeon.hazardSpike,sprites.builtin.brick,sprites.castle.rock0,sprites.dungeon.hazardHole,sprites.builtin.crowd7,sprites.castle.rock2,sprites.dungeon.collectibleInsignia],
            TileScale.Sixteen
        ))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardSpike, function (sprite, location) {
    mySprite.setPosition(5, 295)
    tiles.setTilemap(tiles.createTilemap(
            hex`320014000808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080805080808080508080808080808080808080808080808080808080808080808080808080808080808080808080808010505010101010508010808080808080808080808080808080808080808080808080808080808080808080808080805050801010101080801010101080808080808080808080505080808080808080808080808080808080808080805050501010101010808080808080808080808050508080808080101010101080808080808080808080808080808050808010101010808080808080808050508080808080801010805050508080508080808080808080808080805050808080101010808080808080808080808010101010101080808050801010101010108010808050808080808080808010101010101010505050808080801010105080808080808080808080801080808080801010808080801080808080805080808080808080808010101010108050801010101010108080808080808080808080801010808080801080808080808080101080808080801010508080808080801080808080808080805050508010101010808010108080801080808080808080808080808080508080801010808080808080808010808080808010101010808080808080101050808080808080808010508080808080101010108080805080808080808080808080108080808080808080808080808010101080808080505050808010508080808080808080808010108080808080801080508080808080808080808050808080501080808010101010101010801010808080808080808080808080805080808080808010808080801010508080101010801010808080808080808080808080801080808080808080808080808080108080808080808080108080808010108080808080101080805050808080808080808080508080808080808080808050508080808080808080508080808080808080808080808080808010101050101010808080101010108080808080808080101010101080808080801010108080501010808080508080808050808080101080808080805050808080808080808080808080808080808080808080108010808010108080801010801010101010808080808080805010101010808080808080808080808080808080808080501080808010808080508010808010c0505050508080808080805010808080105080b0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 2 . . 2 2 2 2 . . 2 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 . . 2 2 2 2 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . 2 2 2 2 2 . . . . . 
. . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . 
. . . . . . . . . 2 2 2 . . . . . . . . . . . 2 2 2 2 2 2 . . . . . 2 2 2 2 2 2 . 2 . . . . . . . . 
. . . 2 2 2 2 2 2 2 . . . . . . . 2 2 2 . . . . . . . . . . . . 2 . . . . . 2 2 . . . . 2 . . . . . 
. . . . . . . . . . 2 2 2 2 2 . . . 2 2 2 2 2 2 . . . . . . . . . . . . 2 2 . . . . 2 . . . . . . . 
2 2 . . . . . 2 2 . . . . . . . 2 . . . . . . . . . . . . 2 2 2 2 . . 2 2 . . . 2 . . . . . . . . . 
. . . . . . . . 2 2 . . . . . . . . 2 . . . . . 2 2 2 2 . . . . . . 2 2 . . . . . . . . . 2 . . . . 
. . 2 2 2 2 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . 2 2 2 . . . . . . . . . 2 . . . 
. . . . . . . . 2 2 . . . . . . 2 . . . . . . . . . . . . . . . . . 2 . . . 2 2 2 2 2 2 2 . 2 2 . . 
. . . . . . . . . . . . . . . . . . 2 . . . . 2 2 . . . 2 2 2 . 2 2 . . . . . . . . . . . . . 2 . . 
. . . . . . . . . . . 2 . . . . . . . . 2 . . . . 2 2 . . . . . 2 2 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . 2 2 2 . . . 2 2 2 2 . 
. . . . . . . 2 2 2 2 2 . . . . . 2 2 2 . . . 2 2 . . . . . . . . . . . . 2 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 2 . 2 . . 2 2 . . . 2 2 . 2 2 2 2 2 . . . . . . . . 2 2 2 2 . . . 
. . . . . . . . . . . . . . . . 2 . . . 2 . . . . . 2 . . 2 . . . . . . . . . . . . 2 . . . 2 . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorDarkDiamond,sprites.dungeon.purpleSwitchDown,sprites.dungeon.greenOuterNorth1,sprites.dungeon.chestClosed,sprites.dungeon.floorDark5,sprites.dungeon.hazardSpike,sprites.builtin.brick,sprites.castle.rock0,sprites.dungeon.hazardHole,sprites.builtin.crowd7,sprites.dungeon.buttonTeal],
            TileScale.Sixteen
        ))
})
let Bat: Sprite = null
let numJumps = 0
let mySprite: Sprite = null
scene.setBackgroundImage(img`
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 c c c c c c c c c c c 6 6 6 6 6 c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c 6 6 6 6 6 c c c c c c c c c c c c c 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 c c c c 
c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 c c c c 
c c c c c c c c c c c c c c 5 5 5 5 5 5 5 c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c 
c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c c 
c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c c c 
c c c c c c c c c c c c c c 5 5 5 c c 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 c c c c c c c c c c c c c c c c c c 6 6 6 6 6 c c c c c c c c c 
c c c c c c c c c c c c c c 5 5 5 c c c c 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c 6 6 6 6 6 c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c c c c c c 
c c c c c c c c c c c c c 5 5 5 5 c c c c c 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 c c c c c c c c c c c 
c c c c c c c c c c c c c 5 5 5 5 c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 c c c c c c c c c c c c 
c c c c c c c c 6 6 6 c c 5 5 5 c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 c c c c c c c c c c c c c 
c c c c c c 6 6 6 6 6 c c 5 5 5 c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 c c c c c c c c c c c c c c 
c c c c c 6 6 6 6 6 6 c 5 5 5 5 c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c 5 5 5 c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c 
c c 6 6 6 6 6 6 6 6 c c 5 5 5 5 c c c c c c c c 5 5 5 5 c c c c c 5 5 5 c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 c c c c c c c c c c 5 5 5 c c c c 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c 
6 6 6 6 6 6 6 6 c c c c 5 5 5 c c c c c c c c c c 5 5 5 c c c c c 5 5 5 c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c 5 5 5 c c c 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c 6 6 6 c 
6 6 6 6 6 6 6 c c c c c 5 5 5 5 c c c c c c c c 5 5 5 5 c c c c c 5 5 5 c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 c c c c c c c c c c c c 5 5 5 c 5 5 5 5 5 5 5 c c c c c c c c c c c c 5 5 5 c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c 6 6 6 6 6 c 
6 6 6 6 c c c c c c c c 5 5 5 5 c c c c c c c c 5 5 5 5 c c c c c 5 5 5 c c c c c c 5 5 5 c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 c 
c c c c c c c c c c c c c 5 5 5 c c c c c c c c 5 5 5 c c c c c c 5 5 5 c c c c c c 5 5 5 c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c 5 5 5 5 c c c c c c c c c 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 c c 
c c c c c c c c c c c c c 5 5 5 c c c c c c c 5 5 5 5 c c c c c c 5 5 5 c c c c c 5 5 5 5 c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 c c c c c c c c c c c 5 5 5 c c 5 5 5 5 c c c c c c c c 5 5 5 5 c c c c c c c c c 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 c c c c 
c c c c c c c c c c c c c 5 5 5 c c c c c c c 5 5 5 5 c c c c c c 5 5 5 c c c c c 5 5 5 5 c c c c c 5 5 5 c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 c c c c c c c c c c c c 5 5 5 c c 5 5 5 c c c c c c c c c 5 5 5 5 c c c c c c c c 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 c c c c c c 
c c c c c c c c c c c c c 5 5 5 c c c c c c 5 5 5 5 c c c c c c c 5 5 5 c c c c c 5 5 5 c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 c c c c c c c c c c c 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 c c c c c c c 
c c c c c c c c c c c c c 5 5 5 c c c c 5 5 5 5 5 5 c c c c c c c 5 5 5 c c c c c 5 5 5 c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 c c c c c c c c c c 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 c c c c c c c c c 
c c c c c c c c c c c c c 5 5 5 c c 5 5 5 5 5 5 5 c c c c c c c c 5 5 5 c c c c 5 5 5 5 c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c 5 5 5 c 5 5 5 5 5 c c c c c c c c c c 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 c c c c c c c c c c c 
c c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c 5 5 5 5 c c 5 5 5 5 5 c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c 5 5 5 c c 5 5 5 5 5 c c c c c c c c c 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 c c c c c c c c c c c c c 
c c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c 5 5 5 5 c 5 5 5 5 5 c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c 5 5 5 c c c 5 5 5 5 5 c c c c c c c c 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 c c c c c c c c c c c c c c 
c c c c c c c c c c c c 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c 5 5 5 5 c c c c c c c c 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c 6 6 6 6 6 c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c 5 5 5 5 c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 c c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 c c c c c c c c c 5 5 5 5 5 5 c c c c c c c c c c c c c c 5 5 5 c c c c c c 5 5 5 5 5 5 c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c 5 5 5 c c c c c c c 5 5 5 5 5 c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 5 c c c c c c c c 5 5 5 c c c c c c c c 5 5 5 5 c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c 6 6 6 c c c c c c c c c c 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c 
c c c c c c c c c 6 6 6 6 6 c c c c c c c c c c 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c 
c c c c c c c c 6 6 6 6 6 6 c c c c c c c c c 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c 6 6 6 6 6 6 6 c c c c c c c c c 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c 5 5 5 c c c c c c c c 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c 6 6 6 6 6 6 6 c c c c c c c c c c c 5 5 5 5 c c c 5 5 5 c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c 5 5 5 c c c c c c c 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c 6 6 6 6 6 6 6 c c c c c c c c c c c 5 5 5 5 c c c c 5 5 5 c c c c c c c c c c c 5 5 5 5 5 5 5 c c c c c c 5 5 5 c c c c c 5 5 5 c c c c c c c 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c 6 6 6 6 6 6 c c c c c c c c c c c c c 5 5 5 5 c c c 5 5 5 5 5 c c c c c c c c c 5 5 5 5 5 5 5 5 c c c c c c 5 5 5 c c c c 5 5 5 5 c c c c c c c 5 5 5 c c 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c 6 6 6 6 c c c c c c c c c c c c c c c 5 5 5 c c c c 5 5 5 5 5 5 c c c c c c c 5 5 5 5 5 5 5 5 5 c c c c c c 5 5 5 5 c c 5 5 5 5 5 c c c c c c c 5 5 5 c c 5 5 5 5 c c c c c c c c c c c c 5 5 5 5 5 c c c c c c c c c c c c 5 5 5 c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c 
c c 6 6 6 c c c c c c c c c c c c c c c c 5 5 5 c c c 5 5 5 5 5 5 5 c c c c c c c 5 5 5 5 5 5 5 5 c c c c c c c 5 5 5 5 c c 5 5 5 5 c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 c c c c c c c c c c c c 5 5 5 c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c 5 5 5 5 5 5 5 5 c c c c c c c c 5 5 5 5 5 5 5 5 c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c 5 5 5 c c c c c c c c c 5 5 5 c c c c c c c c c 5 5 5 c c c c c c c c 5 5 5 5 c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 c 5 5 5 5 5 c c c c c c 5 5 5 5 5 5 5 c c c c c c c c 5 5 5 5 5 5 5 5 c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c 5 5 5 c c c c c c c c c 5 5 5 c c c c c c c c c 5 5 5 c c c c c c c 5 5 5 5 5 c c c c 5 5 5 5 5 
c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 c c 5 5 5 5 c c c c c c c 5 5 5 5 c c c c c c c c c c c 5 5 5 5 5 5 c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c 5 5 5 c c c c 5 5 5 5 c c c c c c c c c 5 5 5 5 c c c c c c c c c 5 5 5 5 c c c c c c c 5 5 5 5 c c c c c c 5 5 5 5 5 c c c c c 5 5 5 5 5 
c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c 5 5 5 c c c c c c c c 5 5 5 c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c 5 5 5 5 5 c c c c c c c c c c c c 5 5 5 5 c c c c c 5 5 5 c c c c c c c c c 5 5 5 5 c c c c c c c c c 5 5 5 5 c c c c c c c 5 5 5 5 c c c c c 5 5 5 5 5 c c c c c 5 5 5 5 5 5 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c 5 5 5 5 5 5 5 5 c c c c c c c c 5 5 5 5 c c c c c 5 5 5 5 c c c c c c c c 5 5 5 c c c c c c c c c c c 5 5 5 c c c c 5 5 5 5 5 5 c c c c c c 5 5 5 5 c c c c c 5 5 5 5 5 5 5 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 c c c c c c c c 5 5 5 c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c 5 5 5 c c c c c c 5 5 5 5 c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 c c c c c c c c 5 5 5 c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c 5 5 5 c c c c c c 5 5 5 c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 5 c c c c c c c c 5 5 5 c c c c c c 5 5 5 c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c 5 5 5 c c c c c c 5 5 5 5 c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c 5 5 5 5 5 c c 
c c c c c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c 5 5 5 5 c c 
c c c c c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c 
c c c c c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 6 6 6 6 6 c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c c 6 6 6 6 6 c c c c c c c c c c 6 6 6 6 6 c c c c c c c c c c c c c 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c c c c c 6 6 6 6 6 c c c c c c c c c c c c 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c 6 6 6 6 6 c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c c 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 c c c c c c c c 6 6 6 6 6 c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 c c c 6 6 6 c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 c c c c c c c 6 6 6 6 6 c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 c c c 6 6 6 6 c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c 6 6 6 6 6 c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 c c c 6 6 6 6 6 c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 c c c c 6 6 6 6 c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 c c c c 6 6 6 c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
`)
game.showLongText("Control Ducky with the arrows and jump with the A button, try to collect as many chests as possible and make sure to watch out for the angry bat, you only have 3 lives, also keep your eyes out for blue buttons around the maps, they give you extra lives!", DialogLayout.Bottom)
startGame()
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        numJumps = 0
    }
})
