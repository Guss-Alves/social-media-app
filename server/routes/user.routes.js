const UserController = require('../controllers/user.controller');

module.exports = (app)=>{
    app.get('/api/user/:id', UserController.getUser),
    app.post('/api/user/new', UserController.register),
    app.post('/api/user/login', UserController.login),
    app.put('/api/user/:id', UserController.updateUser),
    app.delete('/api/user/:id', UserController.deleteUser),
    app.put('/api/user/followAndUnfollow/:id', UserController.followUserFunction),
    app.get('/api/friends/:userId', UserController.userFriends),
    app.get('/api/allUsers', UserController.showAllUsers)
}
