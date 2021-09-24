const router = require("express").Router({ mergeParams: true });
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./products.controller")

router
    .route("/:productId")
    .get(controller.read)
    // .post(controller.create)
    .all(methodNotAllowed)

router
    .route("/")
    .get(controller.list)
    .all(methodNotAllowed)
    
router
    .route("/out-of-stock-count")
    .get(controller.listOutOfStockCount)
    .all(methodNotAllowed)

module.exports = router;

