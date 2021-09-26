const router = require("express").Router({ mergeParams: true });
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./products.controller")

router
    .route("/")
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed)
    
router
    .route("/:productId([0-9]+)")
    .get(controller.read)
    .put(controller.update)
    .all(methodNotAllowed)

router
    .route("/out-of-stock-count")
    .get(controller.listOutOfStockProducts)
    .all(methodNotAllowed)

module.exports = router;

