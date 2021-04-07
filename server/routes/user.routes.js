import express from 'express'
import userCtrl from '../controllers/user.controller'
import authCtrl from "../controllers/auth.controller";

const router = express.Router()

router.route('/api/users')
  // api endpoints to fetch all the users
  .get(userCtrl.list)
  // api endpoints to create a new user
  .post(userCtrl.create)

router.route('/api/users/:userId')
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove)

router.param('userId', userCtrl.userByID)

export default router