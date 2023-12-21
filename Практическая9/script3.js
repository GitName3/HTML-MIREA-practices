const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const elem = document.querySelector('canvas'); // выбираем элемент, на котором будем отслеживать движение мыши

mouse = {
    x: 20,
    y: 20
};
elem.addEventListener('mousemove', function (event) {
  // добавляем обработчик события "mousemove"
  mouse.x = event.clientX; // получаем координату X мыши
mouse.y = event.clientY; // получаем координату Y мыши

  console.log(`Координаты мыши: x=${mouse.x}, y=${mouse.y}`); // выводим координаты мыши в консоль
});


function draw(){
    var n = document.createElement("div");
    n.className = "MouseTrail";
    document.body.appendChild(n);
}

var isDrawing = false;
button.onclick = function(){
    isDrawing = !isDrawing;
    addEventListener("mousemove", function(event) {
        mouse.x = event.pageX;
        mouse.y = event.pageY;
    });
    var x = mouse.x;
    var y = mouse.y;
    if(isDrawing){
       /* ctx.beginPath();
        ctx.arc(x, y, 15, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();   */
        draw();
        
    }
}

