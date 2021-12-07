import express, { urlencoded, json } from 'express'
import { engine as hbs } from 'express-handlebars'

const app = express()

import cepRoute from '../routes/cepRoute.js'

app.engine('handlebars', hbs())
app.set('view engine', 'handlebars')

app.use(urlencoded({extended: true}))

app.use(json())

app.use(express.static('public'))

// Routes
app.use('/', cepRoute)

export default app
