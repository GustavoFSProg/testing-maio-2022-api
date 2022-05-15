import { Router } from 'express'
import { isAuthorized } from './authorize'
import userController from './userController'

const route = Router()

route.get('/', userController.getAll)
route.get('/one/:id', isAuthorized, userController.getOne)
route.post('/register', userController.createUser)
route.post('/login', userController.Login)
route.put('/update/:id', userController.update)
route.delete('/delete/:id', userController.deleteUser)

export default route
