const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((request, response) => {
  if (request.method === 'GET') {
    response.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
    })

    if (request.url === '/') {
      fs.readFile(
        path.join(__dirname, 'views', 'index.html'),
        'utf-8',
        (error, content) => {
          if (error) throw new Error(error)

          response.end(content)
        }
      )
    } else if (request.url === '/about') {
      fs.readFile(
        path.join(__dirname, 'views', 'about.html'),
        'utf-8',
        (error, content) => {
          if (error) throw new Error(error)

          response.end(content)
        }
      )
    } else if (request.url === '/api/users') {
      response.writeHead(200, { 'Content-Type': 'text/json;' })

      const users = [
        { name: 'Vasiliy', age: 28 },
        { name: 'Olga', age: 25 },
      ]

      response.end(JSON.stringify(users))
    }
  } else if (request.method === 'POST') {
    const body = []
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })

    request.on('data', (data) => {
      body.push(Buffer.from(data))
    })

    request.on('end', () => {
      const msg = body.toString().split('=')[1]

      response.end(`
        <h1>Your message : </h1>
      ${msg}
    `)
    })
  }
})

server.listen(3000, () => {
  console.log('Server running ...')
})
