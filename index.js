const canvas = document.getElementById("gameCanvas")
const c = canvas.getContext("2d")

TILE_SIZE = 64

canvas.width = 1024
canvas.height = 576

xOffset = 0
yOffset = 0

x = 100
y = 150

yvel = 0
xvel = 0

keys = {
    w: {
        pressed: false
    },
    s: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

map = [
    ["#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#"],
    ["#","0","0","0","0","0","0","0","0","0","0","0","0","0","0","#"],
    ["#","0","0","0","0","0","0","0","0","0","0","0","0","0","0","#"],
    ["#","0","0","0","0","0","0","0","0","0","0","0","0","0","0","#"],
    ["#","0","0","0","0","0","0","0","#","0","0","0","0","0","0","#"],
    ["#","0","0","0","0","0","0","0","0","0","0","0","0","0","0","#"],
    ["#","0","0","0","0","0","0","0","0","0","0","0","0","0","0","#"],
    ["#","0","0","0","0","0","0","0","0","0","0","0","0","0","0","#"],
    ["#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#"],
]

class Sprite {
    constructor(x,y,width,height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }
    draw() {
        c.fillStyle = "green"
        c.fillRect(this.x, this.y, this.width, this.height)
    }
}



function mainLoop() {
    clearcanvas()
    drawmap()
    drawPlayer()
    x += xvel
    y += yvel
}

function clearcanvas() {
    c.fillStyle = "black"
    c.fillRect(0, 0, canvas.width, canvas.height)
}

function drawPlayer() {
    Player = new Sprite(x, y, 32, 32)
    Player.draw()
}

window.addEventListener("keydown", (event) => {
    switch(event.key) {
        case "w" || keys.w.pressed:
            yvel = -1
            keys.w.pressed = true
            break
        case "a" || keys.a.pressed:
            xvel = -1
            keys.a.pressed = true
            break
        case "s" || keys.s.pressed:
            yvel = 1
            keys.s.pressed = true
            break
        case "d" || keys.d.pressed:
            xvel = 1
            keys.d.pressed = true
            break
    }

})
window.addEventListener("keyup", (event) => {
    switch(event.key) {
        case "w" || (keys.w.pressed = false):
            yvel = 0
            keys.w.pressed = false
            break
        case "a" || (keys.a.pressed = false):
            xvel = 0
            keys.a.pressed = false
            break
        case "s" || (keys.s.pressed = false):
            yvel = 0
            keys.s.pressed = false
            break
        case "d" || (keys.d.pressed = false):
            xvel = 0
            keys.d.pressed = false
            break
    }

})


function drawmap() {
    yOffset = 0
    for(row of map) {
        for(symbol of row) {
            if (symbol == "#") {
                    c.fillStyle = "grey"
                    c.fillRect(xOffset*TILE_SIZE, yOffset, TILE_SIZE-1, TILE_SIZE-1)
                    xOffset++
                } else {
                    c.fillStyle = "lightgrey"
                    c.fillRect(xOffset*TILE_SIZE, yOffset, TILE_SIZE-1, TILE_SIZE-1)
                    xOffset++
                }
        }
        xOffset = 0
        yOffset += TILE_SIZE
    }
}


setInterval(mainLoop, 10)