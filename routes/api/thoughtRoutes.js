const router = require('express').Router();
// const {
//     findAllThoughts,
//     createThought,
//     updateThought,
//     deleteThought,
//     findUserById,
//     updateUser,
//     addFriend,
//     removeFriend,
// } = require('../../controllers');

const {
    findAllThoughts,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

const {
    findUserById,
    updateUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController');

router.route('/').get(findAllThoughts).post(createThought);
router.route('/:userId').get(findUserById).put(updateUser).delete(deleteUser);
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend)

module.exports = router;