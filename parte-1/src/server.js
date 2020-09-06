const cluster = require('cluster')
const os      = require('os')
const app     = require('./app')

if (cluster.isMaster) {
  let timeouts = []
  os.cpus().map(() => { cluster.fork() })

  cluster.on("fork", worker => {
    console.log("Worker %d forked", worker.process.pid)
    timeouts[worker.id] = setTimeout(() => {
      worker.kill();
    }, 5000);
  })

  cluster.on("listening", worker => {
    console.log("Worker %d listening", worker.process.pid)
    clearTimeout(timeouts[worker.id])
  })

  cluster.on("disconnect", worker => {
    console.log("Worker %d disconnected", worker.process.pid)
    clearTimeout(timeouts[worker.id])
  })

  cluster.on("exit", worker => {
    console.log("Worker %d is dead", worker.process.pid)
    clearTimeout(timeouts[worker.id])
    cluster.fork()
  })
}
else {
  app.listen(3333)
}