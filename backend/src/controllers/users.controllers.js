const usersCtrl = {};

usersCtrl.getUsers = (req, res) => res.json({message: "Get request"})
usersCtrl.createUser = (req, res) => res.json({message: "Post request"})
usersCtrl.getUser = (req, res) => res.json({title: "Get request"})
usersCtrl.updateUser = (req, res) => res.json({message: "Update request"})
usersCtrl.deleteUser = (req, res) => res.json({message: "Delete request"})

module.exports = usersCtrl;