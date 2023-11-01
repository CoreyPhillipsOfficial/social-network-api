const { User, Thought } = require('../models');
const userController = {
    async findAllUsers(req, res) {
        try {
            const userData = await User.find().select('-__v');
            res.json(userData)
        } catch (error) {
            console.error(error)
            res.status(500).json(error);
        }
    },
    async findUserById(req, res) {
        try {
            const userData = await User.findOne({ _id: req.params.userId }).select('-__v').populate('friends').populate('thoughts');
            if (!userData) {
                return res.status(404).json({
                    message: 'No user found'
                })
            }
            res.json(userData);
        } catch (error) {
            console.error(error)
            res.status(500).json(error);
        }
    },
    async createUser(req, res) {
        try {
            const userData = await User.create(req.body)
            res.json(userData)
        } catch (error) {
            console.error(error)
            res.status(500).json(error);
        }
    },
    async deleteUser(req, res) {
        try {
            const userData = await User.findOneAndDelete({
                _id: req.params.userId
            })
            if (!userData) {
                return res.status(404).json({
                    message: 'No user found'
                })
            }
            await Thought.deleteMany({
                _id: { $in: userData.thoughts }
            })
            res.json({ message: 'User and associated thoughts deleted.' })
        } catch (error) {
            console.error(error)
            res.status(500).json(error);
        }
    },
    async updateUser(req, res) {
        try {
            const userData = await User.findOneAndUpdate(
                {
                    _id: req.params.userId
                },
                {
                    $set: req.body
                },
                {
                    runValidators: true,
                    new: true,

                }
            )
            if (!userData) {
                return res.status(404).json({
                    message: 'No user found'
                })
            }
            res.json(userData)
        } catch (error) {
            console.error(error)
            res.status(500).json(error);
        }
    },
    async removeFriend(req, res) {
        try {
            const userData = await User.findOneAndUpdate({
                _id: req.params.userId
            },
                {
                    $pull: { friends: req.params.friendId }
                },
                {
                    new: true
                })
            if (!userData) {
                return res.status(404).json({
                    message: 'No user found'
                })
            }
            res.json(userData)
        } catch (error) {
            console.error(error)
            res.status(500).json(error);
        }
    },
    async addFriend(req, res) {
        try {
            const userData = await User.findOneAndUpdate({
                _id: req.params.userId
            },
                {
                    $addToSet: { friends: req.params.friendId }
                },
                {
                    new: true
                })
            if (!userData) {
                return res.status(404).json({
                    message: 'No user found'
                })
            }
            res.json(userData)
        } catch (error) {
            console.error(error)
            res.status(500).json(error);
        }
    },
}

module.exports = userController;