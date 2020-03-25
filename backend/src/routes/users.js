const { Router } = require("express");
const router = Router();

router.route("/")
    .get((req, res) => res.send("Users"));
    /*.post()
route.route("/:id")
    .get((req, res) =>)
    .put()
    .delete()*/

module.exports = router;