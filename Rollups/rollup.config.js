import path from 'path'
import ts from 'rollup-plugin-typescript'
import server from 'rollup-plugin-serve'
export default{
  input:'./src'
  output:{
    file:path.resolve(__dirname,'./lib/index.js')
    format:"umd"
  },
  plugins:{
      ts(),
      server({
        open:true,
        port:1998
        openPage:'./public/index.html'
      })
  }
}