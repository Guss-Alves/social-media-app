const User = require("../models/user.model");
const bcrypt = require("bcrypt")


//REGISTER A USER
module.exports.register = async (req, res) => {
    try {
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        //save user and respond
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
    }
};

//LOGIN A USER
module.exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json("user not found");

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("wrong password")

        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
};

//update user
module.exports.updateUser = async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
                return res.status(500).json(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Account has been updated");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can update only your account!");
    }
}
//delete user
module.exports.deleteUser = async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been deleted");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can delete only your account!");
    }
}
//get a user
module.exports.getUser = async (req, res) => {
    // const userId = req.query.userId;
    // const username = req.query.username;
    try {
        const user = await User.findById(req.params.id)
        const { password, updatedAt, ...other } = user._doc;
        res.status(200).json(other);
    } catch (err) {
        res.status(500).json(err);
    }
}
//follow user
module.exports.followUser = async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } });
                await currentUser.updateOne({ $push: { followings: req.params.id } });
                res.status(200).json("user has been followed");
            } else {
                res.status(403).json("you already follow this user");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("you cant follow yourself");
    }
}
//unfollow user
module.exports.unfollowUser = async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } });
                await currentUser.updateOne({ $pull: { followings: req.params.id } });
                res.status(200).json("user has been unfollowed");
            } else {
                res.status(403).json("you dont follow this user");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("you cant unfollow yourself");
    }
}






//HERE AS AN EXAMPLE
// module.exports.showAllUsers = (req, res) => {
//     User.find()
//         .then(allUsers => { res.json({ results: allUsers }) })
//         .catch(error => { res.json(error) })
// }