const { User, Thought } = require('../models');

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
    async createUser(req, res) {
        try {
            const userData = await User.create(req.body)
            res.json(userData)
        } catch (err) {
            console.log(err)
            return res.status(500).json(err)
        }
    },
    async updateUser(req, res) {
        try {
            const userData = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            )

            if (!userData) {
                res.status(404).json({ message: 'No user with this ID!' })
            }
            res.json(userData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    async deleteUser(req, res) {
        try {
            const userData = await User.findOneAndDelete({ _id: req.params.userId })
            if (!userData) {
                res.status(404).json({ message: 'No user with this ID!' })
            }

            res.json({ message: "User has been deleted!" })
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }
}