// const watch = (name: string): ClassDecorator => {
//   return (target: Function) => {
//     // target.prototype.getName = <T>(name: T): T => {
//     //   return name
//     target.prototype.getName = () => {
//       return name
//     }
//   }
// }
// const log: ClassDecorator = <T>(target: Function) => {
//   target.prototype.getName = 123
// }
// @watch('xw')
const log1: PropertyDecorator = (...args) => {
  return console.log(args);

}
class AB {
  @log1
  name: string
  constructor() {

  }
}
let aq = new AB()
// console.log((aq as any).getName('213123'));
// console.log((aq as any).getName())

