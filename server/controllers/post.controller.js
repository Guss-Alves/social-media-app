const Post = require("../models/post.model");
const User = require("../models/user.model")

//create post
module.exports.createPost = async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
};

//update post
module.exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).json("the post has been updated");
        } else {
            res.status(403).json("you can update only your post");
        }
    } catch (err) {
        res.status(500).json(err);
    }
};
//delete post
module.exports.deletePost = (req, res)=>{
    Post.findByIdAndDelete({_id:req.params.id})
        .then(deletedExpense =>{
            res.json({results: deletedExpense})
        })
        .catch(error =>{res.json(error)})
}
// module.exports.deletePost = async (req, res) => {
//     try {
//         const post = await Post.findById({_id:req.params.id});
//         if (post.userId === req.body.userId) {
//             await post.deleteOne();
//             res.status(200).json("the post has been deleted");
//         } else {
//             res.status(403).json("you can delete only your post");
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
// };

//like/dislike post (that is a PUT method)
module.exports.postLikes = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json("The post has been liked");
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json("The post has been disliked");
        }
    } catch (err) {
        res.status(500).json(err);
    }
};
//get post
module.exports.getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
};
//get timeline posts
module.exports.timelinePosts = async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({ userId: currentUser._id });
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) => {
                return Post.find({ userId: friendId });
            })
        );
        res.status(200).json(userPosts.concat(...friendPosts));
    } catch (err) {
        res.status(500).json(err);
    }
}

//GET ALL THE POSTS OF AN USER
module.exports.allPostsOfOneUser = async (req, res) => {
    try {
        const user = await User.findById({ _id: req.params.id });
        const posts = await Post.find({ userId: user._id });
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
};