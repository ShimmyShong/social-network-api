const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
} = require('../../controllers/userController')

router.route('/').get(getUsers)

module.exports = router;