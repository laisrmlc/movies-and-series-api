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

async function getMoviesByTitle (request, response, title) {
  try {
    const searchResult = await Movies.findByTitle(title)

    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(searchResult))
  } catch (error) {
    console.log(error)
  }
}

async function getMoviesByTitleOrYear (request, response, search) {
  try {
    const searchResult = await Movies.findByTiTleOrYear(search)

    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(searchResult))
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getMovies,
  getMoviesByYear,
  getMoviesByTitle,
  getMoviesByTitleOrYear
}