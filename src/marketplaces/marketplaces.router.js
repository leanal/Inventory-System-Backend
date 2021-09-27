const router = require("express").Router(); //{ mergeParams: true }
const controller = require("./marketplaces.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/:marketplaceId")
  .get(controller.read)
  .delete(controller.destroy)
  .put(controller.update)
  .all(methodNotAllowed);

router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;
