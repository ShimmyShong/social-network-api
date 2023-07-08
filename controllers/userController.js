const { User } = require('../models');

module.exports = {
    async getUsers(req, res) {
        try {
            const userData = await User.find();
            res.json(userData);
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async getSingleUser(req, res) {
        try {
            const userData = await User.findOne({ _id: req.params.userId })

            if (!userData) res.status(404).json({ message: 'No user with that ID!' })

            res.json(userData);
        } catch (err) {
            res.status(500).json(err)
        }
    },
}