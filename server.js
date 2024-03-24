const http = require('http')
require('dotenv').config()

const { getMovies, getMoviesByYear, getMoviesByTitle, getMoviesByTitleOrYear } = require('./controllers/movies-and-series-controller')

const server = http.createServer((request, response) => {
  if (request.url === '/api/movies' && request.method === 'GET') {
    getMovies(request, response)
  }  else if (request.url.match(/\/api\/movies\/findByTitleOrYear\/(.*)+/) && request.method === 'GET') {
    const search = request.url.split('/')[4]

    getMoviesByTitleOrYear(request, response, search)
  }  else if (request.url.match(/\/api\/movies\/findByYear\/\d+/) && request.method === 'GET') {    
    const year = request.url.split('/')[4]

    getMoviesByYear(request, response, year)
  } else if (request.url.match(/\/api\/movies\/findByTitle\/(.*)+/) && request.method === 'GET') {
    const title = request.url.split('/')[4]

    getMoviesByTitle(request, response, title)
  } else {
    response.writeHead(404, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify({ message: 'Not Found'}))
  }
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`)
})