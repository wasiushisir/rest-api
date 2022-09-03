const express = require('express')
const app = express()
const router = express.Router()
const usersControllers=require('../controllers/users.controllers')

router.route('/random')
.get(usersControllers.getRandomUser)
router.route('/all')
.get(usersControllers.getAllusers)

router.route('/save')
.post(usersControllers.saveAuSer)

router.route('/update/:id')
.patch(usersControllers.updateAuSer)


router.route('/bulk-update')
.patch(usersControllers.bulkUpdate)


router.route('/delete/:id')
.delete(usersControllers.deleteAuSer)



module.exports=router