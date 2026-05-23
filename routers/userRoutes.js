// const express = require('express');
// const userController = require('./../controllers/userController');
// const userRouter = express.Router();
// userRouter.route('/')
//          .get(userController.getAllUsers)
//          .post(userController.createUser)
         
// userRouter.route('/:id')
//          .get(userController.getUserById)
//          .patch(userController.updateUser)
//          .delete(userController.deleteUser)


// module.exports=userRouter

const express = require('express')

const userRouter = express.Router();


userRouter.usersParamMiddleware = (req, res, next, value, name) => {
    console.log(`User data fetched with the value: ${value}`);
    next();
}

userRouter.get('/', (req, res) => {
    res.send("All users fetched");
})

userRouter.get('/:id', (req, res) => {
    res.send('User data with: ' + req.params.id);
})

module.exports = userRouter;