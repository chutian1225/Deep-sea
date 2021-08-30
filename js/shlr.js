ctx = c.getContext("2d");
let w = c.width = window.innerWidth,
  h = c.height;

particles = {},
  particleIndex = 0,
  particleNum = 30;

function particle() {
  this.x = Math.random() * c.width;
  this.y = Math.random() * c.height / 3 + h * 2 / 3 - 100;
  this.vx = Math.random() * 10 - 5;
  this.vy = Math.random() * 10 - 5;
  this.gravity = 0.3;
  particleIndex++;
  particles[particleIndex] = this;
  this.id = particleIndex;
  this.life = 0;
  this.maxLife = Math.random() * 70;
  this.shadeR = Math.floor(Math.random() * 38) + 50;
  this.shadeG = Math.floor(Math.random() * 159) + 50;
  this.shadeB = Math.floor(Math.random() * 230);
  this.color = 'rgba(' + this.shadeR + ',' + this.shadeG + ',' + this.shadeB + ',' + Math.random() * 0.7 + ')';
  this.size = Math.random() * 3;
}
particle.prototype.draw = function () {
  this.x += this.vx;
  this.y += this.vy;
  if (Math.random() < 0.1) {
    this.vx = Math.random() * 10 - 5;
    this.vy = -2;
  }

  this.life++;
  if (this.life >= this.maxLife) {
    delete particles[this.id];
  }

  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
  ctx.fillStyle = this.color;
  ctx.fill();
};

function drawParticle() {
  ctx.clearRect(0, 0, w, h);
  for (var i = 0; i < particleNum; i++) {
    new particle();
  }
  for (var i in particles) {
    particles[i].draw();
  }
}

window.requestAnimFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

function loop() {

  window.requestAnimFrame(loop);

  drawParticle();
}

loop();

// 渐变文字
function textPainting(cname) {
  let c = document.getElementsByClassName(cname)[0]
  ctx1 = c.getContext('2d')
  this.fontFamily = "SerifRegular",
    this.fontSize = 12,
    this.fontStyle = "",
    this.lineHeight = 1.5,
    this.padding = { top: 0, right: 10, bottom: 10, left: 10 },
    this.progress = 0,
    this.text = "Idealism is that you will probably never receive something back\nbut nonetheless still decide to give.",
    this.fontStyle = this.fontSize + "px " + this.fontFamily,
    ctx1.font = this.fontStyle

  let ns = this.text.split('\n')
  c.width = ns.reduce((function (e, n) {
    let r = ctx1.measureText(n)
    return Math.max(r.width + (r.actualBoundingBoxAscent || 0), e)
  }), 0) + this.padding.left + this.padding.right

  c.height = ns.length * this.lineHeight * this.fontSize + this.padding.top
    + this.padding.bottom

  this.width = c.width
  this.height = c.height

  ctx1.clearRect(0, 0, this.width, this.height)
  ctx1.font = this.fontStyle
  let t = .9 * this.progress + .1,
    n = .5 - .4 * this.progress + .1,
    r = .5 + .4 * this.progress - .1,
    i = ctx1.createLinearGradient(0, 0, this.width, this.height)

  i.addColorStop(0, "rgba(0, 0, 0," + t * this.progress * .3 + ")")
  i.addColorStop(n, "rgba(201, 203, 208, " + t + ")")
  i.addColorStop(r, "rgba(201, 203, 208, " + t + ")")
  i.addColorStop(1, "rgba(0, 0, 0, " + t * this.progress * .3 + ")")

  ctx1.fillStyle = i
  this.text.split("\n").forEach((item, index) => {
    ctx1.fillText(item, this.padding.left, this.padding.top + (index + 1) * this.lineHeight * this.fontSize)
  })

  c.addEventListener("mouseenter", () => {
    let c = document.getElementsByClassName(cname)[0]
    ctx1 = c.getContext('2d')
    ctx1.clearRect(0, 0, this.width, this.height)
    let s  = ctx1.createLinearGradient(0, 0, this.width, this.height)
    s.addColorStop(0, "rgba(0, 0, 0," + t * this.progress * .3 + ")")
    s.addColorStop(n, "rgba(201, 203, 208, " + 1 + ")")
    s.addColorStop(r, "rgba(201, 203, 208, " + 1 + ")")
    s.addColorStop(1, "rgba(0, 0, 0, " + t * this.progress * .3 + ")")

    ctx1.fillStyle = s
    this.text.split("\n").forEach((item, index) => {
      ctx1.fillText(item, this.padding.left, this.padding.top + (index + 1) * this.lineHeight * this.fontSize)
    })
  })

  c.addEventListener("mouseleave", () => {
    let c = document.getElementsByClassName(cname)[0]
    ctx1 = c.getContext('2d')
    ctx1.clearRect(0, 0, this.width, this.height)
    let s  = ctx1.createLinearGradient(0, 0, this.width, this.height)
    s.addColorStop(0, "rgba(0, 0, 0," + t * this.progress * .3 + ")")
    s.addColorStop(n, "rgba(201, 203, 208, " + t + ")")
    s.addColorStop(r, "rgba(201, 203, 208, " + t + ")")
    s.addColorStop(1, "rgba(0, 0, 0, " + t * this.progress * .3 + ")")

    ctx1.fillStyle = s
    this.text.split("\n").forEach((item, index) => {
      ctx1.fillText(item, this.padding.left, this.padding.top + (index + 1) * this.lineHeight * this.fontSize)
    })
  })
}

textPainting('first')
textPainting('core')
textPainting('end')

// 历程轮播切换
let taglist = document.querySelectorAll('.Rotation-box li')
let Rabox = document.querySelector('.Rotation-box ul')

right.addEventListener('click', () => {
  let bj = Rabox.style.left ? parseInt(Rabox.style.left) : 0
  if(bj == 0) 
    left.style.visibility = 'visible'
  Rabox.style.left = `${bj-230}px`
  if(taglist.length - (parseInt(Rabox.style.left)/-230) == 4)
    right.style.visibility = 'hidden'
})

left.addEventListener('click',() => {
  let bj = Rabox.style.left ? parseInt(Rabox.style.left) : 0
  Rabox.style.left = `${bj+230}px`
  if(taglist.length - (parseInt(Rabox.style.left)/-230) == 5)
    right.style.visibility = 'visible'
  if(parseInt(Rabox.style.left) == 0)
    left.style.visibility = 'hidden'
})


