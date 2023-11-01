const router = require('express').Router();
const {
    findAllUsers,
    findUserById,
    createUser,
    deleteUser,
    updateUser,
    removeFriend,
    addFriend
} = require('../../controllers/userController')

router.route('/').get(findAllUsers).post(createUser);
router.route('/:userId').get(findUserById).put(updateUser).delete(deleteUser);
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend)

module.exports = router;