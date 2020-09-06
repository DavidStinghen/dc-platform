const { Router }         = require('express')
const ProductController  = require('./app/controllers/ProductController')

const routes = new Router()

routes.post('/v1/products', ProductController.store)

module.exports = routes