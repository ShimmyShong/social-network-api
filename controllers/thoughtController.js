const { Thought } = require('../models');

module.exports = {
    async getThoughts(req, res) {
        try {
            const thoughtData = await Thought.find();
            res.json(thoughtData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    async getSingleThought(req, res) {
        try {
            const thoughtData = await Thought.findOne({ _id: req.params.thoughtId })
            if (!thoughtData) {
                res.status(404).json({ message: "No Thought with that ID!" });
                return
            }
            res.json(thoughtData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    async createThought(req, res) {
        try {
            const thoughtData = await Thought.create(req.body);
            res.json(thoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    },
    async updateThought(req, res) {
        try {
            const thoughtData = await Thought.findByIdAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            )

            if (!thoughtData) {
                res.status(404).json({ message: 'No Thought with that ID!' })
                return
            }
            res.json(thoughtData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    async deleteThought(req, res) {
        try {
            const thoughtData = await Thought.findOneAndDelete({ _id: req.params.thoughtId })

            if (!thoughtData) {
                res.status(404).json({ message: 'No Thought with that ID!' })
                return
            }

            res.json({ message: "Thought has been deleted!" })
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }
}