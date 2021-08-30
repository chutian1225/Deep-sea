function fullpage(){
  const fullpage = document.getElementsByClassName("full_page")[0]
  const fullPageItems = document.getElementsByClassName("full_page_item")

  // 定义第几个fullpage
  let pageIndex = 0, pageScroll = true, prevIndex = 0

  document.onmousewheel = mouseWheel;
  document.addEventListener("DOMMouseScroll", mouseWheel)

  function mouseWheel(event){
    if(event.wheelDelta){
      if(event.wheelDelta > 0){
        scrollUp()
      }else{
        scrollDown()
      }
    }else{
      if(event.detail > 0){
        scrollUp()
      }else{
        scrollDown()
      }
    }
  }

  // 上滑
  function scrollUp(){
    if(pageIndex > 0 && pageScroll){
      prevIndex = pageIndex;
      pageIndex--
      srcollToPage(pageIndex, prevIndex)
    }else if(pageIndex <= 0){
      pageIndex = 0
    }
  }

  // 下滑
  function scrollDown(){
    if(pageIndex < 4 && pageScroll){
      prevIndex = pageIndex;
      pageIndex++
      srcollToPage(pageIndex, prevIndex)
    }else if(pageIndex >= 4){
      pageIndex = 4
    }
  }

  function srcollToPage(pageIndex, prevIndex){

    fullpage.style.top = `-${pageIndex*100}%`
    fullpage.style.transition = `all ease-in ${(Math.abs(pageIndex - prevIndex) - 1)/2 + .4}s`

    pageScroll = false
    scrollTimer()
    /*if(pageIndex == sliderTabItems.length -1) {
      nextPage.style.opacity = "0"
    } else {
      nextPage.style.opacity = "1"
    }*/
  }

  function scrollTimer(){
    setTimeout(() => pageScroll = true , 300)
  }
}

fullpage()