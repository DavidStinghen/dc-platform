const Sequelize = require('sequelize')
const Product   = require('../app/models/Product')
const dbConfig  = require('../config/database')

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(dbConfig)
    Product.init(this.connection)
  }
}

module.exports = new Database()
