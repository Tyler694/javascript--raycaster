const canvas = document.getElementById("gameCanvas")
const c = canvas.getContext("2d")

TILE_SIZE = 64

canvas.width = 16 * TILE_SIZE
canvas.height = 9 * TILE_SIZE

function mainLoop() {
    drawCanvas()
}

function drawCanvas() {
    c.fillStyle = "black"
    c.fillRect(0,0,canvas.clientWidth,canvas.height)
}