const crypto      = require('crypto')
const querystring = require('querystring')
const Product     = require('../models/Product')

class ProductController {
  async store(request, response) {
    const hash       = crypto.createHash('sha256').update(querystring.stringify(request.body)).digest('hex')
    const oldProduct = await Product.findOne({ where : { hash: hash}, order: [['createdAt', 'DESC']]})
    console.log(oldProduct)
    if (oldProduct) {
      const dateTimeDiff = Math.floor((Date.now() - oldProduct.createdAt) / 60000)
      if (dateTimeDiff < 10) {
        return response.status(403).send()
      }
    }
    await Product.create({ content: querystring.stringify(request.body), hash: hash, createdAt: Date.now()})

    return response.status(200).send()
  }
}

module.exports = new ProductController