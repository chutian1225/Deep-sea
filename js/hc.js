"use strict"
function $(cl){
  let item = document.getElementsByClassName(cl)
  return item
}

function throttle( func , ms ){
  
  let isThrottled = false,
  saveAgres,
  saveThis

  function wrapper() {

    if(isThrottled){
      saveAgres = arguments
      saveThis = this
      return
    }

    isThrottled = true
    
    func.apply( this , arguments)

    setTimeout(function() {

      isThrottled = false
      if(saveAgres){
        wrapper.apply( saveThis , saveAgres )
        saveAgres = saveThis = null
      }
      
    }, ms)
  }

  return wrapper
}

function Printing(){
  console.log("kkkk", 222)
}

let Printed = throttle(Printing,3000)

window.onload = function(){
  $('btn')[0].addEventListener('click',function(){
    Printed()
  })
}

let animal = {
  eats: true
}

let promise = new Promise(function(resolve,reject){
  setTimeout(() => resolve("done"),1000)
})

// promise.then(
//   result => console.log(result),
//   error => alert(error)
// )


// let value = await promise

async function f(){

  let promise = new Promise(function(resolve,reject){
    return setTimeout(() => resolve("done!"),1000)
  })

  let result = await promise
  
  alert(result)
  //await 
}

f()

function* generateSequence(){
  yield 1
  yield 2
  yield 3
}

let generator = generateSequence()

let one = generator.next()

console.log(JSON.stringify(one), 1)

import {wrap} from './user.js';

let user1 = {
  name: "John"
}

user1 = wrap(user1)

alert(user1.name)