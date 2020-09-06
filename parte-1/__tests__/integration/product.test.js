const request  = require('supertest')
const app      = require('../../src/app')
const truncate = require('../util/truncate')

describe('Product', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('Should be able to register a product data', async () => {
    const body     = { "content" : "Sed ut arcu non urna fringilla elementum. Praesent imperdiet eros quis iaculis efficitur. Quisque ac mattis sem. Curabitur eu porttitor nulla. Integer id nisl felis. Mauris a est eget enim porta commodo interdum non sapien. Ut tincidunt enim a rhoncus blandit. Duis purus sem, efficitur eget vehicula at, ullamcorper at nisl. Maecenas sed est ligula. Donec tincidunt massa ut justo vehicula suscipit id at nisi. Aliquam erat volutpat. Aenean quis nisl nec libero pharetra ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur laoreet volutpat turpis, mattis congue nibh auctor a. Sed faucibus a mi sed blandit. Vivamus eu faucibus eros."}
    const response = await request(app)
      .post('/v1/products')
      .send(body)

      expect(response.status).toBe(200)
  })

  it('Not should be able to register the same product data', async () => {
    const body = { "content" : "Sed ut arcu non urna fringilla elementum. Praesent imperdiet eros quis iaculis efficitur. Quisque ac mattis sem. Curabitur eu porttitor nulla. Integer id nisl felis. Mauris a est eget enim porta commodo interdum non sapien. Ut tincidunt enim a rhoncus blandit. Duis purus sem, efficitur eget vehicula at, ullamcorper at nisl. Maecenas sed est ligula. Donec tincidunt massa ut justo vehicula suscipit id at nisi. Aliquam erat volutpat. Aenean quis nisl nec libero pharetra ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur laoreet volutpat turpis, mattis congue nibh auctor a. Sed faucibus a mi sed blandit. Vivamus eu faucibus eros."}
    
    await  request(app)
      .post('/v1/products')
      .send(body)
    
    const response = await request(app)
      .post('/v1/products')
      .send(body)

      expect(response.status).toBe(403)
  })
})