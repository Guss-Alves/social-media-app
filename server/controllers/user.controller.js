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
//AUTH process above

//user functionality below
//LOGIN A USER
module.exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })

        if(!user){
            return res.status(404).json({error:"We do not recognize your email and/or password. Please try again."});
            // return res.json({error: "User not found, please try again !"});
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password)

        if(!validPassword){
            return res.status(400).json({error:"We do not recognize your email and/or password. Please try again."});
        }else[
            res.status(200).json(user)
        ]
    } catch (err) {
        return res.status(500).json(err)
    }
    // const user = await User.findOne({ email: req.body.email });

    // if (user === null) {
    //     // email not found in users collection
    //     return res.json({error: "User not found, please try again !"});
    // }
    // const correctPassword = await bcrypt.compare(req.body.password, user.password);

    // if (!correctPassword) {
    //     // password wasn't a match!
    //     return res.json({error: "Password is incorrect"});
    // }else{
    //     res.status(200).json(user)
    // }

    // try {
    //     const user = await User.findOne({ email: req.body.email })
    //     !user && res.status(404).json("user not found");

    //     const validPassword = await bcrypt.compare(req.body.password, user.password)
    //     !validPassword && res.status(400).json("wrong password")

    //     res.status(200).json(user)
    // } catch (err) {
    //     res.status(500).json(err)
    // }
};
//GET ALL THE USERS
module.exports.showAllUsers  = async (req, res)=>{
    try{
        const users = await User.find()
        let allUsers = []
        users.map((user)=>{
            const { _id, username, profilePicture, ...other } = user._doc;
            allUsers.push({ _id, username, profilePicture });
        })
        res.status(200).json(allUsers);
    }catch(err){
        console.log(err);
    }
}
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

//get user friends
module.exports.userFriends = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        const friends = await Promise.all(
            user.followings.map((friendId) => {
                return User.findById(friendId);
            })
        );
        let friendList = [];
        friends.map((friend) => {
            const { _id, username, profilePicture } = friend;
            friendList.push({ _id, username, profilePicture });
        });
        res.status(200).json(friendList)
    } catch (err) {
        res.status(500).json(err);
    }
};

//FOLLOW AND UNFOLLOW USER WITH ONE SINGLE FUNCTION 
module.exports.followUserFunction = async (req, res)=>{
    if(req.params.id !== req.body.userId){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);

            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({ $push: {followers: req.body.userId} });
                await currentUser.updateOne({ $push: { followings: req.params.id } });
                res.status(200).json("User has been followedddd");
            } else {
                await user.updateOne({ $pull: {followers: req.body.userId} });
                await currentUser.updateOne({ $pull: { followings: req.params.id } });
                res.status(200).json("User has been unfollowedddd");
            }
        } catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("you cant unfollow yourself");
    }
}
// //follow user
// module.exports.followUser = async (req, res) => {
//     if (req.body.userId !== req.params.id) {
//         try {
//             const user = await User.findById(req.params.id);
//             const currentUser = await User.findById(req.body.userId);
//             if (!user.followers.includes(req.body.userId)) {
//                 await user.updateOne({ $push: { followers: req.body.userId } });
//                 await currentUser.updateOne({ $push: { followings: req.params.id } });
//                 res.status(200).json("user has been followed");
//             } else {
    //                 res.status(403).json("you allready follow this user");
//             }
//         } catch (err) {
//             res.status(500).json(err);
//         }
//     } else {
//         res.status(403).json("you cant follow yourself");
//     }
// }
// //unfollow user
// module.exports.unfollowUser = async (req, res) => {
//     if (req.body.userId !== req.params.id) {
//         try {
//             const user = await User.findById(req.params.id);
//             const currentUser = await User.findById(req.body.userId);
//             if (user.followers.includes(req.body.userId)) {
//                 await user.updateOne({ $pull: { followers: req.body.userId } });
//                 await currentUser.updateOne({ $pull: { followings: req.params.id } });
//                 res.status(200).json("user has been unfollowed");
//             } else {
//                 res.status(403).json("you dont follow this user");
//             }
//         } catch (err) {
//             res.status(500).json(err);
//         }
//     } else {
//         res.status(403).json("you cant unfollow yourself");
//     }
// }







//HERE AS AN EXAMPLE
// module.exports.showAllUsers = (req, res) => {
//     User.find()
//         .then(allUsers => { res.json({ results: allUsers }) })
//         .catch(error => { res.json(error) })
// }