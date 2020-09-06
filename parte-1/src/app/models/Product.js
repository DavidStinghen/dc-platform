const { Sequelize, Model } = require('sequelize')

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        content: Sequelize.STRING,
        hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    )

    return this
  }
}
module.exports = Product