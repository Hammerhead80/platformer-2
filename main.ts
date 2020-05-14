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
            hex`3200140006060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606050606060606060606060606060606060606060606060606060606050506060606060606060606060606060606060101010101010606060606060606060606060606060606060606060601010101010101060606060606060606060606060606060606060606060606060506060606060606060606060505060606060606060606060606060606060606060606060606060606060606060606010101010106060606060606010101010101010106060606060606060606060606060606060606060606060605060606060606060606060106060606060606060606060606060606060606060606060606060606060606060606060501010101010106060606060606060606050106060606060606060606060605050505060606060606060601050606060601010101060606060606060606060606010101060606060606060606060101010101010106060606060606010105060606060606060606060606060606060606060106060606060605060606060606060606060606060606060606060606010106060606060606060606060606060606060506060606060606060101010101010606060606060606060606060606060101010606060606060606060606060606050101010106060606060606060606060606060605060606060606060606010506060606060606060606060606060606060601010606010106060601010106060606060606010101010101060606060101010606060606060606060605050606060106060606060606060606060506060606060605060606060606060606060506060601060606060606060601010101010606060606060606060606060606010606010101010101060606060606060101010106060106060606060606060606060606060605060606060606050606060606060606060606060606060606060606060606060606060606060606060606060606060606010106060606060101010101060606060606060606060506060606060606060606060606060506060606060606050606060606060606060606060606060606060606060606050101010106060606060606060606060601010606060606060101010101060606060606060606060606060601010101010101010101010101060606060606060606060606060306060606060606060606060606060606060606060606010101010101010101010101010106060606060606060606060606060101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`,
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
            [myTiles.tile0,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorDarkDiamond,sprites.dungeon.purpleSwitchDown,sprites.dungeon.greenOuterNorth1,sprites.dungeon.chestClosed,sprites.dungeon.floorDark5],
            TileScale.Sixteen
        ))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchDown, function (sprite, location) {
    game.over(true)
})
function startGame () {
    tiles.setTilemap(tiles.createTilemap(
            hex`320014000c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c050c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0d0d0d0d050c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0d0d0d0d050c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0d0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0d0c0c0c0c0d0d0c0c0c0c0c0c0c0c0c0c0c0c0c0c0505050c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0d0d0d0d0d0c0c0c0c0c0c0c0c0d0c0c0c050c0c0c0d0c0c0c0c0c0c0c0d0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0d0d0d0d0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0d0d0c0c0c0c0c0d0d0d0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0d0d0d0d0d0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0d0c0c0c0c0c0c0d0d0d0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c050c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0d0d0d0d0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c05050c0c0c0c0c0c0c0c050c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0d0d0d0d0d0d0d0d0c0c0c0c0d0c0c0c0c0c0c0c0d0d0d0c0c0c0c0c0c0d0d0d0d0d0c0c0c0c080c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0d0d0d050c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0d0d0d070d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d`,
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
            [myTiles.tile0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundWest,sprites.dungeon.chestClosed,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.stairLadder,sprites.dungeon.purpleSwitchUp,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.floorLight4,sprites.dungeon.floorLight3,sprites.dungeon.floorDark5,sprites.dungeon.greenOuterNorth0],
            TileScale.Sixteen
        ))
    mySprite = sprites.create(img`
. . . . . . . . . . . . . 
. . . f f f f f f . . . . 
. f f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f c f f f c f f f . 
f c f f c c f f f c c f f 
f c c f f f f e f f f f f 
f f f f f f f e e f f f . 
f f e e f b f e e f f . . 
. f e 4 e 1 f 4 4 f f . . 
. f f f e e 4 4 4 f . . . 
. . f e 4 4 e e f f . . . 
. . f e 4 4 e 7 7 f . . . 
. f f f e e f 6 6 f f . . 
. f f f f f f f f f f . . 
. . f f . . . f f f . . . 
`, SpriteKind.Player)
    info.startCountdown(60)
    mySprite.setPosition(5, 295)
    mySprite.ay = 350
    controller.moveSprite(mySprite, 100, 0)
    scene.cameraFollowSprite(mySprite)
    numJumps = 0
    Skeleton = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f f . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 b f f . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 1 b f . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 1 f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 f f f f . . . . . 
. . . . . . f d 1 1 1 d d 1 c 1 1 1 b f . . . . 
. . . . . . f b 1 1 f c d f 1 b 1 b f f . . . . 
. . . . . . f 1 1 1 1 1 b f b f b f f . . . . . 
. . . . . . f 1 b 1 b d f c f f f f . . . . . . 
. . . . . . f b f b f c f c c c f . . . . . . . 
. . . . . . f f f f f f f f f f . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f f . . f . . . . . 
. . . . . . . . . . f f f f f f f f f . . . . . 
. . . . . . . . . . . f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    Skeleton.setPosition(100, 0)
    Skeleton.follow(mySprite, 50)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(-2)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (numJumps < 1) {
        mySprite.vy = -200
        numJumps += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, sprites.dungeon.floorDark5)
})
let Skeleton: Sprite = null
let numJumps = 0
let mySprite: Sprite = null
scene.setBackgroundImage(img`
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
c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c 5 5 5 c 5 5 5 5 5 c c c c c c c c c c c c c c 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c 5 5 5 5 c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c 5 5 5 5 c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c 5 5 5 5 5 c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c 5 5 5 5 5 c 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 c c c 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c 5 5 5 5 c c c c 5 5 5 5 c c c c c c c c 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 c 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c 5 5 5 5 5 c c c c c 5 5 5 c c c c c c c c 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c 
c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c 5 5 5 5 c c c c c c 5 5 5 c c c c c c c 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c 5 5 5 5 c c 5 5 5 5 5 c c c 5 5 5 5 5 c c c c c c c c c c c c c c 
c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c 5 5 5 5 c c c c c 5 5 5 5 5 c c c c c c c 5 5 5 5 c c c c 5 5 5 5 c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c 5 5 5 c c c c c 5 5 5 5 c c c c c 5 5 5 c c c 5 5 5 c c c c c c c 5 5 5 c c c c c c c c c c c c c c 
c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c 5 5 5 5 5 c c c 5 5 5 5 5 5 5 c c c c c c 5 5 5 5 c c c c c 5 5 5 5 5 c c c c c c c c c c c c c 5 5 5 5 5 c c c c c c c c c c c 5 5 5 c c c c c 5 5 5 5 c c c c c 5 5 5 c c 5 5 5 5 c c c c c c c 5 5 5 c c c c c c c c c c c c c c 
c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c 5 5 5 5 c c 5 5 5 5 5 5 5 5 c c c c c c c 5 5 5 5 c c c c c 5 5 5 5 5 c c c c c c c c c c c c c c 5 5 5 5 5 c c c c c c c c c c 5 5 5 c c c c c 5 5 5 5 c c c c c 5 5 5 c c 5 5 5 5 c c c c c c 5 5 5 5 c c c c c c c c c c c c c c 
c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c 5 5 5 c c 5 5 5 5 5 5 5 c c c c c c c c c 5 5 5 c c c c c 5 5 5 5 5 5 5 c c c c c c c c c c c c c c 5 5 5 5 5 5 c c c c c c c c 5 5 5 c c c c c c 5 5 5 c c c c c 5 5 5 c c 5 5 5 c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c 
c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c 5 5 5 c c 5 5 5 5 5 c c c c c c c c c c c 5 5 5 c c c c 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c 5 5 5 5 5 5 c c c c c c c 5 5 5 c c c c c c 5 5 5 c c c c c 5 5 5 c c 5 5 5 5 5 5 5 c c 5 5 5 5 c c c c c c c c c c c c c c c 
c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c 5 5 5 5 c 5 5 5 c c c c c c c c c c c c c 5 5 5 5 c c 5 5 5 5 5 c 5 5 5 5 c c c c c c c c c c c c c c c 5 5 5 5 5 5 c c c c c c 5 5 5 c c c c c 5 5 5 5 c c c c c 5 5 5 c c 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c 
c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c 5 5 5 5 5 c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 5 c c 5 5 5 5 c c c c c c c c c c c c c c c c c 5 5 5 5 5 c c c c c 5 5 5 c c c c 5 5 5 5 5 c c c c 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 c c c 5 5 5 5 c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c 5 5 5 c c c c 5 5 5 5 c c c c c 5 5 5 5 c c 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c 5 5 5 5 c 5 5 5 5 5 c c c c c c 5 5 5 c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c 5 5 5 5 5 c c c c c 5 5 5 5 5 5 5 5 5 5 c c c c c c 5 5 5 c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c 5 5 5 5 5 5 5 c c c c c c c 5 5 5 5 5 5 5 5 c c c c c c c 5 5 5 c c c c c 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c 5 5 5 5 5 5 5 5 5 c c c c c c c c c 5 5 5 5 5 c c c c c c c c c 5 5 5 c c c c c c 5 5 5 5 5 c c c 5 5 5 c c c c c c c c c c c c c c 
c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c 
c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c 5 5 5 5 5 c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c 5 5 5 c c c c c c c c 5 5 5 c c c c c c c c 5 5 5 5 c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c 5 5 5 c c c c 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c 5 5 5 5 5 5 c c c c c c c c 5 5 5 c c c c c c c 5 5 5 5 5 c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c 5 5 5 5 c c c c c c 5 5 5 5 c c c c c c c c c c c 5 5 5 5 c 5 5 5 5 5 5 c c c c c c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c 5 5 5 5 c c c c c 5 5 5 5 c c c c c c c c c c c 5 5 5 5 5 c c c c 5 5 5 c c c c c c c 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c 5 5 5 c c c c 5 5 5 5 5 c c c c c c c c c c c 5 5 5 5 c c c c c 5 5 5 c c c c c c c 5 5 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c 5 5 5 c c c c c c c c c c 5 5 5 5 c c 5 5 5 5 5 c c c c c c c c c c c 5 5 5 5 c c c c c c 5 5 5 5 c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c 5 5 5 c c c c c c c c c c 5 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c 5 5 5 5 5 c c c c c c 5 5 5 5 c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c 5 5 5 c c c c c c c c c c c 5 5 5 5 5 5 5 5 5 c c c c c c c c c c c 5 5 5 5 c c c c c c c c 5 5 5 c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c 5 5 5 c c c c c c c c c c c 5 5 5 5 5 5 5 c c c c c c c c c c c c c 5 5 5 c c c c c c c c c 5 5 5 c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c 5 5 5 c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 5 5 5 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c 
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
game.showLongText("Collect as many chests as you can per level and try to beat both levels before the time runs out, also look out for any skeletons if they hit you, you'll lose 2 chests. ", DialogLayout.Bottom)
startGame()
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        numJumps = 0
    }
})
