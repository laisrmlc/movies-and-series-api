const Movies = require('../models/movies-and-series-models')

async function getMovies (request, response) {
  try {
    const movies = await Movies.findAll()

    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(movies))
  } catch (error) {
    console.log(error)
  }
}

async function getMoviesByYear (request, response, year) {
  try {
    const searchResult = await Movies.findByYear(year)

    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(searchResult))
  } catch (error) {
    console.log(error)
  }
}

async function getMoviesByTitle (request, response) {
  try {
    let body = ''

    request.on('data', chunk => {
      body += chunk.toString()
    })

    request.on('end', async () => {
      const searchResult = await Movies.findByTitle(JSON.parse(body).input)

      response.writeHead(200, { 'Content-Type': 'application/json' })
      response.end(JSON.stringify(searchResult))
    })
  } catch (error) {
    console.log(error)
  }
}

async function getMoviesByTitleOrYear (request, response) {
  try {
    let body = '';

    request.on('data', chunk => {
      body += chunk.toString()
    })

    request.on('end', async () => {
      const searchResult = await Movies.findByTiTleOrYear(JSON.parse(body).input)

      response.writeHead(200, { 'Content-Type': 'application/json' })
      response.end(JSON.stringify(searchResult))
    })
  } catch (error) {
    console.log(error)
    response.writeHead(500, { 'Content-Type': 'text/plain' })
    response.end('Internal Server Error')
  }
}

module.exports = {
  getMovies,
  getMoviesByYear,
  getMoviesByTitle,
  getMoviesByTitleOrYear
}