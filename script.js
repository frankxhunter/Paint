const canvas = document.getElementById("canvas");


let dif = canvas.getBoundingClientRect();
//Hay q crearle un contexto
const ctx = canvas.getContext("2d");

let painting, color, linewidth, difX, difY;

addEventListener("mousedown", (e) => {
    let dif = canvas.getBoundingClientRect();
    difX = e.clientX - dif.left;
    difY = e.clientY - dif.top;
    painting = true;
    color = document.getElementById("color").value;
    linewidth = document.getElementById("lw").value
    ctx.beginPath()
    console.log("X: " + difX + "\nY: " + difY)

})
addEventListener("mouseup", (e) => {
    painting = false;
    ctx.closePath()
})

canvas.addEventListener("mousemove", e => {
    if (painting) {
        draw(difX, difY, e.clientX - dif.left, e.clientY - dif.top)
        difX = e.clientX - dif.left;
        difY = e.clientY - dif.top;


    }
})

function draw(x1, y1, x2, y2) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x1,y2,linewidth,0,2*Math.PI)
    ctx.fill()
}


