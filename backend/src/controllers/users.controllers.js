const usersCtrl = {};

const User = require("../models/User");

usersCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};
usersCtrl.createUser = async (req, res) => {
    const { userName, name, birthdayDate } = req.body;
    const newUser = new User({
        "userName": userName,
        "name": name,
        "birthdayDate": birthdayDate
    });
    await newUser.save();
    res.json({message: "Post request"});
};
usersCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}
usersCtrl.updateUser = async (req, res) => {
    const { userName, name, birthdayDate } = req.body;
    await User.findByIdAndUpdate(req.params.id, {
        "userName": userName,
        "name": name,
        "birthdayDate": birthdayDate
    });
    res.json({message: "Update request"});
}
usersCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({message: "Delete request"});
}

module.exports = usersCtrl;