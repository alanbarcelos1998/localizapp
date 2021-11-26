import express, { urlencoded, json } from 'express'
import { engine as hbs } from 'express-handlebars'

const app = express()

import cepRoute from './routes/cepRoute.js'

app.engine('handlebars', hbs())
app.set('view engine', 'handlebars')

app.use(urlencoded({extended: true}))

app.use(json())

// Routes
app.use('/', cepRoute)

// Conection
app.listen(3000, () => console.log("Servidor rodando!"))