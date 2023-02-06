// const regexp:RegExp=/\w\d\s/

// const date:Date=new Date()
//  const error:Error=new Error()

//创建Promise
function promise():Promise<number>{
  return new Promise<number>((resolve,reject)=>{
    resolve(1)
  })
}
promise().then(res=>{
  console.log(res);
  
})