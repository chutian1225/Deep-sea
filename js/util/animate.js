/**
 * 
 * @param {*} duration 动画总时间
 * @param {*} timing 时序函数
 * @param {*} draw 获取动画状态 以及最后执行的函数
 */
function animate( {duration, timing, draw}){
  let start = performance.now()

  requestAnimationFrame(function animate(time){
    // timeFraction 从零增加到一
    let timeFraction = (time - start)/duration
    if( timeFraction > 1) timeFraction = 1

    // 计算动画状态
    let progress = timing(timeFraction)

    draw(progress)

    if(timeFraction < 1){
      requestAnimationFrame(animate)
    }
  })
}