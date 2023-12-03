const canvas = document.getElementById("gameCanvas")
const c = canvas.getContext("2d")

TILE_SIZE = 64

canvas.width = 1024
canvas.height = 576

xOffset = 0
yOffset = 0

c.fillStyle = "black"
c.fillRect(0, 0, canvas.width, canvas.height)

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




function mainLoop() {
    drawmap()
}


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