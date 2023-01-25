const UserController = require('../controllers/user.controller');

module.exports = (app)=>{
    app.get('/api/user/:id', UserController.getUser),
    app.post('/api/user/new', UserController.register),
    app.post('/api/user/login', UserController.login),
    app.put('/api/user/:id', UserController.updateUser),
    app.delete('/api/user/:id', UserController.deleteUser),
    app.put('/api/user/follow/:id', UserController.followUser),
    app.put('/api/user/unfollow/:id', UserController.unfollowUser)
}
