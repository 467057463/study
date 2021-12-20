var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 100, 100)

ctx.beginPath()
ctx.moveTo(50, 50)
ctx.lineTo(200, 10)
ctx.lineWidth = 5
ctx.strokeStyle="red"
ctx.stroke()
console.log(ctx)

// let img = new Image()
// img.onload = function (){
//   ctx.drawImage(img, 0, 0)
// }
// img.src="./mm.jpg";


document.querySelector('#file').addEventListener('change', function(e){
  console.log(e, this.files);
})

document.addEventListener('dragstart', (e) => {
  console.log(e)
})