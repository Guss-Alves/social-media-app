const PostController = require("../controllers/post.controller");

module.exports = (app)=>{
    app.post("/api/post/new", PostController.createPost),
    app.put("/api/post/update/:id", PostController.updatePost),
    app.delete("/api/delete/post/:id", PostController.deletePost),
    app.put("/api/likes/:id", PostController.postLikes),
    app.get("/api/post/:id", PostController.getPost),
    app.get("/api/timeline/:userId", PostController.timelinePosts),
    app.get("/api/profile/:id", PostController.allPostsOfOneUser)
}