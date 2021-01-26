const path = require('path')

console.log(__filename)
console.log(path.basename(__filename))
console.log(path.dirname(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))
// {
//   root: 'M:\\',
//   dir: 'M:\\React\\Udemy_Course\\nodejs-udemy-course\\nodejs-basic\\refs',
//   base: 'path_ref.js',
//   ext: '.js',
//   name: 'path_ref'
// }

console.log(path.join(__dirname, 'test', 'second.html'))
console.log(path.resolve(__dirname, './test', 'second.html'))
