const movies = require('../data/movies-and-series.json')

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(movies)
  })
}

function findByYear(year) {
  return new Promise((resolve, reject) => {
    const searchResult = movies.filter(movie => {
      return movie.Year.toString().includes(year?.toString())
    })

    resolve(searchResult)
  })
}

function findByTitle(title) {
  return new Promise((resolve, reject) => {
    const searchResult = movies.filter(movie => {

      return movie.Title.toLowerCase().includes(title?.toString().toLowerCase())
    })

    resolve(searchResult)
  })
}

function findByTiTleOrYear(search) {
  return new Promise((resolve, reject) => {
    const searchResult = movies.filter(movie => {
      return movie.Title.toLowerCase().includes(search?.toString().toLowerCase()) || movie.Year.toString().includes(search?.toString())
    })

    resolve(searchResult)
  })
}

module.exports = {
  findAll,
  findByYear,
  findByTitle,
  findByTiTleOrYear
}