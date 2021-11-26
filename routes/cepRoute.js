import { Router } from 'express'
const router = Router()

import CepController from '../controllers/CepController.js'

router.get('/', CepController.firstPage)
router.post('/cep/findAddress', CepController.findAddress )

export default router