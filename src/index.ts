import express from 'express'
import { DBParameters, ServerParameters } from './utils/constants'

const app = express()

app.use(express.json())


app.get('/', (_req, res) => {
    console.log('Url base')
    res.send('Hello World')
})


app.listen(ServerParameters.SERVER_PORT, () => {

    console.log(`Server listening at http://localhost:${ServerParameters.SERVER_PORT}`)

})
