const router = require('express').Router();
const {
    getAllUsers,
    getUserId,
    createUser,
    updateUser,
    deleteUser
  } = require('../../controllers/users-controller');

// Set up GET all and POST at /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router
  .route('/:id')
  .get(getUserId)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;