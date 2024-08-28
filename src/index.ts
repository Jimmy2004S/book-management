import express from 'express'
import { AppParameters, DBParameters} from './utils/constants'
import { initDatabase } from './database/db'
import { booksRouter } from './modules/books'

const app = express()

app.use(express.json())

app.use('/api/books' , booksRouter)


app.get('/', (_req, res) => {
    console.log('Url base')
    res.send('Hello World')
})

const PORT = 8080

app.listen(PORT, async() => {

    const url = `mongodb://${DBParameters.DATABASE_HOST}:${DBParameters.DATABASE_PORT}/${DBParameters.DATABASE_NAME}`

    await initDatabase(url)

    console.log(`Server listening at ${AppParameters.APP_URL}:${PORT}`)

})
