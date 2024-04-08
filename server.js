const http = require('http')
require('dotenv').config()

const { getMovies, getMoviesByYear, getMoviesByTitle, getMoviesByTitleOrYear } = require('./controllers/movies-and-series-controller')

const server = http.createServer((request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request (OPTIONS)
  if (request.method === 'OPTIONS') {
    response.writeHead(200)
    response.end()
    return
  }

  if (request.url === '/api/movies' && request.method === 'GET') {
    getMovies(request, response)
  }  else if (request.url.match(/\/api\/movies\/findByTitleOrYear/) && request.method === 'POST') {
    getMoviesByTitleOrYear(request, response)
  }  else if (request.url.match(/\/api\/movies\/findByYear\/\d+/) && request.method === 'GET') {
    const year = request.url.split('/')[4]

    getMoviesByYear(request, response, year)
  } else if (request.url.match(/\/api\/movies\/findByTitle/) && request.method === 'POST') {
    getMoviesByTitle(request, response)
  } else {
    response.writeHead(404, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify({ message: 'Not Found'}))
  }
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`)
})