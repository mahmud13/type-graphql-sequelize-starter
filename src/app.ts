import 'reflect-metadata'
import express from 'express'
import { config } from 'dotenv'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { join } from 'path'

async function bootstrap () {
  config()

  const app = express()

  app.get('/', (req, res) => {
    res.send('Welcome to Edumate API')
  })
  const schema = await buildSchema({
    resolvers: [join(__dirname, 'resolvers/**/*.{ts,js}')],
  })
  const server = new ApolloServer({
    schema,
    context: ({ req }) => ({ req }),
  })
  server.applyMiddleware({
    app,
    cors: {
      origin: '*',
      credentials: true,
    },
  })
  app.listen(process.env.APP_PORT, () => {
    console.log(
      '  App is running at http://localhost:%s in %s mode',
      process.env.APP_PORT,
      app.get('env'),
    )
  })
}
bootstrap().catch(err => {
  console.log(err)
})
