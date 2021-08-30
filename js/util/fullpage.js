function fullpage(){

  const fullpage = document.getElementsByClassName("full-page")[0]
  const fullPageItems = document.getElementsByClassName("full-page-item")

  const sliderTab = document.getElementsByClassName("slider_tab")[0];
  const liitems = document.getElementsByClassName("samll-tab")

  let pageIndex = 0, pageScroll = true, prevIndex = 0

  document.onmousewheel = mouseWheel
  document.addEventListener('DOMMouseScroll', mouseWheel)

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
    if( pageIndex > 0 && pageScroll){
      prevIndex = pageIndex
      pageIndex--
      srcollToPage( pageIndex, prevIndex)
      slideLinkage( prevIndex, pageIndex)
    }else if(pageIndex <= 0){
      prevIndex = 0
    }
  }

  // 下滑
  function scrollDown(){
    if(pageIndex < 4 && pageScroll){
      prevIndex = pageIndex
      pageIndex++
      srcollToPage( pageIndex, prevIndex)
      slideLinkage( prevIndex, pageIndex)
    }else if(pageIndex >= 4){
      prevIndex = 4
    }
  }

  function srcollToPage(){
    fullpage.style.top = `-${pageIndex*100}%`
    fullpage.style.transition = `all ease-in ${(Math.abs(pageIndex - prevIndex) - 1)/2 + .3}s`
    pageScroll = false
    scrollTimer()
  }

  function scrollTimer(){
    setTimeout(() => pageScroll = true, 300)
  }

  let tabItem = document.getElementsByClassName('active')[0]

  nav.onclick = function(event){
    let target = event.target; // 在哪里点击的？
    console.log(target)
    if(target.tagName != 'LI') return 

    let parent = target.parentNode
    let index
    for(let i = 0; i < parent.children.length; i++){
      if(target == parent.children[i]) index = i
    }
   
    fullpage.style.top = - index * 100 + "%";
   
    pageIndex = index
    sliderTabSelect(target)

  }

  function sliderTabSelect(item){
    if(tabItem){
      tabItem.classList.remove('active')
    }
    tabItem = item
    tabItem.classList.add('active')
  }

  function slideLinkage(index, nindex){
    liitems[index].classList.remove('active')
    liitems[nindex].classList.add('active')
  }

}