import express from 'express'
import appConfig from './config/appConfig.js'
import router from './router/router.js'
import cors from "cors"

const { PORT } = appConfig

const app = express()

app.use(cors());
app.use(express.json())

app.use('/', router)

app.listen(PORT, () => {
    console.info(`server is running on port ${PORT}`)
})
