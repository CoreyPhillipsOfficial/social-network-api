const { User, Thought } = require('../models');

const thoughtController = {
    async findAllThoughts(req, res) {
        try {
            const thoughtData = await Thought.find();
            res.json(thoughtData);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    },

    async createThought(req, res) {
        try {
            const thoughtData = await Thought.create(req.body);
            await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: thoughtData._id } }
            );
            res.json(thoughtData);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    },

    async updateThought(req, res) {
        try {
            const thoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );
            if (!thoughtData) {
                return res.status(404).json({
                    message: 'Thought doesn\'t exist'
                });
            }
            res.json(thoughtData);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    },

    async deleteThought(req, res) {
        try {
            const thoughtData = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
            if (!thoughtData) {
                return res.status(404).json({
                    message: 'No thought found'
                });
            }
            await User.findOneAndUpdate(
                { _id: thoughtData.userId },
                { $pull: { thoughts: thoughtData._id } }
            );
            res.json({ message: 'Thought deleted' });
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    },
    async createReaction(req, res) {
        try {
            const thoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $push: { reactions: req.body } },
                { runValidators: true, new: true }
            );
            if (!thoughtData) {
                return res.status(404).json({
                    message: 'Thought doesn\'t exist'
                });
            }
            res.json(thoughtData);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    },
    async deleteReaction(req, res) {
        try {
            const thoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { new: true }
            );
            if (!thoughtData) {
                return res.status(404).json({
                    message: 'Thought doesn\'t exist'
                });
            }
            res.json(thoughtData);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    },
};

module.exports = thoughtController;