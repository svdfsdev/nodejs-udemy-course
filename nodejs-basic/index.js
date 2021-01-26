const http = require('http')

const server = http.createServer((request, response) => {
  if (request.method === 'GET') {
    response.writeHead(200, {
      'Content-Type': 'text/html',
    })

    response.end(`
      <h1>Form</h1>
      <hr/>
      <form method="post" action="/">
        <input name="title" type="text"/>
        <button type="submit">Send</button>
      </form>
    `)
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
