function zuobiao(event) {
	var x = event.clientX;
	var y = event.clientY;
	var out = document.getElementById("put");
	out.innerHTML = "x:" + x + " y:" + y;
}
let c = document.getElementById('myCanvas')
let cxt = c.getContext("2d");
// 绘制头
cxt.beginPath();//起始路径
cxt.lineWidth = 1;//线宽度为1
cxt.strokeStyle = '#000';//笔触的颜色
cxt.arc(100, 85, 85, 0.7 * Math.PI, 0.3 * Math.PI);//绘制弧，中心点（200，175），半径175
cxt.fillStyle = '#0bb0da';//设置填充时的颜色
cxt.fill();//填充颜色
cxt.stroke();//绘制路径

// 画出脸
cxt.beginPath()
cxt.moveTo(52,55)
cxt.quadraticCurveTo(5,95,62,150) // 两次塞贝尔
cxt.lineTo(142,150)
cxt.quadraticCurveTo(200, 95, 152, 55);
cxt.fillStyle = '#FFF';//设置填充时的颜色
cxt.fill();//填充颜色
cxt.stroke();//绘制路径

// 画眼睛
cxt.beginPath()
cxt.moveTo(52,55)
cxt.bezierCurveTo(52,10,102,10,102,55) //  三次塞贝尔
cxt.bezierCurveTo(102,100, 52, 100, 52, 55)
cxt.moveTo(102,55)
cxt.bezierCurveTo(102,10,152,10,152,55)
cxt.bezierCurveTo(152,100, 102, 100, 102, 55)
cxt.fillStyle = '#FFF';//设置填充时的颜色
cxt.fill();//填充颜色
cxt.stroke();//绘制路径

// 左右眼球
cxt.beginPath()
cxt.fillStyle = '#000'
cxt.arc(81,75,8,0,2 * Math.PI);//填充颜色
cxt.stroke();//绘制路径
cxt.fill();//填充颜色
cxt.stroke();//绘制路径

cxt.beginPath()
cxt.arc(122,75,8,0,2 * Math.PI);
cxt.fillStyle = '#000'
cxt.stroke();//绘制路径
cxt.fill();//填充颜色
cxt.stroke();//绘制路径

// 鼻子
cxt.beginPath()

