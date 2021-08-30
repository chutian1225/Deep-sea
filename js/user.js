// export  class User{

//   constructor(name){
//     this.name = name
//   }

//   set name(value){
//     this._name = value
//   }

//   get name(){
//     return this._name
//   }
// }

export function wrap(target) {
  return new Proxy(target, {
    get(target, prop, receiver) {
      if (prop in target) {
        return Reflect.get(target, prop, receiver)
      } else {
        throw new ReferenceError
      }
    }
  })
}
