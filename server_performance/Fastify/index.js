// Require the framework and instantiate it
const fastify = require('fastify')({ logger: false });

// Declare a route
fastify.get('/', async (request, reply) => {
  reply.type('text/html').send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        Hello, from fastify js.
    </body>
    </html>
  `);
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(8080)
    //fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start();