const fs = require('fs')
const path = require('path')

// file system
// fs.mkdir(path.join(__dirname, 'notes'), (error) => {
//   if (error) throw new Error(error)

//   console.log('Folder was created')
// })

// fs.writeFile(
//   path.join(__dirname, 'notes', 'newNotes.txt'),
//   "Hello, I'm a new file for you =)\n",
//   (error) => {
//     if (error) throw new Error(error)

//     console.log('File was created')
//   }
// )

// fs.appendFile(
//   path.join(__dirname, 'notes', 'newNotes.txt'),
//   "I'm glad to see you =) !!!",
//   (error) => {
//     if (error) throw new Error(error)

//     console.log('File was changed')

//     fs.readFile(
//       path.join(__dirname, 'notes', 'newNotes.txt'),
//       'utf-8',
//       (error, data) => {
//         if (error) throw new Error(error)

//         console.log(data)
//       }
//     )
//   }
// )

fs.rename(
  path.join(__dirname, 'notes', 'newNotes.txt'),
  path.join(__dirname, 'notes', 'NewName.txt'),
  (error) => {
    if (error) throw new Error(error)

    console.log('File was renamed')
  }
)
