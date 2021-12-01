import { Router } from 'express'
const router = Router()

import CepController from '../controllers/CepController.js'

router.get('/', CepController.firstPage)
router.post('/cep/findAddress', CepController.findAddress )
router.get('/findCep', CepController.findCep)
router.post('/findCep', CepController.findCepPost)

export default router