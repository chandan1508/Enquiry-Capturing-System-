import express from 'express';
import appConfig from './config/appConfig.js';
import router from './router/router.js';

const {PORT} = appConfig;

const app = express()

app.use(express.json())

app.use('/', router)

app.listen(3000, ()=> {
    console.info(`server is running on port ${PORT}`)
})